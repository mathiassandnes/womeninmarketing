import SpeechBubble from "@/components/SpeechBubble";

export default function WorkshopsHero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center bg-gradient-to-br from-brand-blue via-brand-indigo to-brand-purple px-6 pt-24 pb-16 text-center overflow-hidden">
      {/* "Bubble" background from the brand book */}
      <div className="absolute -right-32 -bottom-48 h-[34rem] w-[34rem] rounded-full bg-brand-dark/30" />
      <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-pink/30" />
      <div className="absolute top-[18%] right-[-4rem] h-44 w-72 rotate-3 rounded-[3rem] rounded-br-md bg-white/10 sm:right-[5%]" />
      <div className="absolute bottom-[14%] left-[-4rem] h-40 w-64 -rotate-3 rounded-[3rem] rounded-bl-md bg-white/10 sm:left-[4%]" />

      <p className="relative text-sm font-bold uppercase tracking-[0.22em] text-brand-pink">
        Women in Marketing workshops
      </p>
      <h1 className="relative mt-4 flex max-w-4xl flex-col items-center gap-3 font-display text-5xl leading-tight text-white sm:text-6xl md:text-7xl">
        <span>Learn it.</span>
        <span className="inline-block -rotate-3 rounded-[18px] bg-brand-pink px-[0.4em] pt-[0.08em] pb-[0.14em] font-medium italic tracking-normal text-brand-dark shadow-[0_10px_30px_rgba(30,27,75,0.35)]">
          Use it tomorrow.
        </span>
      </h1>
      <p className="relative mt-6 max-w-2xl text-xl leading-relaxed text-indigo-100 md:text-2xl">
        Hands-on workshops for marketers in Oslo. Small groups, real
        examples, and you leave with something that works.
      </p>

      <div className="relative mt-8 flex flex-wrap justify-center gap-2.5">
        <span className="rounded-full border border-white/50 bg-white/15 px-4 py-1.5 text-sm font-semibold text-white">
          Small groups
        </span>
        <span className="rounded-full border border-white/50 bg-white/15 px-4 py-1.5 text-sm font-semibold text-white">
          Mesh, Oslo
        </span>
      </div>

      <div className="relative mt-10">
        <a
          href="#workshops"
          className="inline-block rounded-full bg-white px-9 py-4 text-base font-bold text-brand-blue shadow-lg hover:bg-indigo-50 transition-colors"
        >
          See upcoming workshops
        </a>
        <span className="absolute -top-7 -right-16 hidden sm:block">
          <SpeechBubble>Save your seat!</SpeechBubble>
        </span>
      </div>
    </section>
  );
}
