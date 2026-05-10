import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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

export const metadata: Metadata = {
  title: 'Aromatch by Auradecant.ar | Decants de Perfumes Nicho de Lujo',
  description: 'Descubre tu fragancia perfecta con Aromatch. Decants premium de perfumes arabes y nicho a precios accesibles. Encuentra tu aroma distintivo hoy.',
  keywords: 'decants de perfume, perfumes nicho, perfumes arabes, fragancias de lujo, muestras de perfume, perfume oud, aroma distintivo',
  generator: 'Auradecant.ar',
  openGraph: {
    title: 'Aromatch - Encuentra Tu Match Olfativo',
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
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#000000] text-white min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
