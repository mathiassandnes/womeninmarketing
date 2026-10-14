import Image from "next/image";
import { founders } from "@/data/founders";
import SectionHeading from "@/components/SectionHeading";
import SpeechBubble from "@/components/SpeechBubble";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-brand-indigo py-16 px-6 relative overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-pink/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand-dark/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          align="left"
          label="About us"
          title="Meet the founders"
          highlight="Barbara & Gabriela"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="flex flex-col gap-5 rounded-2xl border border-white/15 bg-brand-dark/40 p-6 backdrop-blur-sm sm:flex-row sm:items-start"
            >
              <div className="relative w-32 shrink-0 pb-4">
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  width={300}
                  height={375}
                  className={`w-full aspect-[4/5] rounded-xl border-4 border-white object-cover object-top shadow-xl ${index % 2 === 0 ? "-rotate-3" : "rotate-3"}`}
                />
                <SpeechBubble
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap !px-3 !py-1 !text-xs"
                >
                  Co-founder
                </SpeechBubble>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">
                  {founder.name}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-brand-purple">
                  {founder.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {founder.bio}
                </p>
                <a
                  href={founder.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border-[1.5px] border-white px-4 py-1.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
