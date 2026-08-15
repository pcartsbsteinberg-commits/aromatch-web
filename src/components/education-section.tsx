"use client"

import { useSyncExternalStore } from 'react'
import Link from 'next/link'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { articles, levelMeta, type Article } from '@/lib/articles'
import { renderRich } from '@/components/rich-text'

function EduCard({
  article,
  index,
  hoverEnabled,
}: {
  article: Article
  index: number
  hoverEnabled: boolean
}) {
  const level = levelMeta[article.level]
  const Icon = article.icon

  // Tilt 3D suave — solo en dispositivos con hover real
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const spring = { stiffness: 150, damping: 20, mass: 0.4 }
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), spring)
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), spring)

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!hoverEnabled) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }

  const resetTilt = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      {/* La tarjeta entera es el link al artículo. */}
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        style={{
          rotateX: hoverEnabled ? rotateX : 0,
          rotateY: hoverEnabled ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        className="h-full"
      >
        <Link
          href={`/aprende/${article.slug}`}
          className="edu-card group relative flex h-full min-h-85 flex-col overflow-hidden rounded-2xl border bg-[#0a0800]"
        >
          {/* Imagen de fondo contextual */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
          {/* Overlay oscuro */}
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-500"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.62) 45%, rgba(0,0,0,0.45) 100%)',
            }}
          />

          {/* ── Capa base (estado normal) ───────────────────────────── */}
          <div
            className="relative z-10 flex h-full flex-col p-6 md:p-7"
            style={{ transform: 'translateZ(40px)' }}
          >
            <div className="flex items-start justify-between">
              <div className="edu-icon flex h-12 w-12 items-center justify-center rounded-xl border border-[#d4af37]/25 bg-[#d4af37]/10">
                <Icon className="h-6 w-6" style={{ color: article.iconColor }} />
              </div>
              <span className="font-serif text-5xl font-semibold leading-none text-white/10 md:text-6xl">
                {article.order}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span
                className="rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: level.color, backgroundColor: level.bg, borderColor: level.border }}
              >
                {level.label}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs tracking-wide text-white/85">
                ⏱ {article.readTime}
              </span>
            </div>

            <div className="flex-1" />

            <div className="edu-title-block transition-transform duration-500">
              <h3 className="font-serif text-xl font-semibold leading-snug text-[#f4d58d] md:text-[1.45rem]">
                {article.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">{article.teaser}</p>
            </div>
          </div>

          {/* ── Panel expandido (hover) ─────────────────────────────────
                 Muestra la entrada del artículo, no el texto completo: el
                 contenido entero vive en /aprende/[slug] y duplicarlo acá
                 competiría con esa página en los buscadores. */}
          <div
            className="edu-panel absolute inset-0 z-20 flex flex-col p-6 md:p-7"
            style={{ transform: 'translateZ(60px)' }}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-serif text-lg font-semibold leading-snug text-[#f4d58d] md:text-xl">
                {article.title}
              </h3>
              <span
                className="shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: level.color, backgroundColor: level.bg, borderColor: level.border }}
              >
                {level.label}
              </span>
            </div>
            <div className="mt-3 h-px w-12 bg-linear-to-r from-[#d4af37] to-transparent" />
            <div className="scrollbar-hide mt-3 flex-1 overflow-y-auto pr-1">
              <p className="edu-prose">{renderRich(article.intro)}</p>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#d4af37]">
              Leer artículo completo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  )
}

function subscribeHoverCapability(callback: () => void) {
  if (typeof window === 'undefined' || !window.matchMedia) return () => {}
  const mql = window.matchMedia('(hover: hover) and (pointer: fine)')
  mql.addEventListener('change', callback)
  return () => mql.removeEventListener('change', callback)
}

function getHoverCapability() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

function getHoverCapabilityServerSnapshot() {
  return false
}

export default function EducationSection() {
  const hoverEnabled = useSyncExternalStore(
    subscribeHoverCapability,
    getHoverCapability,
    getHoverCapabilityServerSnapshot
  )

  const headerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }
  const headerWord = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  }

  return (
    <section id="education" className="relative overflow-hidden bg-[#0a0a0a] px-6 py-20 md:py-32">
      {/* Estilos locales: drop cap y comportamiento del panel.
          `.edu-term` y el cuerpo de los artículos viven en globals.css porque
          los comparten las páginas de /aprende. */}
      <style>{`
        .edu-prose {
          font-size: 15px;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.85);
        }
        .edu-prose::first-letter {
          font-family: var(--font-serif);
          float: left;
          font-size: 3.1rem;
          line-height: 0.82;
          padding: 0.35rem 0.55rem 0 0;
          color: var(--gold-mid);
          font-weight: 600;
        }

        .edu-card {
          border-color: rgba(212, 175, 55, 0.14);
          box-shadow: 0 18px 48px -20px rgba(0,0,0,0.85);
          transition: border-color .45s ease, box-shadow .45s ease;
          will-change: transform;
        }
        .edu-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 1px;
          background: linear-gradient(140deg, rgba(212,175,55,0.55), rgba(212,175,55,0) 45%, rgba(212,175,55,0) 60%, rgba(244,213,141,0.45));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity .45s ease;
          pointer-events: none;
          z-index: 30;
        }

        /* Panel oculto por defecto */
        .edu-panel {
          background: rgba(8, 6, 2, 0.94);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          opacity: 0;
          transform: translateY(14px);
          transition: opacity .45s ease, transform .45s ease;
          pointer-events: none;
        }

        /* Sólo en dispositivos con hover real: en touch la tarjeta navega */
        @media (hover: hover) and (pointer: fine) {
          .edu-card:hover {
            border-color: rgba(212, 175, 55, 0.45);
            box-shadow: 0 30px 70px -22px rgba(0,0,0,0.9), 0 0 30px -6px rgba(212,175,55,0.28);
          }
          .edu-card:hover::before { opacity: 1; }
          .edu-card:hover .edu-panel {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
          .edu-card:hover .edu-title-block { transform: translateY(8px); opacity: 0; }
        }

        @media (hover: none) {
          .edu-card:hover img { transform: none !important; }
        }
      `}</style>

      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-60 w-60 rounded-full bg-[#a08850]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ── Header ─────────────────────────────────────────────── */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14 text-center md:mb-16"
        >
          <motion.span
            variants={headerWord}
            className="mb-5 block text-xs uppercase text-[#d4af37]"
            style={{ fontFamily: "'DM Mono', ui-monospace, monospace", letterSpacing: '0.42em' }}
          >
            Aprende y Descubre
          </motion.span>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-6xl">
            <motion.span variants={headerWord} className="inline-block">
              El Arte de la{' '}
            </motion.span>
            <motion.span variants={headerWord} className="inline-block italic text-[#d4af37]">
              Fragancia
            </motion.span>
          </h2>

          <motion.p variants={headerWord} className="mx-auto mt-5 max-w-xl text-white/85">
            Todo lo que necesitás saber para elegir, usar y apreciar una fragancia de nivel superior.
          </motion.p>

          <motion.div
            variants={headerWord}
            className="mx-auto mt-7 h-px w-28 bg-linear-to-r from-transparent via-[#d4af37] to-transparent"
          />
        </motion.div>

        {/* ── Grid de cards ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {articles.map((article, index) => (
            <EduCard
              key={article.slug}
              article={article}
              index={index}
              hoverEnabled={hoverEnabled}
            />
          ))}
        </div>

        {/* ── CTA final ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-6 text-center"
        >
          <Link
            href="/aprende"
            className="btn-ghost"
          >
            <span>Ver las {articles.length} guías</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <p className="font-serif text-2xl text-white md:text-3xl">
            ¿Listo para encontrar tu <span className="italic text-[#d4af37]">fragancia perfecta</span>?
          </p>
          <a href="#aromatch" className="btn-gold">
            <Sparkles className="h-4 w-4" />
            <span>Hacer el AroMatch Quiz</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
