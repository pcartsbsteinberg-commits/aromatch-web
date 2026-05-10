import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AroMatchApp from '@/components/aromatch-app'
import EducationSection from '@/components/education-section'
import ProductsSection from '@/components/products-section'
import DecantShowcase from '@/components/decant-showcase'
import FooterSection from '@/components/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AroMatchApp />
      <EducationSection />
      <ProductsSection />
      <DecantShowcase />
      <FooterSection />
    </main>
  )
}
