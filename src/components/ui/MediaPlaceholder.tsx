import { Halo } from "./Marks";

/**
 * Emplacement photo clair, clairement remplaçable.
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
      className={`relative isolate w-full overflow-hidden bg-ash ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(170deg,#f4f1ea_0%,#eae5d9_100%)]" />
      <Halo className="absolute left-1/2 top-1/2 w-[130%] -translate-x-1/2 -translate-y-1/2 opacity-20" />
      <span className="label-text absolute bottom-4 left-4 text-ivory/35">
        Photo — {label}
      </span>
    </div>
  );
}
