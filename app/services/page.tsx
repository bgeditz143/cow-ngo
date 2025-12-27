"use client"

import { servicesData } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive care and support services dedicated to the welfare and protection of cows in need.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {servicesData.map((service) => (
              <Card
                key={service.id}
                className="bg-card border-border overflow-hidden group relative h-[320px] cursor-pointer transition-all duration-300 hover:shadow-2xl"
              >
                {/* Default State */}
                <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center transition-opacity duration-300 group-hover:opacity-0">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>

                {/* Hover State with Background Image */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                  <div className="relative h-full flex flex-col items-center justify-center text-center p-6 text-white">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-sm mb-4 leading-relaxed">{service.shortDescription}</p>
                    <Link href={`/services/${service.slug}`}>
                      <Button
                        size="sm"
                        className="gradient-orange text-white hover:opacity-90 transition-opacity rounded-full"
                      >
                        Learn More
                        <ArrowRight className="ml-1" size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How We Help</h2>

            <div className="space-y-8">
              {/* Cow Rescue */}
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="text-2xl font-semibold mb-4">Cow Rescue Operations</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our 24/7 rescue team responds to distress calls across the region, providing immediate assistance to
                  injured, abandoned, or distressed cows.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Emergency response within 2 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Trained rescue personnel and proper equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Transportation to our medical facilities</span>
                  </li>
                </ul>
              </div>

              {/* Medical Care */}
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="text-2xl font-semibold mb-4">Veterinary & Medical Care</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our fully equipped veterinary hospital provides comprehensive medical care with experienced
                  veterinarians available around the clock.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Regular health check-ups and vaccinations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Surgical facilities for emergency operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Rehabilitation programs for injured cows</span>
                  </li>
                </ul>
              </div>

              {/* Shelter & Feeding */}
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="text-2xl font-semibold mb-4">Shelter & Feeding Programs</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our modern shelters provide safe, clean, and comfortable living spaces with nutritious food and fresh
                  water for all residents.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Spacious covered shelters with proper ventilation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Nutritious diet tailored to individual needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Clean water supply and regular grooming</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
