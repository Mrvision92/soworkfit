import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SitePhoto } from "@/components/ui/SitePhoto";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function Nutrition() {
  return (
    <section className="border-t hairline bg-noir">
      <div className="container-sw grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            kicker="Nutrition"
            title={
              <>
                Votre entraînement ne
                <br />
                s&apos;arrête pas <span className="text-metal">à la salle.</span>
              </>
            }
            lede="Selon votre coaching, un programme alimentaire personnalisé accompagne votre objectif. Simple, tenable, ajusté avec le coach au fil des semaines."
          />

          <Reveal delay={0.1}>
            {/* Offre en cours */}
            <div className="mt-8 rounded-2xl bg-coal p-6 shadow-[0_2px_16px_rgba(29,29,31,0.05)]">
              <p className="label-text text-bronze">Offre en cours</p>
              <p className="display-text mt-2 text-xl text-ivory md:text-2xl">
                {site.offers.nutrition}
              </p>
              <p className="mt-2 text-sm text-sand">
                Inclus avec les coachings concernés — demandez-le lors de
                votre première séance.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/plan-alimentaire">
                Recevoir votre plan alimentaire
              </Button>
              <Button href="/reserver" variant="ghost">
                Réserver ma séance offerte
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <SitePhoto
            id="nutrition"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-[4/3]"
          />
        </Reveal>
      </div>
    </section>
  );
}
