import Navigation from '@/components/navigation'
import FooterSection from '@/components/footer-section'
import { NAV_HEIGHT } from '@/lib/layout'

/**
 * Chrome compartido por /aprende y /aprende/[slug].
 *
 * El nav es fixed, así que el padding-top evita que el contenido arranque por
 * debajo del header, igual que en la home.
 */
export default function AprendeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#0a0a0a]" style={{ paddingTop: `${NAV_HEIGHT}px` }}>
      <Navigation />
      {children}
      <FooterSection />
    </main>
  )
}
