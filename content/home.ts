import type {
  Slide,
  Stat,
  CommitmentSection,
  LithiumSection,
  CoopCard,
  ContactTile,
  Parallax,
} from "./types"

export const heroSlides: Slide[] = [
  {
    image: "/hero/slide-1.jpg",
    headline: "Benefiting from our global trade expertise",
    sub: "We handle the supply of food, agricultural products and solid mineral products with safe procedures and long-term contracts.",
    primaryHref: "/lithium-ore-supply",
    secondaryHref: "/contact-us",
  },
  {
    image: "/hero/slide-2.jpg",
    headline: "Safe procedures, reliable delivery",
    sub: "Documentation, QC, and logistics designed for long-term partnerships.",
    primaryHref: "/lithium-ore-supply",
    secondaryHref: "/contact-us",
  },
  {
    image: "/hero/slide-3.jpg",
    headline: "From inquiry to shipment",
    sub: "End-to-end support across the export lifecycle.",
    primaryHref: "/consulting/export-investors",
    secondaryHref: "/consulting/brokerage-program",
  },
]

export const stats: Stat[] = [
  { key: "Team Members", value: "10+" },
  { key: "Years of Experience", value: "7+" },
  { key: "Products", value: "12+" },
  { key: "Locations", value: "1" },
]

export const commitment: CommitmentSection = {
  eyebrow: "About",
  title: "Our Commitment",
  description:
    "Benefiting from our global trade expertise, we proficiently handle the supply of food, agricultural products and solid mineral products. Our focus is on ensuring safe transaction procedures and securing long-term contracts at the required quantity and price, guaranteeing optimal quality and value for our clients.",
  image: "/images/about.jpg",
}

export const lithium: LithiumSection = {
  title: "Lithium Ore Delivered around the world",
  description:
    "Embark on a journey of excellence with our premier exports of high-grade lithium ore products. We take immense pride in delivering unparalleled quality to our esteemed global clientele. Just as the most valuable ores undergo meticulous refinement, our dedication to ensuring top-tier quality sets us apart.",
  cta: { label: "Learn More", href: "/lithium-ore-supply", variant: "outline" },
  image: "/images/world-map.png",
}

export const coopCards: CoopCard[] = [
  {
    title: "Fund An Export And Earn Up To 8-15% Profit",
    description:
      "Seize the opportunity to fuel international trade by funding strategic export initiatives. By participating in our program, you gain the chance to earn impressive returns of up to 8-15% profit on your investment. Join us in driving economic growth while securing your own financial success. Your partnership in global trade awaits.",
    cta: { label: "Learn More", href: "/consulting/export-investors", variant: "outline" },
    color: "brand",
  },
  {
    title: "Broker An Export And Earn A 2-5% Commission",
    description:
      "Empower your financial future by becoming an integral part of our export brokerage network. With a seamless process designed to maximize efficiency, you can now earn an attractive 2-5% commission on every successful export deal you facilitate. Join us in connecting global markets, driving trade growth, and reaping the rewards of collaboration. Your success story begins here.",
    cta: { label: "Learn More", href: "/consulting/brokerage-program", variant: "outline" },
    color: "red",
  },
]

export const contactTiles: ContactTile[] = [
  { icon: "Globe", title: "About us", desc: "Find out out more about our unrelenting desire to serve your interests. " },
  { icon: "LucidePhoneCall", title: "Contact us", desc: "Have any questions? Feel free to reach out to our team " },
  { icon: "Cog", title: "Global Trade Education ", desc: "We publish articles to help buyers and sellers learn more about global trade. " },
]

export const parallax: Parallax = { image: "/hero/slide-1.jpg" }

export const contactUsBanner = {
  text: "Benefiting from our global trade expertise, we proficiently handle the supply of food, agricultural products and solid mineral products. Our focus is on ensuring safe transaction procedures and securing long-term contracts.",
  primary: { label: "Learn More", href: "/about", variant: "outline" as const },
  secondary: { label: "Contact Us", href: "/contact-us", variant: "primary" as const },
}


