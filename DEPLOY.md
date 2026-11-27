# Despliegue — frigotrace-web

Sitio estático/marketing sin base de datos. Alojamiento de la **aplicación** FrigoTrace: OVHcloud, **Londres (Reino Unido)** — no declarar alojamiento en la UE; la nota legal detalla la decisión de adecuación UE–UK (véase pie y `HOSTING_NOTE` en código).

## Requisitos

- Node.js 22+ (build) o imagen Docker incluida en el repositorio.
- Fichero `.env` en el servidor (partir de `.env.example`).

### Variables mínimas producción

- `CONTACT_EMAIL=frigotrace@davinchi.es` (o omitir: mismo valor por defecto en `LEGAL_ENTITY`).
- `APP_DOMAIN` o `APP_PUBLIC_URL` — dominio público del marketing.
- `SEO_INDEXABLE=true` cuando el sitio deba indexarse (necesario para cargar GA4).
- `NEXT_PUBLIC_GA_ID=G-WRTRB6X5TE` (opcional: default en código). GA4 no se carga en `next dev` ni sin `SEO_INDEXABLE=true`.
- `FORM_API_KEY` — obligatoria (cabecera `x-api-key` hacia ApiTools). Equivalente al secreto `FORM_API_KEY` de fitocloud-web.
- `CONTACT_FORM_ID=15` — identificador del formulario dinámico en ApiTools (puede omitirse si se usa el valor por defecto).
- Opcional: `CONTACT_FORM_API_URL` (por defecto `https://apitools.davinchi.es/api/Form/send-form`).
- `PRIVACY_POLICY_VERSION` — coincide con la política publicada.
- `NEXT_PUBLIC_APP_URL=https://app.frigotrace.es`
- `PORT=3500` — puerto TCP en el host para Docker Compose (el contenedor sigue en **3300** dentro de la red del contenedor).

No incluir secretos en el repositorio.

## Docker (recomendado)

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

El sitio marketing queda en el host en `127.0.0.1:3500` (o el valor de `PORT` en `.env`). **Caddy:** `frigotrace.es` → `reverse_proxy 127.0.0.1:3500`. Reserva **3600** en el host para la futura app (`app.frigotrace.es`).

## Build manual

```bash
npm ci
npm run build
npm run start   # puerto 3300
```

## Comprobación

- `GET /api/health` — JSON `{ ok: true, ... }`.
- Formulario en `/contacto` con credenciales API válidas.
- `robots.txt` y `sitemap.xml` solo útiles con `SEO_INDEXABLE=true`.

## CI

Cada push a `main` o ramas `cursor/**` ejecuta lint, typecheck y build en GitHub Actions.