/**
 * Titular del sitio web público FrigoTrace (adaptado desde Biocidata / DAVINCHI).
 */
export const LEGAL_ENTITY = {
  legalName: "DAVINCHI, DISEÑO Y NUEVAS TECNOLOGÍAS, S.L.",
  tradeName: "DAVINCHI · FrigoTrace",
  shortName: "DAVINCHI",
  productName: "FrigoTrace",
  nif: "B84250299",
  address: "C/ San Agustín, 4, 1.º A — 28231 Las Rozas de Madrid (España)",
  offices: "C/ Castillo de Turégano, 3 — 28232 Las Rozas de Madrid (España)",
  phone: "+34 91 636 3980",
  email: "frigotrace@davinchi.es",
  publicDomain: "www.frigotrace.es",
  registry:
    "Inscrita en el Registro Mercantil de Madrid, Tomo 21.107, Libro 0, Folio 27, Sección 8, Hoja M-374701, inscripción 1",
  representative: "D. José Luis Bueno",
  dpoName: "DELYSER ABOGADOS, SLP",
  dpoEmail: "dpo@delyser.com",
  activity:
    "Desarrollo y explotación de software y prestación de servicios tecnológicos; en particular, la plataforma FrigoTrace para el registro y la trazabilidad de la cadena de frío alimentaria conforme al RD 1066/2026 y normativa aplicable",
} as const;

export const LEGAL_UPDATE_DATE = "27 de noviembre de 2026";
export const LEGAL_VERSION = "Versión 1.0";
export const LEGAL_UPDATE = `${LEGAL_UPDATE_DATE} — ${LEGAL_VERSION}`;

/** UK hosting — decisión de adecuación UE; no afirmar ubicación en la UE. */
export const HOSTING_NOTE =
  "La aplicación FrigoTrace y sus bases de datos se alojan en servidores de OVHcloud situados en Londres (Reino Unido), país con decisión de adecuación de la Comisión Europea (Decisión de Ejecución (UE) 2021/1772, prorrogada por la Decisión de Ejecución (UE) 2025/2574 hasta el 27 de diciembre de 2031), conforme al artículo 45 del RGPD. El sitio web público puede servirse desde infraestructura distinta; véase la política de privacidad.";

export const DAVINCHI_ENTITY = {
  ...LEGAL_ENTITY,
  commercialName: LEGAL_ENTITY.productName,
  productEmail: LEGAL_ENTITY.email,
  dpo: LEGAL_ENTITY.dpoName,
} as const;