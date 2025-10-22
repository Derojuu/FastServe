"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FS</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">FastServe</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`transition-smooth ${
                isActive("/") ? "text-accent font-semibold" : "text-foreground hover:text-accent"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`transition-smooth ${
                isActive("/services") ? "text-accent font-semibold" : "text-foreground hover:text-accent"
              }`}
            >
              Services
            </Link>
            <a
              href="https://wa.me/2348012345678?text=Hello%20FastServe%2C%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-light transition-smooth font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-card rounded-lg transition-smooth"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-border"
          >
            <Link
              href="/"
              className="block px-4 py-2 text-foreground hover:text-accent transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 text-foreground hover:text-accent transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <a
              href="https://wa.me/2348012345678?text=Hello%20FastServe%2C%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-2 px-4 py-2 bg-accent text-white rounded-lg text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
