"use client"

import { useEffect, useRef } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactTicker() {
  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker) return

    // Clone the content to create seamless loop
    const content = ticker.innerHTML
    ticker.innerHTML = content + content

    let scrollAmount = 0
    const scrollSpeed = 1 // pixels per frame

    const animate = () => {
      scrollAmount += scrollSpeed
      if (scrollAmount >= ticker.scrollWidth / 2) {
        scrollAmount = 0
      }
      ticker.style.transform = `translateX(-${scrollAmount}px)`
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 overflow-hidden">
      <div ref={tickerRef} className="flex items-center gap-8 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span className="font-medium">+91 98765 43210</span>
        </div>
        <span className="text-orange-200">•</span>
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <span className="font-medium">contact@cowseva.org</span>
        </div>
        <span className="text-orange-200">•</span>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span className="font-medium">123 Seva Road, Gau Nagar, Mumbai, Maharashtra 400001</span>
        </div>
        <span className="text-orange-200">•</span>
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span className="font-medium">+91 98765 43210</span>
        </div>
        <span className="text-orange-200">•</span>
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <span className="font-medium">contact@cowseva.org</span>
        </div>
        <span className="text-orange-200">•</span>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span className="font-medium">123 Seva Road, Gau Nagar, Mumbai, Maharashtra 400001</span>
        </div>
      </div>
    </div>
  )
}
