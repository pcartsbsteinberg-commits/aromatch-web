"use client"

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { perfumes, type Perfume } from '@/lib/perfumes'
import { ArrowRight, RotateCcw, MessageCircle } from 'lucide-react'

const WA_NUMBER = '5491162066609'

// ─────────────────────────────────────────────────────────────────────────────
// Dynamic 6-point marketing blurbs — fully in Spanish
// ─────────────────────────────────────────────────────────────────────────────
function getPoints(p: Perfume) {
  const topStr = p.topNotes.slice(0, 2).join(' y ')
  const heartStr = p.heartNotes.slice(0, 2).join(' y ')
  const baseStr = p.baseNotes.slice(0, 2).join(' y ')

  return {
    left: [
      {
        title: 'Exclusividad Redefinida',
        body: `Desde la concepción hasta la presentación, ${p.name} redefine la exclusividad en perfumería ${p.family.toLowerCase()}.`,
      },
      {
        title: 'Edición de Lujo Limitada',
        body: `La fragancia se despliega como una sinfonía — notas de salida de ${topStr} danzando en armonía con ${heartStr}, base de ${baseStr} que perdura sensualmente.`,
      },
      {
        title: 'Consagrado al Tiempo',
        body: `${p.brand} porta décadas de patrimonio artesanal. La exclusividad es el sello de ${p.name} — disponible en producción artesanal limitada.`,
      },
    ],
    right: [
      {
        title: 'Elegancia Artesanal',
        body: `La creación de ${p.name} trasciende lo ordinario, encarnando elegancia artesanal en su cénit en cada decant fabricado a mano.`,
      },
      {
        title: 'Raro y Exquisito',
        body: `La maestría se encuentra con la rareza en la formulación de esta fragancia. ${p.name} contiene algunos de los ingredientes más exclusivos y preciosos del mundo.`,
      },
      {
        title: 'Herencia & Técnica',
        body: `El proceso de creación involucra técnicas milenarias transmitidas de generación en generación. Longevidad de ${p.longevity} que habla por sí sola.`,
      },
    ],
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Feature block — orbit item (left or right column)
// ─────────────────────────────────────────────────────────────────────────────
function FeatureBlock({
  title,
  body,
  side,
  animDelay,
}: {
  title: string
  body: string
  side: 'left' | 'right'
  animDelay: number
}) {
  const isLeft = side === 'left'

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: animDelay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex ${isLeft ? 'flex-row-reverse text-right' : 'flex-row text-left'} items-start gap-3`}
    >
      {/* Horizontal dotted connector (text) ··· ● → center */}
      <div
        className={`absolute top-[0.45rem] hidden xl:flex items-center gap-0
          ${isLeft ? 'right-0 translate-x-full pl-2' : 'left-0 -translate-x-full pr-2'} flex-row pointer-events-none`}
        style={{ width: '90px' }}
      >
        {isLeft ? (
          <>
            <div className="flex-1 border-t border-dashed border-[#d4af37]/35" />
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#d4af37', boxShadow: '0 0 6px rgba(212,175,55,0.7)' }} />
          </>
        ) : (
          <>
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#d4af37', boxShadow: '0 0 6px rgba(212,175,55,0.7)' }} />
            <div className="flex-1 border-t border-dashed border-[#d4af37]/35" />
          </>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p
          className="text-[#d4af37] mb-1.5 leading-snug"
          style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: 'clamp(0.78rem, 0.9vw, 0.9rem)',
            fontWeight: 600,
          }}
        >
          {title}
        </p>
        <p
          className="text-white/45 leading-relaxed"
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: 'clamp(0.68rem, 0.76vw, 0.75rem)',
            letterSpacing: '0.01em',
          }}
        >
          {body}
        </p>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Central product stage — image + ground reflection + "Explorar Lujo" pill
// ─────────────────────────────────────────────────────────────────────────────
function CentralStage({ perfume, onWA }: { perfume: Perfume; onWA: () => void }) {
  const [imgErr, setImgErr] = useState(false)
  const monogram = perfume.name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase()

  return (
    <div className="flex flex-col items-center">
      {/* Image with radial gold halo */}
      <div className="relative">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 90% at 50% 50%, rgba(212,175,55,0.28) 0%, rgba(0,0,0,0) 68%)',
            filter: 'blur(24px)',
            transform: 'scale(1.4)',
          }}
        />
        <div
          className="relative z-10 w-48 sm:w-52 md:w-56 lg:w-52 xl:w-60 aspect-[2/3] rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(212,175,55,0.20)' }}
        >
          {!imgErr ? (
            <img
              src={perfume.image}
              alt={`${perfume.brand} — ${perfume.name}`}
              onError={() => setImgErr(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-3"
              style={{ background: 'radial-gradient(circle at 50% 40%, rgba(212,175,55,0.14) 0%, #040200 100%)' }}
            >
              <span
                className="text-5xl font-bold select-none"
                style={{
                  fontFamily: 'var(--font-playfair), serif',
                  background: 'linear-gradient(135deg,#fffbe6 0%,#d4af37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {monogram}
              </span>
              <span
                className="text-[9px] uppercase tracking-[0.28em]"
                style={{ color: 'rgba(212,175,55,0.4)', fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Decant Premium
              </span>
            </div>
          )}
        </div>
        {/* Ground reflection */}
        <div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 pointer-events-none z-0"
          style={{
            width: '80%', height: '28px',
            background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(212,175,55,0.20) 0%, transparent 100%)',
            filter: 'blur(8px)',
          }}
        />
      </div>

      {/* "— Explorar Lujo —" pill below image (dots + dashes flanking) */}
      <div className="flex items-center gap-3 mt-10 w-full justify-center">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1 max-w-[60px] border-t border-dashed border-[#d4af37]/40 origin-right"
        />
        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'rgba(212,175,55,0.6)' }} />
        <motion.button
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          onClick={onWA}
          className="flex-shrink-0 flex items-center gap-2 rounded-full border border-[#d4af37]/40 hover:border-[#d4af37]/80 transition-all duration-300"
          style={{
            padding: '0.55rem 1.2rem',
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.75)',
          }}
        >
          <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#d4af37' }}>
            <ArrowRight className="w-3 h-3 text-black" />
          </span>
          Explorar Lujo
        </motion.button>
        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'rgba(212,175,55,0.6)' }} />
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1 max-w-[60px] border-t border-dashed border-[#d4af37]/40 origin-left"
        />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// WhatsApp CTA block — golden full-width button for conversion
// ─────────────────────────────────────────────────────────────────────────────
function WhatsAppCTA({ perfume, capturedEmail }: { perfume: Perfume; capturedEmail?: string }) {
  const message = encodeURIComponent(
    `Hola! Hice match con *${perfume.name}* y quiero consultar disponibilidad.${capturedEmail ? ` Mi email: ${capturedEmail}` : ''}`
  )
  const url = `https://wa.me/${WA_NUMBER}?text=${message}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-10 flex flex-col items-center gap-3"
    >
      {/* Main WhatsApp gold button */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="w-full max-w-md flex items-center justify-center gap-3 rounded-2xl font-semibold"
        style={{
          padding: '1rem 2rem',
          background: 'linear-gradient(135deg, #d4af37 0%, #f4d58d 50%, #d4af37 100%)',
          color: '#000',
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '0.9rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          boxShadow: '0 8px 32px rgba(212,175,55,0.35), 0 2px 8px rgba(212,175,55,0.2)',
        }}
      >
        <MessageCircle className="w-5 h-5 flex-shrink-0" />
        Consultar Disponibilidad por WhatsApp
        <ArrowRight className="w-4 h-4 flex-shrink-0" />
      </motion.a>

      {/* Disclaimer */}
      <p
        className="text-white/28 text-[11px] text-center"
        style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.02em' }}
      >
        Decants disponibles según stock. Sin costo por la consulta.
      </p>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Bottom Elysian banner — 2-col layout (title left, description + CTA right)
// ─────────────────────────────────────────────────────────────────────────────
function ElysianBanner({ perfume }: { perfume: Perfume }) {
  const currentIndex = perfumes.findIndex((p) => p.name === perfume.name)
  const relatedImages = [1, 2, 3, 4].map((n) => perfumes[(Math.max(0, currentIndex) + n) % perfumes.length].image)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.9 }}
      className="mt-16 pt-12 border-t border-[#d4af37]/12"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16 justify-between">

        {/* LEFT — editorial title */}
        <div className="flex-1">
          <h3
            className="text-white font-bold leading-tight"
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            }}
          >
            Elysian Scents Prestige<br />
            <span
              style={{
                background: 'linear-gradient(135deg,#fffbe6 0%,#d4af37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ediciones Limitadas Develadas
            </span>
          </h3>
        </div>

        {/* RIGHT — description + CTA + thumbnails */}
        <div className="flex flex-col gap-5 flex-shrink-0 md:max-w-xs xl:max-w-sm">
          <p
            className="text-white/40 leading-relaxed"
            style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.84rem' }}
          >
            Sumérgete en el prestigio de ediciones limitadas, donde la artesanía
            y la escasez se unen para crear una experiencia olfativa magistral.
          </p>

          {/* CTA row: button + decorative rings + dash */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 flex items-center gap-2 rounded-full border border-[#d4af37]/40 hover:border-[#d4af37]/80 transition-all duration-300"
              style={{
                padding: '0.6rem 1.35rem',
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.73rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#d4af37' }}>
                <ArrowRight className="w-3 h-3 text-black" />
              </span>
              Descubrir la Colección
            </motion.a>

            {/* Decorative rings + dashes */}
            <div className="flex items-center gap-0 flex-1">
              <div className="flex-1 border-t border-dashed border-[#d4af37]/25" />
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-full border border-[#d4af37]/30 flex-shrink-0"
                  style={{ width: `${18 - i * 3}px`, height: `${18 - i * 3}px`, marginLeft: `-${4 + i}px` }}
                />
              ))}
              <div className="w-6 border-t border-dashed border-[#d4af37]/25" />
              <ArrowRight className="w-3 h-3 flex-shrink-0" style={{ color: 'rgba(212,175,55,0.35)' }} />
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex -space-x-2">
            {relatedImages.map((imgSrc, i) => (
              <div key={i} className="w-10 h-14 rounded-lg overflow-hidden border border-[#d4af37]/18 flex-shrink-0 bg-[#060300]">
                <img
                  src={imgSrc}
                  alt=""
                  className="w-full h-full object-cover opacity-70"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PrestigeShowcase — main export
// ─────────────────────────────────────────────────────────────────────────────
export default function PrestigeShowcase({
  perfume,
  onReset,
  capturedEmail,
}: {
  perfume: Perfume
  onReset: () => void
  capturedEmail?: string
}) {
  const ref = useRef(null)
  useInView(ref, { once: true })
  const { left, right } = getPoints(perfume)
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hola! Hice match con *${perfume.name}* y quiero consultar disponibilidad.${capturedEmail ? ` Mi email: ${capturedEmail}` : ''}`)}`

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* ── TOP HEADER — 2-column (serif title LEFT | subtitle + CTA RIGHT) ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 mb-6 pb-6 border-b border-[#d4af37]/12"
      >
        {/* Left: big serif title */}
        <div className="flex-1">
          <h2
            className="text-white font-bold leading-tight"
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
            }}
          >
            Donde la Tradición y la Innovación{' '}
            <span
              style={{
                background: 'linear-gradient(135deg,#fffbe6 0%,#d4af37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              se unen.
            </span>
          </h2>
        </div>

        {/* Right: subtitle + "Ver detalles completos" button + rings */}
        <div className="flex flex-col gap-4 flex-shrink-0 md:max-w-[280px] xl:max-w-xs">
          <p
            className="text-white/38 leading-relaxed"
            style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.8rem' }}
          >
            Develando el arte detrás de las creaciones atemporales,
            donde la tradición se une con la innovación en cada detalle
          </p>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(waUrl, '_blank')}
              className="flex-shrink-0 flex items-center gap-2 rounded-full"
              style={{
                padding: '0.6rem 1.2rem',
                background: '#d4af37',
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.72rem',
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: '#000',
                fontWeight: 500,
              }}
            >
              <span className="w-5 h-5 rounded-full border border-black/20 flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-3 h-3 text-black" />
              </span>
              Ver Detalles Completos
            </motion.button>
            {/* Decorative rings */}
            <div className="flex items-center gap-0 flex-1">
              <div className="flex-1 border-t border-dashed border-[#d4af37]/20" />
              {[20, 16, 12].map((sz, i) => (
                <div
                  key={i}
                  className="rounded-full border border-[#d4af37]/35 flex-shrink-0"
                  style={{ width: sz, height: sz, marginLeft: i === 0 ? 4 : -6 }}
                />
              ))}
              <div className="w-4 border-t border-dashed border-[#d4af37]/20" />
              <ArrowRight className="w-3 h-3 flex-shrink-0" style={{ color: 'rgba(212,175,55,0.30)' }} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── THREE-COLUMN EDITORIAL BODY ────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-6 xl:gap-8 py-8">
        {/* LEFT */}
        <div className="flex flex-col gap-8 lg:gap-10 w-full lg:w-60 xl:w-72 flex-shrink-0 lg:pr-8 xl:pr-10">
          {left.map((pt, i) => (
            <FeatureBlock key={pt.title} title={pt.title} body={pt.body} side="left" animDelay={0.15 + i * 0.12} />
          ))}
        </div>

        {/* CENTER */}
        <div className="flex-1 flex justify-center">
          <CentralStage perfume={perfume} onWA={() => window.open(waUrl, '_blank')} />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-8 lg:gap-10 w-full lg:w-60 xl:w-72 flex-shrink-0 lg:pl-8 xl:pl-10">
          {right.map((pt, i) => (
            <FeatureBlock key={pt.title} title={pt.title} body={pt.body} side="right" animDelay={0.27 + i * 0.12} />
          ))}
        </div>
      </div>

      {/* ── PROMINENT WHATSAPP CTA ──────────────────────────────────────────── */}
      <WhatsAppCTA perfume={perfume} capturedEmail={capturedEmail} />

      {/* ── ELYSIAN PRESTIGE BANNER ─────────────────────────────────────────── */}
      <ElysianBanner perfume={perfume} />

      {/* ── Reset quiz ──────────────────────────────────────────────────────── */}
      <div className="flex justify-center mt-10">
        <button
          onClick={onReset}
          className="btn-ghost flex items-center gap-2"
          style={{ fontSize: '0.72rem' }}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Hacer el Quiz de Nuevo
        </button>
      </div>
    </motion.div>
  )
}
