import type { BasicPage, LithiumPage, Service } from "./types"

export const aboutPage: BasicPage = {
  title: "About Us",
  paragraphs: [
    "We are a commodities trading and consulting company based in Dubai, UAE, facilitating global trade across agriculture and solid minerals.",
    "Our differentiator is hands-on export experience combined with rigorous due diligence, enabling safe transactions and long-term partnerships.",
  ],
}

export const contactPage = {
  title: "Contact Us",
  subtitle: "Have any questions? Feel free to reach out to our team.",
}

export const lithiumPage: LithiumPage = {
  title: "Lithium Ore Supply",
  description: "We supply high-grade lithium ore with consistent specs and transparent documentation.",
  bullets: [
    "Quality control and assay verification",
    "Secure logistics from mine to port",
    "Incoterms tailored to buyer needs",
  ],
}

export const services: Service[] = [
  { href: "/consulting/world-class-export-consulting-service", title: "World-Class Export Consulting", summary: "Experience comprehensive support from inception to shipment and post-trade." },
  { href: "/consulting/feasibility-study-report-service", title: "Feasibility Study & Report Service", summary: "We prepare feasibility and financial models to de-risk your trade." },
  { href: "/consulting/trade-licence-registration-service", title: "Trade Licence Registration Service", summary: "Fast-track your trade licence registration and compliance." },
  { href: "/consulting/due-diligence-checks", title: "Due Diligence Checks", summary: "Know your counterparties with robust KYC and due diligence checks." },
  { href: "/consulting/export-investors", title: "Export Investors", summary: "Participate in export financing with structured returns and risk controls." },
  { href: "/consulting/brokerage-program", title: "Brokerage Program", summary: "Refer buyers and earn commissions on successful transactions." },
]


