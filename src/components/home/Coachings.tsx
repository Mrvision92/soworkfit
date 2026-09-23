import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SitePhoto } from "@/components/ui/SitePhoto";
import { coachings } from "@/lib/site";

/**
 * Les 4 coachings — composition éditoriale en rangées.
 * Au survol (desktop) : les détails se révèlent. Sur mobile, l'essentiel
 * reste visible sans interaction.
 */
export function Coachings() {
  return (
    <section className="border-t hairline bg-coal">
      <div className="container-sw py-20 md:py-28">
        <SectionHeading
          kicker="Les coachings"
          title={
            <>
              Quatre parcours.
              <br />
              <span className="text-metal">Une même exigence.</span>
            </>
          }
        />

        <div className="mt-14 border-t hairline">
          {coachings.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <Link
                href={c.href}
                className="group grid gap-x-8 gap-y-4 border-b hairline py-8 transition-colors duration-500 hover:bg-ash/60 md:grid-cols-[4rem_1fr_1fr_2.5rem] md:items-center md:py-10"
              >
                <span className="display-text text-2xl text-bronze/50 transition-colors duration-500 group-hover:text-bronze md:text-3xl">
                  {c.num}
                </span>

                <div>
                  <h3 className="display-text text-3xl text-ivory transition-colors duration-300 group-hover:text-champagne md:text-4xl">
                    {c.title}
                  </h3>
                  <p className="label-text mt-2 text-ivory/45">{c.audience}</p>
                </div>

                <div>
                  <p className="serif-accent text-lg text-sand">{c.hook}</p>
                  {/* Détails révélés au survol sur desktop */}
                  <ul className="mt-3 hidden space-y-1 overflow-hidden text-sm text-ivory/60 transition-all duration-500 md:block md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100">
                    {c.points.slice(0, 3).map((p) => (
                      <li key={p} className="flex gap-2">
                        <span aria-hidden className="text-bronze">
                          —
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <span
                  aria-hidden
                  className="hidden text-2xl text-bronze transition-transform duration-300 group-hover:translate-x-1.5 md:block"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Bande visuelle éditoriale */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <Reveal>
            <SitePhoto
              id="priveHome"
              sizes="(min-width: 768px) 33vw, 100vw"
              className="aspect-[4/3]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SitePhoto
              id="collectifHome"
              sizes="(min-width: 768px) 33vw, 100vw"
              className="aspect-[4/3] md:translate-y-8"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <SitePhoto
              id="jeunesEdito"
              sizes="(min-width: 768px) 33vw, 100vw"
              className="aspect-[4/3]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
