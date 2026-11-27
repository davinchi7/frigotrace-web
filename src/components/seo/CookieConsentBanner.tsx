"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { readAnalyticsConsent, writeAnalyticsConsent } from "@/lib/analytics/consent";
import { COOKIE_PREFS_OPEN_EVENT } from "@/lib/analytics/cookie-prefs-event";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const BANNER_BODY_CLASS = "ft-cookie-banner-open";

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

  useEffect(() => {
    if (!bannerOpen) {
      document.body.classList.remove(BANNER_BODY_CLASS);
      return;
    }
    document.body.classList.add(BANNER_BODY_CLASS);
    return () => document.body.classList.remove(BANNER_BODY_CLASS);
  }, [bannerOpen]);

  if (!gaEnabled) return null;

  return (
    <>
      {bannerOpen ? (
        <div
          className="pointer-events-none fixed inset-x-0 bottom-0 z-30 px-2 pb-2 sm:z-40 sm:px-4 sm:pb-3"
          role="dialog"
          aria-labelledby="cookie-banner-title"
        >
          <div
            className={cn(
              "pointer-events-auto mx-auto w-full max-w-4xl rounded-lg border border-slate-200 bg-white/98 shadow-lg backdrop-blur-sm",
              "p-2.5 sm:p-4"
            )}
          >
            <p id="cookie-banner-title" className="text-xs font-semibold text-slate-900 sm:text-sm">
              Cookies y medición
            </p>
            <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-slate-600 sm:mt-1 sm:line-clamp-none sm:text-sm">
              Cookies técnicas del sitio. Con tu permiso, Google Analytics mide el uso.{" "}
              <Link href="/cookies" className="text-[#0A7F85] underline">
                Más información
              </Link>
            </p>
            <div className="mt-2 flex flex-row flex-wrap items-center gap-2">
              <button
                type="button"
                className="text-[11px] font-medium text-[#0A7F85] underline sm:text-xs"
                onClick={() => setPrefsOpen(true)}
              >
                Configurar
              </button>
              <div className="ml-auto flex flex-row gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-8 min-h-8 px-2.5 text-xs sm:h-10 sm:min-h-10 sm:px-3 sm:text-sm"
                  onClick={() => {
                    writeAnalyticsConsent("denied");
                    applyDeniedConsent();
                    setBannerOpen(false);
                  }}
                >
                  Rechazar
                </Button>
                <Button
                  type="button"
                  size="sm"
                  className="h-8 min-h-8 px-2.5 text-xs sm:h-10 sm:min-h-10 sm:px-3 sm:text-sm"
                  onClick={() => {
                    writeAnalyticsConsent("granted");
                    applyGrantedConsent();
                    setBannerOpen(false);
                  }}
                >
                  Aceptar
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