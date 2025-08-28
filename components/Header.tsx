"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">MENA Resource</Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-brand-700">Home</Link>
          <Link href="/about" className="hover:text-brand-700">About</Link>
          <Link href="/lithium-ore-supply" className="hover:text-brand-700">Lithium Ore Supply</Link>
          <div className="relative">
            <button onClick={() => setOpen(v => !v)} className="inline-flex items-center gap-1 hover:text-brand-700">
              Consulting <ChevronDown size={16}/>
            </button>
            {open && (
              <div onMouseLeave={() => setOpen(false)} className="absolute left-0 mt-3 w-[360px] rounded-2xl border bg-white p-2 shadow-soft">
                {items.map(i => (
                  <Link key={i.href} href={i.href} className="block rounded-xl p-3 hover:bg-gray-50">
                    <div className="font-medium">{i.title}</div>
                    <div className="text-xs text-gray-600">{i.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/contact-us" className="hover:text-brand-700">Contact Us</Link>
        </nav>
        <div className="md:hidden">
          {/* Simple mobile menu placeholder */}
        </div>
      </div>
    </header>
  )
}

const items = [
  { href: "/consulting/world-class-export-consulting-service", title: "World-Class Export Consulting", desc: "End-to-end support for your export ops."},
  { href: "/consulting/feasibility-study-report-service", title: "Feasibility Study & Report", desc: "Due diligence & financial feasibility."},
  { href: "/consulting/trade-licence-registration-service", title: "Trade Licence Registration", desc: "Get set up and compliant."},
  { href: "/consulting/due-diligence-checks", title: "Due Diligence Checks", desc: "Know your counterparties."},
  { href: "/consulting/export-investors", title: "Export Investors", desc: "Fund export transactions (8–15% target)."},
  { href: "/consulting/brokerage-program", title: "Brokerage Program", desc: "Earn 2–5% commission on deals."}
]
