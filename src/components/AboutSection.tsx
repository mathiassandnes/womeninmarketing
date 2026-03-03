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
      </div>
    </section>
  );
}
