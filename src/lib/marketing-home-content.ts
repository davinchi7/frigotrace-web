export const HOME_HERO = {
  kicker: "Registro digital de gases fluorados",
  title: "Software de libro de registro y trazabilidad para instalaciones frigoríficas",
  subtitle:
    "Centraliza equipos, cargas de gas, fugas, ventas, certificados del personal e informes del sistema equivalente digital conforme al Real Decreto 1066/2026.",
  badges: ["RD 1066/2026", "CO₂e por instalación", "Libro de registro digital", "Anexo V — art. 11.2"],
} as const;

export const FEATURE_BLOCKS = [
  {
    title: "Equipos y carga de gas",
    text: "Inventario por instalación con refrigerante, kg cargados y tCO₂e equivalente según el art. 10 y el art. 15.3 del RD 1066/2026.",
    mock: "equipos" as const,
  },
  {
    title: "Registro de fugas",
    text: "Anotación de fugas detectadas y reparadas con los datos exigidos en el art. 15.1 del RD 1066/2026.",
    mock: "fugas" as const,
  },
  {
    title: "Ventas de gases fluorados",
    text: "Trazabilidad de entregas y adquisiciones con exportación de suministros conforme a los arts. 10 y 15.3.",
    mock: "ventas" as const,
  },
  {
    title: "Certificados del personal",
    text: "Control de cualificaciones y caducidad a siete años del art. 6.6 del RD 1066/2026.",
    mock: "certificados" as const,
  },
  {
    title: "Informe Anexo V",
    text: "Generación del informe del sistema equivalente digital previsto en el art. 11.2 y el Anexo V del RD 1066/2026.",
    mock: "informe" as const,
  },
  {
    title: "Cuadros de mando",
    text: "Gráficos de tCO₂e por instalación, fugas por mes y certificados próximos a caducar (datos de ejemplo en la demo).",
    mock: "dashboard" as const,
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Alta de instalaciones y equipos",
    text: "Registra cada instalación frigorífica, sus equipos y la carga de gas con el factor GWP aplicable (art. 10 RD 1066/2026).",
    mock: "equipos" as const,
  },
  {
    step: "2",
    title: "Anota fugas y ventas",
    text: "Captura fugas según el art. 15.1 y movimientos de gas según los arts. 10 y 15.3 sin duplicar papeles.",
    mock: "fugas" as const,
  },
  {
    step: "3",
    title: "Informes listos para inspección",
    text: "Consulta certificados (art. 6.6) y exporta el informe del sistema equivalente digital (art. 11.2 y Anexo V).",
    mock: "informe" as const,
  },
] as const;

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
    a: "No. El art. 13 del RD 1066/2026 prevé la remisión al registro del MITECO cuando esté operativo; FrigoTrace no promete ni realiza envíos automáticos a ese registro mientras no esté disponible.",
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