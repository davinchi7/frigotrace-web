"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { SCREEN_CAPTION, SCREEN_SIZE, type ScreenSlug, screenSrc } from "@/lib/marketing-screens";
import { cn } from "@/lib/utils";

type ScreenshotLightboxProps = {
  slug: ScreenSlug;
  alt: string;
  className?: string;
  children: React.ReactNode;
};

export function ScreenshotLightbox({ slug, alt, className, children }: ScreenshotLightboxProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        className={cn("group block w-full cursor-zoom-in text-left", className)}
        onClick={() => setOpen(true)}
        aria-label={`Ampliar captura: ${alt}`}
      >
        {children}
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button type="button" className="absolute inset-0 cursor-default" aria-label="Cerrar" onClick={close} />
          <div className="relative z-10 max-h-[92vh] w-full max-w-6xl overflow-auto rounded-lg bg-white p-2 shadow-2xl">
            <Image
              src={screenSrc(slug, "webp")}
              alt={alt}
              width={SCREEN_SIZE.width}
              height={SCREEN_SIZE.height}
              className="h-auto w-full rounded"
              sizes="100vw"
              priority
            />
            <p className="mt-2 px-2 pb-1 text-center text-xs text-slate-500">{SCREEN_CAPTION}</p>
          </div>
          <button
            type="button"
            className="absolute right-4 top-4 z-20 rounded-full bg-white/95 px-3 py-1.5 text-sm font-medium shadow"
            onClick={close}
          >
            Cerrar
          </button>
        </div>
      ) : null}
    </>
  );
}