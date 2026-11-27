# Despliegue — frigotrace-web

Sitio estático/marketing sin base de datos. Alojamiento de la **aplicación** FrigoTrace: OVHcloud, **Londres (Reino Unido)** — no declarar alojamiento en la UE; la nota legal detalla la decisión de adecuación UE–UK (véase pie y `HOSTING_NOTE` en código).

## Requisitos

- Node.js 22+ (build) o imagen Docker incluida en el repositorio.
- Fichero `.env` en el servidor (partir de `.env.example`).

### Variables mínimas producción

- `CONTACT_EMAIL=frigotrace@davinchi.es` (o omitir: mismo valor por defecto en `LEGAL_ENTITY`).
- `APP_DOMAIN` o `APP_PUBLIC_URL` — dominio público del marketing.
- `SEO_INDEXABLE=true` cuando el sitio deba indexarse.
- `FORM_API_KEY` — obligatoria (cabecera `x-api-key` hacia ApiTools). Equivalente al secreto `FORM_API_KEY` de fitocloud-web.
- `CONTACT_FORM_ID=15` — identificador del formulario dinámico en ApiTools (puede omitirse si se usa el valor por defecto).
- Opcional: `CONTACT_FORM_API_URL` (por defecto `https://apitools.davinchi.es/api/Form/send-form`).
- `PRIVACY_POLICY_VERSION` — coincide con la política publicada.
- `NEXT_PUBLIC_APP_URL=https://app.frigotrace.es`

No incluir secretos en el repositorio.

## Docker (recomendado)

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

El contenedor escucha en `127.0.0.1:3300`. Coloca un proxy inverso (Caddy, nginx, etc.) hacia ese puerto.

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