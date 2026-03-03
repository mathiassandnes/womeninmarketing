"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg text-white">
          Women in Marketing
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-indigo-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#community"
            className="rounded-full bg-brand-pink px-5 py-2 text-sm font-semibold text-brand-dark hover:bg-brand-pink/80 transition-colors"
          >
            Join Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-brand-dark px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-semibold text-indigo-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#community"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-full bg-brand-pink px-5 py-2 text-center text-sm font-semibold text-brand-dark hover:bg-brand-pink/80"
          >
            Join Us
          </a>
        </div>
      )}
    </nav>
  );
}
