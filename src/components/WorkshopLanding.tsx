import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import SpeechBubble from "@/components/SpeechBubble";
import type { Event } from "@/lib/types";
import type { WorkshopDetails } from "@/data/workshops";

function formatLongDate(dateStr: string) {
  return new Date(`${dateStr}T12:00:00`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatShortDate(dateStr: string) {
  return new Date(`${dateStr}T12:00:00`).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
  });
}

const registerButton =
  "inline-block rounded-full px-9 py-4 text-base font-bold transition-colors";

export default function WorkshopLanding({
  workshop,
  event,
}: {
  workshop: WorkshopDetails;
  event: Event;
}) {
  const facts = [
    { label: "Date", value: formatLongDate(event.date) },
    { label: "Time", value: workshop.time },
    { label: "Place", value: workshop.address },
    { label: "Price", value: workshop.price, note: workshop.priceNote },
    { label: "Group size", value: workshop.seats, note: workshop.level },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-brand-indigo to-brand-purple px-6 pt-32 pb-20">
        <div className="absolute -right-32 -bottom-48 h-[34rem] w-[34rem] rounded-full bg-brand-dark/30" />
        <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-pink/30" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-pink">
              Workshop &middot; {workshop.level}
            </p>
            <h1 className="mt-4 flex flex-col items-start gap-3 font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              <span>{workshop.title}</span>
              <span className="inline-block -rotate-3 rounded-[18px] bg-brand-pink px-[0.4em] pt-[0.05em] pb-[0.12em] font-medium italic tracking-normal text-brand-dark shadow-[0_10px_30px_rgba(30,27,75,0.35)]">
                {workshop.highlight}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-indigo-100">
              {workshop.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-white/50 bg-white/15 px-4 py-1.5 text-sm font-semibold text-white">
                {formatShortDate(event.date)} &middot; {workshop.time}
              </span>
              <span className="rounded-full border border-white/50 bg-white/15 px-4 py-1.5 text-sm font-semibold text-white">
                {workshop.seats}
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${registerButton} bg-white text-center text-brand-blue shadow-lg hover:bg-indigo-50`}
              >
                Request a seat
              </a>
              <a
                href="#agenda"
                className={`${registerButton} border-[1.5px] border-white text-center text-white hover:bg-white/10`}
              >
                See the agenda
              </a>
            </div>
          </div>

          {event.image && (
            <div className="relative mx-auto w-full max-w-sm">
              <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={600}
                priority
                className="w-full rotate-3 rounded-2xl border-[6px] border-white shadow-2xl"
              />
              <span className="absolute -bottom-5 -left-4">
                <SpeechBubble>Only {workshop.seats}!</SpeechBubble>
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Key facts */}
      <section className="relative overflow-hidden bg-brand-dark px-6 py-16">
        <div className="relative mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-white/15 bg-white/5 p-5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-purple">
                {fact.label}
              </p>
              <p className="mt-2 text-base font-bold text-white">
                {fact.value}
              </p>
              {fact.note && (
                <p className="mt-1 text-sm text-white/65">{fact.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for + what you leave with */}
      <section className="relative overflow-hidden bg-brand-indigo px-6 py-20">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-pink/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand-dark/40 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <SectionHeading
            label="Is this for you?"
            title="Who it's for"
            highlight="and what you get"
          />
          <div className="mt-12 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-2xl border border-white/15 bg-brand-dark/40 p-7 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-purple">
                Made for
              </p>
              <ul className="mt-4 space-y-3">
                {workshop.forWho.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-white/85">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-purple" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <span
              className="self-center text-center text-3xl font-bold text-brand-purple"
              aria-hidden
            >
              =
            </span>
            <div className="rounded-2xl bg-brand-blue p-7 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">
                You leave with
              </p>
              <ul className="mt-4 space-y-3">
                {workshop.takeaways.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-white">
                    <span className="mt-0.5 shrink-0 font-bold text-brand-pink">
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section
        id="agenda"
        className="relative scroll-mt-20 overflow-hidden bg-brand-dark px-6 py-20"
      >
        <div className="absolute -top-20 -right-20 h-[28rem] w-[28rem] rounded-full bg-brand-blue/40 blur-3xl" />
        <div className="absolute bottom-[10%] -left-24 h-64 w-64 rounded-full bg-brand-pink/30 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <SectionHeading
            label="The agenda"
            title={workshop.time}
            highlight="step by step"
          />
          <ol className="mt-12 space-y-3">
            {workshop.agenda.map((item) => {
              const isBreak = item.title === "Break";
              return (
                <li
                  key={item.time}
                  className={`flex gap-5 rounded-2xl p-5 ${
                    isBreak
                      ? "border border-dashed border-white/20"
                      : "border border-white/10 bg-white/5"
                  }`}
                >
                  <span className="w-14 shrink-0 font-display text-lg text-brand-pink">
                    {item.time}
                  </span>
                  <div>
                    <p
                      className={`font-bold ${isBreak ? "text-white/60" : "text-white"}`}
                    >
                      {isBreak ? "Coffee break" : item.title}
                    </p>
                    {item.text && (
                      <p className="mt-1 text-sm leading-relaxed text-white/70">
                        {item.text}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* What to bring + booking */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-brand-indigo to-brand-purple px-6 py-20">
        <div className="absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-brand-pink/30" />
        <div className="absolute -right-32 -bottom-40 h-[32rem] w-[32rem] rounded-full bg-brand-dark/30" />

        <div className="relative mx-auto max-w-5xl">
          <SectionHeading
            label="Before you come"
            title="What to bring"
            highlight="and how to book"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-pink">
                Bring
              </p>
              <ul className="mt-4 space-y-3">
                {workshop.bring.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-white/90">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-pink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-pink">
                How booking works
              </p>
              <ol className="mt-4 space-y-3">
                {workshop.booking.map((item, index) => (
                  <li key={item} className="flex gap-3 text-base text-white/90">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-brand-blue">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {workshop.goodToKnow && (
            <div className="mt-6 rounded-2xl border border-white/15 bg-brand-dark/30 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-pink">
                Good to know
              </p>
              <ul className="mt-4 space-y-2">
                {workshop.goodToKnow.map((item) => (
                  <li key={item} className="text-base text-white/85">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

// Closing call to action, shown after the hosts section
export function WorkshopClosing({
  workshop,
  event,
}: {
  workshop: WorkshopDetails;
  event: Event;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-6 py-20">
      <div className="absolute top-[8%] -left-24 h-80 w-80 rounded-full bg-brand-pink/30 blur-3xl" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl bg-brand-pink p-10 text-brand-dark shadow-2xl shadow-brand-pink/20 sm:p-14 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <p className="text-sm font-bold uppercase tracking-[0.22em]">
            {formatShortDate(event.date)} &middot; {workshop.time}
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            Ready to join us?
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed">
            Only {workshop.seats}, so everyone gets help with their own work.
            Questions? Send us a message on Luma and we reply within 24 hours.
          </p>
        </div>
        <a
          href={event.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-dark px-9 py-4 text-base font-bold text-white transition-colors hover:bg-brand-blue"
        >
          Request a seat
        </a>
      </div>
    </section>
  );
}
