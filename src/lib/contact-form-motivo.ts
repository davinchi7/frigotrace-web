import { CONTACT_MOTIVO_OPTIONS } from "@/lib/contact-form-config";

export function resolveMotivoFromSearch(motivoParam: string | undefined | null): string {
  if (motivoParam === "demo") return "Ver una demo";
  if (motivoParam === "otra") return "Otra consulta";
  return CONTACT_MOTIVO_OPTIONS[0];
}