"use client";

import { useEffect } from "react";

/**
 * Correctif : lors d'un chargement direct avec ancre (/coaching#collectif),
 * l'hydratation du routeur Next annule le scroll natif du navigateur.
 * On rétablit la position après hydratation.
 */
export function HashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => el.scrollIntoView({ block: "start" })),
      );
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);
  return null;
}
