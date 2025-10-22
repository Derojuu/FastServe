"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import ServiceCard from "@/components/service-card"
import Footer from "@/components/footer"
import { SERVICES } from "@/lib/services"

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">Our Services</h1>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto leading-relaxed">
              Everything you need for your academic and printing needs — all in one place.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
