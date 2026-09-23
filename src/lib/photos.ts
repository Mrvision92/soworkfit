/**
 * Photothèque du site — PHOTOS TEMPORAIRES (Unsplash, libres d'usage).
 *
 * Remplacement par les vraies photos SO WORKFIT :
 * écraser simplement le fichier correspondant dans /public/photos/
 * (même nom, même orientation approximative) — aucun code à modifier.
 * `pos` ajuste le cadrage (object-position CSS) si besoin.
 */

/** Préfixe de déploiement (GitHub Pages) — vide en local. */
const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export type PhotoKey =
  | "hero"
  | "portraitHome"
  | "portraitAPropos"
  | "priveHome"
  | "privePage"
  | "collectifHome"
  | "collectifPage"
  | "enfants"
  | "jeunesEdito"
  | "football"
  | "nutrition";

export const photos: Record<
  PhotoKey,
  { src: string; alt: string; pos?: string }
> = {
  hero: {
    src: `${bp}/photos/hero.jpg`,
    alt: "Athlète saisissant une barre de musculation dans une salle sombre",
    pos: "center 30%",
  },
  portraitHome: {
    src: `${bp}/photos/portrait-home.jpg`,
    alt: "Coach sportif, bras croisés, dans sa salle d'entraînement",
    pos: "center 20%",
  },
  portraitAPropos: {
    src: `${bp}/photos/portrait-apropos.jpg`,
    alt: "Portrait d'un coach en salle de sport, lumière chaude",
  },
  priveHome: {
    src: `${bp}/photos/prive-home.jpg`,
    alt: "Coach corrigeant la posture d'un client pendant des pompes",
  },
  privePage: {
    src: `${bp}/photos/prive-page.jpg`,
    alt: "Coach guidant un client sur rameur en séance individuelle",
  },
  collectifHome: {
    src: `${bp}/photos/collectif-home.jpg`,
    alt: "Petit groupe en squat barre lors d'une session collective",
  },
  collectifPage: {
    src: `${bp}/photos/collectif-page.jpg`,
    alt: "Session collective avec élastiques de résistance",
  },
  enfants: {
    src: `${bp}/photos/enfants.jpg`,
    alt: "Deux enfants courant vers un ballon dans la lumière dorée",
  },
  jeunesEdito: {
    src: `${bp}/photos/jeunes-edito.jpg`,
    alt: "Jeunes joueurs disputant un ballon à l'entraînement",
  },
  football: {
    src: `${bp}/photos/football.jpg`,
    alt: "Jeunes footballeurs en plein duel devant le but",
    pos: "center 65%",
  },
  nutrition: {
    src: `${bp}/photos/nutrition.jpg`,
    alt: "Ingrédients frais et céréales sur une table en ardoise sombre",
  },
};
