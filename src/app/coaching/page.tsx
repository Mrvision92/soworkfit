import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SitePhoto } from "@/components/ui/SitePhoto";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/home/FinalCTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coaching privé & collectif",
  description: `Coaching sportif privé et petits groupes (6 pers. max) avec ${site.coach}. Perte de poids, transformation, remise en forme. Première séance offerte.`,
};

export default function CoachingPage() {
  return (
    <>
      <PageHeader
        kicker="Coaching adultes"
        title={
          <>
            Votre objectif.
            <br />
            <span className="text-metal">Votre rythme.</span>
          </>
        }
        lede="Deux formats, une même méthode : partir de votre niveau réel et construire une progression mesurable."
      />

      {/* ————— 01 · Coaching privé ————— */}
      <section id="prive" className="scroll-mt-24">
        <div className="container-sw grid items-start gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              kicker="01 — Coaching privé"
              title={
                <>
                  Un programme construit
                  <br />
                  <span className="text-metal">pour vous seul.</span>
                </>
              }
              lede="Perte de poids, transformation physique, remise en forme, prise de muscle, reprise du sport : chaque séance sert votre objectif, pas celui d'un plan générique."
            />
            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-4 border-t hairline pt-8">
                {[
                  "Accompagnement entièrement personnalisé",
                  "Programme adapté à votre niveau de départ",
                  "Suivi régulier, objectifs mesurables",
                  "Programme alimentaire offert jusqu'à la fin de l'année",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-ivory/80">
                    <span aria-hidden className="mt-2.5 h-px w-6 shrink-0 bg-bronze" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href="/reserver?coaching=prive">
                  Réserver ma séance offerte
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <SitePhoto id="privePage" className="aspect-[4/5]" />
          </Reveal>
        </div>
      </section>

      {/* ————— 02 · Coaching collectif ————— */}
      <section id="collectif" className="scroll-mt-24 border-t hairline bg-coal">
        <div className="container-sw grid items-start gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal delay={0.15} className="order-2 lg:order-1">
            <SitePhoto id="collectifPage" className="aspect-[4/5]" />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              kicker="02 — Coaching collectif"
              title={
                <>
                  L&apos;énergie du groupe,
                  <br />
                  <span className="text-metal">le suivi d&apos;un coach.</span>
                </>
              }
              lede="Des sessions en petit comité — six personnes maximum — pour garder un vrai regard du coach sur chacun, à tous les niveaux."
            />
            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-4 border-t hairline pt-8">
                {[
                  "6 personnes maximum par session",
                  "Accessible à tous les niveaux",
                  "Transformation, remise en forme, condition physique",
                  "Motivation et dépassement, sans se perdre dans la masse",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-ivory/80">
                    <span aria-hidden className="mt-2.5 h-px w-6 shrink-0 bg-bronze" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href="/reserver?coaching=collectif">
                  Tester gratuitement
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
