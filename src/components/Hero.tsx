export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center bg-gradient-to-br from-brand-blue via-brand-indigo to-brand-purple px-6 text-center overflow-hidden">
      {/* "Bubble" background from the brand book: two soft circles and tilted speech bubbles */}
      <div className="absolute -left-32 -bottom-48 h-[34rem] w-[34rem] rounded-full bg-brand-dark/30" />
      <div className="absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-brand-pink/30" />
      <div className="absolute top-[14%] left-[-4rem] h-48 w-72 -rotate-3 rounded-[3rem] rounded-bl-md bg-white/10 sm:left-[4%]" />
      <div className="absolute bottom-[12%] right-[-4rem] h-40 w-64 rotate-3 rounded-[3rem] rounded-br-md bg-white/10 sm:right-[5%]" />

      <h1 className="relative flex max-w-4xl flex-col items-center gap-3 font-display text-5xl leading-tight text-white sm:text-6xl md:text-7xl">
        <span>Women in</span>
        <span className="inline-block -rotate-3 rounded-[18px] bg-brand-pink px-[0.4em] pt-[0.08em] pb-[0.14em] font-bold italic text-brand-dark shadow-[0_10px_30px_rgba(30,27,75,0.35)]">
          Marketing
        </span>
      </h1>
      <p className="relative mt-6 max-w-2xl text-xl leading-relaxed text-indigo-200 md:text-2xl">
        Women in Marketing is a community of{" "}
        <strong className="font-bold text-white">real connections</strong>. A{" "}
        <strong className="font-bold text-white">safe space</strong> where
        women in marketing{" "}
        <strong className="font-bold text-white">
          grow, lead, and learn together
        </strong>
        .
      </p>
      <div className="relative mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#community"
          className="rounded-full bg-white px-9 py-4 text-base font-bold text-brand-blue shadow-lg hover:bg-indigo-50 transition-colors"
        >
          Join the Community
        </a>
        <a
          href="#events"
          className="rounded-full border-[1.5px] border-white px-9 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors"
        >
          Explore Events
        </a>
      </div>
    </section>
  );
}
