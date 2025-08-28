'use server'

// This is a stub. Wire up your email/SMS/CRM here.
// Example: use nodemailer with SMTP or a DB insert then notify.
export async function sendMessage(formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  }
  console.log('Contact form submitted:', data)
  // TODO: Replace with real action (email or DB)
  return { ok: true }
}
