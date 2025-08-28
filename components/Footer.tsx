import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-[#222222] text-white">
      <div className="container grid gap-10 md:grid-cols-4 py-14">
        <div>
          <div className="font-bold text-lg">MENA Resource</div>
          <p className="mt-3 text-sm text-white max-w-xs">
            Benefiting from our global trade expertise, we handle supply of food, agricultural and solid mineral products.
          </p>
        </div>
        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-3 space-y-2 text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
            <li><Link href="/lithium-ore-supply">Lithium Ore Supply</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Services</div>
          <ul className="mt-3 space-y-2 text-white">
            <li><Link href="/consulting/export-investors">Export investors</Link></li>
            <li><Link href="/consulting/brokerage-program">Brokerage Program</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Get in touch</div>
          <ul className="mt-3 space-y-2 text-white">
            <li><a href="mailto:sales@menaresource.com" className="underline">sales@menaresource.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-6 text-center text-sm text-white">
        © 2025. Mohammad Zaker
      </div>
    </footer>
  )
}
