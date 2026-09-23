import { Chevron } from "./Marks";
import { Reveal } from "./Reveal";

export function SectionHeading({
  kicker,
  title,
  lede,
  align = "left",
}: {
  kicker: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`label-text mb-5 flex items-center gap-3 text-bronze ${
          centered ? "justify-center" : ""
        }`}
      >
        <Chevron className="w-3.5 -rotate-90" />
        {kicker}
      </p>
      <h2 className="display-text text-[clamp(2.1rem,5.5vw,3.9rem)]">
        {title}
      </h2>
      {lede && (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-sand md:text-lg">
          {lede}
        </p>
      )}
    </Reveal>
  );
}
