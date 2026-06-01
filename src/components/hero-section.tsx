"use client"

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Ambient glow orbs (layer on top of global video) ──────────────── */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#a08850]/8 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none" />

      {/* ── Gold line decorations ─────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-40 right-20 w-px h-60 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-40 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
        />
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="divider-gold w-8" />
          <span className="label-eyebrow">
            Auradecant.ar
          </span>
          <span className="divider-gold w-8" />
        </motion.div>

        {/* Main Headline — contrast fixed with bright gold-white gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest mb-6 text-balance"
        >
          <span className="text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)]">
            Descubre Tu
          </span>
          <br />
          <span
            className="text-gradient-gold"
            style={{ filter: 'drop-shadow(0 2px 28px rgba(212,175,55,0.50))' }}
          >
            Aroma Distintivo
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="body-text text-lg text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Experimenta las mejores fragancias árabes y nicho del mundo a precios accesibles.
          Perfumes de lujo 100% originales seleccionados para el coleccionista exigente.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#aromatch"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold"
          >
            <Sparkles className="w-4 h-4" />
            <span>Encuentra Tu Match Olfativo</span>
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-10"
        >
          {['100% Auténtico', 'Frasco Sellado', 'Envío Gratis'].map((badge, i) => (
            <span
              key={badge}
              className="label-eyebrow flex items-center gap-2"
              style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.65rem' }}
            >
              {i > 0 && <span className="divider-gold w-6 hidden sm:block" />}
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs tracking-widest uppercase">Explorar</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
