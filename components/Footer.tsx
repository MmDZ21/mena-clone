import Link from "next/link"
import { siteConfig, primaryNav, consultingMenu } from "@/content/site"

export function Footer() {
  return (
    <footer className="border-t bg-[#222222] text-white">
      <div className="container grid gap-10 md:grid-cols-4 py-14">
        <div>
          <div className="font-bold text-lg">{siteConfig.name}</div>
          <p className="mt-3 text-sm text-white max-w-xs">
            {siteConfig.description}
          </p>
        </div>
        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-3 space-y-2 text-white">
            {primaryNav.map(n => (
              <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold">Services</div>
          <ul className="mt-3 space-y-2 text-white">
            {consultingMenu.map(s => (
              <li key={s.href}><Link href={s.href}>{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold">Get in touch</div>
          <ul className="mt-3 space-y-2 text-white">
            <li><a href={`mailto:${siteConfig.contactEmail}`} className="underline">{siteConfig.contactEmail}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-6 text-center text-sm text-white">
        © {new Date().getFullYear()}. {siteConfig.copyrightName}
      </div>
    </footer>
  )
}
