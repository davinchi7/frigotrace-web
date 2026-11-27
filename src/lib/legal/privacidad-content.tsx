import { DAVINCHI_ENTITY, HOSTING_NOTE, LEGAL_VERSION } from "@/lib/legal-entity";
import Link from "next/link";

export function PrivacidadContent() {
  const e = DAVINCHI_ENTITY;
  return (
    <>
      <h2>1. Responsable</h2>
      <p>
        {e.legalName} · NIF {e.nif} · {e.address}. Delegado de protección de datos: {e.dpo} ({e.dpoEmail}).
      </p>

      <h2>2. Tratamientos en la Web</h2>
      <ul>
        <li>
          <strong>Formulario de contacto/demo:</strong> datos identificativos y mensaje para atender tu solicitud.
          Legitimación: art. 6.1.b RGPD. Conservación: mientras dure la gestión y plazos legales.
        </li>
        <li>
          <strong>Cookies y analítica (Google Analytics 4):</strong> véase{" "}
          <Link href="/cookies">política de cookies</Link>. Google Ireland Limited puede tratar datos de uso (p. ej.
          páginas visitadas, dispositivo) como encargado, solo si aceptas en el banner. Usamos Consent Mode v2; sin
          consentimiento no se almacenan cookies de medición. El ID de medición GA4 se configura en despliegue
          (variable <code>NEXT_PUBLIC_GA_ID</code>; valor por defecto en código{" "}
          <code>G-WRTRB6X5TE</code>). En desarrollo y si el sitio no es indexable no se carga GA.
        </li>
        <li>
          <strong>Logs técnicos:</strong> interés legítimo en seguridad del sitio.
        </li>
      </ul>

      <h2>3. Origen de los datos</h2>
      <p>Los facilita el interesado mediante formularios o navegación.</p>

      <h2>4. Destinatarios y encargados</h2>
      <p>
        Proveedores con contrato art. 28 RGPD: alojamiento (OVHcloud, Reino Unido), correo y herramientas de DAVINCHI
        para gestión de solicitudes. No hay cesiones mercantiles de datos.
      </p>

      <h2>5. Transferencias internacionales</h2>
      <p>{HOSTING_NOTE}</p>

      <h2>6. Derechos</h2>
      <p>
        Acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {e.email} o al DPO. Reclamación
        ante la AEPD.
      </p>

      <h2>7. Versión</h2>
      <p>
        Documento {LEGAL_VERSION}. Las solicitudes de formulario registran la versión aceptada (
        <code>PRIVACY_POLICY_VERSION</code> en despliegue).
      </p>
    </>
  );
}