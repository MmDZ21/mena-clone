import { lithiumPage } from "@/content/pages"

export default function Page() {
  return (
    <div className="section">
      <div className="container prose">
        <h1>{lithiumPage.title}</h1>
        <p>{lithiumPage.description}</p>
        <ul>
          {lithiumPage.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
