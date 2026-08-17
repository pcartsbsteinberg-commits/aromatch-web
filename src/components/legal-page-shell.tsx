import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

/** Placeholder visible para datos que todavía no están definidos (CUIT, medios de pago, etc). */
export function Pending({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded border border-dashed border-amber-400/60 bg-amber-400/10 px-1.5 py-0.5 text-amber-300">
      {children}
    </span>
  )
}

/** Shell compartido por las páginas legales (/arrepentimiento, /terminos, /privacidad). */
export default function LegalPageShell({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string
  title: string
  /** Fecha de última actualización del texto, en formato legible. */
  updated?: string
  children: React.ReactNode
}) {
  return (
    <article className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 min-h-12 text-xs uppercase tracking-[0.2em] text-white/75 hover:text-[#d4af37] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          AuraDecant
        </Link>

        <header className="mt-6 mb-10">
          <span
            className="mb-4 block text-xs uppercase text-[#d4af37]"
            style={{ fontFamily: "'DM Mono', ui-monospace, monospace", letterSpacing: '0.35em' }}
          >
            {eyebrow}
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold leading-tight text-[#f4d58d] text-balance">
            {title}
          </h1>
          <div className="mt-6 h-px w-28 bg-linear-to-r from-[#d4af37] to-transparent" />
          {updated && <p className="mt-4 text-xs text-white/60">Última actualización: {updated}</p>}
        </header>

        <div className="flex flex-col gap-6">{children}</div>
      </div>
    </article>
  )
}
