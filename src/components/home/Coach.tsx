import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SitePhoto } from "@/components/ui/SitePhoto";
import { Halo } from "@/components/ui/Marks";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function Coach() {
  return (
    <section className="relative isolate overflow-hidden border-t hairline">
      <Halo className="pointer-events-none absolute -left-[22rem] top-0 w-[44rem] opacity-30" />

      <div className="container-sw grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <SitePhoto
              id="portraitHome"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[3/4]"
            />
            <p className="display-text absolute -right-2 bottom-8 bg-noir px-4 py-2 text-2xl md:-right-6">
              <span className="text-metal">{site.experienceYears} ans</span>
            </p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            kicker={site.coach}
            title={
              <>
                {site.experienceYears} ans à accompagner
                <br />
                <span className="text-metal">chaque progression.</span>
              </>
            }
          />
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-sand md:text-lg">
              Depuis quinze ans, Soufiane accompagne des profils très
              différents : des adultes qui reprennent le sport, des personnes
              en pleine transformation, des enfants qui découvrent l&apos;activité
              physique, de jeunes footballeurs qui veulent franchir un cap.
            </p>
            <p className="serif-accent mt-6 max-w-lg text-xl text-ivory md:text-2xl">
              « La méthode ne change pas : partir de votre niveau réel, et
              construire à partir de là. »
            </p>

            <ul className="mt-10 grid gap-4 border-t hairline pt-8 sm:grid-cols-3">
              {[
                "Approche personnalisée",
                "Suivi humain, régulier",
                "Tous les niveaux",
              ].map((v) => (
                <li key={v} className="label-text text-ivory/70">
                  <span aria-hidden className="mb-2 block h-px w-8 bg-bronze" />
                  {v}
                </li>
              ))}
            </ul>

            <Button href="/a-propos" variant="bare" className="mt-10">
              Faire connaissance
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
