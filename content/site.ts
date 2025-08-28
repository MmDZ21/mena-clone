import type { SiteConfig, DropdownItem, NavLink } from "./types"

export const siteConfig: SiteConfig = {
  name: "MENA Resource",
  url: "https://example.com",
  description: "Corporate export & commodities website clone (layout & UX only).",
  contactEmail: "sales@menaresource.com",
  copyrightName: "Mohammad Zaker",
  tagline: "Global Trade & Commodities",
}

export const primaryNav: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/lithium-ore-supply", label: "Lithium Ore Supply" },
  { href: "/contact-us", label: "Contact Us" },
]

export const consultingMenu: DropdownItem[] = [
  { href: "/consulting/world-class-export-consulting-service", title: "World-Class Export Consulting", desc: "End-to-end support for your export ops." },
  { href: "/consulting/feasibility-study-report-service", title: "Feasibility Study & Report", desc: "Due diligence & financial feasibility." },
  { href: "/consulting/trade-licence-registration-service", title: "Trade Licence Registration", desc: "Get set up and compliant." },
  { href: "/consulting/due-diligence-checks", title: "Due Diligence Checks", desc: "Know your counterparties." },
  { href: "/consulting/export-investors", title: "Export Investors", desc: "Fund export transactions (8–15% target)." },
  { href: "/consulting/brokerage-program", title: "Brokerage Program", desc: "Earn 2–5% commission on deals." },
]


