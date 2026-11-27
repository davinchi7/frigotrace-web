import { DAVINCHI_ENTITY, HOSTING_NOTE } from "@/lib/legal-entity";
import Link from "next/link";

export function AvisoLegalContent() {
  const e = DAVINCHI_ENTITY;
  return (
    <>
      <h2>1. Información legal</h2>
      <p>
        El sitio {e.publicDomain} es titularidad de {e.legalName} (NIF {e.nif}), con domicilio en {e.address}. El nombre
        comercial FrigoTrace identifica el producto de trazabilidad de cadena de frío desarrollado por DAVINCHI.
      </p>
      <p>
        El acceso a la Web implica la aceptación de este aviso legal y de las{" "}
        <Link href="/terminos">condiciones generales</Link> del servicio SaaS cuando corresponda.
      </p>

      <h2>2. Objeto</h2>
      <p>
        La Web tiene carácter informativo sobre FrigoTrace: funcionalidades, formación respecto al RD 1066/2026,
        solicitud de demostraciones y acceso a la aplicación en{" "}
        <a href="https://app.frigotrace.es" rel="noopener noreferrer">
          app.frigotrace.es
        </a>
        .
      </p>

      <h2>3. Propiedad intelectual</h2>
      <p>
        Los contenidos, marca FrigoTrace, logotipos y software asociado son titularidad de {e.legalName} o de sus
        licenciantes. Queda prohibida su reproducción sin autorización.
      </p>

      <h2>4. Responsabilidad</h2>
      <p>
        DAVINCHI no garantiza la ausencia de interrupciones en la Web. La información normativa tiene carácter orientativo
        y no sustituye el asesoramiento profesional del operador.
      </p>

      <h2>5. Alojamiento</h2>
      <p>{HOSTING_NOTE}</p>

      <h2>6. Legislación</h2>
      <p>
        Ley española. Tribunales de Madrid, salvo norma imperativa en favor del consumidor. Contacto: {e.email} ·{" "}
        {e.phone}.
      </p>
    </>
  );
}