import { Hero } from "@/components/Hero"
import { FeatureCards } from "@/components/FeatureCards"
import { Stats } from "@/components/Stats"
import Link from "next/link"
import ContactUsBanner from "@/components/ContactUsBanner"
import Coop from "@/components/Coop"
import ParallaxSection from "@/components/ParallaxSection"
import Company from "@/components/Company"
import Contact from "@/components/Contact"
import { ContactForm } from "@/components/ContactForm"


export default function Page() {
  return (
    <>
      <Hero />
      <ContactUsBanner />
      <FeatureCards />
      <Coop />
      <ParallaxSection />
      <Stats />
      <Company/>
      <ParallaxSection />
      <Contact/>
      <ContactForm />
    </>
  )
}
