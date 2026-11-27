import type { Metadata } from "next";
import { LEGAL_ENTITY } from "@/lib/legal-entity";

function envTruthy(raw: string | undefined): boolean {
  const v = raw?.trim().toLowerCase();
  return v === "true" || v === "1" || v === "yes";
}

export function isSeoIndexable(): boolean {
  return envTruthy(process.env.SEO_INDEXABLE);
}

export function getSiteUrl(): string {
  const domain = process.env.APP_DOMAIN?.trim();
  if (domain) {
    const host = domain.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }
  const pub = process.env.APP_PUBLIC_URL?.trim();
  if (pub) return pub.replace(/\/$/, "");
  return "http://127.0.0.1:3300";
}

export function metadataBase(): URL {
  try {
    return new URL(getSiteUrl());
  } catch {
    return new URL("http://127.0.0.1:3300");
  }
}

export const PUBLIC_PATHS = [
  "",
  "contacto",
  "preguntas-frecuentes",
  "formacion",
  "aviso-legal",
  "privacidad",
  "cookies",
  "terminos",
] as const;

export function buildPublicMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const base = getSiteUrl();
  const url = path ? `${base}/${path.replace(/^\//, "")}` : base;
  const product = LEGAL_ENTITY.productName;
  const verification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

  const meta: Metadata = {
    title,
    description,
    alternates: { canonical: url, languages: { "es-ES": url } },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url,
      title,
      description,
      siteName: product,
      images: [{ url: `${base}/brand/png/frigotrace-horizontal-1200.png`, width: 1200, height: 400, alt: product }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${base}/brand/png/frigotrace-horizontal-1200.png`],
    },
    robots: isSeoIndexable() ? { index: true, follow: true } : { index: false, follow: false },
  };

  if (verification) {
    meta.verification = { google: verification };
  }

  return meta;
}