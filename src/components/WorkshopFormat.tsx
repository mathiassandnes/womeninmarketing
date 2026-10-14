import SectionHeading from "@/components/SectionHeading";

// "How it works" cards, in the style of the brand presentation
const steps = [
  {
    label: "You bring",
    title: "Your real work",
    text: "The posts, campaigns and tasks you deal with every week.",
  },
  {
    label: "We bring",
    title: "Tools and structure",
    text: "Clear steps, live examples and time to practise with help.",
  },
];

export default function WorkshopFormat() {
  return (
    <section className="bg-gradient-to-br from-brand-blue via-brand-indigo to-brand-purple py-20 px-6 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-pink/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand-dark/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          label="How it works"
          title="Learning by doing"
          highlight="not just listening"
        />

        <div className="mt-12 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {steps.map((step, index) => (
            <div key={step.label} className="contents">
              <div className="rounded-2xl border border-white/15 bg-brand-dark/40 p-6 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-purple">
                  {step.label}
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {step.text}
                </p>
              </div>
              <span
                className="text-center text-3xl font-bold text-brand-purple"
                aria-hidden
              >
                {index === 0 ? "+" : "="}
              </span>
            </div>
          ))}
          <div className="rounded-2xl bg-brand-blue p-6 shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">
              Result
            </p>
            <h3 className="mt-2 text-xl font-bold text-white">
              Something that works
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              A workflow, template or plan you can use the next day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
