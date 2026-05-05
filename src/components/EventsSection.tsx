"use client";

import { useMemo } from "react";
import Image from "next/image";
import { getUpcomingEvents } from "@/lib/upcomingEvents";

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
  const events = useMemo(() => getUpcomingEvents(), []);

  if (events.length === 0) {
    return null;
  }

  return (
    <section
      id="events"
      className="scroll-mt-20 bg-brand-dark py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute top-[10%] right-[-3%] h-72 w-72 rounded-full bg-brand-purple/10 blur-3xl" />
      <div className="absolute bottom-[5%] left-[-3%] h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <h2 className="text-center font-display text-4xl text-white sm:text-5xl">
          Upcoming Events
        </h2>

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
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-full bg-brand-pink px-6 py-2.5 text-center text-base font-semibold text-brand-dark hover:bg-brand-pink/80 transition-colors"
                >
                  Register
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
