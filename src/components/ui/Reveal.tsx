"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Révélation au scroll. `punch` : entrée plus athlétique
 * (course plus longue + défloutage). Neutralisée si l'utilisateur
 * préfère réduire les animations.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  punch = false,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  punch?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={
        reduce
          ? false
          : {
              opacity: 0,
              y: punch ? 52 : y,
              ...(punch ? { filter: "blur(10px)" } : {}),
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        ...(punch ? { filter: "blur(0px)" } : {}),
      }}
      /* Marge haute très étendue : un élément déjà dépassé (arrivée par
         ancre, scroll par à-coups) est révélé immédiatement. */
      viewport={{ once: true, margin: "3000px 0px -12% 0px" }}
      transition={{
        duration: punch ? 0.75 : 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
