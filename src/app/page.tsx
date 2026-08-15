import Navigation from '@/components/navigation'
import { NAV_HEIGHT } from '@/lib/layout'
import HeroSection from '@/components/hero-section'
import AroMatchApp from '@/components/aromatch-app'
import EducationSection from '@/components/education-section'
import ProductsSection from '@/components/products-section'
import FooterSection from '@/components/footer-section'

export default function Home() {
  return (
    // El nav es fixed, así que no ocupa lugar en el flujo: sin este padding el
    // contenido arranca en y=0 y queda por debajo del header.
    <main className="min-h-screen" style={{ paddingTop: `${NAV_HEIGHT}px` }}>
      <Navigation />
      <HeroSection />
      <AroMatchApp />
      <EducationSection />
      <ProductsSection />
      <FooterSection />
    </main>
  )
}
