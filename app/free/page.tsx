import type { Metadata } from "next";
import SiteFooter from "../components/site-footer";
import KitOptInForm from "./kit-opt-in-form";

export const metadata: Metadata = {
  title: "Free Pattern Card — Robin Urban",
  description:
    "Download the free Pattern Card: Hear, Believe, Speak, Receive. The four-step pattern at the heart of Bridging the Gap.",
};

const steps = [
  { num: 1, label: "Hear", ref: "Romans 10:17" },
  { num: 2, label: "Believe", ref: "Galatians 3:2" },
  { num: 3, label: "Speak", ref: "2 Corinthians 4:13" },
  { num: 4, label: "Receive", ref: "2 Peter 1:3" },
];

export default function FreeResourcePage() {
  return (
    <>
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-navy py-16 sm:py-20 px-6 text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-xs sm:text-sm mb-4">
            Free Resource
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold leading-tight text-cream max-w-2xl mx-auto mb-6">
            Get &ldquo;The Pattern That Changes Everything&rdquo; — free
          </h1>
          <p className="text-cream/70 text-lg max-w-xl mx-auto leading-relaxed">
            A free reference card that walks you through the four-step
            pattern at the heart of{" "}
            <em>Bridging the Gap</em> — Hear, Believe, Speak, Receive.
          </p>
        </section>

        {/* Card Preview + Form */}
        <section className="max-w-6xl mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
          {/* Left — Card Preview */}
          <div className="relative">
            {/* Shadow card behind */}
            <div className="absolute top-5 left-5 right-0 bg-navy/60 rounded-2xl h-full rotate-2" />
            {/* Main card */}
            <div className="relative bg-navy rounded-2xl p-10 sm:p-12 shadow-2xl">
              <p className="text-gold text-xs tracking-widest uppercase mb-5">
                Bridging the Gap
              </p>
              <h2 className="text-cream font-serif text-3xl sm:text-4xl font-semibold leading-tight mb-3">
                The Pattern That
                <br />
                Changes Everything
              </h2>
              <p className="text-cream/65 text-sm mb-8 leading-relaxed">
                How the Christian life was designed to work — not through
                striving, but through receiving.
              </p>
              <div className="border-t border-gold/20 pt-6 space-y-5">
                {steps.map(({ num, label, ref }) => (
                  <div key={num} className="flex items-center gap-4">
                    <div className="w-9 h-9 min-w-[36px] rounded-full border border-gold flex items-center justify-center text-gold text-sm font-serif">
                      {num}
                    </div>
                    <div>
                      <span className="text-cream text-base font-semibold font-serif">
                        {label}
                      </span>
                      <span className="text-cream/65 text-sm ml-2 italic">
                        — {ref}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gold/20 mt-6 pt-5">
                <p className="text-gold text-sm italic text-center">
                  This isn&apos;t a formula. It&apos;s how grace actually
                  operates.
                </p>
              </div>
              <div className="flex justify-between mt-5">
                <span className="text-gold/50 text-xs">
                  robinurban.com
                </span>
              </div>
            </div>
          </div>

          {/* Right — Opt-in */}
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-navy mb-4">
              Get the free guide
            </h2>
            <p className="text-navy/80 text-base leading-relaxed mb-3">
              Enter your email and I&apos;ll send it straight to your inbox.
              Print it, save it, keep it somewhere you&apos;ll actually see
              it.
            </p>
            <p className="text-navy/80 text-base leading-relaxed mb-8">
              No spam. Just the card, and occasional notes from me when I
              have something worth sharing.
            </p>

            <KitOptInForm />
          </div>
        </section>

        {/* What's on the card */}
        <section className="bg-navy py-16 sm:py-20 px-6 text-center">
          <h2 className="text-cream font-serif text-2xl sm:text-3xl font-semibold mb-4">
            What&apos;s on the card
          </h2>
          <p className="text-cream/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Both sides fit in your hand. The content is designed to stay
            with you.
          </p>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-cream/5 rounded-xl p-6 border border-gold/20">
              <p className="text-gold font-medium tracking-widest uppercase text-xs mb-3">
                Front
              </p>
              <h3 className="text-cream font-serif text-lg font-semibold mb-2">
                The four-step pattern
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed">
                Each step with its Scripture anchor and a brief explanation
                of what it actually means — and why it works.
              </p>
            </div>
            <div className="bg-cream/5 rounded-xl p-6 border border-gold/20">
              <p className="text-gold font-medium tracking-widest uppercase text-xs mb-3">
                Back
              </p>
              <h3 className="text-cream font-serif text-lg font-semibold mb-2">
                How to use it + a worked example
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed">
                A real-life example walking through anxiety — so you can see
                exactly how to apply Hear, Believe, Speak, Receive to your
                own situation.
              </p>
            </div>
          </div>
        </section>

        {/* Book CTA */}
        <section className="py-16 sm:py-20 px-6 text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-xs sm:text-sm mb-3">
            Want to go deeper?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-navy mb-4">
            Bridging the Gap
          </h2>
          <p className="text-navy/80 max-w-lg mx-auto leading-relaxed mb-8">
            The card gives you the pattern. The book walks you through it —
            with Scripture, stories, and practical application for every
            area of life.
          </p>
          <a
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-4 text-base font-medium text-cream hover:bg-gold hover:text-navy transition-colors"
          >
            Learn about the book →
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
