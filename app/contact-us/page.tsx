import { ContactForm } from "@/components/ContactForm"
import { contactPage } from "@/content/pages"

export default function Page() {
  return (
    <div className="section">
      <div className="container grid gap-10 md:grid-cols-2">
        <div>
          <h1 className="section-title">{contactPage.title}</h1>
          <p className="section-subtitle">{contactPage.subtitle}</p>
          <div className="mt-6 text-sm text-gray-600">
            Email: <a className="underline" href="mailto:sales@menaresource.com">sales@menaresource.com</a>
          </div>
        </div>
        <div className="card">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
