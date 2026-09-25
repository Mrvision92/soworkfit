"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Halo } from "@/components/ui/Marks";
import { SitePhoto } from "@/components/ui/SitePhoto";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // Parallax : la photo et le mot fantôme glissent au scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const fade = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.55 + i * 0.12, ease },
        };

  const lines = [
    <>Un coaching qui</>,
    <>s&apos;adapte à</>,
    <span key="m" className="text-metal">
      votre objectif.
    </span>,
  ];

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      {/* Halo signature — écho du logo, rotation très lente */}
      <div className="pointer-events-none absolute -right-[28rem] top-1/2 hidden w-[52rem] -translate-y-1/2 opacity-30 lg:block">
        <div className="anim-spin-slow">
          <Halo className="w-full" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_75%_60%,rgba(165,121,59,0.07),transparent_65%)]" />

      <div className="container-sw grid min-h-svh items-center gap-12 pb-16 pt-28 md:pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <motion.p
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 18 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, delay: 0.15, ease },
                })}
            className="label-text text-bronze"
          >
            {site.coach} — Coach sportif · {site.experienceYears} ans
            d&apos;expérience
          </motion.p>

          {/* Titre révélé ligne par ligne (masque) */}
          <h1 className="display-text mt-6 text-[clamp(2.7rem,7.2vw,5.6rem)]">
            {lines.map((l, i) => (
              <span
                key={i}
                className="-mb-[0.12em] block overflow-hidden pb-[0.12em]"
              >
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.22 + i * 0.1,
                    ease,
                  }}
                >
                  {l}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            {...fade(0)}
            className="serif-accent mt-7 max-w-md text-xl text-sand md:text-2xl"
          >
            Perte de poids, transformation, remise en forme — un objectif, une
            méthode, un suivi.
          </motion.p>

          <motion.div
            {...fade(1)}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="/reserver">Réserver ma séance offerte</Button>
            <Button href="/coaching" variant="ghost">
              Découvrir les coachings
            </Button>
          </motion.div>

          <motion.div
            {...fade(2)}
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

        {/* Visuel principal — parallax + zoom continu. Fichier : /public/photos/hero.jpg */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.35, ease }}
          style={reduce ? undefined : { y: photoY }}
          className="relative hidden lg:block"
        >
          <SitePhoto
            id="hero"
            priority
            kenburns
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="aspect-[4/5] max-h-[70svh]"
          />
          <p className="label-text absolute bottom-5 right-5 rounded-full bg-coal/90 px-4 py-2 text-champagne shadow-sm backdrop-blur">
            {site.offers.firstSession}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
