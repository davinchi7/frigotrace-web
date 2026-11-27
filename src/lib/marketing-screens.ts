/** Capturas en `public/screens/` (WebP/AVIF derivados de los bocetos 2560×1640). */
export const SCREEN_SIZE = { width: 2560, height: 1640 } as const;

export type ScreenSlug =
  | "01-panel"
  | "02-ficha-equipo"
  | "03-movil-intervencion"
  | "04-venta-verificacion"
  | "05-certificados"
  | "06-registro-miteco"
  | "07-anexo-v"
  | "08-revision-preparacion"
  | "09-portal-cliente"
  | "10-ajustes-facturacion"
  | "11-botellas-stock"
  | "12-usuarios-roles"
  | "13-formacion-catalogo"
  | "14-formacion-seguimiento"
  | "15-expediente-instalador"
  | "16-importacion-conectores";

export function screenSrc(slug: ScreenSlug, format: "webp" | "avif" = "webp"): string {
  return `/screens/${slug}.${format}`;
}

export const SCREEN_CAPTION = "Interfaz de FrigoTrace · datos de ejemplo";