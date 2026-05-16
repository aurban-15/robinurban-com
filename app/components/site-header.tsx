"use client";

import { useState } from "react";

const navLinks = [
  { label: "Book", href: "/book" },
  { label: "Music", href: "/music" },
  { label: "Free Resource", href: "/free" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 bg-navy transition-transform ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block w-5 h-0.5 bg-navy transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-navy transition-transform ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </nav>
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-4 text-sm font-medium text-navy border-t border-navy/10 pt-4">
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
      )}
    </header>
  );
}
