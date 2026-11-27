"use server";

import { buildContactPayload, validateContactForm } from "@/lib/contact-form-validation";
import { resolvePrivacyVersion, sendContactFormToToolsApi } from "@/lib/contact-form";
import {
  type ContactFormState,
  readContactFormInput,
} from "@/lib/contact-form-action";

export async function actionContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const readString = (key: string) => formData.get(key)?.toString().trim() ?? "";

  if (readString("web_url")) {
    return { ok: true };
  }

  const input = readContactFormInput(formData);

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