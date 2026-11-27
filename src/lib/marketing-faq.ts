export type FaqItem = { question: string; answer: string };

export const PREGUNTAS_FRECUENTES: FaqItem[] = [
  {
    question: "¿Qué es FrigoTrace?",
    answer:
      "FrigoTrace es una plataforma SaaS de DAVINCHI para registrar temperaturas, incidencias y evidencias en la cadena de frío alimentaria, alineada con el Real Decreto 1066/2026 sobre trazabilidad y control de la temperatura.",
  },
  {
    question: "¿Sustituye al registro en papel?",
    answer:
      "El registro digital puede sustituir o complementar soportes en papel cuando cumple los requisitos del operador y de la normativa aplicable. FrigoTrace facilita evidencias exportables y trazabilidad por lote o expedición.",
  },
  {
    question: "¿FrigoTrace transmite datos a la Administración?",
    answer:
      "No. El operador conserva la custodia de sus registros. La plataforma no envía datos automáticamente a autoridades salvo integraciones que el cliente configure expresamente.",
  },
  {
    question: "¿Dónde se alojan los datos?",
    answer:
      "La aplicación y sus bases de datos se alojan en OVHcloud (Londres, Reino Unido), con transferencia amparada por la decisión de adecuación UE–Reino Unido. No se afirma alojamiento en la UE.",
  },
  {
    question: "¿Cómo solicito una demo?",
    answer:
      "Puedes usar el formulario de contacto en /contacto o el bloque de solicitud en la página principal. Responderemos para concertar una demostración.",
  },
];