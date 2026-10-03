import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Methode } from "@/components/home/Methode";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rééducation & reprise",
  description: `Reprise du sport après blessure avec ${site.name} : renforcement progressif, équilibre et mobilité, en complément de votre suivi médical. Première séance offerte.`,
};

const piliers = [
  {
    title: "Reprise progressive",
    text: "On repart du mouvement maîtrisé, sans douleur, avant d'augmenter la charge et l'intensité.",
  },
  {
    title: "Équilibre et stabilité",
    text: "Proprioception, gainage, appuis : retrouver un corps stable avant de retrouver la performance.",
  },
  {
    title: "Mobilité et souplesse",
    text: "Redonner de l'amplitude aux articulations concernées et aux chaînes musculaires associées.",
  },
  {
    title: "En lien avec votre suivi",
    text: "Le travail s'adapte aux consignes de votre médecin ou kinésithérapeute — il les complète, il ne les remplace pas.",
  },
];

export default function ReeducationPage() {
  return (
    <>
      <PageHeader
        photo="reeducation"
        kicker="Rééducation & reprise"
        title={
          <>
            Reprendre,
            <br />
            <span className="text-metal-light">sans brusquer.</span>
          </>
        }
        lede="Un accompagnement sportif progressif pour revenir après une blessure ou une longue coupure, en complément de votre suivi médical."
      />

      <section>
        <div className="container-sw grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              kicker="La méthode"
              title={
                <>
                  Avancer au rythme
                  <br />
                  <span className="text-metal">de votre corps.</span>
                </>
              }
              lede="En coaching privé : chaque séance est calibrée sur ce que votre corps accepte aujourd'hui, pas sur ce qu'il faisait avant."
            />
            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/reserver?coaching=prive">
                  Réserver ma séance offerte
                </Button>
                <Button href="/contact" variant="ghost">
                  Poser une question
                </Button>
              </div>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-sand">
                SO WORKFIT est un accompagnement sportif, pas un acte médical :
                la reprise se fait avec l&apos;accord de votre médecin ou de
                votre kinésithérapeute.
              </p>
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
              Venez faire le point sur votre situation, sans engagement.
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
