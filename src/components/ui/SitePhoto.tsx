import Image from "next/image";
import { photos, type PhotoKey } from "@/lib/photos";

/**
 * Photo du site — traitement clair : coins arrondis généreux,
 * légère harmonisation chaude, zoom doux au survol.
 * `kenburns` : zoom continu très lent (hero, fonds).
 * Le fichier source se remplace dans /public/photos/ sans toucher au code.
 */
export function SitePhoto({
  id,
  className = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  kenburns = false,
}: {
  id: PhotoKey;
  className?: string;
  sizes?: string;
  priority?: boolean;
  kenburns?: boolean;
}) {
  const p = photos[id];
  return (
    <div
      className={`group/photo relative isolate w-full overflow-hidden rounded-3xl bg-ash shadow-[0_2px_20px_rgba(29,29,31,0.06)] ${className}`}
    >
      <Image
        src={p.src}
        alt={p.alt}
        fill
        priority={priority}
        sizes={sizes}
        style={p.pos ? { objectPosition: p.pos } : undefined}
        className={`object-cover [filter:saturate(0.92)] transition-transform duration-700 ease-out group-hover/photo:scale-[1.03] ${
          kenburns ? "anim-kenburns" : ""
        }`}
      />
    </div>
  );
}
