"use client";

import { openCookiePreferences } from "@/lib/analytics/cookie-prefs-event";
import { cn } from "@/lib/utils";

export function CookiePreferencesLink({
  className,
  children = "Preferencias de cookies",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button type="button" onClick={() => openCookiePreferences()} className={cn("text-left hover:text-[#0A7F85]", className)}>
      {children}
    </button>
  );
}