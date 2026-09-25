import { Chevron, Halo } from "./Marks";
import { Reveal } from "./Reveal";

export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: React.ReactNode;
  lede?: string;
}) {
  return (
    <header className="relative isolate overflow-hidden border-b hairline">
      <Halo className="pointer-events-none absolute -right-[20rem] -top-[16rem] w-[42rem] opacity-30" />
      <div className="container-sw pb-16 pt-36 md:pb-20 md:pt-44">
        <Reveal punch>
          <p className="label-text flex items-center gap-3 text-bronze">
            <Chevron className="w-3.5 -rotate-90" />
            {kicker}
          </p>
          <h1 className="display-text mt-6 max-w-4xl text-[clamp(2.6rem,7.5vw,5.2rem)]">
            {title}
          </h1>
          {lede && (
            <p className="mt-7 max-w-xl text-base leading-relaxed text-sand md:text-lg">
              {lede}
            </p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
