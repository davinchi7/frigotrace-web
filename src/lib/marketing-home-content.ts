import type { ScreenSlug } from "@/lib/marketing-screens";

export const HOME_HERO = {
  kicker: "Registro digital de gases fluorados",
  title: "Software de libro de registro y trazabilidad para instalaciones frigoríficas",
  subtitle:
    "Centraliza equipos, cargas de gas, fugas, ventas, certificados del personal e informes del sistema equivalente digital conforme al Real Decreto 1066/2026.",
  badges: ["RD 1066/2026", "CO₂e por instalación", "Libro de registro digital", "Anexo V — art. 11.2"],
  heroScreen: "01-panel" as const satisfies ScreenSlug,
} as const;

export type FeatureShowcase = {
  title: string;
  text: string;
  slug: ScreenSlug;
  alt: string;
  imageOnRight?: boolean;
  futureNotice?: string;
};

export const FEATURE_SHOWCASES: FeatureShowcase[] = [
  {
    title: "Ficha de equipo y fugas",
    text: "Cada equipo con refrigerante, kg cargados, tCO₂e y historial de fugas registradas según el art. 15.1 del RD 1066/2026.",
    slug: "02-ficha-equipo",
    alt: "Ficha de equipo con datos de carga y registro de fugas",
  },
  {
    title: "Expediente del instalador",
    text: "Ventas, intervenciones y evidencias del técnico en un expediente único por cliente (arts. 10 y 15.3).",
    slug: "15-expediente-instalador",
    alt: "Expediente de instalador con ventas e intervenciones",
    imageOnRight: true,
  },
  {
    title: "Ventas con verificación",
    text: "Entregas y adquisiciones de gases fluorados con comprobación de datos antes de cerrar el movimiento (art. 15.3).",
    slug: "04-venta-verificacion",
    alt: "Registro de venta de gas con verificación de datos",
  },
  {
    title: "Certificados del personal",
    text: "Cualificaciones del personal, alertas de caducidad a siete años del art. 6.6 del RD 1066/2026.",
    slug: "05-certificados",
    alt: "Listado de certificados del personal con fechas de caducidad",
    imageOnRight: true,
  },
  {
    title: "Informe Anexo V",
    text: "Informe del sistema equivalente digital previsto en el art. 11.2 y el Anexo V del RD 1066/2026.",
    slug: "07-anexo-v",
    alt: "Informe del sistema equivalente digital Anexo V",
  },
  {
    title: "Intervención en móvil",
    text: "Registra una fuga o intervención desde el taller o la instalación, con los campos del art. 15.1.",
    slug: "03-movil-intervencion",
    alt: "Pantalla móvil de registro de intervención en fuga",
    imageOnRight: true,
  },
  {
    title: "Stock de bombonas",
    text: "Inventario de envases y gas disponible para venta o carga, alineado con trazabilidad del art. 15.3.",
    slug: "11-botellas-stock",
    alt: "Gestión de bombonas y stock de gases",
  },
  {
    title: "Catálogo de formación",
    text: "Cursos y contenidos para cumplir la formación exigida al personal (art. 6.6).",
    slug: "13-formacion-catalogo",
    alt: "Catálogo de cursos de formación",
    imageOnRight: true,
  },
  {
    title: "Seguimiento de formación",
    text: "Progreso por técnico, caducidades y certificados de cursos completados.",
    slug: "14-formacion-seguimiento",
    alt: "Seguimiento de formación del personal",
  },
  {
    title: "Portal del cliente",
    text: "El titular consulta instalaciones, informes y estado de cumplimiento sin acceder a la operativa interna.",
    slug: "09-portal-cliente",
    alt: "Portal de cliente con resumen de instalaciones",
    imageOnRight: true,
  },
  {
    title: "Importación y conectores",
    text: "Carga inicial desde hojas de cálculo o integraciones para no repetir altas manuales.",
    slug: "16-importacion-conectores",
    alt: "Asistente de importación y conectores de datos",
  },
  {
    title: "Remisión al registro MITECO (prevista)",
    text: "Pantalla preparada para cuando el MITECO habilite el registro nacional del art. 13 del RD 1066/2026 y la disposición transitoria 5.ª.",
    slug: "06-registro-miteco",
    alt: "Vista de registro MITECO en preparación",
    imageOnRight: true,
    futureNotice:
      "El envío al registro del MITECO se activará solo cuando la Administración habilite la sección (art. 13 y DT 5.ª). Hoy FrigoTrace no realiza remisiones automáticas ni presenta esta vía como operativa.",
  },
];

export const HOW_IT_WORKS: {
  step: string;
  title: string;
  text: string;
  slug: ScreenSlug;
  alt: string;
  imageOnRight?: boolean;
}[] = [
  {
    step: "1",
    title: "Panel de control",
    text: "Visión global de equipos, tCO₂e, fugas y certificados próximos a caducar (datos de ejemplo).",
    slug: "01-panel",
    alt: "Panel principal de FrigoTrace",
  },
  {
    step: "2",
    title: "Preparación y revisión",
    text: "Revisa incidencias y prepara inspecciones con listas de control y resúmenes por instalación.",
    slug: "08-revision-preparacion",
    alt: "Pantalla de revisión y preparación de inspección",
    imageOnRight: true,
  },
  {
    step: "3",
    title: "Informe listo",
    text: "Exporta el informe del sistema equivalente digital (art. 11.2 y Anexo V).",
    slug: "07-anexo-v",
    alt: "Informe Anexo V para inspección",
  },
];

export const AUDIENCES = [
  {
    title: "Empresas instaladoras y de mantenimiento",
    text: "Un libro de registro por cliente con equipos, intervenciones, fugas y evidencias para auditorías.",
  },
  {
    title: "Distribuidores de refrigeración",
    text: "Ventas y trazabilidad de bombonas y refrigerantes con los campos del art. 15.3.",
  },
  {
    title: "Responsables de instalación",
    text: "Visión de cumplimiento por centro, alarmas de certificados y resumen de CO₂e.",
  },
  {
    title: "Gestorías y asesorías",
    text: "Acceso de lectura y paquetes documentales para acompañar inspecciones.",
  },
] as const;

export const REGULATORY_STRIP = {
  title: "El RD 1066/2026 unifica el libro de registro de gases fluorados",
  text: "Obliga a llevar registro de equipos, fugas, ventas y certificados del personal. El art. 13 prevé remisión al registro del MITECO cuando esté operativo: FrigoTrace prepara los datos, pero hoy no efectúa envíos automáticos al registro público.",
  steps: [
    "Inventaria instalaciones y equipos con su carga.",
    "Registra fugas, ventas y formación del personal.",
    "Genera informes del sistema equivalente digital (art. 11.2).",
  ],
} as const;

export const HOME_FAQ = [
  {
    q: "¿Qué es FrigoTrace?",
    a: "Software en la nube para el libro de registro digital de gases fluorados en instalaciones frigoríficas, alineado con el Real Decreto 1066/2026.",
  },
  {
    q: "¿Envía datos al registro del MITECO?",
    a: "No. El art. 13 del RD 1066/2026 y la DT 5.ª prevén la remisión al registro del MITECO cuando esté operativo; FrigoTrace no promete ni realiza envíos automáticos a ese registro mientras no esté disponible.",
  },
  {
    q: "¿Puedo ver una demo?",
    a: "Sí. Solicítala en el formulario de contacto; te mostramos la interfaz con datos claramente marcados como de ejemplo.",
  },
] as const;

export const PRICING = {
  title: "Precios a medida",
  text: "Tarifas según número de instalaciones, usuarios y módulos (ventas, multi-empresa, informes). Pide condiciones o una demo desde el formulario.",
  cta: "Pedir condiciones",
} as const;

export const STATS_SCREEN: ScreenSlug = "01-panel";