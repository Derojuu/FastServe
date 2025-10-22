"use client"

import { motion } from "framer-motion"
import type { Service } from "@/lib/services"
import { MessageCircle } from "lucide-react"

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  const handleWhatsApp = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_OWNER_PHONE || "2348012345678"
    const message = service.whatsappMessage
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-smooth flex flex-col border border-secondary/20"
    >
      <div className="h-48 bg-secondary/10 overflow-hidden">
        <img
          src={`/.jpg?height=300&width=400&query=${service.title} service`}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6 flex flex-col grow">
        {/* Icon */}
        <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
          <Icon size={28} className="text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
        <p className="text-primary/60 text-sm mb-4 grow leading-relaxed">{service.description}</p>

        {/* Price */}
        <div className="mb-6 pb-6 border-b border-secondary/20">
          <p className="text-lg font-bold text-accent">{service.priceRange}</p>
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={handleWhatsApp}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-4 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-smooth flex items-center justify-center gap-2 group shadow-md"
        >
          <MessageCircle size={18} />
          <span>Contact on WhatsApp</span>
        </motion.button>

        {/* Note */}
        <p className="text-xs text-primary/50 mt-3 text-center">Opens WhatsApp with a prefilled message</p>
      </div>
    </motion.div>
  )
}
