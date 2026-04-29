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
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-8 text-center md:text-left">
          <div>
            <p className="font-serif text-2xl font-semibold">Robin Urban</p>
            <p className="mt-2 text-sm text-cream/70">
              An imprint of{" "}
              <span className="text-gold font-medium">Benchmark Press</span>
            </p>
          </div>
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-gold mb-4">
              Explore
            </p>
            <ul className="flex flex-col items-center md:items-start gap-3 text-sm">
              <li>
                <a
                  href="/about"
                  className="hover:text-gold transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gold transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-gold mb-4">
              Follow
            </p>
            <ul className="flex items-center justify-center md:justify-start gap-5">
              <li>
                <a
                  href="https://www.youtube.com/@RobinUrban-w3s"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="inline-flex text-cream/80 hover:text-gold transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.017 3.017 0 0 0-2.121-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.017 3.017 0 0 0 2.121 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.017 3.017 0 0 0 2.121-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.546 15.568V8.432L15.818 12l-6.272 3.568Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@robin_urban"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="inline-flex text-cream/80 hover:text-gold transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19.321 5.562a5.122 5.122 0 0 1-3.414-1.267 5.122 5.122 0 0 1-1.537-2.98V1.2h-3.5v13.29a2.97 2.97 0 0 1-5.338 1.8 2.97 2.97 0 0 1 3.188-4.66V8.05a6.47 6.47 0 0 0-5.493 10.56 6.47 6.47 0 0 0 11.145-4.44V8.68a8.556 8.556 0 0 0 4.997 1.6V6.78a5.13 5.13 0 0 1-.048-1.218Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/real_robin_urban/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex text-cream/80 hover:text-gold transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Real_RobinUrban"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="inline-flex text-cream/80 hover:text-gold transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.53 3h3.043l-6.65 7.6L22 21h-6.125l-4.8-6.28L5.58 21H2.534l7.113-8.13L2 3h6.28l4.34 5.74L17.53 3Zm-1.067 16.2h1.687L7.617 4.695H5.807L16.463 19.2Z" />
                  </svg>
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
