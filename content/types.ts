export type NavLink = {
  href: string
  label: string
}

export type DropdownItem = {
  href: string
  title: string
  desc?: string
}

export type SiteConfig = {
  name: string
  url: string
  description: string
  contactEmail: string
  copyrightName: string
  tagline: string
}

export type Slide = {
  image: string
  headline: string
  sub: string
  primaryHref?: string
  secondaryHref?: string
}

export type Stat = {
  key: string
  value: string
}

export type CTA = {
  label: string
  href: string
  variant?: "outline" | "primary"
}

export type CommitmentSection = {
  eyebrow: string
  title: string
  description: string
  image: string
}

export type LithiumSection = {
  title: string
  description: string
  cta: CTA
  image: string
}

export type CoopCard = {
  title: string
  description: string
  cta: CTA
  color: "brand" | "red"
}

export type ContactTile = {
  icon: "Globe" | "LucidePhoneCall" | "Cog"
  title: string
  desc: string
}

export type Parallax = {
  image: string
}

export type Service = {
  href: string
  title: string
  summary?: string
}

export type BasicPage = {
  title: string
  paragraphs: string[]
}

export type LithiumPage = {
  title: string
  description: string
  bullets: string[]
}


