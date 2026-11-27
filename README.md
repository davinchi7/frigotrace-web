# FrigoTrace — sitio web público

Sitio de marketing en **Next.js 15** (App Router), TypeScript y Tailwind CSS para [FrigoTrace](https://www.frigotrace.es). La aplicación operativa está en `NEXT_PUBLIC_APP_URL` (por defecto `https://app.frigotrace.es`).

## Desarrollo local

```bash
cp .env.example .env   # rellenar variables según entorno
npm ci
npm run dev            # http://127.0.0.1:3300
```

Scripts: `npm run lint`, `npm run typecheck`, `npm run build`.

## Variables de entorno

Documentadas sin valores en `.env.example`:

| Variable | Uso |
| --- | --- |
| `APP_PUBLIC_URL` / `APP_DOMAIN` | URL canónica (SEO, sitemap, Open Graph) |
| `CONTACT_EMAIL` | E-mail de contacto (por defecto `frigotrace@davinchi.es`) |
| `SEO_INDEXABLE` | `true` para indexación en producción |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics (banner de cookies si está definida) |
| `GOOGLE_SITE_VERIFICATION` | Verificación Search Console |
| `NEXT_PUBLIC_APP_URL` | Enlace «Acceder a la app» |
| `CONTACT_FORM_API_URL` | API Davinchi Tools (`POST /api/Form/send-form`) |
| `CONTACT_FORM_ID` | `idDynaForm` (FrigoTrace: **15**, por defecto en `.env.example`) |
| `FORM_API_KEY` | Cabecera `x-api-key` (**obligatoria** en producción; sin valor en el repositorio) |
| `PRIVACY_POLICY_VERSION` | `privacidadVersion` en cada envío |
| `PORT` | Puerto en el **host** para Docker Compose (por defecto **3500**; contenedor interno 3300) |

Modelo: **[fitocloud-web](https://github.com/davinchi-finsi/fitocloud-web)** (`public/formulario-contacto.js`, `src/pages/contacto.astro`). En FitoCloud el secreto se llama `FORM_API_KEY` en GitHub Actions.

El formulario **no** usa base de datos: `idDynaForm` + `dataForm` (JSON) vía server action. En el POST a ApiTools se envían las cabeceras `Origin` y `Referer` con `APP_PUBLIC_URL` (p. ej. `https://frigotrace.es`). El campo opcional del formulario es `instalaciones` (nº de equipos/instalaciones), no «explotaciones».

## Marca

Assets en `public/brand/` (Nunito, favicon, paleta en `paleta/paleta.json`). Color principal de interfaz: turquesa `#0A7F85`.

## Despliegue

Ver [DEPLOY.md](./DEPLOY.md). Producción con Docker: host **3500** → contenedor **3300** (`docker-compose.prod.yml`, variable `PORT`).

## CI

GitHub Actions `.github/workflows/quality-gate.yml`: lint, typecheck y build.