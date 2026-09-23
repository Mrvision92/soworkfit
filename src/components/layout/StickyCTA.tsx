"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * CTA sticky mobile — apparaît après le premier écran,
 * jamais sur la page de réservation elle-même.
 */
export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/reserver") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduce ? { opacity: 0 } : { y: 80 }}
          animate={reduce ? { opacity: 1 } : { y: 0 }}
          exit={reduce ? { opacity: 0 } : { y: 80 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 p-3 md:hidden"
        >
          <Link
            href="/reserver"
            className="label-text flex items-center justify-center gap-2 bg-[linear-gradient(150deg,#e6cfa3,#c29a5e_55%,#9a7845)] px-6 py-4 text-noir shadow-[0_-8px_30px_rgba(0,0,0,0.5)]"
          >
            Réserver ma séance offerte →
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
