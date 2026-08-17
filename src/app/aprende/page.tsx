import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { articles, levelMeta } from '@/lib/articles'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'El Arte de la Fragancia | AuraDecant',
  description:
    'Ocho guías para elegir, usar y apreciar un perfume: familias olfativas, concentraciones, notas, proyección, layering y cómo detectar un original.',
  alternates: { canonical: `${SITE_URL}/aprende` },
  openGraph: {
    title: 'El Arte de la Fragancia | AuraDecant',
    description:
      'Ocho guías para elegir, usar y apreciar un perfume: familias olfativas, concentraciones, notas, proyección, layering y autenticidad.',
    url: `${SITE_URL}/aprende`,
    type: 'website',
    siteName: 'AuraDecant',
    locale: 'es_AR',
  },
}

export default function AprendePage() {
  return (
    <div className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* ── Encabezado ─────────────────────────────────────────────────── */}
        <header className="text-center mb-14 md:mb-16">
          <span
            className="mb-5 block text-xs uppercase text-[#d4af37]"
            style={{ fontFamily: "'DM Mono', ui-monospace, monospace", letterSpacing: '0.42em' }}
          >
            Aprende y Descubre
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight text-white">
            El Arte de la <span className="italic text-[#d4af37]">Fragancia</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-white/85">
            Todo lo que necesitás saber para elegir, usar y apreciar una fragancia de nivel
            superior. {articles.length} guías, de lo básico a lo avanzado.
          </p>

          <div className="mx-auto mt-7 h-px w-28 bg-linear-to-r from-transparent via-[#d4af37] to-transparent" />
        </header>

        {/* ── Índice de artículos ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {articles.map((article) => {
            const level = levelMeta[article.level]
            const Icon = article.icon

            return (
              <Link
                key={article.slug}
                href={`/aprende/${article.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border
                           border-[#d4af37]/14 bg-[#0a0800] transition-all duration-300
                           hover:border-[#d4af37]/45 hover:shadow-[0_18px_48px_-20px_rgba(0,0,0,0.85)]"
              >
                <div className="relative aspect-video w-full shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(10,8,0,0.95) 0%, rgba(10,8,0,0.1) 65%, rgba(10,8,0,0) 100%)',
                    }}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d4af37]/25 bg-[#d4af37]/10">
                      <Icon className="h-6 w-6" style={{ color: article.iconColor }} />
                    </span>
                    <span className="font-serif text-5xl font-semibold leading-none text-white/10">
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

                  <h2 className="mt-5 font-serif text-xl font-semibold leading-snug text-[#f4d58d]">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">{article.teaser}</p>

                  <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/75 transition-colors group-hover:text-[#d4af37]">
                    Leer artículo
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
