import { services } from "@/content/pages"

export default function Page() {
  const svc = services.find(s => s.href.endsWith("feasibility-study-report-service"))
  return (
    <div className="section">
      <div className="container prose">
        <h1>{svc?.title ?? "Feasibility Study Report Service"}</h1>
        <p>{svc?.summary ?? "We prepare feasibility and financial models to de-risk your trade."}</p>
      </div>
    </div>
  )
}
