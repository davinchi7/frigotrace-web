import Link from "next/link";

export function CookiesContent() {
  return (
    <>
      <h2>1. ¿Qué son las cookies?</h2>
      <p>Archivos que el sitio puede almacenar en tu dispositivo para funcionar o, con permiso, medir el uso.</p>

      <h2>2. Cookies técnicas</h2>
      <p>Necesarias para la navegación y la seguridad. No requieren consentimiento.</p>

      <h2>3. Cookies analíticas (Google Analytics 4)</h2>
      <p>
        Con tu consentimiento usamos <strong>Google Analytics 4</strong> (Google Ireland Limited) para medir visitas y
        uso del sitio. La medición usa el identificador configurado en despliegue (por defecto{" "}
        <code>G-WRTRB6X5TE</code>) y aplica <strong>Google Consent Mode v2</strong>: hasta que aceptes,{" "}
        <code>analytics_storage</code> y <code>ad_storage</code> permanecen en <code>denied</code>; solo tras «Aceptar
        analítica» pasan a <code>granted</code> para analítica (la publicidad sigue denegada). IP anonimizada cuando GA
        está activo. Tu elección se guarda en el navegador y puedes cambiarla en «Preferencias de cookies» del pie de
        página.
      </p>

      <h2>4. Más información</h2>
      <p>
        Consulta la <Link href="/privacidad">política de privacidad</Link> para ejercer derechos y conocer encargados del
        tratamiento.
      </p>
    </>
  );
}