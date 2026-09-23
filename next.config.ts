import type { NextConfig } from "next";

// Défini uniquement pour le déploiement GitHub Pages (voir script `deploy:build`).
// En local (`npm run dev`), le site reste servi à la racine.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Export statique : le site se déploie comme simple dossier de fichiers.
  output: "export",
  ...(basePath ? { basePath } : {}),
  // Requis en export statique (pas de serveur d'optimisation d'images).
  images: { unoptimized: true },
};

export default nextConfig;
