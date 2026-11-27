import { LEGAL_ENTITY, LEGAL_UPDATE } from "@/lib/legal-entity";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/structured-data";
import type { ReactNode } from "react";

export function LegalDocLayout({
  title,
  breadcrumb,
  children,
}: {
  title: string;
  breadcrumb: BreadcrumbItem[];
  children: ReactNode;
}) {
  const crumbs: BreadcrumbItem[] = [{ name: "Inicio", path: "" }, ...breadcrumb];
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 prose prose-slate prose-table:text-sm">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <h1>{title}</h1>
      <p className="text-sm text-slate-600 not-prose">Última actualización: {LEGAL_UPDATE}</p>
      <p className="text-sm text-slate-600 not-prose">
        Responsable: {LEGAL_ENTITY.legalName} · NIF {LEGAL_ENTITY.nif}
      </p>
      {children}
    </article>
  );
}