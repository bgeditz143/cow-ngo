import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Cow Seva NGO</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Dedicated to protecting and serving our sacred cows through rescue, medical care, and shelter services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-slate-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-300 hover:text-orange-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-slate-300 hover:text-orange-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-sm text-slate-300 hover:text-orange-400 transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-slate-300 hover:text-orange-400 transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-orange-400" />
                <span>123 Gau Seva Road, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <Phone size={16} className="flex-shrink-0 text-orange-400" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <Mail size={16} className="flex-shrink-0 text-orange-400" />
                <span>info@cowseva.org</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-orange-500/20 hover:bg-orange-500 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-orange-500/20 hover:bg-orange-500 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-orange-500/20 hover:bg-orange-500 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Cow Seva NGO. All rights reserved. Made with ❤️ for our sacred cows.</p>
        </div>
      </div>
    </footer>
  )
}
