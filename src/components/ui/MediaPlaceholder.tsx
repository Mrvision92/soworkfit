import { Halo } from "./Marks";

/**
 * Emplacement photo art-directé, clairement remplaçable.
 *
 * Remplacement : substituer ce composant par
 *   <Image src="/photos/….jpg" alt="…" fill className="object-cover" />
 * dans un conteneur `relative` de même ratio.
 */
export function MediaPlaceholder({
  label,
  className = "aspect-[4/5]",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative isolate w-full overflow-hidden border border-ivory/8 bg-coal ${className}`}
    >
      {/* Matière : dégradés chauds évoquant le clair-obscur du logo */}
      <div className="absolute inset-0 bg-[linear-gradient(170deg,#1e1a14_0%,#14110d_55%,#0b0a08_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_110%,rgba(194,154,94,0.22),transparent_70%)]" />
      <Halo className="absolute left-1/2 top-1/2 w-[130%] -translate-x-1/2 -translate-y-1/2 opacity-25" />
      <span className="label-text absolute bottom-4 left-4 text-ivory/35">
        Photo — {label}
      </span>
    </div>
  );
}
