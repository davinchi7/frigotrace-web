"use server";

import { buildContactPayload, validateContactForm, type ContactFormInput } from "@/lib/contact-form-validation";
import { resolvePrivacyVersion, sendContactFormToToolsApi } from "@/lib/contact-form";
import { LEGAL_ENTITY } from "@/lib/legal-entity";

export type ContactFormState =
  | { ok: true }
  | { error: string; values: ContactFormInput; errorKind: "validation" | "submit" }
  | null;

function readString(formData: FormData, key: string): string {
  return formData.get(key)?.toString().trim() ?? "";
}

function readInput(formData: FormData): ContactFormInput {
  return {
    motivo: readString(formData, "motivo"),
    nombre: readString(formData, "nombre"),
    email: readString(formData, "email"),
    telefono: readString(formData, "telefono"),
    perfil: readString(formData, "perfil"),
    provincia: readString(formData, "provincia"),
    instalaciones: readString(formData, "instalaciones"),
    quienRecomendo: readString(formData, "quien-recomendo"),
    quienRecomendoDetalle: readString(formData, "quien-recomendo-detalle"),
    comentarios: readString(formData, "comentarios"),
    aceptoPrivacidad: formData.get("acepto-privacidad") === "on",
    aceptoComunicaciones: formData.get("acepto-comunicaciones") === "on",
  };
}

export const CONTACT_FORM_FALLBACK_EMAIL = LEGAL_ENTITY.email;

export async function actionContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  if (readString(formData, "web_url")) {
    return { ok: true };
  }

  const input = readInput(formData);

  const validationError = validateContactForm(input);
  if (validationError) {
    return { error: validationError, values: input, errorKind: "validation" };
  }

  try {
    await sendContactFormToToolsApi(buildContactPayload(input, resolvePrivacyVersion()));
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "";
    if (message === "CONTACT_FORM_NOT_CONFIGURED") {
      return {
        error: "El formulario no está configurado todavía. Inténtelo más tarde.",
        values: input,
        errorKind: "submit",
      };
    }
    if (message === "RATE_LIMIT") {
      return {
        error:
          "Has realizado varios envíos seguidos. Espera unos minutos e inténtalo de nuevo, o escríbenos por correo.",
        values: input,
        errorKind: "submit",
      };
    }
    return {
      error: "submit_failed",
      values: input,
      errorKind: "submit",
    };
  }
}