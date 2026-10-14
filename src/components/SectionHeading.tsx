// Section heading in the brand-book style: small label, bold line, and a
// highlighted phrase in a pink box tilted -3°.
export default function SectionHeading({
  label,
  title,
  highlight,
  align = "center",
}: {
  label: string;
  title: string;
  highlight?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : "text-left"}>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-pink">
        {label}
      </p>
      <h2
        className={`mt-3 flex flex-col gap-2 font-display text-3xl leading-tight text-white sm:text-4xl ${
          centered ? "items-center" : "items-start"
        }`}
      >
        <span>{title}</span>
        {highlight && (
          <span
            className={`inline-block px-[0.45em] pt-[0.05em] pb-[0.12em] font-medium italic tracking-normal shadow-[0_10px_30px_rgba(30,27,75,0.3)] bg-brand-pink text-brand-dark -rotate-3 rounded-[18px]`}
          >
            {highlight}
          </span>
        )}
      </h2>
    </div>
  );
}
