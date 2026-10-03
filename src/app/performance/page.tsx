import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Methode } from "@/components/home/Methode";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Performance",
  description: `Préparation physique et performance avec ${site.name} : force, explosivité, endurance et technique. Programme personnalisé, première séance offerte.`,
};

const piliers = [
  {
    title: "Force et explosivité",
    text: "Des charges et des mouvements choisis pour développer la puissance utile à votre discipline.",
  },
  {
    title: "Technique maîtrisée",
    text: "Chaque geste est corrigé avant d'être chargé. La performance passe d'abord par l'exécution.",
  },
  {
    title: "Endurance et capacité",
    text: "Tenir l'intensité du début à la fin : le travail cardio-musculaire est intégré au programme.",
  },
  {
    title: "Mesure et ajustement",
    text: "Des repères concrets séance après séance — on sait ce qui progresse et ce qu'il faut corriger.",
  },
];

export default function PerformancePage() {
  return (
    <>
      <PageHeader
        photo="performance"
        kicker="Performance"
        title={
          <>
            Plus fort,
            <br />
            <span className="text-metal-light">plus explosif.</span>
          </>
        }
        lede="Une préparation physique construite pour votre discipline et votre niveau : force, vitesse, endurance et technique."
      />

      <section>
        <div className="container-sw grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              kicker="La méthode"
              title={
                <>
                  La performance
                  <br />
                  <span className="text-metal">se construit.</span>
                </>
              }
              lede="En coaching privé : un plan bâti sur votre niveau réel, vos contraintes et l'échéance que vous préparez."
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
              Venez faire le point sur votre niveau actuel, sans engagement.
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
