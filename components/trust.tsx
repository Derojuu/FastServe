"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone } from "lucide-react"

export default function Trust() {
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
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">Find Us & Get in Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md border border-secondary/20 text-center"
          >
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Location</h3>
            <p className="text-primary/70 leading-relaxed">
              School Campus
              <br />
              Building A, Room 12
              <br />
              Lagos, Nigeria
            </p>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md border border-secondary/20 text-center"
          >
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Hours</h3>
            <p className="text-primary/70 leading-relaxed">
              Mon - Fri: 7am - 6pm
              <br />
              Sat: 9am - 4pm
              <br />
              Sun: Closed
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md border border-secondary/20 text-center"
          >
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Contact</h3>
            <p className="text-primary/70 leading-relaxed">
              <a href="tel:+2348012345678" className="hover:text-accent transition-smooth font-medium">
                +234 801 234 5678
              </a>
              <br />
              <a href="mailto:info@fastserve.com" className="hover:text-accent transition-smooth font-medium">
                info@fastserve.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
