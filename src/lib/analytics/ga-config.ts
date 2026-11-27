import { isSeoIndexable } from "@/lib/seo";

export const DEFAULT_GA_MEASUREMENT_ID = "G-WRTRB6X5TE";

/** ID GA4: `NEXT_PUBLIC_GA_ID` o legacy `NEXT_PUBLIC_GA_MEASUREMENT_ID`, si no el default. */
export function resolveGaMeasurementId(): string {
  const fromEnv =
    process.env.NEXT_PUBLIC_GA_ID?.trim() || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  return fromEnv || DEFAULT_GA_MEASUREMENT_ID;
}

/** Solo producción indexable (`SEO_INDEXABLE=true`), nunca en `next dev`. */
export function shouldLoadGoogleAnalytics(): boolean {
  if (process.env.NODE_ENV === "development") return false;
  return isSeoIndexable();
}

export function gaRuntimeConfig(): { enabled: boolean; measurementId: string } {
  const measurementId = resolveGaMeasurementId();
  const enabled = shouldLoadGoogleAnalytics() && Boolean(measurementId);
  return { enabled, measurementId };
}