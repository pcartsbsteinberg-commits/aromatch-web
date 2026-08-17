import type { Metadata } from 'next'
import LegalPageShell, { Pending } from '@/components/legal-page-shell'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Privacidad | AuraDecant',
  description: 'Qué datos recolecta AuraDecant, para qué los usa y con quién los comparte.',
  alternates: { canonical: `${SITE_URL}/privacidad` },
}

export default function PrivacidadPage() {
  return (
    <LegalPageShell eyebrow="Legal" title="Política de Privacidad" updated="agosto 2026">
      <p className="edu-prose-article">
        Esta política explica qué datos recolectamos en auradecant.com.ar, para qué los usamos y
        con quién los compartimos.
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Qué datos recolectamos</h2>
      <p className="edu-prose-article">
        Si dejás tu email en el formulario de novedades del sitio, lo usamos exclusivamente para
        enviarte novedades de AuraDecant. <Pending>a completar: mecanismo para darte de baja cuando el envío de novedades esté activo</Pending>.
      </p>
      <p className="edu-prose-article">
        Cuando nos escribís por WhatsApp para coordinar una compra, nos das tu número de teléfono,
        nombre y dirección de envío. Usamos esos datos únicamente para gestionar tu pedido — esa
        conversación ocurre en WhatsApp, así que también está sujeta a la política de privacidad
        de WhatsApp/Meta.
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Analítica del sitio</h2>
      <p className="edu-prose-article">
        Usamos Vercel Analytics para medir visitas de forma agregada y anónima (qué páginas se
        visitan, por ejemplo). No usamos cookies de seguimiento publicitario ni píxeles de
        terceros.
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Con quién compartimos tus datos</h2>
      <p className="edu-prose-article">
        No vendemos ni cedemos tus datos a terceros. Sólo compartimos los datos de envío
        estrictamente necesarios (nombre, dirección) con la empresa de logística que gestiona la
        entrega de tu pedido.
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Pagos</h2>
      <p className="edu-prose-article">
        No procesamos ni almacenamos datos de pago en el sitio: el medio de pago se coordina
        directamente por WhatsApp al confirmar tu pedido.
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Tus derechos</h2>
      <p className="edu-prose-article">
        Podés pedirnos en cualquier momento que te mostremos, corrijamos o eliminemos los datos que
        tenemos sobre vos, escribiéndonos por WhatsApp.
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Cambios a esta política</h2>
      <p className="edu-prose-article">
        Podemos actualizar esta política en cualquier momento. La versión vigente es siempre la
        publicada en esta página.
      </p>

      <h2 className="font-serif text-xl font-semibold text-[#f4d58d] mt-4">Responsable de los datos</h2>
      <p className="edu-prose-article">
        AuraDecant. Razón social y CUIT: <Pending>a completar cuando el negocio esté formalizado</Pending>.
      </p>
    </LegalPageShell>
  )
}
