import { services } from "@/content/pages"

export default function Page() {
  const svc = services.find(s => s.href.endsWith("trade-licence-registration-service"))
  return (
    <div className="section">
      <div className="container prose">
        <h1>{svc?.title ?? "Trade Licence Registration Service"}</h1>
        <p>{svc?.summary ?? "Fast-track your trade licence registration and compliance."}</p>
      </div>
    </div>
  )
}
