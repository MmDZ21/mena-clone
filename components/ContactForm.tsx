import { sendMessage } from "@/app/actions/sendMessage";

export function ContactForm() {
  return (
    <section className="section flex flex-col items-center relative bg-[url('/images/bg-form.svg')] bg-cover bg-no-repeat bg-center">
      <div className="max-w-2xl space-y-8">
        <div className="relative text-center px-8">
          <h2 className="section-title text-white">
            We are ready to handle your request
          </h2>
          <p className="mt-3 text-base md:text-lg leading-relaxed text-white">
            Enter your details and we will be in touch to discuss your project.
          </p>
        </div>
        <form className="space-y-4">
          <div className="flex flex-col gap-4">
            <div className=" space-y-2">
              <input
                name="name"
                required
                className="mt-1 w-full rounded-2xl border px-4 py-3"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-2xl border px-4 py-3"
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <input
              name="subject"
              required
              className="mt-1 w-full rounded-2xl border px-4 py-3"
              placeholder="Subject"
            />
          </div>
          <div>
            <textarea
              name="message"
              rows={6}
              required
              className="mt-1 w-full rounded-2xl border px-4 py-3"
              placeholder="Message"
            />
          </div>
          <button className="btn btn-primary w-full text-center justify-center" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
