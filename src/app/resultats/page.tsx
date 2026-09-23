import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Transformations } from "@/components/home/Transformations";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Résultats & témoignages",
  description:
    "Transformations et témoignages réels des clients SO WORKFIT. Objectif, durée, résultat — sans promesses irréalistes.",
};

export default function ResultatsPage() {
  return (
    <>
      <PageHeader
        kicker="Résultats"
        title={
          <>
            Ce qui compte :
            <br />
            <span className="text-metal">votre progression.</span>
          </>
        }
        lede="Aucun chiffre gonflé, aucun avis inventé. Cette page se remplit uniquement avec de vrais parcours et de vraies voix."
      />

      <Transformations />

      {/* Témoignages — structure prête, contenus réels uniquement */}
      <section className="border-t hairline bg-coal">
        <div className="container-sw py-20 md:py-28">
          <Reveal>
            <p className="label-text text-bronze">Témoignages</p>
            <h2 className="display-text mt-5 text-[clamp(2rem,5vw,3.4rem)]">
              Leurs mots, <span className="text-metal">pas les nôtres.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px border hairline bg-ivory/8 md:grid-cols-3">
            {[1, 2, 3].map((n, i) => (
              <Reveal key={n} delay={i * 0.08} className="bg-coal">
                <blockquote className="flex h-full min-h-56 flex-col justify-between p-7">
                  <p className="serif-accent text-lg text-ivory/30">
                    « Les premiers avis clients seront publiés ici. »
                  </p>
                  <footer className="label-text mt-6 text-ivory/25">
                    À venir
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
