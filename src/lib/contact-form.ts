import "server-only";

const DEFAULT_API_URL = "https://apitools.davinchi.es/api/Form/send-form";

export type ContactFormPayload = {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  mensaje: string;
  aceptoPrivacidad: boolean;
  aceptoComunicaciones: boolean;
  privacidadVersion: string;
  consentimientoEn: string;
  web_url: string;
};

export function resolvePrivacyVersion(): string {
  return process.env.PRIVACY_POLICY_VERSION?.trim() || "1.0";
}

export async function sendContactFormToToolsApi(payload: ContactFormPayload): Promise<void> {
  const apiUrl = (process.env.CONTACT_FORM_API_URL?.trim() || DEFAULT_API_URL).replace(/\/$/, "");
  const token = process.env.CONTACT_FORM_TOKEN?.trim();
  const formId = process.env.CONTACT_FORM_ID?.trim();

  if (!token || !formId) {
    throw new Error("CONTACT_FORM_NOT_CONFIGURED");
  }

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": token,
    },
    body: JSON.stringify({
      idDynaForm: formId,
      dataForm: JSON.stringify(payload),
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`CONTACT_FORM_HTTP_${res.status}${text ? `: ${text.slice(0, 200)}` : ""}`);
  }
}
