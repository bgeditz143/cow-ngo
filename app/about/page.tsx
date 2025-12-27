import { Heart, Target, Award, Book } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              About <span className="gradient-text">Cow Seva NGO</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dedicated to the protection, care, and welfare of India's sacred cows for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Cow Seva NGO was established in 2014 with a simple yet profound mission: to protect and serve India's
                sacred cows. What began as a small shelter in rural Maharashtra has grown into a comprehensive
                organization dedicated to cow welfare across multiple states.
              </p>
              <p>
                Our organization is built on the foundation of compassion, traditional values, and modern veterinary
                care. We believe that every cow deserves a life of dignity, free from suffering and neglect. Through our
                rescue operations, medical facilities, and shelter programs, we provide comprehensive care to hundreds
                of cows each year.
              </p>
              <p>
                With a team of dedicated veterinarians, caregivers, and volunteers, we work tirelessly to respond to
                distress calls, provide medical treatment, and create safe havens where cows can live peacefully. Our
                work is supported by generous donors and volunteers who share our vision of a compassionate world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-orange text-white mb-4">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To rescue, rehabilitate, and provide lifelong care to abandoned and injured cows, while raising
                  awareness about cow protection in society.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-orange text-white mb-4">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A world where every cow lives with dignity and respect, free from suffering, neglect, and cruelty.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-orange text-white mb-4">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Compassion, integrity, transparency, dedication, and respect for all living beings guide everything we
                  do.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-orange text-white mb-4">
                  <Book size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our History</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Founded in 2014, we've grown from a small shelter to a multi-state organization serving 500+ cows
                  annually.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Importance of Cow Protection */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Importance of Cow Protection in India</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Cultural Significance</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In Indian culture, cows have been revered for thousands of years as sacred beings. They represent
                  purity, non-violence, and motherhood. The cow is considered a symbol of life and sustenance, often
                  referred to as "Gau Mata" or Mother Cow.
                </p>
                <h3 className="text-xl font-semibold mb-3">Environmental Benefits</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cows play a vital role in sustainable agriculture. Their dung is used as organic fertilizer and fuel,
                  while their presence helps maintain ecological balance in rural communities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Economic Value</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Indigenous cow breeds are essential for organic farming and provide valuable products like milk, ghee,
                  and yogurt. Protecting these breeds preserves agricultural heritage and supports rural livelihoods.
                </p>
                <h3 className="text-xl font-semibold mb-3">Ethical Responsibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As sentient beings, cows deserve protection and compassionate care. Our duty extends beyond economic
                  value to recognizing their right to live with dignity and freedom from suffering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
