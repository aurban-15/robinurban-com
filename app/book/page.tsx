import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "Bridging the Gap — Robin Urban",
  description:
    "Bridging the Gap: Between Who God Says You Are and How You Live. By Robin Urban.",
};

const chapters = [
  "The Pattern Revealed",
  "Hearing the Word — The Foundation of Faith",
  "Faith Ignited — From Hearing to Believing",
  "Speaking Life or Death — The Power of Your Words",
  "Receiving Through Grace — The Word Does the Work",
  "When the Pattern Works — and When It Fails",
  "What Jesus Accomplished — The Foundation of Every Promise",
  "Walking in Your New Identity — Grace in Action",
  "Living the Abundant Life — Your Ongoing Journey",
];

export default function BookPage() {
  return (
    <>
      <main className="flex-1">
      {/* Page hero */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-xs sm:max-w-sm drop-shadow-[0_12px_28px_rgba(13,31,60,0.35)]">
              <Image
                src="/bridging-the-gap-cover.png"
                alt="Bridging the Gap book cover"
                width={800}
                height={1200}
                priority
                sizes="(min-width: 768px) 24rem, 80vw"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gold font-medium tracking-widest uppercase text-xs sm:text-sm">
              The Book
            </p>
            <h1 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-navy">
              Bridging the Gap
            </h1>
            <p className="mt-2 font-serif text-base sm:text-lg italic text-navy/70">
              Between Who God Says You Are and How You Live
            </p>
            <p className="mt-3 text-sm sm:text-base text-navy/80">
              By Robin Urban
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#get-the-book"
                className="inline-flex items-center justify-center rounded-full bg-navy px-7 py-4 text-base font-medium text-cream shadow-sm hover:bg-gold hover:text-navy transition-colors"
              >
                Buy the Book
              </a>
              <a
                href="#get-the-book"
                className="inline-flex items-center justify-center rounded-full border border-navy/30 px-7 py-4 text-base font-medium text-navy hover:bg-navy hover:text-cream transition-colors"
              >
                Get the ePub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Book feature */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative w-full max-w-xs drop-shadow-[0_16px_32px_rgba(0,0,0,0.45)]">
                <Image
                  src="/bridging-the-gap-cover.png"
                  alt="Bridging the Gap book cover"
                  width={800}
                  height={1200}
                  sizes="(min-width: 768px) 20rem, 80vw"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
            <div>
              <p className="text-gold font-medium tracking-widest uppercase text-xs sm:text-sm">
                About the Book
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold leading-tight">
                Move God&apos;s Word from your head to your daily life
              </h2>
              <p className="mt-6 text-base sm:text-lg text-cream/85 leading-relaxed">
                You know you&apos;re a new creation in Christ. So why do you
                still feel stuck in the old patterns? Bridging the Gap
                uncovers a powerful truth hidden in plain sight throughout
                Scripture, a truth that moves what God says about you from
                your head into your daily experience. Not striving. Not
                trying harder. Just God&apos;s Word, working in you.
              </p>
              <div className="mt-8">
                <a
                  href="#get-the-book"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-base font-medium text-navy hover:bg-cream transition-colors"
                >
                  Get the Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get the Book + What's Inside */}
      <section
        id="get-the-book"
        className="bg-gold/15 border-y border-gold/30"
      >
        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left column: cover + purchase options */}
            <div className="flex flex-col gap-5">
              {/* Book cover */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[160px] drop-shadow-[0_10px_22px_rgba(13,31,60,0.3)]">
                  <Image
                    src="/bridging-the-gap-cover.png"
                    alt="Bridging the Gap book cover"
                    width={800}
                    height={1200}
                    sizes="160px"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>

              {/* Download Instantly */}
              <div className="rounded-2xl bg-cream border border-navy/10 shadow-sm p-5">
                <p className="text-gold font-medium tracking-widest uppercase text-xs">
                  Digital
                </p>
                <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-navy">
                  Download Instantly
                </h3>

                <ul className="mt-4 space-y-3">
                  <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-navy/10 pb-3">
                    <div>
                      <p className="font-serif text-lg font-semibold text-navy">
                        PDF Edition
                      </p>
                      <p className="text-navy/70 text-sm">$9.99</p>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-2 text-sm font-medium text-cream hover:bg-gold hover:text-navy transition-colors whitespace-nowrap"
                    >
                      Buy Now
                    </a>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <p className="font-serif text-lg font-semibold text-navy">
                        ePub Edition
                      </p>
                      <p className="text-navy/70 text-sm">$9.99</p>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-2 text-sm font-medium text-cream hover:bg-gold hover:text-navy transition-colors whitespace-nowrap"
                    >
                      Buy Now
                    </a>
                  </li>
                </ul>

                <p className="mt-3 text-sm text-navy/60 italic">
                  Delivered instantly via Gumroad.
                </p>
              </div>

              {/* Order Physical Copy */}
              <div className="rounded-2xl bg-cream border border-navy/10 shadow-sm p-5">
                <p className="text-gold font-medium tracking-widest uppercase text-xs">
                  Print
                </p>
                <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-navy">
                  Order a Physical Copy
                </h3>
                <p className="mt-2 text-navy/80 leading-relaxed">
                  Hold the book in your hands. A beautifully printed edition,
                  ready to read, underline, and share.
                </p>
                <div className="mt-3">
                  <a
                    href="#"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-navy px-6 py-2.5 text-base font-medium text-cream hover:bg-gold hover:text-navy transition-colors"
                  >
                    Order Print Edition
                  </a>
                </div>
                <p className="mt-3 text-sm text-navy/60 italic">
                  Print orders fulfilled by our publishing partner. Ships
                  directly to you.
                </p>
              </div>
            </div>

            {/* Right column: What's Inside */}
            <div>
              <p className="text-gold font-medium tracking-widest uppercase text-xs sm:text-sm">
                Chapter Preview
              </p>
              <h2 className="mt-1 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
                What&apos;s Inside
              </h2>

              <ol className="mt-5 space-y-2">
                {chapters.map((title, i) => (
                  <li
                    key={title}
                    className="flex items-start gap-4 rounded-xl border border-navy/10 bg-cream/70 px-4 py-2.5 hover:border-gold/50 transition-colors"
                  >
                    <span className="font-serif text-xl sm:text-2xl text-gold font-semibold w-8 shrink-0 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-base sm:text-lg text-navy leading-snug pt-0.5">
                      {title}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Ready to bridge the gap?
          </h2>
          <p className="mt-4 text-lg text-cream/80 leading-relaxed">
            Start with the free Pattern Card and see the truth at work in
            your everyday life.
          </p>
          <div className="mt-10">
            <a
              href="/free"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-medium text-navy hover:bg-cream transition-colors"
            >
              Get the Free Pattern Card
            </a>
          </div>
        </div>
      </section>

      {/* Music intro */}
      <section className="bg-gold/15 border-y border-gold/30">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-10 md:gap-12 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative aspect-square w-full max-w-[220px] md:w-56 md:max-w-none overflow-hidden rounded-xl shadow-xl ring-1 ring-navy/15">
                <Image
                  src="/bridging-the-gap-album-cover.jpeg"
                  alt="Bridging the Gap album cover — Threshold Worship"
                  fill
                  sizes="(min-width: 768px) 14rem, 55vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-gold font-medium tracking-widest uppercase text-xs sm:text-sm">
                The Companion Album
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
                There&apos;s Also a Sound
              </h2>
              <p className="mt-5 text-base sm:text-lg text-navy/80 leading-relaxed">
                The same truths in this book — the Father&apos;s goodness,
                the finished work of Christ — are meant to be more than
                read. They&apos;re meant to be sung. Bridging the Gap, the
                accompanying worship album from Threshold Worship, gives
                voice to those truths across nine tracks of modern worship.
                Anthemic, intimate, acoustic, orchestral. Written to be sung
                out loud. Available on all streaming platforms and for
                direct download.
              </p>
              <div className="mt-6">
                <a
                  href="/music"
                  className="inline-flex items-center justify-center rounded-full bg-navy px-7 py-3.5 text-base font-medium text-cream hover:bg-gold hover:text-navy transition-colors"
                >
                  Explore the Album
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <SiteFooter />
    </>
  );
}
