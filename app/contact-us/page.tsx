import { ContactForm } from "@/components/ContactForm"

export default function Page() {
  return (
    <div className="section">
      <div className="container grid gap-10 md:grid-cols-2">
        <div>
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">Have any questions? Feel free to reach out to our team.</p>
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
