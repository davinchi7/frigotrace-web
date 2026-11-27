"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getAppUrl } from "@/lib/app-url";

const NAV = [
  { href: "/#solucion", label: "Solución" },
  { href: "/formacion", label: "Formación" },
  { href: "/preguntas-frecuentes", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function MarketingHeader() {
  const [open, setOpen] = useState(false);
  const appUrl = getAppUrl();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 min-h-[60px]">
        <BrandLogo href="/" />

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ft-primary min-h-11 flex items-center">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" asChild className="min-h-11">
            <Link href="/contacto">Solicitar demo</Link>
          </Button>
          <Button asChild className="min-h-11">
            <a href={appUrl} rel="noopener noreferrer">
              Acceder a la app
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-slate-200 md:hidden"
          aria-expanded={open}
          aria-controls="marketing-mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      <div
        id="marketing-mobile-nav"
        className={cn("border-t border-slate-200 bg-white px-4 pb-4 pt-2 md:hidden", open ? "block" : "hidden")}
      >
        <nav className="flex flex-col gap-1 text-sm font-medium" aria-label="Móvil">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-h-11 flex items-center rounded-lg px-2 hover:bg-ft-ice"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contacto" className="min-h-11 flex items-center rounded-lg px-2 hover:bg-ft-ice" onClick={() => setOpen(false)}>
            Solicitar demo
          </Link>
          <a href={appUrl} className="min-h-11 flex items-center rounded-lg px-2 text-[#0A7F85] font-semibold">
            Acceder a la app
          </a>
        </nav>
      </div>
    </header>
  );
}