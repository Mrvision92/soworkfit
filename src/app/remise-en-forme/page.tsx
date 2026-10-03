import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Methode } from "@/components/home/Methode";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Remise en forme",
  description: `Reprise du sport et remise en forme avec ${site.name} : en privé ou en petit groupe, à votre rythme et quel que soit votre niveau. Première séance offerte.`,
};

const piliers = [
  {
    title: "Reprendre en douceur",
    text: "Même après des années sans sport : on commence là où vous en êtes, sans vous mettre en difficulté.",
  },
  {
    title: "Retrouver du souffle",
    text: "Cardio, endurance, mobilité : les séances redonnent de l'énergie au quotidien, pas seulement à la salle.",
  },
  {
    title: "Seul ou en groupe",
    text: "En coaching privé, ou en petit groupe de 6 personnes maximum pour l'émulation et le suivi du coach.",
  },
  {
    title: "Une habitude qui tient",
    text: "Un rythme réaliste et un suivi régulier : l'objectif, c'est que vous soyez encore là dans six mois.",
  },
];

export default function RemiseEnFormePage() {
  return (
    <>
      <PageHeader
        photo="remiseEnForme"
        kicker="Remise en forme"
        title={
          <>
            Reprendre le sport,
            <br />
            <span className="text-metal-light">pour de bon.</span>
          </>
        }
        lede="Un accompagnement progressif pour retrouver la forme, l'énergie et l'envie — quel que soit votre niveau de départ."
      />

      <section>
        <div className="container-sw grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              kicker="La méthode"
              title={
                <>
                  À votre rythme,
                  <br />
                  <span className="text-metal">dès la première séance.</span>
                </>
              }
              lede="Pas de niveau minimum, pas de jugement : on évalue votre condition réelle et on construit à partir de là."
            />
            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/reserver?coaching=collectif">
                  Réserver ma séance offerte
                </Button>
                <Button href="/coaching#collectif" variant="ghost">
                  Voir le coaching collectif
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
              Venez essayer, sans engagement. Vous jugerez sur place.
            </p>
            <div className="mt-10">
              <Button href="/reserver?coaching=collectif">
                Réserver ma séance offerte
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
