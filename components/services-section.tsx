"use client"

import { servicesData } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide comprehensive care and support services for cows in need through our dedicated programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.slice(0, 4).map((service) => (
            <Card
              key={service.id}
              className="bg-card border-border overflow-hidden group relative h-[280px] cursor-pointer transition-all duration-300 hover:shadow-2xl"
            >
              {/* Default State */}
              <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center transition-opacity duration-300 group-hover:opacity-0">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
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
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
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

        <div className="flex justify-center mt-10">
          <Link href="/services">
            <Button size="lg" className="gradient-orange text-white hover:opacity-90 transition-opacity rounded-full">
              View More Services
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
