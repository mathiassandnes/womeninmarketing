"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { getUpcomingEvents } from "@/lib/upcomingEvents";
import SectionHeading from "@/components/SectionHeading";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatBadgeColor(format: string) {
  switch (format) {
    case "Virtual":
      return "bg-white/15 border border-white/50 text-white";
    case "In-Person":
      return "bg-white/15 border border-white/50 text-white";
    case "Hybrid":
      return "bg-white/15 border border-white/50 text-white";
    default:
      return "bg-white/15 border border-white/50 text-white";
  }
}

function categoryBadgeColor(category: string) {
  switch (category) {
    case "Conference":
      return "bg-white/15 border border-white/50 text-white";
    case "Workshop":
      return "bg-white/15 border border-white/50 text-white";
    case "Webinar":
      return "bg-white/15 border border-white/50 text-white";
    case "Meetup":
      return "bg-white/15 border border-white/50 text-white";
    case "Panel":
      return "bg-white/15 border border-white/50 text-white";
    default:
      return "bg-white/15 border border-white/50 text-white";
  }
}

export default function EventsSection({
  paidOnly = false,
  label = "What's on",
  title = "Upcoming events",
  intro = "Events, workshops and talks to learn, connect and grow together.",
  emptyText,
}: {
  paidOnly?: boolean;
  label?: string;
  title?: string;
  intro?: string;
  // When set, shows this message instead of hiding the section when empty
  emptyText?: string;
}) {
  const events = useMemo(
    () =>
      getUpcomingEvents().filter(
        (event) => !paidOnly || event.tags?.includes("Paid")
      ),
    [paidOnly]
  );

  if (events.length === 0 && !emptyText) {
    return null;
  }

  return (
    <section
      id={paidOnly ? "workshops" : "events"}
      className="scroll-mt-20 bg-brand-dark py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 h-[28rem] w-[28rem] rounded-full bg-brand-blue/40 blur-3xl" />
      <div className="absolute bottom-[10%] -left-24 h-64 w-64 rounded-full bg-brand-pink/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading label={label} title={title} />
        <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-relaxed text-white/80">
          {intro}
        </p>

        {events.length === 0 && (
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/15 bg-white/5 p-10 text-center">
            <p className="text-lg text-white/80">{emptyText}</p>
            <a
              href="https://luma.com/womeninmarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-brand-pink px-7 py-2.5 text-base font-bold text-brand-dark hover:bg-brand-pink/80 transition-colors"
            >
              Follow us on Luma
            </a>
          </div>
        )}

        <div className="mt-12 grid gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex flex-col md:flex-row items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:bg-white/10 transition-colors gap-6"
            >
              {event.image && (
                <div className="md:w-96 shrink-0 p-4">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2">
                  <span
                    className={`rounded-full px-3.5 py-1 text-sm font-semibold ${categoryBadgeColor(event.category)}`}
                  >
                    {event.category}
                  </span>
                  <span
                    className={`rounded-full px-3.5 py-1 text-sm font-semibold ${formatBadgeColor(event.format)}`}
                  >
                    {event.format}
                  </span>
                  {event.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/50 bg-white/15 px-3.5 py-1 text-sm font-semibold text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">
                  {event.title}
                </h3>
                <p className="mt-1 text-base text-indigo-300">
                  {formatDate(event.date)} &middot; {event.location}
                </p>
                <p className="mt-3 flex-1 text-base text-indigo-200">
                  {event.description}
                </p>
                {event.speakers.length > 0 && (
                  <p className="mt-3 text-sm text-indigo-400">
                    Speakers: {event.speakers.join(", ")}
                  </p>
                )}
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-brand-pink px-6 py-2.5 text-center text-base font-bold text-brand-dark hover:bg-brand-pink/80 transition-colors"
                  >
                    Register
                  </a>
                  {event.slug && (
                    <Link
                      href={`/workshops/${event.slug}`}
                      className="rounded-full border-[1.5px] border-white px-6 py-2.5 text-center text-base font-bold text-white hover:bg-white/10 transition-colors"
                    >
                      Read more
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
