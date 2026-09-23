import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

/**
 * Section résultats — structure prête, données réelles uniquement.
 * Aucune transformation n'est inventée : les emplacements seront remplis
 * avec de vraies photos et de vrais parcours clients.
 */
export function Transformations() {
  return (
    <section id="resultats" className="border-t hairline">
      <div className="container-sw py-20 md:py-28">
        <SectionHeading
          kicker="Résultats"
          title={
            <>
              Des progressions
              <br />
              <span className="text-metal">réelles.</span>
            </>
          }
          lede="Ici, uniquement de vrais parcours — objectif, durée, résultat. Les premières transformations documentées arrivent bientôt."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[1, 2].map((n, i) => (
            <Reveal key={n} delay={i * 0.1}>
              <figure className="border hairline">
                <div className="grid grid-cols-2 gap-px bg-ivory/8">
                  <MediaPlaceholder label="Avant" className="aspect-[3/4]" />
                  <MediaPlaceholder label="Après" className="aspect-[3/4]" />
                </div>
                <figcaption className="grid grid-cols-3 gap-4 p-5">
                  {["Objectif", "Durée", "Résultat"].map((k) => (
                    <div key={k}>
                      <p className="label-text text-bronze/70">{k}</p>
                      <p className="mt-1 text-sm text-ivory/40">À venir</p>
                    </div>
                  ))}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
