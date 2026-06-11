import type { Metadata } from "next";
import SiteFooter from "../components/site-footer";
import TeachingPlayer from "./teaching-player";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Watch Robin Urban teach on faith, grace, and walking in the new creation. Video teaching series from Foundation Stone Church in Toledo, Ohio.",
};

export default function TeachingPage() {
  return (
    <>
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-navy">
          <div className="mx-auto max-w-6xl px-6 py-6 sm:py-8 text-center">
            <p className="text-gold font-medium tracking-widest uppercase text-xs">
              Teaching
            </p>
            <h1 className="mt-1.5 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-cream">
              Walking in the New Man
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#b8c8d8] leading-relaxed max-w-2xl mx-auto">
              What does it actually look like to live as the new creation God
              says you are? Robin Urban walks through the pattern Scripture
              reveals for receiving grace — hear, believe, speak, receive.
              <span className="text-[#b8c8d8]/70"> — A three-part series from Foundation Stone Church, Toledo, Ohio.</span>
            </p>
          </div>
        </section>

        <TeachingPlayer />

        {/* CTA */}
        <section className="bg-navy">
          <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-cream">
              Want the full pattern on one page?
            </h2>
            <div className="mt-8">
              <a
                href="/free"
                className="inline-flex items-center justify-center rounded-full border-2 border-gold px-8 py-4 text-base font-medium text-gold hover:bg-gold hover:text-navy transition-colors"
              >
                Get the Free Pattern Card
              </a>
            </div>
            <p className="mt-6">
              <a
                href="/book"
                className="text-cream/70 font-medium underline underline-offset-4 decoration-gold/50 decoration-2 hover:text-gold transition-colors"
              >
                Or go deeper with the book{" "}
                <span aria-hidden="true">→</span>
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
