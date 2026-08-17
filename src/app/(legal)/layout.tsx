import Navigation from '@/components/navigation'
import FooterSection from '@/components/footer-section'
import { NAV_HEIGHT } from '@/lib/layout'

/**
 * Chrome compartido por las páginas legales: /arrepentimiento, /terminos y
 * /privacidad. Mismo patrón que src/app/aprende/layout.tsx.
 */
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#0a0a0a]" style={{ paddingTop: `${NAV_HEIGHT}px` }}>
      <Navigation />
      {children}
      <FooterSection />
    </main>
  )
}
