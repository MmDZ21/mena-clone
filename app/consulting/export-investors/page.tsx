import { services } from "@/content/pages"

export default function Page() {
  const svc = services.find(s => s.href.endsWith("export-investors"))
  return (
    <div className="section">
      <div className="container prose">
        <h1>{svc?.title ?? "Export Investors"}</h1>
        <p>{svc?.summary ?? "Participate in export financing with structured returns and risk controls."}</p>
      </div>
    </div>
  )
}
