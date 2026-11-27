"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { readAnalyticsConsent, writeAnalyticsConsent } from "@/lib/analytics/consent";
import { COOKIE_PREFS_OPEN_EVENT } from "@/lib/analytics/cookie-prefs-event";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function applyGrantedConsent(): void {
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
}

function applyDeniedConsent(): void {
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
}

export function CookieConsentBanner({
  enabled,
  measurementId,
}: {
  enabled: boolean;
  measurementId?: string;
}) {
  const gaEnabled = enabled && Boolean(measurementId?.trim());
  const [bannerOpen, setBannerOpen] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [consentLabel, setConsentLabel] = useState<"pendiente" | "aceptada" | "rechazada">("pendiente");

  useEffect(() => {
    if (!gaEnabled) return;
    const existing = readAnalyticsConsent();
    if (existing === "granted") {
      setConsentLabel("aceptada");
      applyGrantedConsent();
      return;
    }
    if (existing === "denied") {
      setConsentLabel("rechazada");
      applyDeniedConsent();
      return;
    }
    setBannerOpen(true);
    setConsentLabel("pendiente");
  }, [gaEnabled]);

  useEffect(() => {
    const onConsent = () => {
      const c = readAnalyticsConsent();
      if (c === "granted") setConsentLabel("aceptada");
      else if (c === "denied") setConsentLabel("rechazada");
    };
    window.addEventListener("ft-analytics-consent", onConsent);
    return () => window.removeEventListener("ft-analytics-consent", onConsent);
  }, []);

  useEffect(() => {
    const openPrefs = () => setPrefsOpen(true);
    window.addEventListener(COOKIE_PREFS_OPEN_EVENT, openPrefs);
    return () => window.removeEventListener(COOKIE_PREFS_OPEN_EVENT, openPrefs);
  }, []);

  if (!gaEnabled) return null;

  return (
    <>
      {bannerOpen ? (
        <div
          className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-3 sm:px-4"
          role="dialog"
          aria-labelledby="cookie-banner-title"
        >
          <div className="pointer-events-auto w-full max-w-4xl rounded-lg border border-slate-200 bg-white p-3 shadow-lg sm:p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl text-sm text-slate-700">
                <p id="cookie-banner-title" className="font-semibold text-slate-900">
                  Cookies y medición
                </p>
                <p className="mt-1">
                  Usamos cookies técnicas para el sitio. Con tu permiso, Google Analytics (Google Ireland Ltd.) mide el
                  uso. Puedes aceptar, rechazar o cambiar tu elección después.{" "}
                  <Link href="/cookies" className="text-[#0A7F85] underline">
                    Más información
                  </Link>
                  .
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
                <Button
                  type="button"
                  variant="outline"
                  className="min-h-10"
                  onClick={() => {
                    writeAnalyticsConsent("denied");
                    applyDeniedConsent();
                    setBannerOpen(false);
                  }}
                >
                  Rechazar analítica
                </Button>
                <Button
                  type="button"
                  className="min-h-10"
                  onClick={() => {
                    writeAnalyticsConsent("granted");
                    applyGrantedConsent();
                    setBannerOpen(false);
                  }}
                >
                  Aceptar analítica
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {prefsOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/30 p-4 sm:items-center"
          role="dialog"
          aria-label="Preferencias de cookies"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Cerrar"
            onClick={() => setPrefsOpen(false)}
          />
          <div className="relative w-full max-w-sm rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-xl">
            <p className="font-medium text-slate-900">Preferencias de cookies</p>
            <p className="mt-2 text-slate-600">
              Analítica:{" "}
              {consentLabel === "aceptada" ? "aceptada" : consentLabel === "rechazada" ? "rechazada" : "sin elegir"}.
            </p>
            <div className="mt-3 flex gap-2">
              <Button
                type="button"
                size="sm"
                className="flex-1"
                onClick={() => {
                  writeAnalyticsConsent("granted");
                  applyGrantedConsent();
                  setBannerOpen(false);
                  setPrefsOpen(false);
                }}
              >
                Aceptar
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={() => {
                  writeAnalyticsConsent("denied");
                  applyDeniedConsent();
                  setBannerOpen(false);
                  setPrefsOpen(false);
                }}
              >
                Rechazar
              </Button>
            </div>
            <Link href="/cookies" className="mt-2 block text-[#0A7F85] underline">
              Política de cookies
            </Link>
            <Button type="button" variant="ghost" size="sm" className="mt-2 w-full" onClick={() => setPrefsOpen(false)}>
              Cerrar
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}