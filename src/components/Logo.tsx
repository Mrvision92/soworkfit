import Link from "next/link";
import { Chevron } from "./ui/Marks";

/**
 * Wordmark SO WORKFIT.
 * Le fichier logo officiel (raster) peut être déposé dans /public/brand/
 * et utilisé sur les supports où le fond noir intégré convient.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="SO WORKFIT — Accueil"
      className={`group flex items-center gap-3 ${className}`}
    >
      <Chevron className="w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
      <span className="display-text text-[1.05rem] tracking-[0.16em]">
        SO&nbsp;<span className="text-metal">WORKFIT</span>
      </span>
    </Link>
  );
}

/** Monogramme SW — évocation du logo pour pieds de page / favicon. */
export function Monogram({ className = "w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden className={className}>
      <circle
        cx="32"
        cy="32"
        r="29"
        stroke="url(#mg)"
        strokeWidth="1.2"
        fill="none"
        strokeDasharray="150 32"
        strokeDashoffset="-20"
      />
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fontFamily="var(--font-instrument-serif), serif"
        fontStyle="italic"
        fontSize="27"
        fill="url(#mg)"
      >
        SW
      </text>
      <defs>
        <linearGradient id="mg" x1="0" y1="0" x2="64" y2="64">
          <stop stopColor="#bd8b4a" />
          <stop offset="1" stopColor="#6b4e26" />
        </linearGradient>
      </defs>
    </svg>
  );
}
