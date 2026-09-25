import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SitePhoto } from "@/components/ui/SitePhoto";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coaching enfants (7–15 ans)",
  description: `Coaching sportif pour enfants et adolescents de 7 à 15 ans. Encadrement adapté à l'âge, confiance, motricité, plaisir. ${site.experienceYears} ans d'expérience. Première séance offerte.`,
};

const piliers = [
  {
    title: "Confiance",
    text: "Progresser à son rythme, réussir, recommencer. La confiance se construit séance après séance.",
  },
  {
    title: "Motricité & coordination",
    text: "Courir, sauter, lancer, s'équilibrer : les fondations physiques qui servent toute la vie.",
  },
  {
    title: "Condition physique",
    text: "Une activité régulière, encadrée, adaptée à l'âge — loin des écrans.",
  },
  {
    title: "Plaisir & discipline",
    text: "Un cadre bienveillant mais structuré, où l'effort devient un jeu.",
  },
];

export default function EnfantsPage() {
  return (
    <>
      <PageHeader
        kicker="Coaching enfants · 7–15 ans"
        title={
          <>
            Bouger, progresser,
            <br />
            <span className="text-metal">prendre confiance.</span>
          </>
        }
        lede="Un encadrement adapté à l'âge de votre enfant, quel que soit son niveau de départ. L'objectif : qu'il progresse — et qu'il ait envie de revenir."
      />

      {/* Repères parents */}
      <section>
        <div className="container-sw py-16 md:py-20">
          <Reveal>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["7–15", "ans"],
                ["Tous", "niveaux"],
                ["Encadrement", "adapté à l'âge"],
                [`${site.experienceYears} ans`, "d'expérience"],
              ].map(([big, small]) => (
                <li
                  key={small}
                  className="rounded-2xl bg-coal p-6 text-center shadow-[0_2px_16px_rgba(29,29,31,0.05)] md:p-8"
                >
                  <p className="display-text text-metal text-3xl md:text-4xl">
                    {big}
                  </p>
                  <p className="label-text mt-2 text-ivory/50">{small}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Piliers */}
      <section className="border-t hairline bg-coal">
        <div className="container-sw grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              kicker="Ce qu'on travaille"
              title={
                <>
                  Bien plus que
                  <br />
                  <span className="text-metal">du sport.</span>
                </>
              }
              lede="Pas de performance extrême, pas de pression. Un accompagnement pensé pour le développement de l'enfant."
            />
            <Reveal delay={0.15}>
              <div className="mt-10">
                <SitePhoto id="enfants" className="aspect-[4/3]" />
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

      {/* CTA parents */}
      <section className="relative isolate overflow-hidden border-t hairline">
        <div className="pointer-events-none absolute inset-0 glow-bronze" />
        <div className="container-sw py-24 text-center md:py-32">
          <Reveal>
            <h2 className="display-text mx-auto max-w-2xl text-[clamp(2.2rem,6vw,4rem)]">
              La première séance est{" "}
              <span className="text-metal">offerte.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base text-sand">
              Venez voir comment votre enfant réagit, sans engagement. Vous
              jugerez sur place.
            </p>
            <div className="mt-10">
              <Button href="/reserver?coaching=enfants">
                Réserver une séance pour mon enfant
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
