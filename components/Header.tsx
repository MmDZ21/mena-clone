"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { consultingMenu, primaryNav, siteConfig } from "@/content/site"

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">{siteConfig.name}</Link>
        <nav className="hidden md:flex items-center gap-6">
          {primaryNav.filter(n => !["/contact-us"].includes(n.href)).map(n => (
            <Link key={n.href} href={n.href} className="hover:text-brand-700">{n.label}</Link>
          ))}
          <div className="relative">
            <button onClick={() => setOpen(v => !v)} className="inline-flex items-center gap-1 hover:text-brand-700">
              Consulting <ChevronDown size={16}/>
            </button>
            {open && (
              <div onMouseLeave={() => setOpen(false)} className="absolute left-0 mt-3 w-[360px] rounded-2xl border bg-white p-2 shadow-soft">
                {consultingMenu.map(i => (
                  <Link key={i.href} href={i.href} className="block rounded-xl p-3 hover:bg-gray-50">
                    <div className="font-medium">{i.title}</div>
                    <div className="text-xs text-gray-600">{i.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/contact-us" className="hover:text-brand-700">{primaryNav.find(n => n.href === "/contact-us")?.label ?? "Contact Us"}</Link>
        </nav>
        <div className="md:hidden">
          {/* Simple mobile menu placeholder */}
        </div>
      </div>
    </header>
  )
}

