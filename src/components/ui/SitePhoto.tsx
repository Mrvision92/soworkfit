import Image from "next/image";
import { photos, type PhotoKey } from "@/lib/photos";

/**
 * Photo du site, étalonnée pour l'univers noir/bronze :
 * légère désaturation, contraste, voile bronze et vignettage noir.
 * Le fichier source se remplace dans /public/photos/ sans toucher au code.
 */
export function SitePhoto({
  id,
  className = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: {
  id: PhotoKey;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const p = photos[id];
  return (
    <div
      className={`relative isolate w-full overflow-hidden border border-ivory/8 bg-coal ${className}`}
    >
      <Image
        src={p.src}
        alt={p.alt}
        fill
        priority={priority}
        sizes={sizes}
        style={p.pos ? { objectPosition: p.pos } : undefined}
        className="object-cover [filter:saturate(0.8)_contrast(1.05)_brightness(0.9)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-bronze/15 mix-blend-overlay"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,8,0.15),transparent_35%,rgba(11,10,8,0.5))]"
      />
    </div>
  );
}
