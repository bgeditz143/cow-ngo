import { blogPosts } from "@/lib/data"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <main>
      {/* Back Button */}
      <section className="py-6 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="outline" size="sm" className="rounded-full bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[400px] overflow-hidden">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">{post.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-border text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-secondary rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Support Our Cause</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                Your contribution helps us rescue and care for more cows in need. Join us in making a difference.
              </p>
              <Link href="/donate">
                <Button
                  size="lg"
                  className="gradient-orange text-white hover:opacity-90 transition-opacity rounded-full"
                >
                  Donate Now
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
