type FooterVariant = "robin" | "threshold";

type SiteFooterProps = {
  variant?: FooterVariant;
};

const copyrightByVariant: Record<FooterVariant, string> = {
  robin: "© 2026 Robin Urban. All rights reserved.",
  threshold: "© 2026 Threshold Worship. All rights reserved.",
};

export default function SiteFooter({ variant = "robin" }: SiteFooterProps) {
  return (
    <footer id="contact" className="bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          <div>
            <p className="font-serif text-2xl font-semibold">Robin Urban</p>
            <p className="mt-2 text-sm text-cream/70">
              An imprint of{" "}
              <span className="text-gold font-medium">Benchmark Press</span>
            </p>
          </div>
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-gold mb-4">
              Follow
            </p>
            <ul className="flex items-center justify-center md:justify-start gap-6 text-sm">
              <li>
                <a
                  href="#youtube"
                  className="hover:text-gold transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="#tiktok"
                  className="hover:text-gold transition-colors"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-cream/15 text-xs text-cream/60 text-center md:text-left">
          {copyrightByVariant[variant]}
        </div>
      </div>
    </footer>
  );
}
