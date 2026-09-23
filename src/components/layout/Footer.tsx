import Link from "next/link";
import { Monogram } from "@/components/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t hairline bg-coal">
      <div className="container-sw py-14 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Monogram className="w-14" />
            <p className="display-text mt-5 text-xl">
              SO <span className="text-metal">WORKFIT</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-sand">
              Coaching sportif personnalisé — {site.coach},{" "}
              {site.experienceYears} ans d&apos;expérience.
            </p>
          </div>

          <nav aria-label="Pied de page" className="grid grid-cols-2 gap-x-16 gap-y-3">
            {[
              { href: "/coaching", label: "Coaching" },
              { href: "/enfants", label: "Enfants" },
              { href: "/football", label: "Football" },
              { href: "/a-propos", label: "À propos" },
              { href: "/resultats", label: "Résultats" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-ivory/70 transition-colors hover:text-champagne"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div>
            <p className="label-text text-bronze">{site.offers.firstSession}</p>
            <Link
              href="/reserver"
              className="display-text mt-3 inline-block text-2xl text-ivory transition-colors hover:text-champagne"
            >
              Réserver →
            </Link>
            {site.contact.instagram && (
              <a
                href={site.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block text-sm text-sand hover:text-champagne"
              >
                Instagram
              </a>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t hairline pt-6 text-xs text-ivory/40 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Tous droits réservés.
          </p>
          <p>Première séance offerte — sans engagement.</p>
        </div>
      </div>
    </footer>
  );
}
