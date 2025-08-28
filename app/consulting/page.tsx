import Link from "next/link"
import { services } from "@/content/pages"

export default function Page() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Consulting</h1>
        <p className="section-subtitle">Tailored support across the export lifecycle.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map(s => (
            <Link key={s.href} href={s.href} className="card hover:shadow-md transition">
              <div className="font-medium">{s.title}</div>
              <div className="text-sm text-gray-600 mt-2">Click to learn more</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
