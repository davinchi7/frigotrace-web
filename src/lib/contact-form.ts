import "server-only";

import { DEFAULT_CONTACT_FORM_API_URL, DEFAULT_CONTACT_FORM_ID } from "@/lib/contact-form-config";
import type { buildContactPayload } from "@/lib/contact-form-validation";

export type FitoCloudFormPayload = ReturnType<typeof buildContactPayload>;

export function resolveFormApiKey(): string | undefined {
  return process.env.FORM_API_KEY?.trim() || process.env.CONTACT_FORM_TOKEN?.trim() || undefined;
}

export function resolveContactFormId(): string {
  return process.env.CONTACT_FORM_ID?.trim() || DEFAULT_CONTACT_FORM_ID;
}

export function resolvePrivacyVersion(): string {
  return process.env.PRIVACY_POLICY_VERSION?.trim() || "1.0";
}

export async function sendContactFormToToolsApi(payload: FitoCloudFormPayload): Promise<void> {
  const apiUrl = (process.env.CONTACT_FORM_API_URL?.trim() || DEFAULT_CONTACT_FORM_API_URL).replace(/\/$/, "");
  const apiKey = resolveFormApiKey();
  const formId = resolveContactFormId();

  if (!apiKey) {
    throw new Error("CONTACT_FORM_NOT_CONFIGURED");
  }

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
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
