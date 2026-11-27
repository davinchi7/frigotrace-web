"use server";

import { resolvePrivacyVersion, sendContactFormToToolsApi } from "@/lib/contact-form";

export type DemoLeadState = { ok?: boolean; error?: string } | null;

export async function actionDemoLead(_prev: DemoLeadState, formData: FormData): Promise<DemoLeadState> {
  if (formData.get("website")?.toString().trim()) {
    return { ok: true };
  }

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const terms = formData.get("terms") === "on";

  if (!terms) return { error: "Debe aceptar la política de privacidad" };
  if (!name || !email) return { error: "Nombre y correo obligatorios" };

  try {
    await sendContactFormToToolsApi({
      nombre: name,
      email,
      telefono: formData.get("phone")?.toString().trim() || "",
      empresa: formData.get("company")?.toString().trim() || "",
      mensaje: formData.get("message")?.toString().trim() || "",
      aceptoPrivacidad: true,
      aceptoComunicaciones: formData.get("marketing") === "on",
      privacidadVersion: resolvePrivacyVersion(),
      consentimientoEn: new Date().toISOString(),
      web_url: "",
    });
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "";
    if (message === "CONTACT_FORM_NOT_CONFIGURED") {
      return { error: "El formulario no está configurado todavía. Inténtelo más tarde." };
    }
    return { error: "No se pudo enviar la solicitud. Inténtelo de nuevo." };
  }
}
