# Assets de marque SO WORKFIT

Déposer ici les fichiers officiels :

- `logo.png` — logo complet (guerrier + SW + wordmark), fond noir intégré.
- `logo-transparent.png` / `logo.svg` — version détourée si disponible.

Le site utilise actuellement un wordmark typographique + monogramme SVG
(`src/components/Logo.tsx`) fidèles à l'identité. Pour afficher le logo
raster à un endroit précis :

```tsx
import Image from "next/image";
<Image src="/brand/logo.png" alt="SO WORKFIT" width={480} height={480} />
```

# Photos — TEMPORAIRES (Unsplash)

Les photos actuelles dans `/public/photos/` sont des images temporaires
libres d'usage (licence Unsplash), déjà intégrées et étalonnées par le
composant `SitePhoto` (voile bronze, contraste, vignettage).

## Remplacer par les vraies photos SO WORKFIT

Écraser le fichier correspondant en gardant le même nom — aucun code à
modifier (ajuster éventuellement `alt`/`pos` dans `src/lib/photos.ts`) :

| Fichier | Emplacement | Cadrage conseillé |
|---|---|---|
| `hero.jpg` | Accueil — visuel principal | vertical 4:5, sombre |
| `portrait-home.jpg` | Accueil — section coach | vertical 3:4 |
| `portrait-apropos.jpg` | Page À propos | vertical 3:4 |
| `prive-home.jpg` | Accueil — bande coachings | horizontal 4:3 |
| `prive-page.jpg` | Page Coaching — privé | vertical 4:5 |
| `collectif-home.jpg` | Accueil — bande coachings | horizontal 4:3 |
| `collectif-page.jpg` | Page Coaching — collectif | vertical 4:5 |
| `enfants.jpg` | Page Enfants | horizontal 4:3 |
| `jeunes-edito.jpg` | Accueil — bande coachings | horizontal 4:3 |
| `football.jpg` | Page Football | horizontal 4:3 |
| `nutrition.jpg` | Accueil — fond section nutrition | horizontal large |

Les blocs **avant/après** (Résultats) restent volontairement des
placeholders : n'y mettre que de vraies transformations clients.
