import "server-only";

import { DEFAULT_CONTACT_FORM_API_URL, DEFAULT_CONTACT_FORM_ID } from "@/lib/contact-form-config";
import type { buildContactPayload } from "@/lib/contact-form-validation";

export type ContactFormApiPayload = ReturnType<typeof buildContactPayload>;

const DEFAULT_APP_PUBLIC_URL = "https://frigotrace.es";

/** URL pública para cabeceras Origin/Referer del envío a ApiTools. */
export function resolveAppPublicUrl(): string {
  const pub = process.env.APP_PUBLIC_URL?.trim();
  if (pub) return pub.replace(/\/$/, "");
  const domain = process.env.APP_DOMAIN?.trim();
  if (domain) {
    const host = domain.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }
  return DEFAULT_APP_PUBLIC_URL;
}

export function resolveFormApiKey(): string | undefined {
  return process.env.FORM_API_KEY?.trim() || process.env.CONTACT_FORM_TOKEN?.trim() || undefined;
}

export function resolveContactFormId(): string {
  return process.env.CONTACT_FORM_ID?.trim() || DEFAULT_CONTACT_FORM_ID;
}

export function resolvePrivacyVersion(): string {
  return process.env.PRIVACY_POLICY_VERSION?.trim() || "1.0";
}

export async function sendContactFormToToolsApi(payload: ContactFormApiPayload): Promise<void> {
  const apiUrl = (process.env.CONTACT_FORM_API_URL?.trim() || DEFAULT_CONTACT_FORM_API_URL).replace(/\/$/, "");
  const apiKey = resolveFormApiKey();
  const formId = resolveContactFormId();
  const publicOrigin = resolveAppPublicUrl();

  if (!apiKey) {
    throw new Error("CONTACT_FORM_NOT_CONFIGURED");
  }

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      Origin: publicOrigin,
      Referer: `${publicOrigin}/contacto`,
    },
    body: JSON.stringify({
      idDynaForm: formId,
      dataForm: JSON.stringify(payload),
    }),
    cache: "no-store",
  });

  if (res.status === 429) {
    throw new Error("RATE_LIMIT");
  }
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`CONTACT_FORM_HTTP_${res.status}${text ? `: ${text.slice(0, 200)}` : ""}`);
  }
}
