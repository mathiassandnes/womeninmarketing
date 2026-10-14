// Speech bubble from the brand book: 28px corners with one 6px corner as the
// tail, tilted 3.5° (white leans left, pink leans right).
export const bubbleStyles = {
  white:
    "bg-white text-brand-dark -rotate-[3.5deg] rounded-[28px] rounded-bl-[6px]",
  pink: "bg-brand-pink text-brand-dark rotate-[3.5deg] rounded-[28px] rounded-br-[6px]",
};

export default function SpeechBubble({
  children,
  color = "white",
  className = "",
}: {
  children: React.ReactNode;
  color?: "white" | "pink";
  className?: string;
}) {
  return (
    <span
      className={`inline-block px-4 py-2 text-sm font-semibold shadow-lg ${bubbleStyles[color]} ${className}`}
    >
      {children}
    </span>
  );
}
