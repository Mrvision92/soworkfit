"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Filet bronze qui se trace au scroll. */
export function DrawLine({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={`h-px origin-left bg-[linear-gradient(90deg,#bd8b4a,#8a6432_40%,transparent)] ${className}`}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "3000px 0px -10% 0px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
