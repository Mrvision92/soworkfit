import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SitePhoto } from "@/components/ui/SitePhoto";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Préparation physique football (7–15 ans)",
  description:
    "Préparation physique individuelle pour jeunes footballeurs de 7 à 15 ans : explosivité, vitesse, coordination, technique, endurance. Première séance offerte.",
};

const axes = [
  ["Explosivité", "Démarrages, duels, premiers appuis"],
  ["Vitesse", "Accélération et fréquence de course"],
  ["Coordination", "Appuis, agilité, changements de direction"],
  ["Technique", "Qualité de geste sous fatigue"],
  ["Endurance", "Tenir l'intensité sur tout le match"],
  ["Remise à niveau", "Retour de blessure ou de coupure"],
];

/** Lignes de terrain — signature graphique de la section football. */
function FieldLines() {
  return (
    <svg
      viewBox="0 0 1200 600"
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="#e6cfa3" strokeWidth="1.5" fill="none">
        <line x1="600" y1="0" x2="600" y2="600" />
        <circle cx="600" cy="300" r="110" />
        <rect x="0" y="140" width="180" height="320" />
        <rect x="1020" y="140" width="180" height="320" />
      </g>
    </svg>
  );
}

export default function FootballPage() {
  return (
    <>
      <div className="relative">
        <FieldLines />
        <PageHeader
          kicker="Préparation physique football · 7–15 ans"
          title={
            <>
              Travaille ce qui fait
              <br />
              la différence{" "}
              <span className="text-metal">sur le terrain.</span>
            </>
          }
          lede="Un accompagnement individuel, complémentaire au club, pour aider le jeune joueur à progresser physiquement et techniquement."
        />
      </div>

      {/* Axes de travail — présentation type données de performance */}
      <section className="border-t hairline bg-coal">
        <div className="container-sw py-20 md:py-28">
          <SectionHeading
            kicker="Axes de travail"
            title={
              <>
                Six qualités.
                <br />
                <span className="text-metal">Un joueur plus complet.</span>
              </>
            }
          />
          <div className="mt-14 grid gap-px border hairline bg-ivory/8 sm:grid-cols-2 lg:grid-cols-3">
            {axes.map(([title, text], i) => (
              <Reveal key={title} delay={i * 0.06} className="bg-coal">
                <div className="group h-full p-7 transition-colors duration-500 hover:bg-ash md:p-8">
                  <p className="display-text text-bronze/50 transition-colors group-hover:text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display-text mt-4 text-2xl text-ivory">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-sand">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Message aux parents */}
      <section className="border-t hairline">
        <div className="container-sw grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SitePhoto id="football" className="aspect-[4/3]" />
          </Reveal>
          <div>
            <SectionHeading
              kicker="Pour les parents"
              title={
                <>
                  Un complément,
                  <br />
                  <span className="text-metal">pas une promesse.</span>
                </>
              }
              lede="Le club forme le joueur. Ici, on renforce ce que le collectif n'a pas le temps de travailler individuellement : les appuis, la vitesse, la coordination, la condition physique."
            />
            <Reveal delay={0.1}>
              <p className="serif-accent mt-8 max-w-md text-xl text-ivory">
                « Chaque joueur progresse à partir de son propre niveau —
                l&apos;important, c&apos;est le cap franchi. »
              </p>
              <p className="label-text mt-4 text-ivory/40">
                {site.coach} · {site.experienceYears} ans d&apos;expérience
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-t hairline bg-ash">
        <FieldLines />
        <div className="pointer-events-none absolute inset-0 glow-bronze" />
        <div className="container-sw py-24 text-center md:py-32">
          <Reveal>
            <h2 className="display-text mx-auto max-w-2xl text-[clamp(2.2rem,6vw,4rem)]">
              Premier entraînement{" "}
              <span className="text-metal">offert.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base text-sand">
              7–15 ans, tous niveaux, tous postes. Venez tester une séance.
            </p>
            <div className="mt-10">
              <Button href="/reserver?coaching=football">
                Réserver un entraînement
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
