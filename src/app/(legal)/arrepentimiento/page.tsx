import type { Metadata } from 'next'
import { MessageCircle } from 'lucide-react'
import LegalPageShell from '@/components/legal-page-shell'
import { WHATSAPP_NUMBER } from '@/lib/whatsapp'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Botón de Arrepentimiento | AuraDecant',
  description:
    'Tu derecho a arrepentirte de la compra dentro de los 10 días corridos desde que recibiste el producto, según la Ley de Defensa del Consumidor N° 24.240.',
  alternates: { canonical: `${SITE_URL}/arrepentimiento` },
}

const WHATSAPP_ARREPENTIMIENTO_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola! Quiero ejercer mi derecho de arrepentimiento de compra. Mi número de pedido es: '
)}`

export default function ArrepentimientoPage() {
  return (
    <LegalPageShell eyebrow="Tus Derechos" title="Botón de Arrepentimiento">
      {/* Texto exigido por Resolución 424/2020 y Disposición 954/2025 —
          se reproduce tal cual, sin parafrasear. */}
      <p className="edu-prose-article">
        Tenés derecho a arrepentirte de tu compra dentro de los 10 días corridos desde que
        recibiste el producto, sin necesidad de dar ningún motivo, siempre que el frasco esté
        sellado y sin abrir.
      </p>
      <p className="edu-prose-article">
        Los perfumes son productos de higiene personal: una vez abierto el sello de fábrica, no
        podemos aceptar la devolución por arrepentimiento (excepción reconocida por razones
        sanitarias, igual que en cualquier cosmética). Esto no aplica si el producto llegó dañado,
        no es el original, o no corresponde a lo que pediste — en esos casos aceptamos la
        devolución sin excepción, sea cual sea el estado del frasco.
      </p>
      <p className="edu-prose-article">
        Para ejercer tu derecho, escribinos por WhatsApp indicando tu número de pedido. Te
        confirmamos el código de tu trámite dentro de las 24 horas.
      </p>

      <a
        href={WHATSAPP_ARREPENTIMIENTO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-emerald mt-2 w-fit"
      >
        <MessageCircle className="h-4 w-4" />
        <span>Ejercer mi derecho por WhatsApp</span>
      </a>

      <p className="mt-6 text-xs leading-relaxed text-white/60">
        (Resolución 424/2020 y Disposición 954/2025, Secretaría de Comercio Interior — Ley de
        Defensa del Consumidor N° 24.240)
      </p>
    </LegalPageShell>
  )
}
