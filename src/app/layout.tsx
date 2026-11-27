import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LEGAL_ENTITY } from "@/lib/legal-entity";
import { getSiteUrl, isSeoIndexable, metadataBase, OG_IMAGE_PATH } from "@/lib/seo";
import { CookieConsentBanner } from "@/components/seo/CookieConsentBanner";
import { gaRuntimeConfig } from "@/lib/analytics/ga-config";
import { GoogleAnalytics, GoogleConsentDefaults } from "@/components/seo/GoogleAnalytics";

export const dynamic = "force-dynamic";

const nunito = localFont({
  src: [
    { path: "../../public/brand/tipografia/Nunito-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/brand/tipografia/Nunito-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/brand/tipografia/Nunito-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-nunito",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl();
  const indexable = isSeoIndexable();
  return {
    metadataBase: metadataBase(),
    title: {
      default: `${LEGAL_ENTITY.productName} — Gases fluorados RD 1066/2026`,
      template: `%s | ${LEGAL_ENTITY.productName}`,
    },
    description:
      "Libro de registro digital de equipos, fugas, ventas y certificados conforme al RD 1066/2026.",
    alternates: {
      canonical: siteUrl,
      languages: { es: siteUrl, "x-default": siteUrl },
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: siteUrl,
      siteName: LEGAL_ENTITY.productName,
      images: [{ url: OG_IMAGE_PATH, width: 1200, height: 630, alt: LEGAL_ENTITY.productName }],
    },
    twitter: { card: "summary_large_image" },
    icons: {
      icon: [
        { url: "/brand/favicon/favicon.svg", type: "image/svg+xml" },
        { url: "/brand/favicon/favicon.ico" },
      ],
      apple: "/brand/favicon/apple-touch-icon-180.png",
    },
    robots: indexable ? { index: true, follow: true } : { index: false, follow: false },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { enabled: gaEnabled, measurementId } = gaRuntimeConfig();

  return (
    <html lang="es" dir="ltr">
      <head>{gaEnabled ? <GoogleConsentDefaults /> : null}</head>
      <body className={`${nunito.variable} font-sans`}>
        {children}
        {gaEnabled ? <GoogleAnalytics measurementId={measurementId} /> : null}
        <CookieConsentBanner enabled={gaEnabled} measurementId={measurementId} />
      </body>
    </html>
  );
}