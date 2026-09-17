import MountainParallax from '@/components/ui/mountain-parallax'

export function HeroSection() {
  return (
    <section className="min-h-screen relative bg-background">
      <MountainParallax />
      <div className="absolute inset-0 bg-background/30" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#785650] pointer-events-none" />
    </section>
  )
}
