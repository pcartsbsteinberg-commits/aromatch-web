import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { articles, getArticle, levelMeta } from '@/lib/articles'
import { renderRich } from '@/components/rich-text'
import RelatedPerfumes from '@/components/related-perfumes'
import { SITE_INDEXABLE, SITE_URL } from '@/lib/site'

// Las 8 rutas se prerenderizan en build: son estáticas.
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

// En una ruta dinámica el metadata se declara con generateMetadata, no con
// `export const metadata` (que no puede leer el slug).
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}

  const url = `${SITE_URL}/aprende/${article.slug}`

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url,
      type: 'article',
      siteName: 'AuraDecant',
      locale: 'es_AR',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const level = levelMeta[article.level]
  const Icon = article.icon
  const index = articles.findIndex((a) => a.slug === article.slug)
  const next = articles[(index + 1) % articles.length]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    author: { '@type': 'Organization', name: 'AuraDecant' },
    publisher: { '@type': 'Organization', name: 'AuraDecant' },
    mainEntityOfPage: `${SITE_URL}/aprende/${article.slug}`,
  }

  return (
    <article className="px-6 py-14 md:py-20">
      {SITE_INDEXABLE && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}

      <div className="mx-auto max-w-3xl">
        {/* Volver al índice */}
        <Link
          href="/aprende"
          className="inline-flex items-center gap-2 min-h-12 text-xs uppercase tracking-[0.2em] text-white/75 hover:text-[#d4af37] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          El Arte de la Fragancia
        </Link>

        {/* ── Encabezado ─────────────────────────────────────────────────── */}
        <header className="mt-6 mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d4af37]/25 bg-[#d4af37]/10 shrink-0">
              <Icon className="h-6 w-6" style={{ color: article.iconColor }} />
            </span>
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

          {/* Único <h1> de la página */}
          <h1 className="font-serif text-3xl md:text-5xl font-semibold leading-tight text-[#f4d58d] text-balance">
            {article.title}
          </h1>

          <div className="mt-6 h-px w-28 bg-linear-to-r from-[#d4af37] to-transparent" />

          <p className="mt-6 text-lg leading-relaxed text-white/85">{renderRich(article.intro)}</p>
        </header>

        {/* ── Cuerpo ─────────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-4">
                {section.heading}
              </h2>

              {section.body && (
                <p className="edu-prose-article">{renderRich(section.body)}</p>
              )}

              {section.items && (
                <div className="flex flex-col gap-6 mt-2">
                  {section.items.map((item) => (
                    <div
                      key={item.term}
                      className="rounded-xl border border-[#d4af37]/15 bg-white/[0.02] p-5 md:p-6"
                    >
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-[#f4d58d] mb-2">
                        {item.term}
                      </h3>
                      <p className="edu-prose-article">{renderRich(item.body)}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* ── Perfumes relacionados ──────────────────────────────────────── */}
        <RelatedPerfumes names={article.relatedPerfumes} note={article.relatedNote} />

        {/* ── Cierre: quiz + siguiente artículo ──────────────────────────── */}
        <div className="mt-16 pt-12 border-t border-[#d4af37]/15 flex flex-col items-center gap-6 text-center">
          <p className="font-serif text-xl md:text-2xl text-white">
            ¿Listo para encontrar tu <span className="italic text-[#d4af37]">fragancia perfecta</span>?
          </p>
          <Link href="/#aromatch" className="btn-gold">
            <Sparkles className="h-4 w-4" />
            <span>Hacer el AroMatch Quiz</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href={`/aprende/${next.slug}`}
            className="mt-4 inline-flex items-center gap-2 min-h-12 text-sm text-white/75 hover:text-[#d4af37] transition-colors"
          >
            Siguiente: {next.shortTitle}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}
