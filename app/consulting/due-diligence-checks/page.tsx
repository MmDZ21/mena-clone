import { services } from "@/content/pages"

export default function Page() {
  const svc = services.find(s => s.href.endsWith("due-diligence-checks"))
  return (
    <div className="section">
      <div className="container prose">
        <h1>{svc?.title ?? "Due Diligence Checks"}</h1>
        <p>{svc?.summary ?? "Know your counterparties with robust KYC and due diligence checks."}</p>
      </div>
    </div>
  )
}
