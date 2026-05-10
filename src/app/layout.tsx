import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { perfumes } from '@/lib/perfumes'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
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
  title: 'AroMatch | Decants de Perfumes Árabes y Nicho Originales',
  description: 'Descubrí el lujo árabe en frascos de 5ml y 10ml. Decants 100% originales con Batch Code garantizado. Encontrá tu fragancia ideal con nuestro AroMatch Quiz.',
  keywords: 'decants perfumes árabes, fragancias nicho argentina, Lattafa decants, perfumes fraccionados',
  generator: 'Auradecant.ar',
  openGraph: {
    title: 'AroMatch - Encuentra Tu Match Olfativo',
    description: 'Decants premium de perfumes arabes y nicho. Experimenta fragancias de lujo a precios accesibles.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
    "url": "https://auradecant.ar",
    "logo": "https://auradecant.ar/icon.svg"
  };

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Colección de Perfumes Decant",
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
        "category": "Perfume Decant",
        "image": `https://auradecant.ar${perfume.image}`
      }
    }))
  };

  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable} ${playfair.variable}`}>
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
