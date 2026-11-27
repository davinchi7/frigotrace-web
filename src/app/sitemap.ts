import type { MetadataRoute } from "next";
import { getSiteUrl, isSeoIndexable, PUBLIC_PATHS } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  if (!isSeoIndexable()) return [];

  const now = new Date();
  return PUBLIC_PATHS.map((p) => ({
    url: p ? `${base}/${p}` : base,
    lastModified: now,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "contacto" ? 0.9 : 0.8,
  }));
}