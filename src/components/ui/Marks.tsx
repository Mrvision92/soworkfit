/**
 * Signatures graphiques issues du logo SO WORKFIT :
 * le chevron militaire et l'arc lumineux (halo).
 * À utiliser avec parcimonie — ce sont des accents, pas de la décoration.
 */

export function Chevron({ className = "w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 14"
      fill="none"
      aria-hidden
      className={className}
    >
      <path d="M2 1l10 5L22 1" stroke="url(#chv)" strokeWidth="2" />
      <path d="M5 8l7 4 7-4" stroke="url(#chv)" strokeWidth="2" opacity="0.5" />
      <defs>
        <linearGradient id="chv" x1="0" y1="0" x2="24" y2="14">
          <stop stopColor="#bd8b4a" />
          <stop offset="1" stopColor="#6b4e26" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Arc lumineux — cercle incomplet, comme le halo du logo.
 * Positionner en absolu derrière le contenu.
 */
export function Halo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden
      className={className}
    >
      <circle
        cx="300"
        cy="300"
        r="264"
        stroke="url(#halo)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="1290 370"
        strokeDashoffset="-140"
      />
      <defs>
        <linearGradient id="halo" x1="0" y1="0" x2="600" y2="600">
          <stop stopColor="#a5793b" stopOpacity="0.8" />
          <stop offset="0.5" stopColor="#a5793b" stopOpacity="0.3" />
          <stop offset="1" stopColor="#a5793b" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
