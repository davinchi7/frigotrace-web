"use server";

import { buildContactPayload, validateContactForm } from "@/lib/contact-form-validation";
import { resolvePrivacyVersion, sendContactFormToToolsApi } from "@/lib/contact-form";

export type ContactFormState = { ok?: boolean; error?: string } | null;

function readString(formData: FormData, key: string): string {
  return formData.get(key)?.toString().trim() ?? "";
}

export async function actionContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  if (readString(formData, "web_url")) {
    return { ok: true };
  }

  const input = {
    motivo: readString(formData, "motivo"),
    nombre: readString(formData, "nombre"),
    email: readString(formData, "email"),
    telefono: readString(formData, "telefono"),
    perfil: readString(formData, "perfil"),
    provincia: readString(formData, "provincia"),
    explotaciones: readString(formData, "explotaciones"),
    quienRecomendo: readString(formData, "quien-recomendo"),
    quienRecomendoDetalle: readString(formData, "quien-recomendo-detalle"),
    comentarios: readString(formData, "comentarios"),
    aceptoPrivacidad: formData.get("acepto-privacidad") === "on",
    aceptoComunicaciones: formData.get("acepto-comunicaciones") === "on",
  };

  const validationError = validateContactForm(input);
  if (validationError) {
    return { error: validationError };
  }

  try {
    await sendContactFormToToolsApi(buildContactPayload(input, resolvePrivacyVersion()));
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "";
    if (message === "CONTACT_FORM_NOT_CONFIGURED") {
      return { error: "El formulario no está configurado todavía. Inténtelo más tarde." };
    }
    if (message === "RATE_LIMIT") {
      return {
        error:
          "Has realizado varios envíos seguidos. Espera unos minutos e inténtalo de nuevo, o escríbenos por correo.",
      };
    }
    return { error: "Error al enviar el formulario. Por favor, inténtalo de nuevo." };
  }
}
