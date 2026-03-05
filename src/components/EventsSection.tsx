"use client";

import { useMemo } from "react";
import Image from "next/image";
import { events as allEvents } from "@/data/events";

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
      return "bg-brand-blue/30 text-white";
    case "In-Person":
      return "bg-brand-purple/40 text-white";
    case "Hybrid":
      return "bg-brand-pink/30 text-white";
    default:
      return "bg-white/20 text-white";
  }
}

function categoryBadgeColor(category: string) {
  switch (category) {
    case "Conference":
      return "bg-brand-blue/30 text-white";
    case "Workshop":
      return "bg-brand-purple/30 text-white";
    case "Webinar":
      return "bg-brand-pink/30 text-white";
    case "Meetup":
      return "bg-white/15 text-white";
    case "Panel":
      return "bg-violet-500/30 text-white";
    default:
      return "bg-white/20 text-white";
  }
}

export default function EventsSection() {
  const events = useMemo(
    () =>
      allEvents.filter(
        (event) => new Date(event.date) > new Date(new Date().toDateString())
      ),
    []
  );

  return (
    <section
      id="events"
      className="scroll-mt-20 bg-brand-dark py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute top-[10%] right-[-3%] h-72 w-72 rounded-full bg-brand-purple/10 blur-3xl" />
      <div className="absolute bottom-[5%] left-[-3%] h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl text-white sm:text-4xl">
          Upcoming Events
        </h2>

        {events.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-12 text-center">
            <p className="text-lg font-semibold text-white">
              Events coming soon
            </p>
            <p className="mt-2 text-sm text-indigo-300">
              We&apos;re planning our first events. Join the community to be the
              first to know when they drop.
            </p>
            <a
              href="#community"
              className="mt-6 inline-block rounded-full bg-brand-pink px-6 py-2 text-sm font-semibold text-brand-dark hover:bg-brand-pink/80 transition-colors"
            >
              Stay in the Loop
            </a>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {events.map((event) => (
              <div
                key={event.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:bg-white/10 transition-colors"
              >
                {event.image && (
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2">
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-semibold ${categoryBadgeColor(event.category)}`}
                  >
                    {event.category}
                  </span>
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-semibold ${formatBadgeColor(event.format)}`}
                  >
                    {event.format}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm text-indigo-300">
                  {formatDate(event.date)} &middot; {event.location}
                </p>
                <p className="mt-3 flex-1 text-sm text-indigo-200">
                  {event.description}
                </p>
                {event.speakers.length > 0 && (
                  <p className="mt-3 text-xs text-indigo-400">
                    Speakers: {event.speakers.join(", ")}
                  </p>
                )}
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-full bg-brand-pink px-5 py-2 text-center text-sm font-semibold text-brand-dark hover:bg-brand-pink/80 transition-colors"
                >
                  Register
                </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
