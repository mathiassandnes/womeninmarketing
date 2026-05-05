"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Brand & Positioning",
    description:
      "Sharpen your story. We run brand audits, build messaging frameworks, and refine positioning that helps you stand out in a crowded market, so every touchpoint says exactly what you mean.",
  },
  {
    title: "Growth & Campaigns",
    description:
      "Drive measurable results. From end-to-end campaign strategy to paid media planning and performance reviews, we help you spend smarter and grow with intention, not vanity metrics.",
  },
  {
    title: "Content & Social",
    description:
      "Build an audience that converts. Editorial systems, social strategy, and content workflows your team can actually keep up with, designed around the channels and voices that matter to your brand.",
  },
  {
    title: "AI & Automation",
    description:
      "Cut through the noise. We design practical AI workflows, automation strategy, and tooling that frees your team to focus on the work that matters, without losing the human craft.",
  },
];

const contactEmails = [
  "barbara@womeninmarketing.no",
  "gabriela@womeninmarketing.no",
];

export default function ContactSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-brand-dark py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute top-[10%] left-[-5%] h-72 w-72 rounded-full bg-brand-pink/15 blur-3xl" />
      <div className="absolute bottom-[-5%] right-[-5%] h-80 w-80 rounded-full bg-brand-purple/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Need Marketing Expertise?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/80">
            Beyond the community, we help brands and teams level up through
            hands-on consulting with us, from strategy to execution and
            everything in between.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/15 shadow-xl">
          <Image
            src="/contact/consulting.jpg"
            alt="Women in Marketing consulting"
            width={1600}
            height={1067}
            className="w-full aspect-[3/2] object-cover"
          />
        </div>

        <div className="mt-14 mx-auto max-w-3xl">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={service.title}
                className="border-t border-white/15 last:border-b"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-baseline gap-6 py-6 text-left"
                >
                  <span className="font-display text-2xl text-brand-pink shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="flex-1 font-display text-2xl text-white transition-colors group-hover:text-brand-pink sm:text-3xl">
                    {service.title}
                  </h3>
                  <span
                    className={`font-display text-3xl text-brand-pink shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pl-14 pr-4 text-lg leading-relaxed text-white/80">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl bg-brand-pink p-10 sm:p-14 flex flex-col gap-8 md:flex-row md:items-center md:justify-between text-brand-dark shadow-2xl shadow-brand-pink/20">
          <div className="text-left flex-1">
            <p className="text-sm font-bold uppercase tracking-[0.2em]">
              Let&apos;s talk
            </p>
            <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              Tell us what you&apos;re working on
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed">
              Send us a quick note. We&apos;ll come back with a few thoughts
              and ideas. No pitch, no commitment.
            </p>
            <p className="mt-5 font-display text-lg">
              Barbara &amp; Gabriela
            </p>
          </div>
          <a
            href={`mailto:${contactEmails.join(",")}?subject=Marketing%20consulting%20enquiry`}
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-brand-dark px-8 py-4 text-center text-base font-bold text-white hover:bg-brand-blue transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}
