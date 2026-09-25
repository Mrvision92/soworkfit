/**
 * Configuration centrale SO WORKFIT.
 *
 * Toutes les informations non encore communiquées par le client sont
 * volontairement vides (""). Les composants ne les affichent que si
 * elles sont renseignées — rien n'est inventé.
 */

export const site = {
  name: "SO WORKFIT",
  coach: "Soufiane Benchekh",
  experienceYears: 15,
  tagline: "Un coaching qui s'adapte à votre objectif.",

  /** Ville / zone desservie — à renseigner (ex : "Bruxelles"). Utilisée pour le SEO local. */
  city: "",
  /** Adresse complète — à renseigner. Affichée + structured data uniquement si présente. */
  address: "",

  /** URL de production — à renseigner au déploiement. */
  url: "https://soworkfit.example",

  contact: {
    /** Format international, ex : "+32470000000" */
    phone: "",
    /** Numéro WhatsApp au format international sans "+", ex : "32470000000" */
    whatsapp: "",
    email: "",
    instagram: "",
  },

  /**
   * Réservation en ligne (Calendly / Cal.com).
   * Renseigner une URL par parcours pour activer la prise de rendez-vous réelle.
   * Tant que ces URLs sont vides, la page /reserver collecte la demande et
   * propose l'envoi via WhatsApp / e-mail (si renseignés ci-dessus).
   */
  booking: {
    prive: "",
    collectif: "",
    enfants: "",
    football: "",
    appel: "",
  },

  offers: {
    firstSession: "Première séance offerte",
    nutrition: "Programme alimentaire offert jusqu'à la fin de l'année",
  },
} as const;

export type CoachingId = "prive" | "collectif" | "enfants" | "football";

export const coachings: {
  id: CoachingId;
  num: string;
  title: string;
  audience: string;
  hook: string;
  points: string[];
  cta: string;
  href: string;
}[] = [
  {
    id: "prive",
    num: "01",
    title: "Coaching privé",
    audience: "Adultes — tous niveaux",
    hook: "Un programme construit pour vous, et uniquement pour vous.",
    points: [
      "Perte de poids, prise de masse, remise en forme",
      "Performance, rééducation, reprise du sport",
      "Suivi régulier et objectifs mesurables",
      "Programme alimentaire offert jusqu'à la fin de l'année",
    ],
    cta: "Réserver ma séance offerte",
    href: "/coaching#prive",
  },
  {
    id: "collectif",
    num: "02",
    title: "Coaching collectif",
    audience: "Petits groupes — 6 personnes max.",
    hook: "L'énergie du groupe, le suivi d'un coach.",
    points: [
      "6 personnes maximum par session",
      "Accessible à tous les niveaux",
      "Transformation, condition physique, motivation",
      "Un vrai suivi individuel au sein du groupe",
    ],
    cta: "Tester gratuitement",
    href: "/coaching#collectif",
  },
  {
    id: "enfants",
    num: "03",
    title: "Coaching enfants",
    audience: "7–15 ans — tous niveaux",
    hook: "Bouger, progresser, prendre confiance.",
    points: [
      "Encadrement adapté à l'âge",
      "Motricité, coordination, condition physique",
      "Confiance et plaisir avant tout",
      "15 ans d'expérience dans l'encadrement",
    ],
    cta: "Réserver une séance pour mon enfant",
    href: "/enfants",
  },
  {
    id: "football",
    num: "04",
    title: "Préparation football",
    audience: "Jeunes joueurs — 7–15 ans",
    hook: "Travaille ce qui fait la différence sur le terrain.",
    points: [
      "Explosivité, vitesse, accélération",
      "Coordination, agilité, technique",
      "Endurance et condition physique",
      "Complément individuel au club",
    ],
    cta: "Réserver un entraînement",
    href: "/football",
  },
];
