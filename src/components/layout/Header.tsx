"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/Logo";

// "Accueil" = le logo sur desktop ; le lien reste dans le menu mobile.
const links = [
  { href: "/coaching", label: "Coaching" },
  { href: "/enfants", label: "Enfants" },
  { href: "/football", label: "Football" },
  { href: "/a-propos", label: "À propos" },
  { href: "/resultats", label: "Résultats" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu à chaque navigation + bloque le scroll en arrière-plan
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled && !open
          ? "border-b hairline bg-noir/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-sw flex h-16 items-center justify-between md:h-20">
        <Logo className="relative z-50" />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`label-text whitespace-nowrap transition-colors duration-300 hover:text-champagne ${
                    pathname === l.href ? "text-bronze" : "text-ivory/70"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/reserver"
            className="hidden whitespace-nowrap rounded-full bg-bronze px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-bronze-deep sm:block"
          >
            Séance offerte
          </Link>

          {/* Burger mobile */}
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 bg-ivory transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-ivory transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-noir lg:hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_115%,rgba(165,121,59,0.10),transparent_70%)]" />
            <nav
              aria-label="Navigation mobile"
              className="container-sw relative flex flex-1 flex-col justify-center"
            >
              <ul className="space-y-1">
                {[{ href: "/", label: "Accueil" }, ...links].map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={reduce ? false : { opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.45 }}
                  >
                    <Link
                      href={l.href}
                      className={`display-text block py-2.5 text-4xl transition-colors ${
                        pathname === l.href
                          ? "text-metal"
                          : "text-ivory hover:text-champagne"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.45 }}
                className="mt-10"
              >
                <Link
                  href="/reserver"
                  className="inline-block rounded-full bg-bronze px-7 py-4 font-semibold text-white"
                >
                  Réserver ma séance offerte →
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
