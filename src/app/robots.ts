import type { MetadataRoute } from "next";
import { getSiteUrl, isSeoIndexable } from "@/lib/seo";

export const dynamic = "force-dynamic";

const AI_CRAWLER_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
  "Bingbot",
  "Applebot-Extended",
] as const;

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();

  if (!isSeoIndexable()) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...AI_CRAWLER_AGENTS.map((userAgent) => ({ userAgent, allow: "/" as const })),
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}