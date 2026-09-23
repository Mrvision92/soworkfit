import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/coaching",
    "/enfants",
    "/football",
    "/a-propos",
    "/resultats",
    "/contact",
    "/reserver",
  ];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : r === "/reserver" ? 0.9 : 0.7,
  }));
}
