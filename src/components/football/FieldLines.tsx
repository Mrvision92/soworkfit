"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Lignes de terrain — signature graphique de la section football.
 * Elles se tracent à l'entrée dans le viewport.
 */
export function FieldLines() {
  const reduce = useReducedMotion();
  const draw = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0 },
          whileInView: { pathLength: 1 },
          viewport: { once: true, margin: "3000px 0px -10% 0px" },
          transition: { duration: 1.6, delay, ease: "easeInOut" as const },
        };

  return (
    <svg
      viewBox="0 0 1200 600"
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.1]"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="#a5793b" strokeWidth="1.5" fill="none">
        <motion.line x1="600" y1="0" x2="600" y2="600" {...draw(0)} />
        <motion.circle cx="600" cy="300" r="110" {...draw(0.3)} />
        <motion.rect x="0" y="140" width="180" height="320" {...draw(0.5)} />
        <motion.rect
          x="1020"
          y="140"
          width="180"
          height="320"
          {...draw(0.5)}
        />
      </g>
    </svg>
  );
}
