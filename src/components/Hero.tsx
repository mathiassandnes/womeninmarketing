export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center bg-brand-blue px-6 text-center overflow-hidden">
      {/* Decorative blob shapes */}
      <div className="absolute top-[-10%] right-[-5%] h-80 w-80 rounded-full bg-brand-purple/30 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] h-96 w-96 rounded-full bg-brand-pink/20 blur-3xl" />

      {/* Concentric rings - top left */}
      <svg
        className="absolute -top-16 -left-16 w-[400px] h-[400px] text-white/10"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Organic swirl - right side */}
      <svg
        className="absolute top-[15%] -right-10 w-[350px] h-[350px] text-white/10"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 20C140 20 170 50 170 90C170 130 140 150 120 170C100 190 60 180 40 150C20 120 30 80 60 50C75 35 85 20 100 20Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M100 45C128 45 148 62 148 90C148 118 128 138 112 152C96 166 68 158 52 138C36 118 44 88 62 68C73 57 87 45 100 45Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      {/* Wavy path - bottom */}
      <svg
        className="absolute bottom-8 left-0 w-full h-[120px] text-white/8"
        viewBox="0 0 1200 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60C100 20 200 100 300 60C400 20 500 100 600 60C700 20 800 100 900 60C1000 20 1100 100 1200 60"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M0 80C100 40 200 120 300 80C400 40 500 120 600 80C700 40 800 120 900 80C1000 40 1100 120 1200 80"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      {/* Scattered dots - bottom left */}
      <svg
        className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] text-brand-pink/20"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="20" cy="40" r="5" fill="currentColor" />
        <circle cx="70" cy="20" r="3" fill="currentColor" />
        <circle cx="50" cy="80" r="4" fill="currentColor" />
        <circle cx="120" cy="60" r="6" fill="currentColor" />
        <circle cx="30" cy="140" r="4" fill="currentColor" />
        <circle cx="90" cy="130" r="3" fill="currentColor" />
        <circle cx="160" cy="100" r="5" fill="currentColor" />
        <circle cx="140" cy="160" r="3.5" fill="currentColor" />
      </svg>

      {/* Diamond shapes - top right area */}
      <svg
        className="absolute top-[5%] right-[15%] w-[200px] h-[200px] text-brand-purple/15"
        viewBox="0 0 200 200"
        fill="none"
      >
        <rect x="80" y="30" width="40" height="40" rx="4" transform="rotate(45 100 50)" stroke="currentColor" strokeWidth="1.5" />
        <rect x="120" y="80" width="30" height="30" rx="3" transform="rotate(45 135 95)" stroke="currentColor" strokeWidth="1.5" />
        <rect x="50" y="100" width="25" height="25" rx="3" transform="rotate(45 62 112)" stroke="currentColor" strokeWidth="1.5" />
      </svg>

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
