import Link from "next/link";

export function CookiesContent() {
  return (
    <>
      <h2>1. ¿Qué son las cookies?</h2>
      <p>Archivos que el sitio puede almacenar en tu dispositivo para funcionar o, con permiso, medir el uso.</p>

      <h2>2. Cookies técnicas</h2>
      <p>Necesarias para la navegación y la seguridad. No requieren consentimiento.</p>

      <h2>3. Cookies analíticas</h2>
      <p>
        Google Analytics (Google Ireland Ltd.) con IP anonimizada, solo si aceptas en el banner. Puedes cambiar tu
        elección desde «Preferencias de cookies» en el pie de página.
      </p>

      <h2>4. Más información</h2>
      <p>
        Consulta la <Link href="/privacidad">política de privacidad</Link> para ejercer derechos y conocer encargados del
        tratamiento.
      </p>
    </>
  );
}