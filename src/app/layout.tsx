import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { HashScroll } from "@/components/HashScroll";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const description = `Coaching sportif personnalisé avec ${site.coach} — ${site.experienceYears} ans d'expérience. Coaching privé, collectif, enfants et préparation physique football. Première séance offerte.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Coaching sportif personnalisé · Première séance offerte`,
    template: `%s · ${site.name}`,
  },
  description,
  openGraph: {
    title: `${site.name} — Coaching sportif personnalisé`,
    description,
    url: site.url,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

/** Structured data — uniquement des informations réelles et renseignées. */
function jsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: site.name,
    description,
    url: site.url,
    founder: { "@type": "Person", name: site.coach, jobTitle: "Coach sportif" },
  };
  if (site.contact.phone) data.telephone = site.contact.phone;
  if (site.contact.email) data.email = site.contact.email;
  if (site.address) data.address = site.address;
  if (site.city) data.areaServed = site.city;
  return JSON.stringify(data);
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${instrumentSans.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd() }}
        />
        <Header />
        <HashScroll />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
