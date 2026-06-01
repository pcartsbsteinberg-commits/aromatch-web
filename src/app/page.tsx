import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AroMatchApp from '@/components/aromatch-app'
import EducationSection from '@/components/education-section'
import ProductsSection from '@/components/products-section'
import FooterSection from '@/components/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AroMatchApp />
      <EducationSection />
      <ProductsSection />
      <FooterSection />
    </main>
  )
}
