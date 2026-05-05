import Image from "next/image";
import { founders } from "@/data/founders";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-brand-purple py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute top-[-5%] left-[-5%] h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-5%] h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="font-display text-4xl text-white sm:text-5xl">
          Meet the Founders
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="rounded-2xl overflow-hidden text-left"
            >
              <Image
                src={founder.photo}
                alt={founder.name}
                width={600}
                height={750}
                className="w-full aspect-[4/5] object-cover object-top"
              />
              <div className="mt-6 px-1">
                <h3 className="font-display text-3xl text-white">
                  {founder.name}
                </h3>
                <p className="mt-2 text-base font-bold uppercase tracking-wider text-brand-dark">
                  {founder.title}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-brand-dark/90">
                  {founder.bio}
                </p>
                <a
                  href={founder.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-dark px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-blue transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
