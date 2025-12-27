import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const previewImages = [
  { id: 1, image: "/cows-grazing-in-green-field.jpg" },
  { id: 2, image: "/volunteers-feeding-cows.jpg" },
  { id: 3, image: "/veterinarian-treating-cow.jpg" },
  { id: 4, image: "/cow-shelter-with-happy-cows.jpg" },
  { id: 5, image: "/mother-cow-with-calf.jpg" },
  { id: 6, image: "/cow-rescue-team-in-action.jpg" },
]

export function GalleryPreview() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Witness the beautiful journey of rescued cows and our daily seva activities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto mb-8">
          {previewImages.map((item) => (
            <div key={item.id} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src={item.image || "/placeholder.svg"}
                alt={`Gallery preview ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery">
            <Button size="lg" className="gradient-orange text-white hover:opacity-90 transition-opacity rounded-full">
              View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
