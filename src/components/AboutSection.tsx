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

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          About the Movement
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/80">
          Women in Marketing is a growing community dedicated to closing the gap
          in marketing leadership. Whether you&apos;re just starting out or
          leading a team, this is your space to learn, share, and rise together.
        </p>
        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          <div>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-purple text-2xl font-extrabold">
              1
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">Connect</h3>
            <p className="mt-2 text-sm text-white/70">
              Find mentors, collaborators, and peers who share your passion for
              marketing.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-blue text-2xl font-extrabold">
              2
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">Learn</h3>
            <p className="mt-2 text-sm text-white/70">
              Attend events, workshops, and webinars led by industry leaders.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-pink text-2xl font-extrabold">
              3
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">Grow</h3>
            <p className="mt-2 text-sm text-white/70">
              Advance your career with the support of a community that champions
              women.
            </p>
          </div>
        </div>

        {/* Founders */}
        <div className="mt-20">
          <h3 className="font-display text-2xl text-white">
            Meet the Founders
          </h3>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-8 text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover ring-2 ring-brand-pink"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {founder.name}
                    </h4>
                    <p className="text-sm font-semibold text-brand-pink">
                      {founder.title}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  {founder.bio}
                </p>
                <a
                  href={founder.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-white hover:text-brand-pink transition-colors"
                >
                  LinkedIn &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
