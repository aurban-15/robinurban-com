const navLinks = [
  { label: "Book", href: "/book" },
  { label: "Music", href: "/music" },
  { label: "Shop", href: "/#shop" },
  { label: "About", href: "/#about" },
  { label: "Free Resource", href: "/#free-resource" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-navy/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="font-serif text-xl sm:text-2xl font-semibold text-navy tracking-tight"
        >
          Robin Urban
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-navy">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/#free-resource"
          className="md:hidden text-sm font-medium text-navy underline underline-offset-4 decoration-gold"
        >
          Free Pattern
        </a>
      </nav>
    </header>
  );
}
