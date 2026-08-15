"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { NAV_HEIGHT } from '@/lib/layout'

const MotionLink = motion.create(Link)

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Quiz', href: '#aromatch' },
    { name: 'Aprende', href: '#education' },
    { name: 'Colección', href: '#products' },
    { name: 'Contacto', href: '#footer' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-500"
        style={{
          // Fondo realmente opaco: con 7% de blanco el contenido que scrollea
          // se leía por debajo de los links del menú.
          height: `${NAV_HEIGHT}px`,
          background: 'rgba(10,10,10,0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(212,175,55,0.12)',
          boxShadow: isScrolled ? '0 8px 32px -12px rgba(0,0,0,0.85)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-4">
          {/* ── Brand: AroMatch top-left ─────────────────────────────────── */}
          <MotionLink
            href="/"
            aria-label="AroMatch — inicio"
            className="flex items-center gap-2 shrink-0 min-w-0 min-h-12"
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles className="w-5 h-5 text-[#d4af37]" />
            {/* Primary brand label */}
            <span
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
              className="text-xl md:text-2xl font-bold text-white"
            >
              Aro<span className="text-[#d4af37]">Match</span>
            </span>
            {/* Divider + secondary site label */}
            <span className="hidden md:inline-flex items-center gap-1.5 ml-1 pl-3 border-l border-white/15">
              <span
                className="label-eyebrow"
                style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.75rem' }}
              >
                by Auradecant
              </span>
              <span className="text-[#d4af37] text-xs">.ar</span>
            </span>
          </MotionLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative group inline-flex items-center min-h-12"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.85)',
                  fontWeight: 400,
                  transition: 'color 0.3s',
                }}
                whileHover={{ y: -1 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#D4AF37')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="#aromatch"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="btn-gold"
              style={{ padding: '0.6rem 1.4rem', fontSize: '0.75rem', minHeight: '48px' }}
            >
              Encuentra Tu Match
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden text-white -mr-3 flex items-center justify-center min-w-12 min-h-12"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-20 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center min-h-12 text-2xl font-serif text-white/90 hover:text-[#d4af37] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#aromatch"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-8 flex items-center justify-center min-h-12 bg-linear-to-r from-[#d4af37] to-[#a08850] text-black font-medium rounded-full glow-gold"
              >
                Encuentra Tu Match
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
