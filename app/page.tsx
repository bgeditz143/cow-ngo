import { ContactTicker } from "@/components/contact-ticker"
import { Hero } from "@/components/hero"
import { AboutPreview } from "@/components/about-preview"
import { ServicesSection } from "@/components/services-section"
import { ImpactSection } from "@/components/impact-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GalleryPreview } from "@/components/gallery-preview"

export default function HomePage() {
  return (
    <main>
      <ContactTicker />
      <Hero />
      <AboutPreview />
      <ServicesSection />
      <ImpactSection />
      <TestimonialsSection />
      <GalleryPreview />
    </main>
  )
}
