import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { LEGAL_ENTITY, HOSTING_NOTE } from "@/lib/legal-entity";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { CookiePreferencesLink } from "@/components/seo/CookiePreferencesLink";

export const dynamic = "force-dynamic";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  const footerEmail = process.env.CONTACT_EMAIL?.trim() || LEGAL_ENTITY.email;

  return (
    <div className="min-h-screen bg-white text-ft-ink overflow-x-hidden">
      <MarketingHeader />
      <main className="pb-16">{children}</main>
      <footer className="border-t border-slate-200 bg-ft-ice py-12 text-sm text-slate-600">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <BrandLogo href="/" />
            <p className="mt-3 max-w-xs leading-relaxed">
              {LEGAL_ENTITY.tradeName} — trazabilidad y registro de la cadena de frío alimentaria (RD 1066/2026).
            </p>
            <p className="mt-2 max-w-xs text-xs text-slate-500">{LEGAL_ENTITY.legalName}</p>
            <p className="mt-3 max-w-sm text-xs text-slate-500 leading-relaxed">{HOSTING_NOTE}</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Recursos</p>
            <Link href="/formacion" className="block py-1 hover:text-[#0A7F85]">
              Formación RD 1066/2026
            </Link>
            <Link href="/preguntas-frecuentes" className="block py-1 hover:text-[#0A7F85]">
              Preguntas frecuentes
            </Link>
            <Link href="/contacto" className="block py-1 hover:text-[#0A7F85]">
              Contacto y demo
            </Link>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Legal</p>
            <Link href="/aviso-legal" className="block py-1 hover:text-[#0A7F85]">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="block py-1 hover:text-[#0A7F85]">
              Privacidad
            </Link>
            <Link href="/cookies" className="block py-1 hover:text-[#0A7F85]">
              Política de cookies
            </Link>
            <CookiePreferencesLink className="block w-full py-1 hover:text-[#0A7F85]">
              Preferencias de cookies
            </CookiePreferencesLink>
            <Link href="/terminos" className="block py-1 hover:text-[#0A7F85]">
              Condiciones generales
            </Link>
            {footerEmail ? (
              <a href={`mailto:${footerEmail}`} className="mt-2 block py-1 hover:text-[#0A7F85]">
                {footerEmail}
              </a>
            ) : null}
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-6xl px-4 text-xs text-slate-400">
          © {new Date().getFullYear()} {LEGAL_ENTITY.legalName} · NIF {LEGAL_ENTITY.nif} · Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}