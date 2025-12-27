"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

const heroImages = [
  "/beautiful-brown-cow-in-shelter.jpg",
  "/white-cow-resting-peacefully.jpg",
  "/young-bull-in-green-pasture.jpg",
  "/sacred-cow-with-calf.jpg",
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-secondary py-20 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Protecting Our <span className="gradient-text">Sacred Cows</span> With Love & Care
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join us in our mission to rescue, protect, and provide shelter to abandoned and injured cows. Every
              contribution makes a difference in their lives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/donate">
                <Button
                  size="lg"
                  className="gradient-orange text-white hover:opacity-90 transition-opacity rounded-full shadow-lg"
                >
                  Donate Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 hover:bg-secondary transition-colors bg-transparent"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image with Slider */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
              {heroImages.map((image, index) => (
                <img
                  key={image}
                  src={image || "/placeholder.svg"}
                  alt={`Cow in shelter ${index + 1}`}
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border z-10">
              <div className="text-3xl font-bold gradient-text">500+</div>
              <div className="text-sm text-muted-foreground">Cows Rescued</div>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage ? "bg-white w-8" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
