import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AromatchApp from '@/components/aromatch-app'
import EducationSection from '@/components/education-section'
import ProductsSection from '@/components/products-section'
import FooterSection from '@/components/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Navigation />
      <HeroSection />
      <AromatchApp />
      <EducationSection />
      <ProductsSection />
      <FooterSection />
    </main>
  )
}
