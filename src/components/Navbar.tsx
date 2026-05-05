"use client";

import { useMemo, useState } from "react";
import { getUpcomingEvents } from "@/lib/upcomingEvents";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = useMemo(() => {
    const links = [{ label: "About", href: "#about" }];
    if (getUpcomingEvents().length > 0) {
      links.push({ label: "Events", href: "#events" });
    }
    links.push(
      { label: "Community", href: "#community" },
      { label: "Contact", href: "#contact" }
    );
    return links;
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl text-white">
          Women in Marketing
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-indigo-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://join.slack.com/t/theoslomarketingclub/shared_invite/zt-3ri1gay86-ZP23OhaJXWHDX4Dv3e_YJQ"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-pink px-6 py-2.5 text-base font-semibold text-brand-dark hover:bg-brand-pink/80 transition-colors"
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
              className="block py-3 text-base font-semibold text-indigo-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://join.slack.com/t/theoslomarketingclub/shared_invite/zt-3ri1gay86-ZP23OhaJXWHDX4Dv3e_YJQ"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-full bg-brand-pink px-6 py-2.5 text-center text-base font-semibold text-brand-dark hover:bg-brand-pink/80"
          >
            Join Us
          </a>
        </div>
      )}
    </nav>
  );
}
