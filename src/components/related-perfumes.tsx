import { perfumes } from '@/lib/perfumes'
import { buildPurchaseUrl } from '@/lib/whatsapp'
import { MessageCircle } from 'lucide-react'

/**
 * Bloque "Perfumes relacionados" del final de cada artículo.
 *
 * Recibe nombres exactos de src/lib/perfumes.ts y descarta silenciosamente los
 * que no existan, para que renombrar un perfume no rompa el build de un
 * artículo. Es un Server Component: sólo markup y links, sin estado.
 */
export default function RelatedPerfumes({
  names,
  note,
}: {
  names: string[]
  note?: string
}) {
  const items = names
    .map((n) => perfumes.find((p) => p.name === n))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  if (items.length === 0) return null

  return (
    <section aria-labelledby="perfumes-relacionados" className="mt-16 pt-12 border-t border-[#d4af37]/15">
      <h2
        id="perfumes-relacionados"
        className="font-serif text-2xl md:text-3xl font-semibold text-white mb-2"
      >
        Perfumes relacionados
      </h2>
      {note && <p className="text-white/85 text-sm mb-8 max-w-2xl">{note}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((perfume) => (
          <article
            key={perfume.name}
            className="flex flex-col rounded-2xl overflow-hidden border border-[#d4af37]/15 bg-[#0a0800]
                       transition-colors duration-300 hover:border-[#d4af37]/40"
          >
            <div className="relative w-full aspect-3/4 overflow-hidden bg-[#0d0a00]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={perfume.image}
                alt={`${perfume.brand} ${perfume.name} EDP 100ml`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-1 p-4 flex-1">
              <p
                className="text-[#d4af37] text-xs uppercase"
                style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.22em' }}
              >
                {perfume.brand}
              </p>
              <h3 className="font-serif text-white text-base font-semibold leading-tight">
                {perfume.name}
              </h3>
              <p className="text-white/85 text-xs leading-relaxed mt-1 mb-4">
                {perfume.family} · {perfume.longevity}
              </p>

              <a
                href={buildPurchaseUrl(perfume)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emerald mt-auto w-full text-xs"
                style={{ padding: '0.7rem 1rem' }}
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                Comprar por WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
