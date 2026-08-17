import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPageShell, { Pending } from '@/components/legal-page-shell'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | AuraDecant',
  description: 'Condiciones de compra, envío y devolución de AuraDecant, perfumería árabe y de nicho.',
  alternates: { canonical: `${SITE_URL}/terminos` },
}

export default function TerminosPage() {
  return (
    <LegalPageShell eyebrow="Legal" title="Términos y Condiciones" updated="agosto 2026">
      <p className="edu-prose-article">
        Estos términos rigen la compra de perfumes a través de AuraDecant. Al coordinar un pedido
        con nosotros, los aceptás.
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Quiénes somos</h2>
      <p className="edu-prose-article">
        AuraDecant es una perfumería especializada en fragancias árabes y de nicho 100% originales,
        vendidas en su frasco sellado de fábrica. Razón social y CUIT: <Pending>a completar cuando el negocio esté formalizado</Pending>.
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Cómo se compra</h2>
      <p className="edu-prose-article">
        El sitio no tiene carrito de compra ni checkout online: cada pedido se coordina
        directamente por WhatsApp. La compra queda confirmada recién cuando vos y nosotros
        acordamos el producto, el precio, el medio de pago y la dirección de envío.
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Precios</h2>
      <p className="edu-prose-article">
        Los precios están expresados en pesos argentinos (ARS) y pueden cambiar sin aviso previo
        hasta el momento en que confirmás tu pedido por WhatsApp.
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Medios de pago</h2>
      <p className="edu-prose-article">
        <Pending>a completar: detallar los medios de pago aceptados (transferencia, efectivo, Mercado Pago, etc.)</Pending>
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Envío</h2>
      <p className="edu-prose-article">
        Hacemos entregas en 24 a 48 horas en CABA y GBA, con seguimiento, y envío sin cargo a
        partir de 2 unidades. Para envíos fuera de CABA y GBA, consultanos por WhatsApp.
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Garantía de originalidad</h2>
      <p className="edu-prose-article">
        Todos nuestros perfumes son 100% originales y llegan en su frasco sellado de fábrica.
        Con cada compra entregamos el Batch Code correspondiente al frasco.
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Cambios y devoluciones</h2>
      <p className="edu-prose-article">
        Tu derecho a arrepentirte de la compra está detallado en el{' '}
        <Link href="/arrepentimiento" className="text-[#d4af37] hover:underline">
          Botón de Arrepentimiento
        </Link>
        . Si el producto llega dañado, no es el original, o no corresponde a lo que pediste,
        aceptamos la devolución sin excepción, sea cual sea el estado del frasco — escribinos por
        WhatsApp con tu número de pedido.
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Propiedad intelectual</h2>
      <p className="edu-prose-article">
        Las marcas y perfumes mencionados en este sitio pertenecen a sus respectivos titulares.
        AuraDecant comercializa producto original de esas marcas, sin estar afiliado ni
        patrocinado por ninguna de ellas.
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Modificaciones</h2>
      <p className="edu-prose-article">
        Podemos actualizar estos términos en cualquier momento. La versión vigente es siempre la
        publicada en esta página.
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Contacto y jurisdicción</h2>
      <p className="edu-prose-article">
        Para cualquier consulta, escribinos por WhatsApp o Instagram (
        <a
          href="https://www.instagram.com/auradecant.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#d4af37] hover:underline"
        >
          @auradecant.ar
        </a>
        ). Esta relación de consumo se rige por la Ley de Defensa del Consumidor N° 24.240 de la
        República Argentina. Domicilio legal: <Pending>a completar</Pending>.
      </p>
    </LegalPageShell>
  )
}
