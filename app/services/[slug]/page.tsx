import { servicesData } from "@/lib/data"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowLeft } from "lucide-react"
import Link from "next/link"

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-8">
            <Link href="/services">
              <Button variant="outline" className="rounded-full gap-2 bg-transparent">
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{service.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Service Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left: Description */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">About This Service</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{service.detailedDescription}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                  <img
                    src="/volunteers-feeding-cows.jpg"
                    alt="Service detail 1"
                    className="rounded-2xl h-64 object-cover shadow-lg"
                  />
                  <img
                    src="/cows-grazing-in-green-field.jpg"
                    alt="Service detail 2"
                    className="rounded-2xl h-64 object-cover shadow-lg"
                  />
                </div>
              </div>

              {/* Right: Features Card */}
              <div>
                <Card className="bg-card border-border sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1 rounded-full bg-green-100 p-1">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-6 border-t border-border space-y-3">
                      <Link href="/donate">
                        <Button className="w-full gradient-orange text-white hover:opacity-90 transition-opacity rounded-full">
                          Support This Service
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="w-full rounded-full bg-transparent">
                          Get More Information
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Help Us Continue This Service</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Your support enables us to provide better care and expand our services to help more cows in need.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/donate">
                <Button
                  size="lg"
                  className="gradient-orange text-white hover:opacity-90 transition-opacity rounded-full shadow-lg"
                >
                  Make a Donation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
