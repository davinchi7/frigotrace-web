import type { Metadata } from "next";
import { LEGAL_ENTITY } from "@/lib/legal-entity";

export const OG_IMAGE_PATH = "/og.png";

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

export function pageAlternateLanguages(canonical: string): NonNullable<Metadata["alternates"]> {
  return {
    canonical,
    languages: {
      es: canonical,
      "x-default": canonical,
    },
  };
}

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
  const ogImage = { url: OG_IMAGE_PATH, width: 1200, height: 630, alt: product };

  const meta: Metadata = {
    title,
    description,
    alternates: pageAlternateLanguages(url),
    openGraph: {
      type: "website",
      locale: "es_ES",
      url,
      title,
      description,
      siteName: product,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
    robots: isSeoIndexable() ? { index: true, follow: true } : { index: false, follow: false },
  };

  if (verification) {
    meta.verification = { google: verification };
  }

  return meta;
}