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
          About the Community
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/80">
          Women in Marketing is a growing community dedicated to closing the gap
          in marketing leadership. Whether you&apos;re just starting out or
          leading a team, this is your space to learn, share, and rise together.
        </p>

        {/* Founders */}
        <div className="mt-16">
          <h3 className="font-display text-2xl text-white">
            Meet the Founders
          </h3>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="rounded-2xl border border-white/15 bg-brand-dark/40 backdrop-blur-sm overflow-hidden text-left"
              >
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  width={400}
                  height={400}
                  className="w-full h-72 object-cover object-top"
                />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-white">
                    {founder.name}
                  </h4>
                  <p className="text-sm font-semibold text-brand-pink">
                    {founder.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
