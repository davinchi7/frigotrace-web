export const COOKIE_PREFS_OPEN_EVENT = "ft-cookie-prefs-open";

export function openCookiePreferences(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(COOKIE_PREFS_OPEN_EVENT));
}