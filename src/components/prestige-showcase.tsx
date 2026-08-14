"use client"

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { perfumes, type Perfume, type MatchResult } from '@/lib/perfumes'
import { ArrowRight, RotateCcw, MessageCircle, Sparkles, ChevronDown, Mail, AlertCircle } from 'lucide-react'

const WA_NUMBER = '5491162066609'

// ─────────────────────────────────────────────────────────────────────────────
// Real perfume data — notas, perfil olfativo, ocasión y longevidad
// ─────────────────────────────────────────────────────────────────────────────
function getPoints(p: Perfume) {
  return {
    left: [
      { title: 'Notas de Salida', body: p.topNotes.join(', ') },
      { title: 'Notas de Corazón', body: p.heartNotes.join(', ') },
      { title: 'Notas de Fondo', body: p.baseNotes.join(', ') },
    ],
    right: [
      { title: 'Perfil Olfativo', body: p.exhaustiveDescription },
      { title: 'Ocasión', body: p.occasion },
      { title: 'Longevidad', body: p.longevity },
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
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#d4af37', boxShadow: '0 0 6px rgba(212,175,55,0.7)' }} />
          </>
        ) : (
          <>
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#d4af37', boxShadow: '0 0 6px rgba(212,175,55,0.7)' }} />
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
          className="relative z-10 w-48 sm:w-52 md:w-56 lg:w-52 xl:w-60 aspect-2/3 rounded-xl overflow-hidden"
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
                Perfume Original
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

      {/* Stock availability badge */}
      {perfume.inStock ? (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex justify-center"
        >
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
            style={{ background: 'rgba(34,197,94,0.10)', border: '1px solid rgba(34,197,94,0.30)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span
              className="text-[10px] text-emerald-400 uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Disponible hoy
            </span>
          </div>
        </motion.div>
      ) : (
        <div className="mt-6 flex justify-center">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}
          >
            <span
              className="text-[10px] text-white/35 uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Por encargo · 5–8 días
            </span>
          </div>
        </div>
      )}

      {/* "— Explorar Lujo —" pill below image (dots + dashes flanking) */}
      <div className="flex items-center gap-3 mt-6 w-full justify-center">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1 max-w-15 border-t border-dashed border-[#d4af37]/40 origin-right"
        />
        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'rgba(212,175,55,0.6)' }} />
        <motion.button
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          onClick={onWA}
          className="shrink-0 flex items-center gap-2 rounded-full border border-[#d4af37]/40 hover:border-[#d4af37]/80 transition-all duration-300"
          style={{
            padding: '0.55rem 1.2rem',
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.75)',
          }}
        >
          <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: '#d4af37' }}>
            <ArrowRight className="w-3 h-3 text-black" />
          </span>
          Explorar Lujo
        </motion.button>
        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'rgba(212,175,55,0.6)' }} />
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1 max-w-15 border-t border-dashed border-[#d4af37]/40 origin-left"
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
          background: 'var(--emerald-gradient)',
          color: '#F2FBF6',
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '0.9rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          boxShadow: 'var(--glow-emerald)',
        }}
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        Consultar Disponibilidad por WhatsApp
        <ArrowRight className="w-4 h-4 shrink-0" />
      </motion.a>

      {/* Disclaimer */}
      <p
        className="text-white/28 text-[11px] text-center"
        style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.02em' }}
      >
        Perfumes disponibles según stock. Sin costo por la consulta.
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
        <div className="flex flex-col gap-5 shrink-0 md:max-w-xs xl:max-w-sm">
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
              className="shrink-0 flex items-center gap-2 rounded-full border border-[#d4af37]/40 hover:border-[#d4af37]/80 transition-all duration-300"
              style={{
                padding: '0.6rem 1.35rem',
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.73rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: '#d4af37' }}>
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
                  className="rounded-full border border-[#d4af37]/30 shrink-0"
                  style={{ width: `${18 - i * 3}px`, height: `${18 - i * 3}px`, marginLeft: `-${4 + i}px` }}
                />
              ))}
              <div className="w-6 border-t border-dashed border-[#d4af37]/25" />
              <ArrowRight className="w-3 h-3 shrink-0" style={{ color: 'rgba(212,175,55,0.35)' }} />
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex -space-x-2">
            {relatedImages.map((imgSrc, i) => (
              <div key={i} className="w-10 h-14 rounded-lg overflow-hidden border border-[#d4af37]/18 shrink-0 bg-[#060300]">
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
// Secondary match card — #2 and #3 results
// ─────────────────────────────────────────────────────────────────────────────
function AlternativeCard({
  result,
  rank,
  capturedEmail,
}: {
  result: MatchResult
  rank: number
  capturedEmail?: string
}) {
  const [imgErr, setImgErr] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const { perfume, percentage, matchReasons } = result
  const message = encodeURIComponent(
    `Hola! Me interesa *${perfume.name}* de tu catálogo.${capturedEmail ? ` Mi email: ${capturedEmail}` : ''}`
  )
  const url = `https://wa.me/${WA_NUMBER}?text=${message}`
  const detailRows = [
    { label: 'Notas de Salida', value: perfume.topNotes.join(', ') },
    { label: 'Notas de Corazón', value: perfume.heartNotes.join(', ') },
    { label: 'Notas de Fondo', value: perfume.baseNotes.join(', ') },
    { label: 'Ocasión', value: perfume.occasion },
    { label: 'Longevidad', value: perfume.longevity },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + rank * 0.12 }}
      className="flex gap-4 p-4 rounded-2xl border border-[#d4af37]/15 bg-white/2 hover:border-[#d4af37]/28 transition-all duration-300"
    >
      {/* Image */}
      <div
        className="w-14 h-20 rounded-lg overflow-hidden shrink-0"
        style={{ border: '1px solid rgba(212,175,55,0.14)' }}
      >
        {!imgErr ? (
          <img
            src={perfume.image}
            alt={perfume.name}
            className="w-full h-full object-cover"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className="w-full h-full bg-[#060300] flex items-center justify-center">
            <span
              className="text-lg font-bold"
              style={{
                fontFamily: 'var(--font-playfair), serif',
                background: 'linear-gradient(135deg,#fffbe6 0%,#d4af37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {perfume.name[0]}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="min-w-0">
            <p
              className="text-[#d4af37]/55 text-[10px] uppercase tracking-[0.12em] mb-0.5"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              {perfume.brand}
            </p>
            <p
              className="text-white/90 font-medium leading-tight text-sm"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {perfume.name}
            </p>
            {perfume.inStock && (
              <span
                className="inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full mt-1"
                style={{
                  background: 'rgba(34,197,94,0.10)',
                  border: '1px solid rgba(34,197,94,0.25)',
                  color: 'rgb(134,239,172)',
                  fontFamily: 'var(--font-inter), sans-serif',
                }}
              >
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                Hoy
              </span>
            )}
          </div>
          <div
            className="shrink-0 px-2.5 py-1 rounded-full border"
            style={{ borderColor: 'rgba(212,175,55,0.30)', background: 'rgba(212,175,55,0.06)' }}
          >
            <span
              className="font-bold text-xs"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                background: 'linear-gradient(135deg,#fffbe6 0%,#d4af37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {percentage}%
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {matchReasons.slice(0, 3).map((reason, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-0.5 rounded-full border border-white/8 text-white/40"
              style={{ fontFamily: 'var(--font-inter), sans-serif', background: 'rgba(255,255,255,0.03)' }}
            >
              {reason}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <button
            type="button"
            onClick={() => setShowDetails((v) => !v)}
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors"
            style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.72rem', letterSpacing: '0.04em' }}
          >
            Ver detalles
            <ChevronDown
              className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`}
            />
          </button>

          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 2 }}
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors"
            style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.72rem', letterSpacing: '0.04em' }}
          >
            <MessageCircle className="w-3.5 h-3.5 shrink-0" />
            Consultar disponibilidad
            <ArrowRight className="w-3 h-3 shrink-0" />
          </motion.a>
        </div>

        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-3 pt-3 border-t border-white/8 space-y-2">
                {detailRows.map((row) => (
                  <div key={row.label} className="flex gap-2">
                    <span
                      className="text-[#d4af37]/60 text-[9px] uppercase tracking-widest shrink-0 pt-0.5 w-23"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {row.label}
                    </span>
                    <span className="text-white/55 text-[11px] leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                      {row.value}
                    </span>
                  </div>
                ))}
                <p
                  className="text-white/45 text-[11px] leading-relaxed pt-1"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  {perfume.exhaustiveDescription}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Optional email opt-in — shown below the result, never blocks it
// ─────────────────────────────────────────────────────────────────────────────
function EmailOptInBlock({
  onSubmit,
}: {
  onSubmit?: (email: string) => void
}) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor ingresá un correo válido.')
      return
    }
    setError('')
    onSubmit?.(email)
    setSent(true)
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center text-center py-4"
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
            border: '1px solid rgba(212,175,55,0.30)',
          }}
        >
          <Mail className="w-5 h-5 text-[#d4af37]" />
        </div>
        <p className="text-white/70 text-sm" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
          ¡Listo! Te enviamos tu perfil olfativo a <span className="text-[#d4af37]">{email}</span>.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <p
        className="text-white/60 text-sm mb-4 max-w-sm"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        ¿Querés recibir tu perfil olfativo completo por mail?
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError('') }}
          placeholder="tu@correo.com"
          className="flex-1 px-4 py-3 rounded-xl bg-white/4 backdrop-blur-sm
                      text-white placeholder-white/25 text-sm
                      transition-all duration-300
                      outline-none focus:ring-0"
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            border: '1px solid rgba(212,175,55,0.35)',
            boxShadow: email ? '0 0 16px rgba(212,175,55,0.15)' : 'none',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'rgba(212,175,55,0.7)'
            e.target.style.boxShadow = '0 0 20px rgba(212,175,55,0.2)'
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'rgba(212,175,55,0.35)'
            e.target.style.boxShadow = email ? '0 0 16px rgba(212,175,55,0.15)' : 'none'
          }}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="btn-gold flex items-center justify-center gap-2 shrink-0"
        >
          Enviar
        </motion.button>
      </form>
      {error && (
        <p className="text-red-400/80 text-xs flex items-center gap-1.5 mt-3" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          {error}
        </p>
      )}
      <p className="text-white/20 text-xs mt-3" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        Solo usamos tu correo para enviarte tu perfil olfativo. Sin spam.
      </p>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PrestigeShowcase — main export
// ─────────────────────────────────────────────────────────────────────────────
export default function PrestigeShowcase({
  results,
  onReset,
  capturedEmail,
  onEmailSubmit,
}: {
  results: MatchResult[]
  onReset: () => void
  capturedEmail?: string
  onEmailSubmit?: (email: string) => void
}) {
  const ref = useRef(null)
  useInView(ref, { once: true })

  const topResult = results[0]
  const perfume = topResult.perfume
  const secondaryResults = results.slice(1)

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
      {/* ── MATCH BADGE ──────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-center mb-6"
      >
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border"
          style={{ borderColor: 'rgba(212,175,55,0.32)', background: 'rgba(212,175,55,0.07)' }}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span
            className="text-[#d4af37]/75 text-xs uppercase tracking-[0.14em]"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Tu Match Perfecto
          </span>
          <span style={{ color: 'rgba(212,175,55,0.30)' }}>·</span>
          <span
            className="font-bold text-sm"
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              background: 'linear-gradient(135deg,#fffbe6 0%,#d4af37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {topResult.percentage}% afinidad
          </span>
        </div>
      </motion.div>

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
        <div className="flex flex-col gap-4 shrink-0 md:max-w-70 xl:max-w-xs">
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
              className="shrink-0 flex items-center gap-2 rounded-full"
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
              <span className="w-5 h-5 rounded-full border border-black/20 flex items-center justify-center shrink-0">
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
                  className="rounded-full border border-[#d4af37]/35 shrink-0"
                  style={{ width: sz, height: sz, marginLeft: i === 0 ? 4 : -6 }}
                />
              ))}
              <div className="w-4 border-t border-dashed border-[#d4af37]/20" />
              <ArrowRight className="w-3 h-3 shrink-0" style={{ color: 'rgba(212,175,55,0.30)' }} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── THREE-COLUMN EDITORIAL BODY ────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-6 xl:gap-8 py-8">
        {/* LEFT */}
        <div className="flex flex-col gap-8 lg:gap-10 w-full lg:w-60 xl:w-72 shrink-0 lg:pr-8 xl:pr-10">
          {left.map((pt, i) => (
            <FeatureBlock key={pt.title} title={pt.title} body={pt.body} side="left" animDelay={0.15 + i * 0.12} />
          ))}
        </div>

        {/* CENTER */}
        <div className="flex-1 flex justify-center">
          <CentralStage perfume={perfume} onWA={() => window.open(waUrl, '_blank')} />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-8 lg:gap-10 w-full lg:w-60 xl:w-72 shrink-0 lg:pl-8 xl:pl-10">
          {right.map((pt, i) => (
            <FeatureBlock key={pt.title} title={pt.title} body={pt.body} side="right" animDelay={0.27 + i * 0.12} />
          ))}
        </div>
      </div>

      {/* ── MATCH REASONS ─────────────────────────────────────────────────────── */}
      {topResult.matchReasons.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap gap-2 justify-center py-4"
        >
          {topResult.matchReasons.map((reason, i) => (
            <span
              key={i}
              className="text-xs px-3.5 py-1.5 rounded-full border text-white/55"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                borderColor: 'rgba(212,175,55,0.20)',
                background: 'rgba(212,175,55,0.04)',
                letterSpacing: '0.03em',
              }}
            >
              ✓ {reason}
            </span>
          ))}
        </motion.div>
      )}

      {/* ── PROMINENT WHATSAPP CTA ──────────────────────────────────────────── */}
      <WhatsAppCTA perfume={perfume} capturedEmail={capturedEmail} />

      {/* ── SECONDARY MATCHES ─────────────────────────────────────────────────── */}
      {secondaryResults.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 pt-8 border-t border-[#d4af37]/12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#d4af37]/18 to-transparent" />
            <p
              className="text-[#d4af37]/50 text-[11px] uppercase tracking-[0.18em] shrink-0"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              También te puede gustar
            </p>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#d4af37]/18 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {secondaryResults.map((r, i) => (
              <AlternativeCard key={r.perfume.name} result={r} rank={i} capturedEmail={capturedEmail} />
            ))}
          </div>
        </motion.div>
      )}

      {/* ── ELYSIAN PRESTIGE BANNER ─────────────────────────────────────────── */}
      <ElysianBanner perfume={perfume} />

      {/* ── OPTIONAL EMAIL OPT-IN ─────────────────────────────────────────────── */}
      <div className="mt-12 pt-8 border-t border-[#d4af37]/12">
        <EmailOptInBlock onSubmit={onEmailSubmit} />
      </div>

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
