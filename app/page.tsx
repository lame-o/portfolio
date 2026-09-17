import { SiteHeader } from '@/components/sections/site-header'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { SiteFooter } from '@/components/sections/site-footer'

export default function Home() {
  return (
    <main className="min-h-screen antialiased">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <SiteFooter />
    </main>
  )
}
