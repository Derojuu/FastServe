"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="order-2 lg:order-1">
            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-4 sm:mb-6 text-balance leading-tight"
            >
              Fast. Affordable. Reliable.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-background/90 mb-6 sm:mb-8 max-w-2xl text-balance leading-relaxed"
            >
              Your School Cybercafé - Printing, fee payments, uploads and more - quick service for busy students.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
              <Link
                href="/services"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-accent text-primary rounded-lg font-semibold hover:bg-accent/90 transition-smooth flex items-center justify-center gap-2 group shadow-lg text-sm sm:text-base"
              >
                View Services
                <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/2348012345678?text=Hello%20FastServe%2C%20I%20want%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-smooth shadow-lg text-center text-sm sm:text-base"
              >
                Contact Owner
              </a>
            </motion.div>

            {/* Trust Badge */}
            <motion.div variants={itemVariants} className="mt-8 sm:mt-12 flex items-center gap-3 text-background/80 text-xs sm:text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent border-2 border-primary flex items-center justify-center text-xs font-bold text-primary"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span>Trusted by 500+ students</span>
            </motion.div>
          </motion.div>

          {/* Right Image - Now visible on all devices */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <img
              src="/modern-cybercafe-with-computers-and-printing-servi.jpg"
              alt="Cybercafé services"
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
