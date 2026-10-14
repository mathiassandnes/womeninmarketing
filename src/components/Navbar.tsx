"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getUpcomingEvents } from "@/lib/upcomingEvents";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = useMemo(() => {
    const links = [];
    if (getUpcomingEvents().length > 0) {
      links.push({ label: "Events", href: "/#events" });
    }
    links.push(
      { label: "About", href: "/#about" },
      { label: "Community", href: "/#community" },
      { label: "Consulting", href: "/#contact" }
    );
    return links;
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3 font-display text-xl text-white">
          <Image
            src="/brand/logo.png"
            alt="Women in Marketing logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full"
            priority
          />
          Women in Marketing
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-indigo-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://luma.com/womeninmarketing"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-pink px-6 py-2.5 text-base font-bold text-brand-dark hover:bg-brand-pink/80 transition-colors"
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
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base font-semibold text-indigo-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://luma.com/womeninmarketing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-full bg-brand-pink px-6 py-2.5 text-center text-base font-bold text-brand-dark hover:bg-brand-pink/80"
          >
            Join Us
          </a>
        </div>
      )}
    </nav>
  );
}
