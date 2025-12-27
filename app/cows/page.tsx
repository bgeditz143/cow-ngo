import { cowsData } from "@/lib/data"
import { CowCard } from "@/components/cow-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CowsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Meet Our <span className="gradient-text">Sacred Cows</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each cow in our care has a unique story. Browse through our residents and learn about their journey to
              safety and recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Cows Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cowsData.map((cow) => (
              <CowCard key={cow.id} cow={cow} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Want to Help More?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Your support helps us rescue and care for more cows in need. Make a donation to support our mission.
            </p>
            <Link href="/donate">
              <Button size="lg" className="gradient-orange text-white hover:opacity-90 transition-opacity rounded-full">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
