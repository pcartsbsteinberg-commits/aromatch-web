"use client"

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { perfumes, type Perfume } from '@/lib/perfumes'
import { buildPurchaseUrl, TRUST_LINE } from '@/lib/whatsapp'
import { ArrowRight, X } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Elysian-Style Perfume Card (PerfumeX reference)
// ─────────────────────────────────────────────────────────────────────────────
function PerfumeCard({
  perfume,
  index,
  onOpen,
}: {
  perfume: Perfume
  index: number
  onOpen: (p: Perfume) => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [imgError, setImgError] = useState(false)

  const imgSrc = perfume.image
  const monogram = (
    perfume.name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
  ).toUpperCase()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: (index % 8) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      onClick={() => onOpen(perfume)}
    >
      <div
        className="relative rounded-2xl overflow-hidden flex flex-col
                   border border-[#d4af37]/15
                   bg-[#0a0800]
                   transition-all duration-500
                   hover:border-[#d4af37]/50
                   hover:shadow-[0_12px_56px_rgba(212,175,55,0.22),0_0_0_1px_rgba(212,175,55,0.12)]
                   hover:scale-[1.03]"
      >
        {/* ── Image area ─────────────────────────────────────────────── */}
        <div className="relative w-full aspect-3/4 overflow-hidden shrink-0 bg-[#0d0a00]">
          {/* Radial gold glow behind image */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 50% 60%, rgba(212,175,55,0.20) 0%, rgba(0,0,0,0.97) 72%)',
            }}
          />

          {/* Product image */}
          {!imgError ? (
            <img
              src={imgSrc}
              alt={`${perfume.brand} ${perfume.name} EDP 100ml`}
              onError={() => setImgError(true)}
              className="absolute inset-0 w-full h-full object-cover z-10
                         transition-transform duration-700 group-hover:scale-[1.08]"
            />
          ) : (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  border: '1px solid rgba(212,175,55,0.25)',
                  background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)',
                }}
              >
                <span
                  className="text-2xl font-bold tracking-widest select-none"
                  style={{
                    fontFamily: 'var(--font-playfair), serif',
                    background: 'linear-gradient(135deg,#fffbe6 0%,#f4d58d 45%,#d4af37 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {monogram}
                </span>
              </div>
              <span
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: 'rgba(212,175,55,0.35)', fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Perfume Original
              </span>
            </div>
          )}

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 inset-x-0 h-1/3 z-20 bg-linear-to-t from-[#0a0800] to-transparent pointer-events-none" />


          {/* Heart / favourite icon — top right.
              El <button> mide 48px (target táctil) y es transparente; el círculo
              visible de 28px va adentro, así el aspecto no cambia. */}
          <button
            onClick={(e) => { e.stopPropagation() }}
            aria-label="Guardar en favoritos"
            className="absolute top-0.5 right-0.5 z-30 w-12 h-12 flex items-center justify-center group/fav"
          >
            <span
              className="w-7 h-7 flex items-center justify-center
                         rounded-full border border-white/20 bg-black/40 backdrop-blur-sm
                         group-hover/fav:border-[#d4af37]/60 transition-colors duration-200"
            >
              <svg className="w-3.5 h-3.5 text-white/85" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </span>
          </button>
        </div>

        {/* ── Card body ─────────────────────────────────────────────── */}
        <div className="px-4 pt-4 pb-5 flex flex-col gap-1 flex-1 relative">
          {/* Brand — gold small caps */}
          <p
            className="text-[#d4af37] text-xs uppercase"
            style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.22em' }}
          >
            {perfume.brand}
          </p>

          {/* Product name — white, Playfair */}
          <h3
            className="text-white leading-tight"
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(0.85rem, 1.05vw, 0.98rem)',
              fontWeight: 600,
              letterSpacing: '0.01em',
            }}
          >
            {perfume.name}
          </h3>

          {/* Availability — premium lime accent */}
          <p
            className="text-[#ccff00] font-bold mt-1"
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.82rem',
              letterSpacing: '0.04em',
              textShadow: '0 0 12px rgba(204, 255, 0, 0.25)',
            }}
          >
            Perfume Original Sellado
          </p>

          {/* Circular golden arrow button — bottom right.
              Mismo criterio que el corazón: target de 48px, círculo visible de 36px. */}
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(perfume) }}
            aria-label="Ver detalle del perfume"
            className="absolute bottom-2.5 right-2.5 w-12 h-12
                        flex items-center justify-center group/go"
          >
            <span
              className="w-9 h-9 rounded-full
                          bg-[#d4af37] group-hover/go:bg-[#f4d58d]
                          flex items-center justify-center
                          transition-all duration-300
                          shadow-[0_0_16px_rgba(212,175,55,0.35)]
                          group-hover/go:shadow-[0_0_28px_rgba(212,175,55,0.6)]"
            >
              <ArrowRight className="w-4 h-4 text-black" />
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Product Detail Modal — Elysian "Prestige" style
// ─────────────────────────────────────────────────────────────────────────────
function ProductDetailModal({ perfume, onClose }: { perfume: Perfume; onClose: () => void }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/92 backdrop-blur-xl" />

      {/* Modal content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto
                   rounded-3xl border border-[#d4af37]/25
                   bg-linear-to-b from-[#0d0a00] to-[#060400]
                   shadow-[0_0_80px_rgba(212,175,55,0.15)]
                   scrollbar-hide"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-5 right-5 z-20 min-w-12 min-h-12 rounded-full
                      border border-white/15 bg-black/50 backdrop-blur-sm
                      flex items-center justify-center
                      hover:border-[#d4af37]/50 transition-colors duration-200"
        >
          <X className="w-4 h-4 text-white/85" />
        </button>

        {/* Hero image + glow */}
        <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-t-3xl bg-[#0a0800]">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                'radial-gradient(ellipse 65% 70% at 50% 60%, rgba(212,175,55,0.28) 0%, rgba(0,0,0,0.97) 70%)',
            }}
          />
          {!imgError ? (
            <img
              src={perfume.image}
              alt={`${perfume.brand} ${perfume.name} EDP 100ml`}
              onError={() => setImgError(true)}
              className="absolute inset-0 w-full h-full object-cover z-10 opacity-90"
            />
          ) : (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <span
                className="text-5xl font-bold"
                style={{
                  fontFamily: 'var(--font-playfair), serif',
                  background: 'linear-gradient(135deg,#fffbe6 0%,#d4af37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {perfume.brand[0]}
              </span>
            </div>
          )}
          <div className="absolute bottom-0 inset-x-0 h-1/2 z-20 bg-linear-to-t from-[#0d0a00] to-transparent" />

          {/* Brand + Name overlay */}
          <div className="absolute bottom-6 left-8 z-30">
            <p
              className="text-[#d4af37] text-xs uppercase mb-1"
              style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.3em' }}
            >
              {perfume.brand}
            </p>
            <h2
              className="text-white text-2xl md:text-4xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {perfume.name}
            </h2>
          </div>
        </div>

        {/* Content body */}
        <div className="p-8 md:p-12 space-y-10">

          {/* Notes Grid */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Notas de Salida', notes: perfume.topNotes, delay: 0 },
              { label: 'Notas de Corazón', notes: perfume.heartNotes, delay: 0.08 },
              { label: 'Notas de Fondo', notes: perfume.baseNotes, delay: 0.16 },
            ].map(({ label, notes, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay, duration: 0.5 }}
                className="rounded-xl border border-[#d4af37]/18 bg-[#d4af37]/4 p-4 text-center"
              >
                <p
                  className="text-[#d4af37] text-xs uppercase mb-3"
                  style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.28em' }}
                >
                  {label}
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {notes.map((note) => (
                    <span
                      key={note}
                      className="px-2.5 py-1 rounded-full text-xs text-white/85
                                  border border-white/12 bg-white/4"
                      style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.05em' }}
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Thin separator */}
          <div className="h-px bg-linear-to-r from-transparent via-[#d4af37]/25 to-transparent" />

          {/* Exhaustive description */}
          <div>
            <p
              className="text-[#d4af37] text-xs uppercase mb-4"
              style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.3em' }}
            >
              Perfil Olfativo
            </p>
            <p
              className="text-white/85 leading-relaxed"
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
                lineHeight: 1.8,
              }}
            >
              {perfume.exhaustiveDescription}
            </p>
          </div>

          {/* Occasion + Longevity */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/8 bg-white/3 p-5">
              <p
                className="text-[#d4af37] text-xs uppercase mb-2"
                style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.28em' }}
              >
                Ocasión
              </p>
              <p className="text-white text-sm" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                {perfume.occasion}
              </p>
            </div>
            <div className="rounded-xl border border-white/8 bg-white/3 p-5">
              <p
                className="text-[#d4af37] text-xs uppercase mb-2"
                style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.28em' }}
              >
                Longevidad
              </p>
              <p className="text-white text-sm" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                {perfume.longevity}
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="flex flex-col items-center gap-3">
          <motion.a
            href={buildPurchaseUrl(perfume)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="btn-emerald w-full flex items-center justify-center gap-3 py-4!"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.106 1.524 5.823L.057 23.392a.75.75 0 0 0 .921.921l5.569-1.467A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.671-.524-5.178-1.434l-.372-.22-3.307.87.885-3.229-.235-.38A9.945 9.945 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Comprar por WhatsApp
          </motion.a>
          <p
            className="text-white/75 text-xs text-center"
            style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.02em' }}
          >
            {TRUST_LINE}
          </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ProductsSection — main export
// ─────────────────────────────────────────────────────────────────────────────
export default function ProductsSection() {
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null)
  const inStockCount = perfumes.filter((p) => p.inStock).length

  return (
    <>
      {/* Fondo sólido: fuera del hero el video le bajaba el contraste a las tarjetas. */}
      <section id="products" className="py-24 md:py-36 px-6 relative overflow-hidden bg-[#0a0a0a]">

        {/* ── Top section separator ──────────────────────────────────────── */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#d4af37]/30 to-transparent" />

        {/* Section-level spotlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle 900px at 50% 30%, rgba(212,175,55,0.09) 0%, rgba(0,0,0,0) 70%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* ── Section Header ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <p
              className="text-[#d4af37] mb-4 text-xs uppercase"
              style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.35em' }}
            >
              Colección Firma · {perfumes.length} Fragancias
            </p>
            <h2
              className="text-white mb-5"
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Eleva tus Sentidos con{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg,#fffbe6 0%,#f4d58d 45%,#d4af37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Elegancia Árabe
              </span>
            </h2>
            <p
              className="text-white/85 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.875rem', letterSpacing: '0.02em' }}
            >
              Bienvenido al epítome del lujo olfativo — la Colección Firma de AroMatch.
              Fragancias seleccionadas por nuestro equipo. Perfumes 100% originales en su frasco sellado.
            </p>
          </motion.div>

          {/* ── 4-column grid ──────────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perfumes.map((perfume, index) => (
              <PerfumeCard
                key={perfume.name}
                perfume={perfume}
                index={index}
                onOpen={setSelectedPerfume}
              />
            ))}
          </div>

          {/* ── Stats strip ────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 border-t border-b border-white/6"
          >
            {[
              // Contado desde perfumes.ts — antes decía 16 fijo y se contradecía
              // con la colección. La calificación promedio se removió: no hay
              // reseñas reales todavía.
              { value: String(inStockCount), label: 'Fragancias en Stock'      },
              { value: '100%',               label: 'Autenticidad Garantizada' },
              { value: '48h',                label: 'Envío Express'            },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center">
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-playfair), serif',
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    background: 'linear-gradient(135deg,#fffbe6 0%,#f4d58d 45%,#d4af37 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </motion.p>
                <p
                  className="text-white/75"
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom section separator ───────────────────────────────── */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      </section>

      {/* ── Product Detail Modal ──────────────────────────────────────── */}
      <AnimatePresence>
        {selectedPerfume && (
          <ProductDetailModal
            perfume={selectedPerfume}
            onClose={() => setSelectedPerfume(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
