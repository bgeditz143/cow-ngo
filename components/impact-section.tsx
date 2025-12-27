import { statsData } from "@/lib/data"
import { TrendingUp, Users, Calendar } from "lucide-react"

export function ImpactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Impact</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through dedication and community support, we continue to make a meaningful difference in the lives of cows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cows Rescued */}
          <div className="text-center p-8 bg-secondary rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <TrendingUp size={32} className="text-primary" />
            </div>
            <div className="text-5xl font-bold gradient-text mb-2">{statsData.rescued}+</div>
            <div className="text-lg font-medium text-foreground">Cows Rescued</div>
            <p className="text-sm text-muted-foreground mt-2">Successfully rescued and rehabilitated across India</p>
          </div>

          {/* Volunteers */}
          <div className="text-center p-8 bg-secondary rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <Users size={32} className="text-accent" />
            </div>
            <div className="text-5xl font-bold gradient-text mb-2">{statsData.volunteers}+</div>
            <div className="text-lg font-medium text-foreground">Active Volunteers</div>
            <p className="text-sm text-muted-foreground mt-2">Dedicated individuals supporting our mission</p>
          </div>

          {/* Years of Service */}
          <div className="text-center p-8 bg-secondary rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Calendar size={32} className="text-primary" />
            </div>
            <div className="text-5xl font-bold gradient-text mb-2">{statsData.years}+</div>
            <div className="text-lg font-medium text-foreground">Years of Service</div>
            <p className="text-sm text-muted-foreground mt-2">A decade of compassionate cow protection</p>
          </div>
        </div>
      </div>
    </section>
  )
}
