export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center bg-brand-blue px-6 text-center overflow-hidden">
      {/* Decorative blob shapes */}
      <div className="absolute top-[-10%] right-[-5%] h-80 w-80 rounded-full bg-brand-purple/30 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] h-96 w-96 rounded-full bg-brand-pink/20 blur-3xl" />

      <p className="relative mb-4 text-sm font-semibold uppercase tracking-widest text-brand-pink">
        Connect &middot; Collaborate &middot; Grow
      </p>
      <h1 className="relative max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
        Empowering Women in Marketing
      </h1>
      <p className="relative mt-6 max-w-xl text-lg text-indigo-200">
        A community where women at every career stage come together to share
        knowledge, find mentors, and build the future of marketing.
      </p>
      <div className="relative mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#community"
          className="rounded-full bg-white px-8 py-3 text-sm font-bold text-brand-blue shadow-lg hover:bg-indigo-50 transition-colors"
        >
          Join the Community
        </a>
        <a
          href="#events"
          className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
        >
          Explore Events
        </a>
      </div>
    </section>
  );
}
