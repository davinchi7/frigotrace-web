import {
  CONTACT_FIELD_LIMITS,
  RECOMMENDATION_DETAIL,
  RECOMMENDATION_DETAIL_DEFAULT,
} from "@/lib/contact-form-config";

export type ContactFormInput = {
  motivo: string;
  nombre: string;
  email: string;
  telefono: string;
  perfil: string;
  provincia: string;
  explotaciones: string;
  quienRecomendo: string;
  quienRecomendoDetalle: string;
  comentarios: string;
  aceptoPrivacidad: boolean;
  aceptoComunicaciones: boolean;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(input: ContactFormInput): string | null {
  if (!input.nombre.trim()) return "El nombre es obligatorio";
  const email = input.email.trim();
  if (!email) return "El email es obligatorio";
  if (!EMAIL_RE.test(email)) return "Por favor, introduce un email válido.";
  if (!input.perfil.trim()) return "Elige tu perfil";
  if (!input.quienRecomendo.trim()) return "Indica quién te lo ha recomendado";
  const detalleCfg = RECOMMENDATION_DETAIL[input.quienRecomendo] ?? RECOMMENDATION_DETAIL_DEFAULT;
  if (detalleCfg.obligatorio && !input.quienRecomendoDetalle.trim()) {
    return detalleCfg.aviso ?? "Completa el detalle";
  }
  if (!input.aceptoPrivacidad) return "Debes aceptar la política de privacidad";

  const limits: Array<[keyof typeof CONTACT_FIELD_LIMITS, string]> = [
    ["nombre", input.nombre],
    ["email", input.email],
    ["telefono", input.telefono],
    ["provincia", input.provincia],
    ["quienRecomendoDetalle", input.quienRecomendoDetalle],
    ["comentarios", input.comentarios],
  ];
  for (const [key, value] of limits) {
    const max = CONTACT_FIELD_LIMITS[key];
    if (value.length > max) return `Máximo ${max} caracteres`;
  }
  return null;
}

export function buildContactPayload(input: ContactFormInput, privacidadVersion: string) {
  const origen = input.quienRecomendo.trim();
  const detalle = input.quienRecomendoDetalle.trim();
  const quienTeLoRecomendo = detalle ? `${origen}: ${detalle}` : origen;
  return {
    motivo: input.motivo.trim(),
    nombre: input.nombre.trim(),
    email: input.email.trim(),
    telefono: input.telefono.trim(),
    perfil: input.perfil.trim(),
    provincia: input.provincia.trim(),
    explotaciones: input.explotaciones.trim(),
    quienTeLoRecomendo,
    comentarios: input.comentarios.trim(),
    aceptoPrivacidad: input.aceptoPrivacidad ? "Sí" : "No",
    aceptoComunicaciones: input.aceptoComunicaciones ? "Sí" : "No",
    privacidadVersion,
    consentimientoEn: new Date().toISOString(),
    web_url: "",
  };
}
