import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Methode } from "@/components/home/Methode";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Perte de poids",
  description: `Programme de perte de poids personnalisé avec ${site.name} : entraînement adapté, programme alimentaire offert et suivi régulier. Première séance offerte.`,
};

const piliers = [
  {
    title: "Un programme à votre niveau",
    text: "On part de votre condition réelle — pas d'un plan générique. L'intensité monte au rythme de vos progrès.",
  },
  {
    title: "L'alimentation incluse",
    text: "Un programme alimentaire personnalisé accompagne vos séances. Simple et tenable — offert jusqu'à la fin de l'année.",
  },
  {
    title: "Un suivi qui tient dans la durée",
    text: "Des repères mesurables, ajustés chaque semaine. Le coach reste présent entre les séances.",
  },
  {
    title: "Sans régime extrême",
    text: "Pas de promesses irréalistes : une perte de poids progressive, durable, encadrée.",
  },
];

export default function PerteDePoidsPage() {
  return (
    <>
      <PageHeader
        photo="perteDePoids"
        kicker="Perte de poids"
        title={
          <>
            Le déclic, c&apos;est
            <br />
            <span className="text-metal-light">maintenant.</span>
          </>
        }
        lede="Un accompagnement complet — entraînement, alimentation, suivi — pour perdre du poids durablement, à votre rythme."
      />

      <section>
        <div className="container-sw grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              kicker="La méthode"
              title={
                <>
                  Perdre du poids,
                  <br />
                  <span className="text-metal">sans se perdre.</span>
                </>
              }
              lede="En coaching privé ou en petit groupe : chaque séance sert votre objectif, et le suivi fait le reste."
            />
            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/reserver?coaching=prive">
                  Réserver ma séance offerte
                </Button>
                <Button href="/plan-alimentaire" variant="ghost">
                  Recevoir mon plan alimentaire
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 self-start sm:grid-cols-2">
            {piliers.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07} className="h-full">
                <div className="h-full rounded-2xl bg-coal p-7 shadow-[0_2px_16px_rgba(29,29,31,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(29,29,31,0.08)]">
                  <h3 className="display-text text-xl text-champagne">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Methode />

      <section className="relative isolate overflow-hidden border-t hairline">
        <div className="pointer-events-none absolute inset-0 glow-bronze" />
        <div className="container-sw py-24 text-center md:py-32">
          <Reveal punch>
            <h2 className="display-text mx-auto max-w-2xl text-[clamp(2.2rem,6vw,4rem)]">
              La première séance est{" "}
              <span className="text-metal">offerte.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base text-sand">
              Venez évaluer votre point de départ, sans engagement.
            </p>
            <div className="mt-10">
              <Button href="/reserver?coaching=prive">
                Réserver ma séance offerte
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
