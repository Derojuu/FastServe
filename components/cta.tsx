"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-background mb-6 text-balance">Ready to Get Started?</h2>
          <p className="text-lg text-background/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Browse our services and connect with us on WhatsApp for instant support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/services"
              className="px-8 py-4 bg-accent text-primary rounded-lg font-semibold hover:bg-accent/90 transition-smooth flex items-center gap-2 group shadow-lg"
            >
              Explore Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/2348012345678?text=Hello%20FastServe%2C%20I%20want%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-smooth shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
