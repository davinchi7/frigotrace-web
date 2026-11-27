import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LEGAL_ENTITY } from "@/lib/legal-entity";
import { getSiteUrl, isSeoIndexable, metadataBase } from "@/lib/seo";
import { CookieConsentBanner } from "@/components/seo/CookieConsentBanner";
import { GoogleAnalytics, GoogleConsentDefaults } from "@/components/seo/GoogleAnalytics";

const nunito = localFont({
  src: [
    { path: "../../public/brand/tipografia/Nunito-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/brand/tipografia/Nunito-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/brand/tipografia/Nunito-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-nunito",
  display: "swap",
});

const siteUrl = getSiteUrl();
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

export const metadata: Metadata = {
  metadataBase: metadataBase(),
  title: {
    default: `${LEGAL_ENTITY.productName} — Trazabilidad de cadena de frío`,
    template: `%s | ${LEGAL_ENTITY.productName}`,
  },
  description:
    "Registro digital de temperaturas, alarmas y evidencias para operadores de la cadena de frío alimentaria. Cumplimiento del RD 1066/2026.",
  alternates: {
    canonical: siteUrl,
    languages: { "es-ES": siteUrl },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: LEGAL_ENTITY.productName,
    images: [{ url: "/brand/png/frigotrace-horizontal-1200.png", width: 1200, height: 400 }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/brand/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/favicon/favicon.ico" },
    ],
    apple: "/brand/favicon/apple-touch-icon-180.png",
  },
  robots: isSeoIndexable() ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" dir="ltr">
      <head>
        <GoogleConsentDefaults measurementId={measurementId} />
        <link rel="alternate" hrefLang="es-ES" href={siteUrl} />
      </head>
      <body className={`${nunito.variable} font-sans`}>
        {children}
        <GoogleAnalytics measurementId={measurementId} />
        <CookieConsentBanner measurementId={measurementId} />
      </body>
    </html>
  );
}