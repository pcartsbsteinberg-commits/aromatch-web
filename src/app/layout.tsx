import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { perfumes } from '@/lib/perfumes'
import { SITE_INDEXABLE, SITE_URL } from '@/lib/site'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Interruptor único en src/lib/site.ts — hoy en `noindex` a propósito.
  robots: SITE_INDEXABLE
    ? { index: true, follow: true }
    : { index: false, follow: false },
  title: 'AroMatch | Perfumes Árabes y de Nicho Originales',
  description: 'Descubrí el lujo árabe en perfumes 100% originales y sellados, con Batch Code garantizado. Encontrá tu fragancia ideal con nuestro AroMatch Quiz.',
  keywords: 'perfumes árabes originales, fragancias nicho argentina, Lattafa argentina, perfumes de lujo',
  generator: 'Auradecant.ar',
  openGraph: {
    title: 'AroMatch - Encuentra Tu Match Olfativo',
    description: 'Perfumes árabes y de nicho 100% originales. Experimenta fragancias de lujo a precios accesibles.',
    type: 'website',
  },
  // El favicon se detecta automáticamente desde src/app/favicon.ico
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AroMatch",
    "url": SITE_URL,
    "logo": `${SITE_URL}/favicon.ico`
  };

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Colección de Perfumes Originales",
    "itemListElement": perfumes.map((perfume, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": perfume.name,
        "brand": {
          "@type": "Brand",
          "name": perfume.brand
        },
        "description": perfume.description,
        "category": "Perfume",
        "image": `${SITE_URL}${perfume.image}`
      }
    }))
  };

  return (
    <html lang="es" className={`${cormorant.variable} ${manrope.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
        />
      </head>
      <body className="font-sans antialiased text-white min-h-screen">
        {/* ── Global Background Video ─────────────────────────────────────────── */}
        <video
          src="/videos/fondoaura.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-20"
        />
        {/* ── Radial Spotlight Overlay (gold centre → pure black edges) ─────── */}
        <div
          className="fixed inset-0 -z-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 90% 70% at 50% 30%, rgba(212,175,55,0.10) 0%, rgba(10,10,10,0.75) 55%, rgba(0,0,0,0.97) 100%)',
          }}
        />
        {/* ── Organic ambience blooms — warm amber + a whisper of niche violet ── */}
        <div
          className="fixed inset-0 -z-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(420px 420px at 16% 14%, rgba(194,112,42,0.16) 0%, transparent 68%),' +
              'radial-gradient(460px 460px at 88% 82%, rgba(90,58,134,0.16) 0%, transparent 68%)',
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
