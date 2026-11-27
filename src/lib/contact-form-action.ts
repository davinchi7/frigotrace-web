import { type ContactFormInput } from "@/lib/contact-form-validation";
import { LEGAL_ENTITY } from "@/lib/legal-entity";

export type ContactFormState =
  | { ok: true }
  | { error: string; values: ContactFormInput; errorKind: "validation" | "submit" }
  | null;

export const CONTACT_FORM_FALLBACK_EMAIL = LEGAL_ENTITY.email;

export function readContactFormInput(formData: FormData): ContactFormInput {
  const readString = (key: string) => formData.get(key)?.toString().trim() ?? "";
  return {
    motivo: readString("motivo"),
    nombre: readString("nombre"),
    email: readString("email"),
    telefono: readString("telefono"),
    perfil: readString("perfil"),
    provincia: readString("provincia"),
    instalaciones: readString("instalaciones"),
    quienRecomendo: readString("quien-recomendo"),
    quienRecomendoDetalle: readString("quien-recomendo-detalle"),
    comentarios: readString("comentarios"),
    aceptoPrivacidad: formData.get("acepto-privacidad") === "on",
    aceptoComunicaciones: formData.get("acepto-comunicaciones") === "on",
  };
}