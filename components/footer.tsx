"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FS</span>
              </div>
              <span className="font-bold text-lg">FastServe</span>
            </div>
            <p className="text-white/70 text-sm">Your trusted school cybercafé for printing, payments, and more.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-accent transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/2348012345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-smooth"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="tel:+2348012345678" className="hover:text-accent transition-smooth">
                  +234 801 234 5678
                </a>
              </li>
              <li>
                <a href="mailto:info@fastserve.com" className="hover:text-accent transition-smooth">
                  info@fastserve.com
                </a>
              </li>
              <li>School Campus, Building A</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© {currentYear} FastServe Cybercafé. All rights reserved.</p>
            <div className="flex items-center gap-1">
              Made with <Heart size={16} className="text-accent" /> for students
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
