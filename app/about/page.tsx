import { aboutPage } from "@/content/pages"

export default function Page() {
  return (
    <div className="section">
      <div className="container prose">
        <h1>{aboutPage.title}</h1>
        {aboutPage.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  )
}
