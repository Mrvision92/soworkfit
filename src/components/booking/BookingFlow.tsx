"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site, coachings, type CoachingId } from "@/lib/site";

type SeanceType = "seance" | "appel";

const creneaux = [
  "Semaine — matin",
  "Semaine — midi",
  "Semaine — soir",
  "Week-end",
];

const steps = ["Coaching", "Format", "Disponibilités", "Coordonnées", "Récapitulatif"];

const inputCls =
  "w-full border border-ivory/15 bg-coal px-4 py-3.5 text-ivory placeholder:text-ivory/30 focus:border-bronze focus:outline-none transition-colors";

export function BookingFlow() {
  const params = useSearchParams();
  const reduce = useReducedMotion();

  const initial = params.get("coaching");
  const [step, setStep] = useState(0);
  const [coaching, setCoaching] = useState<CoachingId | null>(
    coachings.some((c) => c.id === initial) ? (initial as CoachingId) : null,
  );
  const [format, setFormat] = useState<SeanceType | null>(null);
  const [dispo, setDispo] = useState<string[]>([]);
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    tel: "",
    email: "",
    ageEnfant: "",
    club: "",
  });

  const selected = coachings.find((c) => c.id === coaching);
  const forChild = coaching === "enfants" || coaching === "football";

  const canNext = [
    coaching !== null,
    format !== null,
    dispo.length > 0,
    form.prenom && form.nom && form.tel && form.email && (!forChild || form.ageEnfant),
    true,
  ][step];

  /** Récapitulatif texte — sert aux liens WhatsApp / e-mail. */
  const recap = useMemo(() => {
    if (!selected) return "";
    const lines = [
      `Demande — ${site.offers.firstSession}`,
      `Coaching : ${selected.title}`,
      `Format : ${format === "appel" ? "Appel découverte" : "Séance offerte"}`,
      `Disponibilités : ${dispo.join(", ")}`,
      `Nom : ${form.prenom} ${form.nom}`,
      `Téléphone : ${form.tel}`,
      `E-mail : ${form.email}`,
    ];
    if (forChild && form.ageEnfant) lines.push(`Âge de l'enfant : ${form.ageEnfant} ans`);
    if (coaching === "football" && form.club) lines.push(`Club / niveau : ${form.club}`);
    return lines.join("\n");
  }, [selected, format, dispo, form, forChild, coaching]);

  const bookingUrl =
    (format === "appel" ? site.booking.appel : coaching && site.booking[coaching]) || "";

  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, x: 32 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -32 },
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progression */}
      <ol className="mb-10 flex items-center gap-2" aria-label="Progression">
        {steps.map((s, i) => (
          <li key={s} className="flex-1">
            <span
              className={`block h-0.5 transition-colors duration-500 ${
                i <= step ? "bg-bronze" : "bg-ivory/10"
              }`}
            />
            <span
              className={`label-text mt-2 hidden sm:block ${
                i === step ? "text-champagne" : "text-ivory/30"
              }`}
            >
              {s}
            </span>
          </li>
        ))}
      </ol>

      <AnimatePresence mode="wait">
        {/* Étape 1 — Coaching */}
        {step === 0 && (
          <motion.fieldset key="s0" {...anim}>
            <legend className="display-text mb-8 text-3xl md:text-4xl">
              Quel <span className="text-metal">coaching ?</span>
            </legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {coachings.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCoaching(c.id)}
                  aria-pressed={coaching === c.id}
                  className={`border p-6 text-left transition-all duration-300 ${
                    coaching === c.id
                      ? "border-bronze bg-ash"
                      : "border-ivory/15 hover:border-ivory/40"
                  }`}
                >
                  <span className="label-text text-bronze/70">{c.num}</span>
                  <span className="display-text mt-2 block text-xl text-ivory">
                    {c.title}
                  </span>
                  <span className="mt-1 block text-sm text-sand">
                    {c.audience}
                  </span>
                </button>
              ))}
            </div>
          </motion.fieldset>
        )}

        {/* Étape 2 — Format */}
        {step === 1 && (
          <motion.fieldset key="s1" {...anim}>
            <legend className="display-text mb-8 text-3xl md:text-4xl">
              Séance ou <span className="text-metal">appel ?</span>
            </legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {(
                [
                  ["seance", "Séance offerte", "Une vraie première séance, sur place."],
                  ["appel", "Appel découverte", "Un échange rapide pour poser vos questions."],
                ] as const
              ).map(([id, title, text]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setFormat(id)}
                  aria-pressed={format === id}
                  className={`border p-6 text-left transition-all duration-300 ${
                    format === id
                      ? "border-bronze bg-ash"
                      : "border-ivory/15 hover:border-ivory/40"
                  }`}
                >
                  <span className="display-text block text-xl text-ivory">
                    {title}
                  </span>
                  <span className="mt-1 block text-sm text-sand">{text}</span>
                </button>
              ))}
            </div>
          </motion.fieldset>
        )}

        {/* Étape 3 — Disponibilités */}
        {step === 2 && (
          <motion.fieldset key="s2" {...anim}>
            <legend className="display-text mb-3 text-3xl md:text-4xl">
              Vos <span className="text-metal">disponibilités ?</span>
            </legend>
            <p className="mb-8 text-sm text-sand">
              Plusieurs choix possibles — le créneau exact sera confirmé avec le
              coach.
            </p>
            <div className="flex flex-wrap gap-3">
              {creneaux.map((c) => {
                const active = dispo.includes(c);
                return (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={active}
                    onClick={() =>
                      setDispo((d) =>
                        active ? d.filter((x) => x !== c) : [...d, c],
                      )
                    }
                    className={`label-text border px-5 py-3.5 transition-all duration-300 ${
                      active
                        ? "border-bronze bg-bronze text-noir"
                        : "border-ivory/15 text-ivory hover:border-ivory/40"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </motion.fieldset>
        )}

        {/* Étape 4 — Coordonnées */}
        {step === 3 && (
          <motion.fieldset key="s3" {...anim}>
            <legend className="display-text mb-8 text-3xl md:text-4xl">
              Vos <span className="text-metal">coordonnées.</span>
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className={inputCls}
                placeholder="Prénom *"
                autoComplete="given-name"
                value={form.prenom}
                onChange={(e) => setForm({ ...form, prenom: e.target.value })}
              />
              <input
                className={inputCls}
                placeholder="Nom *"
                autoComplete="family-name"
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
              />
              <input
                className={inputCls}
                type="tel"
                placeholder="Téléphone *"
                autoComplete="tel"
                value={form.tel}
                onChange={(e) => setForm({ ...form, tel: e.target.value })}
              />
              <input
                className={inputCls}
                type="email"
                placeholder="E-mail *"
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {forChild && (
                <input
                  className={inputCls}
                  type="number"
                  min={7}
                  max={15}
                  placeholder="Âge de l'enfant (7–15) *"
                  value={form.ageEnfant}
                  onChange={(e) => setForm({ ...form, ageEnfant: e.target.value })}
                />
              )}
              {coaching === "football" && (
                <input
                  className={inputCls}
                  placeholder="Club / niveau (facultatif)"
                  value={form.club}
                  onChange={(e) => setForm({ ...form, club: e.target.value })}
                />
              )}
            </div>
          </motion.fieldset>
        )}

        {/* Étape 5 — Récapitulatif */}
        {step === 4 && selected && (
          <motion.div key="s4" {...anim}>
            <h2 className="display-text mb-8 text-3xl md:text-4xl">
              C&apos;est <span className="text-metal">noté.</span>
            </h2>
            <dl className="space-y-3 border hairline p-6 text-sm md:p-8">
              {[
                ["Coaching", selected.title],
                ["Format", format === "appel" ? "Appel découverte" : "Séance offerte"],
                ["Disponibilités", dispo.join(", ")],
                ["Nom", `${form.prenom} ${form.nom}`],
                ["Contact", `${form.tel} · ${form.email}`],
                ...(forChild ? [["Âge de l'enfant", `${form.ageEnfant} ans`] as const] : []),
                ...(coaching === "football" && form.club
                  ? [["Club / niveau", form.club] as const]
                  : []),
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 border-b hairline pb-3 last:border-0 last:pb-0">
                  <dt className="label-text text-ivory/40">{k}</dt>
                  <dd className="text-right text-ivory">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 space-y-3">
              {bookingUrl ? (
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-text block bg-[linear-gradient(150deg,#e6cfa3,#c29a5e_55%,#9a7845)] px-7 py-4 text-center text-noir"
                >
                  Choisir ma date et mon heure →
                </a>
              ) : (
                <>
                  {site.contact.whatsapp && (
                    <a
                      href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(recap)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-text block bg-[linear-gradient(150deg,#e6cfa3,#c29a5e_55%,#9a7845)] px-7 py-4 text-center text-noir"
                    >
                      Envoyer ma demande sur WhatsApp →
                    </a>
                  )}
                  {site.contact.email && (
                    <a
                      href={`mailto:${site.contact.email}?subject=${encodeURIComponent(
                        `Séance offerte — ${selected.title}`,
                      )}&body=${encodeURIComponent(recap)}`}
                      className="label-text block border border-bronze/60 px-7 py-4 text-center text-champagne"
                    >
                      Envoyer ma demande par e-mail →
                    </a>
                  )}
                  {!site.contact.whatsapp && !site.contact.email && (
                    <p className="border border-bronze/40 p-6 text-sm leading-relaxed text-sand">
                      La réservation en ligne ouvre très prochainement. En
                      attendant, copiez votre demande ci-dessous — elle est
                      prête à être envoyée dès que les coordonnées de contact
                      seront publiées.
                    </p>
                  )}
                </>
              )}
              <button
                type="button"
                onClick={() => navigator.clipboard?.writeText(recap)}
                className="label-text w-full border border-ivory/15 px-7 py-4 text-ivory/70 transition-colors hover:border-ivory/40 hover:text-ivory"
              >
                Copier ma demande
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-between border-t hairline pt-6">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className={`label-text text-ivory/50 transition-colors hover:text-ivory ${
            step === 0 ? "invisible" : ""
          }`}
        >
          ← Retour
        </button>
        {step < steps.length - 1 && (
          <button
            type="button"
            disabled={!canNext}
            onClick={() => setStep((s) => s + 1)}
            className="label-text bg-bronze px-7 py-4 text-noir transition-all enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-30"
          >
            Continuer →
          </button>
        )}
      </div>
    </div>
  );
}
