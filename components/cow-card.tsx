import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CowCardProps {
  cow: {
    id: number
    name: string
    age: string
    health: string
    image: string
  }
}

export function CowCard({ cow }: CowCardProps) {
  return (
    <Card className="bg-card hover:shadow-xl transition-all duration-300 border-border overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={cow.image || "/placeholder.svg"}
          alt={cow.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">{cow.name}</CardTitle>
        <CardDescription>
          <div className="flex flex-col gap-1 mt-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Age:</span>
              <span className="text-sm text-muted-foreground">{cow.age}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Health:</span>
              <Badge
                variant={cow.health === "Healthy" ? "default" : "secondary"}
                className={cow.health === "Healthy" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
              >
                {cow.health}
              </Badge>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
