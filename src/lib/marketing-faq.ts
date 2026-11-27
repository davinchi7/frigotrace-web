export type FaqItem = { question: string; answer: string };

export const PREGUNTAS_FRECUENTES: FaqItem[] = [
  {
    question: "¿Qué es FrigoTrace?",
    answer:
      "FrigoTrace es un software en la nube de DAVINCHI para el libro de registro digital de gases fluorados en instalaciones frigoríficas, alineado con el Real Decreto 1066/2026.",
  },
  {
    question: "¿Qué registros exige el RD 1066/2026?",
    answer:
      "Entre otros: inventario de equipos y cargas (art. 10), registro de fugas (art. 15.1), ventas y adquisiciones de gases (art. 15.3), certificados del personal con vigencia (art. 6.6) e informe del sistema equivalente digital (art. 11.2 y Anexo V). FrigoTrace organiza estos bloques en la aplicación.",
  },
  {
    question: "¿FrigoTrace envía datos al registro del MITECO?",
    answer:
      "No. El art. 13 del RD 1066/2026 prevé la remisión al registro del MITECO cuando esté operativo. FrigoTrace prepara y exporta la información, pero no efectúa envíos automáticos a ese registro mientras no esté disponible.",
  },
  {
    question: "¿Sustituye al libro de registro en papel?",
    answer:
      "El RD 1066/2026 permite el sistema equivalente digital cuando cumple los requisitos del art. 11.2. FrigoTrace está orientado a ese registro estructurado; la responsabilidad del cumplimiento sigue siendo del operador.",
  },
  {
    question: "¿Cómo solicito una demo?",
    answer:
      "Usa el formulario de contacto en /contacto. Te mostramos la interfaz con datos claramente marcados como de ejemplo.",
  },
];