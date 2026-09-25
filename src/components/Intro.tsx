"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const KEY = "sw-intro-seen";
const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Écran d'ouverture : logo flottant sur fond noir, éclipse illuminée
 * par un anneau de lumière en orbite. « Entrer » révèle le site.
 * Affiché une fois par session de navigation.
 */
export function Intro() {
  const [open, setOpen] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY) === "1") setOpen(false);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const enter = () => {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {}
    setOpen(false);
  };

  const appear = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 26, filter: "blur(8px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: { duration: 1, delay, ease },
        };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="intro"
          exit={
            reduce
              ? { opacity: 0 }
              : { opacity: 0, scale: 1.06, filter: "blur(10px)" }
          }
          transition={{ duration: 0.7, ease }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#0a0908]"
        >
          {/* Halo pulsant derrière le logo */}
          <div
            aria-hidden
            className="anim-glow-pulse pointer-events-none absolute left-1/2 top-[44%] h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(214,176,120,0.28),rgba(214,176,120,0.08)_45%,transparent_70%)]"
          />

          {/* Logo flottant + anneau de lumière en orbite sur l'éclipse */}
          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.92, filter: "blur(12px)" },
                  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
                  transition: { duration: 1.4, delay: 0.2, ease },
                })}
            className="relative"
          >
            <div className="anim-float relative h-[min(64vmin,460px)] w-[min(64vmin,460px)]">
              {/* Logo détouré (fond fumée supprimé, transparence intégrée
                  au fichier) : posé sur l'arrière-plan, sans démarcation. */}
              <Image
                src="/brand/logo-detoure.webp"
                alt="SO WORKFIT"
                fill
                priority
                sizes="(min-width: 768px) 460px, 64vw"
                className="object-contain"
              />

              {/* Anneau lumineux en orbite sur l'éclipse (fusion lumière) */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[46%] z-10 h-[84%] w-[84%] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
              >
                <div className="anim-ring h-full w-full rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_250deg,rgba(238,214,164,0.85)_300deg,transparent_350deg)] blur-[7px]" />
              </div>
            </div>
          </motion.div>

          <motion.p
            {...appear(0.9)}
            className="label-text mt-4 text-[#d6b078]/80"
          >
            Coaching sportif — Soufiane Benchekh
          </motion.p>

          <motion.div {...appear(1.15)}>
            <button
              type="button"
              onClick={enter}
              className="label-text mt-8 rounded-full border border-[#e6cfa3]/45 px-12 py-4 text-[#efdcb2] transition-all duration-300 hover:border-[#e6cfa3] hover:bg-[#e6cfa3] hover:text-[#0a0908] active:scale-[0.98]"
            >
              Entrer
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
