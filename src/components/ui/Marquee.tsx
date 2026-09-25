import { Chevron } from "./Marks";

/**
 * Bandeau défilant — énergie sportive entre deux sections.
 * Pur CSS (`.anim-marquee`), figé si prefers-reduced-motion.
 */
export function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const Row = ({ hidden }: { hidden?: boolean }) => (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="display-text whitespace-nowrap text-2xl text-ivory/60 md:text-3xl">
            {it}
          </span>
          <Chevron className="w-5 shrink-0 -rotate-90 opacity-70" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden border-y hairline bg-noir py-5 ${className}`}
    >
      <div className="anim-marquee flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
