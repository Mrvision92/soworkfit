import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SitePhoto } from "@/components/ui/SitePhoto";
import { Methode } from "@/components/home/Methode";
import { FinalCTA } from "@/components/home/FinalCTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `À propos — ${site.coach}`,
  description: `${site.coach}, coach sportif depuis ${site.experienceYears} ans. Coaching privé, collectif, enfants et préparation physique football.`,
};

export default function AProposPage() {
  return (
    <>
      <PageHeader
        kicker="À propos"
        title={
          <>
            {site.coach}.
            <br />
            <span className="text-metal">
              {site.experienceYears} ans de terrain.
            </span>
          </>
        }
      />

      <section>
        <div className="container-sw grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SitePhoto
              id="portraitAPropos"
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="aspect-[3/4]"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-xl space-y-6 text-base leading-relaxed text-sand md:text-lg">
              <p className="serif-accent text-2xl text-ivory md:text-3xl">
                Quinze ans que le métier est le même : écouter, évaluer,
                construire, suivre.
              </p>
              <p>
                Soufiane a accompagné des profils très différents — des
                adultes qui reprennent le sport après des années d&apos;arrêt,
                des personnes engagées dans une vraie transformation physique,
                des enfants qui découvrent le mouvement, de jeunes
                footballeurs qui préparent la saison.
              </p>
              <p>
                Ce qui ne change jamais : le programme part de votre niveau
                réel, pas d&apos;un modèle. Et le suivi ne s&apos;arrête pas
                quand la séance se termine.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                [`${site.experienceYears} ans`, "d'expérience"],
                ["4", "types de coaching"],
                ["1", "méthode : la vôtre"],
              ].map(([big, small]) => (
                <li
                  key={small}
                  className="rounded-2xl bg-coal p-6 text-center shadow-[0_2px_16px_rgba(29,29,31,0.05)]"
                >
                  <p className="display-text text-metal text-3xl">{big}</p>
                  <p className="label-text mt-2 text-ivory/50">{small}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Methode />
      <FinalCTA />
    </>
  );
}
