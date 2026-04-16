"use client";

import { useState, type FormEvent } from "react";

export default function KitOptInForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;

    try {
      const res = await fetch(
        "https://app.kit.com/forms/9328458/subscriptions",
        {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg bg-cream border border-gold/40 px-6 py-8 text-center">
        <p className="font-serif text-xl font-semibold text-navy mb-2">
          You&apos;re in!
        </p>
        <p className="text-navy/75 leading-relaxed">
          Check your inbox &mdash; the Pattern Card is on its way.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="first_name"
          className="block text-sm font-medium text-navy mb-1"
        >
          First Name
        </label>
        <input
          type="text"
          id="first_name"
          name="fields[first_name]"
          required
          className="w-full rounded-lg border border-navy/15 bg-cream px-4 py-2.5 text-navy placeholder:text-navy/40 contact-input transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="email_address"
          className="block text-sm font-medium text-navy mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email_address"
          name="email_address"
          required
          className="w-full rounded-lg border border-navy/15 bg-cream px-4 py-2.5 text-navy placeholder:text-navy/40 contact-input transition-colors"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-gold px-8 py-3 text-base font-medium text-navy hover:bg-navy hover:text-cream transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting"
          ? "Sending\u2026"
          : "Send me the Pattern Card \u2192"}
      </button>

      <p className="text-center text-sm text-navy/50">
        No spam, ever. Unsubscribe anytime.
      </p>
    </form>
  );
}
