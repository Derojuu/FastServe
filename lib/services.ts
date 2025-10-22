import { Printer, CreditCard, Upload, Scan, Badge, type LucideIcon } from "lucide-react"

export interface Service {
  id: string
  title: string
  description: string
  priceRange: string
  whatsappMessage: string
  icon: LucideIcon
}

export const SERVICES: Service[] = [
  {
    id: "print",
    title: "Print Documents",
    description: "Black & white or color printing, A4/A3, single/double-sided.",
    priceRange: "₦10–₦50 per page",
    whatsappMessage:
      "Hello, I want to print a document (A4, double-sided). Please let me know price and pickup time. — {name}",
    icon: Printer,
  },
  {
    id: "payfees",
    title: "Pay School Fees",
    description: "Assistance with fee payments and payment confirmation receipts.",
    priceRange: "Varies",
    whatsappMessage:
      "Hello, I want to pay school fees for [Student Name / Reg No]. Please send payment instructions. — {name}",
    icon: CreditCard,
  },
  {
    id: "upload",
    title: "Upload Assignments",
    description: "We'll upload your assignment to the portal and confirm submission.",
    priceRange: "₦200–₦500",
    whatsappMessage: "Hello, I need help uploading my assignment to the school portal. Course: [Course Name]. — {name}",
    icon: Upload,
  },
  {
    id: "scan",
    title: "Scan Documents",
    description: "High-quality scanning to PDF and emailing / USB delivery.",
    priceRange: "₦50–₦200 per page",
    whatsappMessage: "Hello, I need to scan and email some documents (approx. X pages). Please advise cost. — {name}",
    icon: Scan,
  },
  {
    id: "laminate",
    title: "Lamination / ID Printing",
    description: "ID printing, lamination, and badge cutting.",
    priceRange: "₦500–₦2000",
    whatsappMessage: "Hello, I want to print/laminate an ID card. Please advise price and turnaround time. — {name}",
    icon: Badge,
  },
  {
    id: "other",
    title: "Other Services",
    description: "Binding, photocopying, and custom printing requests.",
    priceRange: "Contact for quote",
    whatsappMessage: "Hello, I have a custom request. Could you help me with [describe your need]? — {name}",
    icon: Printer,
  },
]
