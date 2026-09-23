"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Halo } from "@/components/ui/Marks";
import { SitePhoto } from "@/components/ui/SitePhoto";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const stagger = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease },
        };

  return (
    <section className="relative isolate overflow-hidden">
      {/* Halo signature — écho du logo, hors champ à droite */}
      <Halo className="pointer-events-none absolute -right-[28rem] top-1/2 hidden w-[52rem] -translate-y-1/2 opacity-30 lg:block" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_75%_60%,rgba(194,154,94,0.10),transparent_65%)]" />

      <div className="container-sw grid min-h-svh items-center gap-12 pb-16 pt-28 md:pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <motion.p {...stagger(0)} className="label-text text-bronze">
            {site.coach} — Coach sportif · {site.experienceYears} ans
            d&apos;expérience
          </motion.p>

          <motion.h1
            {...stagger(1)}
            className="display-text mt-6 text-[clamp(2.7rem,7.2vw,5.6rem)]"
          >
            Un coaching qui
            <br />
            s&apos;adapte à
            <br />
            <span className="text-metal">votre objectif.</span>
          </motion.h1>

          <motion.p
            {...stagger(2)}
            className="serif-accent mt-7 max-w-md text-xl text-sand md:text-2xl"
          >
            Perte de poids, transformation, remise en forme — un objectif, une
            méthode, un suivi.
          </motion.p>

          <motion.div
            {...stagger(3)}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="/reserver">Réserver ma séance offerte</Button>
            <Button href="/coaching" variant="ghost">
              Découvrir les coachings
            </Button>
          </motion.div>

          <motion.div
            {...stagger(4)}
            className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t hairline pt-6"
          >
            {["Privé", "Groupe", "Enfants", "Préparation football"].map(
              (d, i) => (
                <span key={d} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden className="text-bronze/60">
                      ·
                    </span>
                  )}
                  <span className="label-text text-ivory/60">{d}</span>
                </span>
              ),
            )}
            <span className="label-text ml-auto hidden text-champagne sm:block">
              {site.offers.firstSession}
            </span>
          </motion.div>
        </div>

        {/* Visuel principal — fichier remplaçable : /public/photos/hero.jpg */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          className="relative hidden lg:block"
        >
          <SitePhoto
            id="hero"
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="aspect-[4/5] max-h-[70svh]"
          />
          <p className="label-text absolute -bottom-3 right-6 bg-noir px-3 py-1 text-champagne">
            {site.offers.firstSession}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
