import { services } from "@/content/pages"

export default function Page() {
  const svc = services.find(s => s.href.endsWith("world-class-export-consulting-service"))
  return (
    <div className="section">
      <div className="container prose">
        <h1>{svc?.title ?? "World Class Export Consulting Service"}</h1>
        <p>{svc?.summary ?? "Experience comprehensive support from inception to shipment and post-trade."}</p>
      </div>
    </div>
  )
}
