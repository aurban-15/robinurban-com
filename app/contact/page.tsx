"use client";

import { useState, type FormEvent } from "react";
import SiteFooter from "../components/site-footer";

const subjects = [
  "General Question",
  "Speaking or Teaching",
  "Church or Group Resources",
  "Media or Press",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-navy py-8 sm:py-10 px-6 text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-xs sm:text-sm mb-3">
            Contact
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-cream max-w-2xl mx-auto mb-3">
            Let&apos;s Connect
          </h1>
          <p className="text-cream/70 text-base max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re a reader with a question, a church leader
            interested in group resources, or a podcast host, Robin would love
            to hear from you.
          </p>
        </section>

        {/* Form */}
        <section className="mx-auto max-w-xl px-6 py-8 sm:py-10">
          {status === "success" ? (
            <div className="text-center py-12">
              <p className="font-serif text-2xl sm:text-3xl font-semibold text-navy mb-4">
                Thank you for reaching out.
              </p>
              <p className="text-navy/70 text-lg leading-relaxed">
                Robin will be in touch soon.
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-navy/15 bg-cream px-4 py-2.5 text-navy placeholder:text-navy/40 contact-input transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-navy/15 bg-cream px-4 py-2.5 text-navy placeholder:text-navy/40 contact-input transition-colors"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-navy/15 bg-cream px-4 py-2.5 text-navy focus:border-gold focus:outline-2 focus:outline-gold/30 transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-lg border border-navy/15 bg-cream px-4 py-2.5 text-navy placeholder:text-navy/40 focus:border-gold focus:outline-2 focus:outline-gold/30 transition-colors resize-y"
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    Something went wrong. Please try again, or email Robin
                    directly.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-full bg-gold px-8 py-3 text-base font-medium text-navy hover:bg-navy hover:text-cream transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending\u2026" : "Send Message"}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-navy/50">
                Robin reads every message personally. Expect a response within
                a few days.
              </p>
            </>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
