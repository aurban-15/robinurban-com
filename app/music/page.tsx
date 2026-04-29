import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import SiteFooter from "../components/site-footer";
import TrackList from "./track-list";

export const metadata: Metadata = {
  title: "Bridging the Gap — Threshold Worship",
  description:
    "Bridging the Gap, the worship album from Threshold Worship. A complete worship journey through the finished work of Christ.",
};

// `sample` is a path inside /public, served at the root.
const tracks: { title: string; sample?: string }[] = [
  { title: "Nothing Between",            sample: "/audio/samples/01-nothing-between.mp3" },
  { title: "We Are Not Far",             sample: "/audio/samples/02-We-Are-Not-Far.mp3" },
  { title: "We Are Not Far (Acoustic)",  sample: "/audio/samples/03-We-Are-Not-Far-(Acoustic).mp3" },
  { title: "You Have Always Been",       sample: "/audio/samples/04-You-Have-Always-Been.mp3" },
  { title: "You Have Always Been (Hymn)",sample: "/audio/samples/05-You-Have-Always-Been-(Hymn).mp3" },
  { title: "Come Near",                  sample: "/audio/samples/06-Come-Near.mp3" },
  { title: "Here I Am (Acoustic)",       sample: "/audio/samples/07-Here-I-Am-(Acoustic).mp3" },
  { title: "Here I Am",                  sample: "/audio/samples/08-Here-I-Am.mp3" },
  { title: "The Cross Has Spoken",       sample: "/audio/samples/09-The-Cross-Has-Spoken.mp3" },
];

export default function MusicPage() {
  return (
    <>
      <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="afterInteractive" />
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

          <TrackList tracks={tracks} />
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
                    Listen on Pandora
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
                    href="https://robinurban.lemonsqueezy.com/checkout/buy/1588214"
                    className="lemonsqueezy-button inline-flex w-full flex-col items-center justify-center rounded-full bg-navy px-6 py-3.5 text-base font-medium text-cream hover:bg-gold hover:text-navy transition-colors"
                  >
                    <span>Download Full Album</span>
                    <span className="text-xs font-normal opacity-80">
                      $9.99
                    </span>
                  </a>
                </div>

                <p className="mt-8 text-sm text-navy/60 italic">
                  Highest quality audio, delivered instantly via Lemon Squeezy.
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
