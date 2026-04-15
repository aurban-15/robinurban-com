import Image from "next/image";
import SiteFooter from "./components/site-footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-navy">
              Bridging the gap between who God says you are and how you live.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-navy/80 leading-relaxed max-w-xl">
              Encouragement, stories, and practical tools from author Robin
              Urban to help you close the distance between belief and
              everyday life.
            </p>
            <div className="mt-8">
              <a
                href="/free"
                className="inline-flex items-center justify-center rounded-full bg-navy px-7 py-4 text-base font-medium text-cream shadow-sm hover:bg-gold hover:text-navy transition-colors"
              >
                Get the Free Pattern Card
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl ring-1 ring-navy/15">
              <Image
                src="/Aragon-Favorites-Robin-Urban-20.jpeg"
                alt="Robin Urban"
                fill
                priority
                sizes="(min-width: 1024px) 24rem, (min-width: 640px) 24rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Book feature */}
      <section id="book" className="bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex justify-center md:justify-start">
              <div
                className="aspect-[2/3] w-full max-w-xs rounded-lg bg-cream/15 border border-cream/20 flex items-center justify-center text-cream/50 text-sm shadow-2xl"
                aria-label="Book cover placeholder"
              >
                Book cover
              </div>
            </div>
            <div>
              <p className="text-gold font-medium tracking-widest uppercase text-xs sm:text-sm">
                New Book
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                Bridging the Gap
              </h2>
              <p className="mt-2 font-serif text-lg sm:text-xl text-cream/80 italic">
                Between Who God Says You Are and How You Live
              </p>
              <p className="mt-6 text-base sm:text-lg text-cream/85 leading-relaxed max-w-xl">
                A warm, honest guide for anyone who senses the distance
                between what they believe about God and how they actually
                live day to day. Robin walks alongside you with scripture,
                story, and simple rhythms that bring lasting change.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="/book"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-base font-medium text-navy hover:bg-cream transition-colors"
                >
                  Buy the Book
                </a>
                <a
                  href="/book"
                  className="inline-flex items-center justify-center rounded-full border border-cream/40 px-7 py-4 text-base font-medium text-cream hover:bg-cream hover:text-navy transition-colors"
                >
                  Get the ePub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <div className="text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-xs sm:text-sm">
            About Robin
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-navy">
            A friend walking the same road
          </h2>
          <p className="mt-6 text-lg text-navy/80 leading-relaxed">
            Robin Urban is a writer and speaker who believes the gospel is
            meant to be lived, not just understood. Through her books and
            everyday stories, she helps readers trade performance for
            presence and step into the identity God has already given them.
          </p>
          <div className="mt-8">
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-navy font-medium underline underline-offset-4 decoration-gold decoration-2 hover:text-gold transition-colors"
            >
              Read Robin&apos;s full story
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Free resource CTA */}
      <section className="bg-gold/15 border-y border-gold/30">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
            Get the Free Pattern Card
          </h2>
          <p className="mt-4 text-lg text-navy/80 leading-relaxed max-w-xl mx-auto">
            A simple printable card with the daily pattern Robin uses to
            stay anchored in who God says she is. Download it free and
            we&apos;ll send it straight to your inbox.
          </p>
          <div className="mt-10">
            <a
              href="/free"
              className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-4 text-base font-medium text-cream hover:bg-gold hover:text-navy transition-colors"
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
