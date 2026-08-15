/**
 * Optimiza el video de fondo del hero.
 *
 * Genera, siempre a partir de `fondoaura-original.mp4` (el master intacto):
 *   - fondoaura.webm  → VP9 two-pass, el más liviano (se sirve primero)
 *   - fondoaura.mp4   → H.264, fallback para Safari viejo / iOS
 *   - poster.jpg      → primer frame, se muestra mientras carga y en mobile
 *
 * En la primera corrida hace el backup del original. Como siempre codifica desde
 * el master, correrlo varias veces no degrada la calidad de forma acumulativa.
 *
 *   node optimize-video.mjs
 *
 * Notas sobre los parámetros elegidos (medidos sobre este clip, 8s / 1280x720):
 *   - El master es ruidoso, así que el bitrate no baja tanto como el tamaño
 *     sugeriría. A 1280px ni con CRF 35 se bajaba de 750 KB, por eso se escala
 *     a 960px: es un fondo desenfocado con un overlay negro de 55-85% encima,
 *     la pérdida de nitidez no se percibe.
 *   - VP9 en modo CRF puro (`-b:v 0`) daba archivos PEOR que el original
 *     (2.5 MB). El modo two-pass con bitrate objetivo sí funciona: 372 KB.
 */
import { execFileSync } from 'child_process'
import ffmpegStatic from 'ffmpeg-static'
import fs from 'fs'
import os from 'os'
import path from 'path'

const DIR = 'public/videos'
const ORIGINAL = path.join(DIR, 'fondoaura-original.mp4')
const MP4 = path.join(DIR, 'fondoaura.mp4')
const WEBM = path.join(DIR, 'fondoaura.webm')
const POSTER = path.join(DIR, 'poster.jpg')

/** Ancho de salida. `min(960,iw)` evita escalar hacia arriba si el master es menor. */
const SCALE = "scale='min(960,iw)':-2"
/** Log de la pasada 1 de VP9 — fuera del repo, se limpia al terminar. */
const PASSLOG = path.join(os.tmpdir(), 'aromatch-vp9')

const mb = (f) => (fs.statSync(f).size / (1024 * 1024)).toFixed(2)
const kb = (f) => (fs.statSync(f).size / 1024).toFixed(0)

function ffmpeg(label, args) {
  console.log(`  → ${label}...`)
  execFileSync(ffmpegStatic, ['-y', '-hide_banner', '-loglevel', 'error', ...args], {
    stdio: ['ignore', 'inherit', 'inherit'],
  })
}

// Backup único del master. Si ya existe, no lo pisamos.
if (!fs.existsSync(ORIGINAL)) {
  if (!fs.existsSync(MP4)) throw new Error(`No encuentro ni ${ORIGINAL} ni ${MP4}`)
  fs.copyFileSync(MP4, ORIGINAL)
  console.log(`Backup del original → ${ORIGINAL} (${mb(ORIGINAL)} MB)`)
} else {
  console.log(`Master existente → ${ORIGINAL} (${mb(ORIGINAL)} MB)`)
}

const IN = ['-i', ORIGINAL, '-vf', SCALE, '-an']

// ── MP4 / H.264 ─────────────────────────────────────────────────────────────
// `faststart` mueve el índice al principio del archivo para que el navegador
// pueda empezar a reproducir sin descargarlo entero.
ffmpeg('mp4 (h264)', [
  ...IN,
  '-c:v', 'libx264',
  '-crf', '35',
  '-preset', 'slow',
  '-profile:v', 'high',
  '-pix_fmt', 'yuv420p',
  '-movflags', '+faststart',
  MP4,
])

// ── WebM / VP9 two-pass ─────────────────────────────────────────────────────
const VP9 = ['-c:v', 'libvpx-vp9', '-b:v', '400k', '-deadline', 'good', '-cpu-used', '2', '-row-mt', '1']
ffmpeg('webm (vp9, pasada 1/2)', [...IN, ...VP9, '-pass', '1', '-passlogfile', PASSLOG, '-f', 'null', '-'])
ffmpeg('webm (vp9, pasada 2/2)', [...IN, ...VP9, '-pass', '2', '-passlogfile', PASSLOG, WEBM])
for (const f of fs.readdirSync(os.tmpdir())) {
  if (f.startsWith('aromatch-vp9')) fs.rmSync(path.join(os.tmpdir(), f), { force: true })
}

// ── Poster ──────────────────────────────────────────────────────────────────
ffmpeg('poster.jpg', [...IN, '-frames:v', '1', '-q:v', '4', POSTER])

console.log('\nListo:')
for (const [f, note] of [
  [ORIGINAL, '(master, no se sirve)'],
  [WEBM, '(se sirve primero)'],
  [MP4, '(fallback)'],
  [POSTER, '(poster + fondo mobile)'],
]) {
  const size = f === ORIGINAL ? `${mb(f)} MB` : `${kb(f)} KB`
  console.log(`  ${f.padEnd(34)} ${size.padStart(9)}  ${note}`)
}
