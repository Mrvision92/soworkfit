"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

const objectifs = [
  "Perte de poids",
  "Prise de masse",
  "Remise en forme",
  "Performance physique",
  "Rééducation",
  "Spécifique football",
] as const;

const postes = ["Gardien", "Défenseur", "Milieu", "Attaquant"] as const;

const inputCls =
  "w-full rounded-xl border border-ivory/15 bg-coal px-4 py-3.5 text-ivory placeholder:text-ivory/35 focus:border-bronze focus:outline-none transition-colors";

export function PlanForm() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const [objectif, setObjectif] = useState<string | null>(null);
  const [poste, setPoste] = useState<string | null>(null);
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    tel: "",
    poids: "",
    age: "",
    taille: "",
  });

  const isFoot = objectif === "Spécifique football";

  const canSubmit =
    form.prenom &&
    form.nom &&
    form.email &&
    form.tel &&
    form.poids &&
    form.age &&
    form.taille &&
    objectif &&
    (!isFoot || poste);

  const recap = useMemo(() => {
    const lines = [
      "Demande — Plan alimentaire personnalisé",
      `Nom : ${form.prenom} ${form.nom}`,
      `Téléphone : ${form.tel}`,
      `E-mail : ${form.email}`,
      `Objectif : ${objectif ?? ""}`,
      ...(isFoot && poste ? [`Poste : ${poste}`] : []),
      `Âge : ${form.age} ans · Poids : ${form.poids} kg · Taille : ${form.taille} cm`,
    ];
    return lines.join("\n");
  }, [form, objectif, poste, isFoot]);

  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -24 },
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <div className="mx-auto max-w-2xl">
      <AnimatePresence mode="wait">
        {!sent ? (
          <motion.form
            key="form"
            {...anim}
            onSubmit={(e) => {
              e.preventDefault();
              if (canSubmit) setSent(true);
            }}
          >
            {/* Coordonnées */}
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
                type="email"
                placeholder="E-mail *"
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                className={inputCls}
                type="tel"
                placeholder="Téléphone *"
                autoComplete="tel"
                value={form.tel}
                onChange={(e) => setForm({ ...form, tel: e.target.value })}
              />
            </div>

            {/* Objectif */}
            <p className="label-text mt-10 mb-4 text-bronze">
              Votre objectif *
            </p>
            <div className="flex flex-wrap gap-3">
              {objectifs.map((o) => {
                const active = objectif === o;
                return (
                  <button
                    key={o}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setObjectif(o)}
                    className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                      active
                        ? "border-bronze bg-bronze text-white"
                        : "border-ivory/15 bg-coal/60 text-ivory hover:border-ivory/40"
                    }`}
                  >
                    {o}
                  </button>
                );
              })}
            </div>

            {/* Poste — uniquement pour le spécifique football */}
            <AnimatePresence>
              {isFoot && (
                <motion.div
                  initial={reduce ? false : { opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <p className="label-text mt-8 mb-4 text-bronze">
                    À quel poste joue-t-il ? *
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {postes.map((p) => {
                      const active = poste === p;
                      return (
                        <button
                          key={p}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setPoste(p)}
                          className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                            active
                              ? "border-bronze bg-bronze text-white"
                              : "border-ivory/15 bg-coal/60 text-ivory hover:border-ivory/40"
                          }`}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mensurations */}
            <p className="label-text mt-10 mb-4 text-bronze">Vos repères *</p>
            <div className="grid gap-4 sm:grid-cols-3">
              <input
                className={inputCls}
                type="number"
                min={5}
                max={120}
                placeholder="Âge (ans)"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
              />
              <input
                className={inputCls}
                type="number"
                min={20}
                max={250}
                placeholder="Poids (kg)"
                value={form.poids}
                onChange={(e) => setForm({ ...form, poids: e.target.value })}
              />
              <input
                className={inputCls}
                type="number"
                min={80}
                max={230}
                placeholder="Taille (cm)"
                value={form.taille}
                onChange={(e) => setForm({ ...form, taille: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="mt-10 w-full rounded-full bg-bronze px-7 py-4 font-semibold text-white transition-all enabled:hover:bg-bronze-deep disabled:cursor-not-allowed disabled:opacity-30"
            >
              Envoyer ma demande →
            </button>
            <p className="mt-4 text-center text-xs text-sand">
              Vos informations ne servent qu'à préparer votre plan — aucune
              autre utilisation.
            </p>
          </motion.form>
        ) : (
          <motion.div key="sent" {...anim}>
            <h2 className="display-text text-3xl md:text-4xl">
              C&apos;est <span className="text-metal">noté.</span>
            </h2>
            <dl className="mt-8 space-y-3 rounded-2xl bg-coal p-6 text-sm shadow-[0_2px_16px_rgba(29,29,31,0.05)] md:p-8">
              {[
                ["Nom", `${form.prenom} ${form.nom}`],
                ["Contact", `${form.tel} · ${form.email}`],
                ["Objectif", `${objectif}${isFoot && poste ? ` — ${poste}` : ""}`],
                [
                  "Repères",
                  `${form.age} ans · ${form.poids} kg · ${form.taille} cm`,
                ],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-6 border-b hairline pb-3 last:border-0 last:pb-0"
                >
                  <dt className="label-text text-ivory/40">{k}</dt>
                  <dd className="text-right text-ivory">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 space-y-3">
              {site.contact.whatsapp && (
                <a
                  href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(recap)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full bg-bronze px-7 py-4 text-center font-semibold text-white transition-colors hover:bg-bronze-deep"
                >
                  Envoyer sur WhatsApp →
                </a>
              )}
              {site.contact.email && (
                <a
                  href={`mailto:${site.contact.email}?subject=${encodeURIComponent(
                    "Demande de plan alimentaire",
                  )}&body=${encodeURIComponent(recap)}`}
                  className="block rounded-full border border-bronze/60 px-7 py-4 text-center font-semibold text-champagne transition-colors hover:bg-bronze hover:text-white"
                >
                  Envoyer par e-mail →
                </a>
              )}
              {!site.contact.whatsapp && !site.contact.email && (
                <p className="rounded-2xl border border-bronze/40 bg-coal p-6 text-sm leading-relaxed text-sand">
                  L&apos;envoi en ligne ouvre très prochainement. En attendant,
                  copiez votre demande ci-dessous — elle est prête à être
                  transmise au coach.
                </p>
              )}
              <button
                type="button"
                onClick={() => navigator.clipboard?.writeText(recap)}
                className="w-full rounded-full border border-ivory/15 px-7 py-4 font-semibold text-ivory/70 transition-colors hover:border-ivory/40 hover:text-ivory"
              >
                Copier ma demande
              </button>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="w-full py-2 text-sm text-sand transition-colors hover:text-ivory"
              >
                ← Modifier mes informations
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
