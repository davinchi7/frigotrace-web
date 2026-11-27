/** Contrato alineado con fitocloud-web/public/formulario-contacto.js */

export const DEFAULT_CONTACT_FORM_API_URL = "https://apitools.davinchi.es/api/Form/send-form";
export const DEFAULT_CONTACT_FORM_ID = "15";

export const CONTACT_FIELD_LIMITS = {
  nombre: 100,
  email: 150,
  telefono: 30,
  provincia: 80,
  quienRecomendoDetalle: 200,
  comentarios: 2000,
} as const;

export const RECOMMENDATION_DETAIL: Record<
  string,
  { texto: string; obligatorio: boolean; aviso?: string; placeholder: string }
> = {
  Google: { texto: "¿Qué buscaste?", obligatorio: false, placeholder: "Por ejemplo: registro gases fluorados" },
  ChatGPT: { texto: "¿Qué preguntaste?", obligatorio: false, placeholder: "" },
  Gemini: { texto: "¿Qué preguntaste?", obligatorio: false, placeholder: "" },
  "Redes sociales": {
    texto: "¿Qué red?",
    obligatorio: true,
    aviso: "Indica qué red",
    placeholder: "LinkedIn, Instagram…",
  },
  "Otra persona": { texto: "¿Quién?", obligatorio: true, aviso: "Indica quién", placeholder: "" },
  Otro: { texto: "¿Cuál?", obligatorio: true, aviso: "Indica cuál", placeholder: "" },
};

export const RECOMMENDATION_DETAIL_DEFAULT = {
  texto: "Nombre de la persona",
  obligatorio: false,
  placeholder: "Nombre y, si quieres, oficina o provincia",
};

export const CONTACT_MOTIVO_OPTIONS = [
  "Condiciones de contratación",
  "Ver una demo",
  "Otra consulta",
] as const;

export const CONTACT_PERFIL_OPTIONS = [
  "Empresa instaladora / mantenimiento",
  "Distribuidor de refrigeración",
  "Responsable de instalación",
  "Gestoría o asesoría",
  "Otro",
] as const;

export const CONTACT_QUIEN_RECOMENDO_OPTIONS = [
  "Google",
  "ChatGPT",
  "Gemini",
  "Redes sociales",
  "ASAJA",
  "COAG",
  "UPA",
  "Cooperativas Agro-alimentarias",
  "AEPLA",
  "Colegio de Ingenieros Agrónomos",
  "Colegio de Ingenieros Técnicos Agrícolas",
  "IBMA España",
  "PHYTOMA",
  "FEPEX",
  "ANOVE",
  "Otra persona",
  "Otro",
] as const;
