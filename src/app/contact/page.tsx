import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contacter ${site.name} — questions, réservations, informations sur les coachings. Première séance offerte.`,
};

export default function ContactPage() {
  const c: Record<string, string> = { ...site.contact, address: site.address };
  const rows: { k: string; v: string; href?: string }[] = [
    c.phone && { k: "Téléphone", v: c.phone, href: `tel:${c.phone}` },
    c.whatsapp && {
      k: "WhatsApp",
      v: "Écrire un message",
      href: `https://wa.me/${c.whatsapp}`,
    },
    c.email && { k: "E-mail", v: c.email, href: `mailto:${c.email}` },
    c.instagram && { k: "Instagram", v: "@soworkfit", href: c.instagram },
    c.address && { k: "Adresse", v: c.address },
  ].filter((r): r is { k: string; v: string; href?: string } => Boolean(r));

  return (
    <>
      <PageHeader
        kicker="Contact"
        title={
          <>
            Une question ?
            <br />
            <span className="text-metal">Parlons-en.</span>
          </>
        }
        lede="Le plus simple reste de réserver directement votre séance offerte — le coach vous rappelle pour confirmer."
      />

      <section>
        <div className="container-sw grid gap-12 py-20 md:py-28 lg:grid-cols-2">
          <Reveal>
            <h2 className="display-text text-3xl">
              Réserver, <span className="text-metal">c&apos;est plus rapide.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-sand">
              Choisissez votre coaching, vos disponibilités, et le coach
              revient vers vous. Sans engagement.
            </p>
            <div className="mt-8">
              <Button href="/reserver">Réserver ma séance offerte</Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {rows.length > 0 ? (
              <dl className="divide-y divide-ivory/10 border hairline">
                {rows.map((r) => (
                  <div key={r.k} className="flex items-center justify-between gap-6 p-6">
                    <dt className="label-text text-ivory/40">{r.k}</dt>
                    <dd>
                      {r.href ? (
                        <a
                          href={r.href}
                          className="text-champagne transition-colors hover:text-ivory"
                          {...(r.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {r.v}
                        </a>
                      ) : (
                        <span className="text-ivory">{r.v}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <div className="border hairline p-8">
                <p className="label-text text-bronze">Coordonnées</p>
                <p className="mt-4 text-sm leading-relaxed text-sand">
                  Les coordonnées directes (téléphone, WhatsApp, e-mail)
                  seront publiées ici très prochainement. En attendant, la
                  réservation en ligne reste ouverte.
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
