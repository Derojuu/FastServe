"use client"

import { motion } from "framer-motion"
import { Zap, DollarSign, Clock, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get your documents printed and services completed in minutes, not hours.",
    image: "/fast-printing-service.jpg",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates designed for students. No hidden fees, transparent pricing.",
    image: "/affordable-pricing-money.jpg",
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description: "Open early, close late. We work around your academic schedule.",
    image: "/24-hour-service-clock.jpg",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your documents and data are handled with care and professionalism.",
    image: "/secure-data-protection.jpg",
  },
]

export default function Features() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">Why Choose FastServe?</h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            We're committed to making your academic life easier with reliable, affordable services.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-smooth group border border-secondary/20"
              >
                <div className="h-40 overflow-hidden bg-secondary/10">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
