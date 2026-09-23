# SO WORKFIT — Site officiel

Site premium du coaching sportif SO WORKFIT (Soufiane Benchekh, 15 ans
d'expérience). Next.js 16 · TypeScript · Tailwind CSS 4 · Framer Motion.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production (100 % statique)
```

## À compléter avant mise en ligne

Tout est centralisé dans **`src/lib/site.ts`** — rien d'autre à toucher :

| Champ | Effet |
|---|---|
| `city`, `address` | SEO local + page contact + structured data |
| `url` | URL de production (sitemap, OG, robots) |
| `contact.phone / whatsapp / email / instagram` | Page contact, footer, et fin du parcours de réservation (envoi WhatsApp / e-mail pré-rempli) |
| `booking.*` | URLs Calendly / Cal.com par coaching — dès qu'une URL est renseignée, l'étape finale de `/reserver` propose le vrai choix de créneau |

Tant que ces champs sont vides, le site n'affiche **rien d'inventé** :
les sections concernées montrent un état honnête ("à venir").

## Photos & logo

Des photos **temporaires** (Unsplash, libres d'usage) sont intégrées et
étalonnées automatiquement (composant `SitePhoto`). Pour passer aux vraies
photos SO WORKFIT : écraser les fichiers de `/public/photos/` en gardant
les mêmes noms — voir le tableau dans `public/brand/README.md`. Le logo
officiel se dépose dans `/public/brand/`.

## Résultats & témoignages

`src/components/home/Transformations.tsx` et `src/app/resultats/page.tsx`
contiennent les structures avant/après et témoignages, volontairement
vides : n'y mettre que de vrais parcours et de vrais avis.

## Design system

- Palette (logo) : noir chaud `#0b0a08`, anthracite, ivoire `#f1ece1`,
  bronze `#c29a5e`, champagne `#e6cfa3` — définie dans `globals.css` (@theme).
- Typos : Anton (display), Instrument Sans (texte), Instrument Serif
  italique (accents humains).
- Signatures graphiques : halo/arc et chevron (`src/components/ui/Marks.tsx`),
  texte métal (`.text-metal`), grain photographique global.
- Animations : Framer Motion, `prefers-reduced-motion` respecté partout.
