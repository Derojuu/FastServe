import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FastServe Cybercafé - Printing, Fees & More",
  description:
    "Fast. Affordable. Reliable — Your School Cybercafé. Printing, fee payments, uploads and more — quick service for busy students.",
  generator: "v0.app",
  openGraph: {
    title: "FastServe Cybercafé - Printing, Fees & More",
    description: "Fast. Affordable. Reliable — Your School Cybercafé",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
