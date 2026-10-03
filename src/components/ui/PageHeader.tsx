import Image from "next/image";
import { Chevron, Halo } from "./Marks";
import { Reveal } from "./Reveal";
import { photos, type PhotoKey } from "@/lib/photos";

/**
 * En-tête de page. Avec `photo`, l'image occupe tout l'en-tête en fond
 * (voile sombre + texte clair, même traitement que le hero de l'accueil).
 */
export function PageHeader({
  kicker,
  title,
  lede,
  photo,
}: {
  kicker: string;
  title: React.ReactNode;
  lede?: string;
  photo?: PhotoKey;
}) {
  const p = photo ? photos[photo] : null;

  return (
    <header
      className={`relative isolate overflow-hidden ${
        p
          ? "flex min-h-[72svh] items-end bg-[#0a0908]"
          : "border-b hairline"
      }`}
    >
      {p ? (
        <div className="absolute inset-0">
          <div className="anim-kenburns absolute inset-0">
            <Image
              src={p.src}
              alt={p.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={p.pos ? { objectPosition: p.pos } : undefined}
            />
          </div>
          {/* Voiles de lisibilité */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,9,8,0.82)_0%,rgba(10,9,8,0.5)_45%,rgba(10,9,8,0.2)_75%,rgba(10,9,8,0.35)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(10,9,8,0.55),transparent)]" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(0deg,rgba(10,9,8,0.7),transparent)]" />
        </div>
      ) : (
        <Halo className="pointer-events-none absolute -right-[20rem] -top-[16rem] w-[42rem] opacity-30" />
      )}

      <div className="container-sw relative pb-16 pt-36 md:pb-20 md:pt-44">
        <Reveal punch>
          <p
            className={`label-text flex items-center gap-3 ${
              p ? "text-[#d9b478]" : "text-bronze"
            }`}
          >
            <Chevron className="w-3.5 -rotate-90" />
            {kicker}
          </p>
          <h1
            className={`display-text mt-6 max-w-4xl text-[clamp(2.6rem,7.5vw,5.2rem)] ${
              p ? "text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.35)]" : ""
            }`}
          >
            {title}
          </h1>
          {lede && (
            <p
              className={`mt-7 max-w-xl text-base leading-relaxed md:text-lg ${
                p ? "text-white/80" : "text-sand"
              }`}
            >
              {lede}
            </p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
