import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Shield, Users } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">About Cow Seva NGO</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over a decade, we have been dedicated to the protection and welfare of our sacred cows. Our mission is
            rooted in compassion, tradition, and the belief that every life deserves care and dignity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Mission */}
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-orange text-white mb-4">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To rescue, rehabilitate, and provide lifelong care to abandoned and injured cows across India.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-orange text-white mb-4">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              A world where every cow lives with dignity, free from suffering and neglect.
            </p>
          </div>

          {/* Values */}
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-orange text-white mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
            <p className="text-muted-foreground leading-relaxed">
              Compassion, dedication, transparency, and respect for all living beings guide our every action.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/about">
            <Button variant="outline" size="lg" className="rounded-full bg-transparent">
              Read More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
