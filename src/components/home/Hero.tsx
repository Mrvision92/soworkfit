"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { photos } from "@/lib/photos";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  /** Fondu professionnel : apparition douce, cadencée, sans effet gadget. */
  const fade = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.1, delay: 0.35 + i * 0.18, ease },
        };

  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-[#0a0908] md:items-center">
      {/* Photo plein écran — fichier remplaçable : /public/photos/hero.jpg */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease }}
      >
        <div className="anim-kenburns absolute inset-0">
          <Image
            src={photos.hero.src}
            alt={photos.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
          />
        </div>
        {/* Voiles de lisibilité */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,9,8,0.92)_0%,rgba(10,9,8,0.62)_45%,rgba(10,9,8,0.28)_75%,rgba(10,9,8,0.42)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(10,9,8,0.55),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,rgba(10,9,8,0.75),transparent)]" />
      </motion.div>

      <div className="container-sw relative pb-24 pt-36 md:py-44">
        <div className="max-w-2xl">
          <motion.p {...fade(0)} className="label-text text-[#d9b478]">
            {site.coach} — Coaching sportif · {site.experienceYears} ans
            d&apos;expérience
          </motion.p>

          <motion.h1
            {...fade(1)}
            className="display-text mt-6 text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.35)] text-[clamp(2.6rem,6.2vw,5.4rem)]"
          >
            <span className="block whitespace-nowrap">Un coaching</span>
            <span className="block whitespace-nowrap">
              qui s&apos;adapte à
            </span>
            <span className="text-metal-light block whitespace-nowrap">
              votre objectif.
            </span>
          </motion.h1>

          <motion.p
            {...fade(2)}
            className="serif-accent mt-7 max-w-md text-xl text-white/85 md:text-2xl"
          >
            Perte de poids, transformation, remise en forme — un objectif, une
            méthode, un suivi.
          </motion.p>

          <motion.div
            {...fade(3)}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="/reserver">Réserver ma séance offerte</Button>
            <Button
              href="/coaching"
              variant="ghost"
              className="!border-white/35 !bg-transparent !text-white hover:!border-[#e6cfa3] hover:!text-[#e6cfa3]"
            >
              Découvrir les coachings
            </Button>
          </motion.div>

          <motion.div
            {...fade(4)}
            className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/15 pt-6"
          >
            {["Privé", "Groupe", "Enfants", "Préparation football"].map(
              (d, i) => (
                <span key={d} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden className="text-[#d9b478]/70">
                      ·
                    </span>
                  )}
                  <span className="label-text text-white/65">{d}</span>
                </span>
              ),
            )}
            <span className="label-text ml-auto hidden text-[#e6cfa3] sm:block">
              {site.offers.firstSession}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Invitation au scroll */}
      <motion.div
        aria-hidden
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <motion.svg
          viewBox="0 0 24 14"
          className="w-5"
          animate={reduce ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M2 2l10 6L22 2"
            stroke="#e6cfa3"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
