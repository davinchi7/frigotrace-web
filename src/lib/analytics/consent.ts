export const CONSENT_STORAGE_KEY = "ft-analytics-consent";

export type AnalyticsConsent = "granted" | "denied" | null;

export function readAnalyticsConsent(): AnalyticsConsent {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (raw === "granted" || raw === "denied") return raw;
  } catch {
    /* ignore */
  }
  return null;
}

export function writeAnalyticsConsent(value: Exclude<AnalyticsConsent, null>): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent("ft-analytics-consent", { detail: value }));
}