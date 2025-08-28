import { services } from "@/content/pages"

export default function Page() {
  const svc = services.find(s => s.href.endsWith("brokerage-program"))
  return (
    <div className="section">
      <div className="container prose">
        <h1>{svc?.title ?? "Brokerage Program"}</h1>
        <p>{svc?.summary ?? "Refer buyers and earn commissions on successful transactions."}</p>
      </div>
    </div>
  )
}
