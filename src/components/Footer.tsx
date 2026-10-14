"use client";

import { useMemo } from "react";
import Link from "next/link";
import { getUpcomingEvents } from "@/lib/upcomingEvents";

export default function Footer() {
  // Same rule as the navbar: the Events link hides when nothing is coming up
  const hasEvents = useMemo(() => getUpcomingEvents().length > 0, []);

  return (
    <footer className="border-t border-indigo-100 bg-brand-dark py-12 px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <p className="text-base font-extrabold text-white">
          Women in Marketing
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base text-indigo-300">
          {hasEvents && (
            <Link href="/#events" className="hover:text-white transition-colors">
              Events
            </Link>
          )}
          <Link href="/#about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/#community" className="hover:text-white transition-colors">
            Community
          </Link>
          <Link href="/#contact" className="hover:text-white transition-colors">
            Consulting
          </Link>
        </div>
        <p className="text-sm text-indigo-400">
          &copy; {new Date().getFullYear()} Women in Marketing. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
