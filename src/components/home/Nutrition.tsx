import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Chevron } from "@/components/ui/Marks";
import { site } from "@/lib/site";
import { photos } from "@/lib/photos";

export function Nutrition() {
  return (
    <section className="relative isolate overflow-hidden border-t hairline bg-ash">
      {/* Fond photographique — fichier remplaçable : /public/photos/nutrition.jpg */}
      <Image
        src={photos.nutrition.src}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="anim-kenburns object-cover opacity-35 [filter:saturate(0.75)_brightness(0.85)]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(247,245,240,0.94),rgba(247,245,240,0.8)_50%,rgba(247,245,240,0.96))]" />
      <div className="pointer-events-none absolute inset-0 glow-bronze" />
      <div className="container-sw py-24 text-center md:py-32">
        <Reveal>
          <p className="label-text flex items-center justify-center gap-3 text-bronze">
            <Chevron className="w-3.5 -rotate-90" />
            Nutrition
          </p>
          <h2 className="display-text mx-auto mt-6 max-w-3xl text-[clamp(2.2rem,6vw,4.2rem)]">
            Votre entraînement ne s&apos;arrête pas{" "}
            <span className="text-metal">à la salle.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-sand md:text-lg">
            Selon votre coaching, un programme alimentaire personnalisé
            accompagne votre objectif. Simple, tenable, ajusté avec le coach.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-10 inline-block rounded-full border border-bronze/40 bg-coal/80 px-6 py-4 backdrop-blur">
            <span className="label-text text-champagne">
              {site.offers.nutrition}
            </span>
          </p>
          <p className="label-text mt-4 text-ivory/40">
            Pour les coachings concernés
          </p>
        </Reveal>
      </div>
    </section>
  );
}
