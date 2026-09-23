import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const objectifs = [
  { label: "Perdre du poids", href: "/coaching#prive" },
  { label: "Me transformer physiquement", href: "/coaching#prive" },
  { label: "Reprendre le sport", href: "/coaching#collectif" },
  { label: "Améliorer ma condition", href: "/coaching#collectif" },
  { label: "Faire progresser mon enfant", href: "/enfants" },
  { label: "Progresser au football", href: "/football" },
];

export function Objectifs() {
  return (
    <section className="border-t hairline">
      <div className="container-sw py-20 md:py-28">
        <SectionHeading
          kicker="Par où commencer"
          title={
            <>
              Choisissez <span className="text-metal">votre objectif.</span>
            </>
          }
          lede="Chaque parcours commence par une intention claire. La méthode s'adapte ensuite."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {objectifs.map((o, i) => (
            <Reveal key={o.label} delay={i * 0.06}>
              <Link
                href={o.href}
                className="group flex items-center justify-between border hairline px-6 py-6 transition-all duration-300 hover:border-bronze/60 hover:bg-ash"
              >
                <span className="display-text text-lg text-ivory transition-colors group-hover:text-champagne md:text-xl">
                  {o.label}
                </span>
                <span
                  aria-hidden
                  className="text-bronze opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
