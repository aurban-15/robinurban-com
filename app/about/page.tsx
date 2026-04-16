import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "About — Robin Urban",
  description:
    "Robin Urban is a Christian nonfiction author and teaching team member at Foundation Stone Church in Toledo, Ohio.",
};

export default function AboutPage() {
  return (
    <>
      <main className="flex-1">
        <h1 className="sr-only">About Robin Urban</h1>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-full max-w-sm drop-shadow-[0_12px_28px_rgba(13,31,60,0.25)]">
                <Image
                  src="/Aragon-Favorites-Robin-Urban-20.jpeg"
                  alt="Robin Urban"
                  width={896}
                  height={1088}
                  priority
                  sizes="(min-width: 768px) 24rem, 80vw"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>

            {/* Hero quote */}
            <div>
              <p className="text-gold font-medium tracking-widest uppercase text-xs sm:text-sm mb-6">
                About Robin
              </p>
              <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl leading-[1.5] text-navy">
                {"\u201C"}I write about the gap between what God says is true
                and how we actually live, because I&rsquo;ve spent a lot of
                time in that gap myself.{"\u201D"}
              </blockquote>
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="mx-auto max-w-[65ch] px-6 pb-16 sm:pb-20">
          <div className="font-serif text-lg leading-[1.8] text-navy/90 space-y-6">
            <p>
              Robin Urban is a Christian nonfiction author and teaching team
              member at Foundation Stone Church in Toledo, Ohio. Her writing
              grows out of years of wrestling with the distance between
              doctrine and daily life, knowing something is true in her head
              while her heart and habits told a different story.
            </p>
            <p>
              That wrestling produced a pattern: hear what God says, believe
              it, speak it, and receive it as real.{" "}
              <em>Bridging the Gap</em> is her first book, a practical guide
              for anyone who has ever felt stuck between the person God says
              they are and the person they see in the mirror.
            </p>
            <p>
              She lives in Toledo with her family and is working on her next
              two books, <em>Loved First</em> and <em>Servant vs. Son</em>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy text-cream">
          <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24 text-center">
            <p className="text-gold font-medium tracking-widest uppercase text-xs sm:text-sm">
              Start here
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Step into the pattern
            </h2>
            <p className="mt-4 text-lg text-cream/80 leading-relaxed">
              Read the introduction to <em>Bridging the Gap</em>, or grab the
              free Pattern Card for a one-page reference you can keep close.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/introduction"
                className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-medium text-navy hover:bg-cream transition-colors"
              >
                Read the Introduction
              </a>
              <a
                href="/free"
                className="inline-flex items-center justify-center rounded-full border border-cream/40 px-8 py-4 text-base font-medium text-cream hover:bg-cream hover:text-navy transition-colors"
              >
                Get the Free Pattern Card
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
