import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "Bridging the Gap — Threshold Worship",
  description:
    "Bridging the Gap, the worship album from Threshold Worship. A complete worship journey through the finished work of Christ.",
};

const tracks = [
  "Nothing Between",
  "We Are Not Far",
  "We Are Not Far (Acoustic)",
  "You Have Always Been",
  "You Have Always Been (Hymn)",
  "Come Near",
  "Here I Am (Acoustic)",
  "Here I Am",
  "The Cross Has Spoken",
];

export default function MusicPage() {
  return (
    <>
      <main className="flex-1">
        {/* Page hero */}
        <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div className="flex justify-center md:justify-end order-1 md:order-1">
              <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-xl shadow-2xl ring-1 ring-navy/20">
                <Image
                  src="/bridging-the-gap-album-cover.jpeg"
                  alt="Bridging the Gap album cover — Threshold Worship"
                  fill
                  priority
                  sizes="(min-width: 768px) 24rem, 80vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left order-2 md:order-2">
              <p className="text-gold font-medium tracking-widest uppercase text-xs sm:text-sm">
                Threshold Worship
              </p>
              <h1 className="mt-2 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-navy">
                Bridging the Gap
              </h1>
              <p className="mt-4 font-serif text-lg sm:text-xl italic text-navy/70">
                A complete worship journey through the finished work of Christ
              </p>
            </div>
          </div>
        </section>

        {/* Album description */}
        <section className="bg-navy text-cream">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24 text-center">
            <p className="text-gold font-medium tracking-widest uppercase text-xs sm:text-sm">
              About the Album
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Something glorious to sing
            </h2>
            <p className="mt-6 text-base sm:text-lg text-cream/85 leading-relaxed max-w-2xl mx-auto">
              Bridging the Gap moves through a complete worship journey —
              from jubilant declaration that the barrier between God and His
              people has been destroyed, through intimacy and stillness,
              through personal surrender, and finally to the cross itself.
              Where the book teaches you to speak God&apos;s Word, the album
              gives you something glorious to sing. Modern worship with
              anthemic rock, cinematic piano, acoustic arrangements, and
              hymn variations. Written to be sung, not just heard.
            </p>
          </div>
        </section>

        {/* Track listing */}
        <section className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <div className="text-center">
            <p className="text-gold font-medium tracking-widest uppercase text-xs sm:text-sm">
              Tracklist
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
              The Songs
            </h2>
          </div>

          <ol className="mt-10 space-y-3">
            {tracks.map((title, i) => (
              <li
                key={title}
                className="flex items-center gap-5 rounded-xl border border-navy/10 bg-cream/70 px-5 sm:px-6 py-4 hover:border-gold/50 transition-colors"
              >
                <span className="font-serif text-2xl sm:text-3xl text-gold font-semibold w-10 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-lg sm:text-xl text-navy leading-snug">
                  {title}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Stream or Download */}
        <section className="bg-gold/15 border-y border-gold/30">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
                Stream or Download
              </h2>
              <p className="mt-4 text-lg text-navy/80 leading-relaxed">
                Listen free on your favorite platform, or own the album in
                full quality.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {/* Stream Free */}
              <div className="flex flex-col rounded-2xl bg-cream border border-navy/10 shadow-sm p-8 sm:p-10">
                <p className="text-gold font-medium tracking-widest uppercase text-xs">
                  Listen
                </p>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-navy">
                  Stream Free
                </h3>
                <p className="mt-4 text-navy/80 leading-relaxed">
                  The full album, available on all major streaming services.
                </p>

                <div className="mt-8 flex-1 flex flex-col gap-4">
                  <a
                    href="#"
                    className="inline-flex w-full items-center justify-center rounded-full bg-navy px-6 py-4 text-base font-medium text-cream hover:bg-gold hover:text-navy transition-colors"
                  >
                    Listen on Spotify
                  </a>
                  <a
                    href="#"
                    className="inline-flex w-full items-center justify-center rounded-full border border-navy/30 px-6 py-4 text-base font-medium text-navy hover:bg-navy hover:text-cream transition-colors"
                  >
                    Listen on Apple Music
                  </a>
                </div>

                <p className="mt-8 text-sm text-navy/60 italic">
                  Available on all major platforms May 1st.
                </p>
              </div>

              {/* Own It */}
              <div className="flex flex-col rounded-2xl bg-cream border border-navy/10 shadow-sm p-8 sm:p-10">
                <p className="text-gold font-medium tracking-widest uppercase text-xs">
                  Download
                </p>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-navy">
                  Own It
                </h3>
                <p className="mt-4 text-navy/80 leading-relaxed">
                  Keep the album forever, in highest quality audio.
                </p>

                <div className="mt-8 flex-1 flex flex-col gap-4">
                  <a
                    href="#"
                    className="inline-flex w-full flex-col items-center justify-center rounded-full bg-navy px-6 py-3.5 text-base font-medium text-cream hover:bg-gold hover:text-navy transition-colors"
                  >
                    <span>Download Full Album</span>
                    <span className="text-xs font-normal opacity-80">
                      $9.99
                    </span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex w-full flex-col items-center justify-center rounded-full border border-navy/30 px-6 py-3.5 text-base font-medium text-navy hover:bg-navy hover:text-cream transition-colors"
                  >
                    <span>Download Individual Tracks</span>
                    <span className="text-xs font-normal opacity-80">
                      $1.50 each
                    </span>
                  </a>
                </div>

                <p className="mt-8 text-sm text-navy/60 italic">
                  Highest quality audio, delivered instantly via Gumroad.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter variant="threshold" />
    </>
  );
}
