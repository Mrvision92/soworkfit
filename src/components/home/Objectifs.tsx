import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const objectifs = [
  { label: "Perdre du poids", href: "/coaching#prive" },
  { label: "Prise de masse", href: "/coaching#prive" },
  { label: "Remise en forme", href: "/coaching#collectif" },
  { label: "Performance", href: "/coaching#prive" },
  { label: "Rééducation", href: "/coaching#prive" },
  { label: "Spécifique football (7 à 16 ans)", href: "/football" },
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
                className="group flex items-center justify-between rounded-2xl bg-coal px-6 py-6 shadow-[0_2px_16px_rgba(29,29,31,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(29,29,31,0.09)]"
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
