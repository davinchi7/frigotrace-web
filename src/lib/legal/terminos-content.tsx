import { DAVINCHI_ENTITY, HOSTING_NOTE } from "@/lib/legal-entity";

export function TerminosContent() {
  const e = DAVINCHI_ENTITY;
  return (
    <>
      <h2>1. Partes y objeto</h2>
      <p>
        Contrato entre {e.legalName} y el cliente que contrata FrigoTrace para el registro y trazabilidad de la cadena de
        frío. El alta en la aplicación se rige por el pedido comercial y estas condiciones generales.
      </p>

      <h2>2. Servicio</h2>
      <p>
        Software en modalidad SaaS para registro de temperaturas, alertas, usuarios y exportación de evidencias conforme a
        las capacidades contratadas y al RD 1066/2026 en la medida de las funciones publicadas.
      </p>

      <h2>3. Cuenta y uso</h2>
      <p>El cliente es responsable de las credenciales y del uso lícito. Debe proporcionar datos veraces en el alta.</p>

      <h2>4. Precio y facturación</h2>
      <p>Según propuesta comercial o pedido. Impuestos según ley.</p>

      <h2>5. Protección de datos</h2>
      <p>
        DAVINCHI actúa como encargado del tratamiento de los datos que el cliente introduce en la aplicación, con
        subencargados de alojamiento documentados. {HOSTING_NOTE}
      </p>

      <h2>6. Limitación</h2>
      <p>
        El servicio no sustituye el criterio técnico del operador ni auditorías oficiales. DAVINCHI no garantiza
        resultados regulatorios concretos.
      </p>

      <h2>7. Ley aplicable</h2>
      <p>España. Jurisdicción de los tribunales de Madrid para empresas.</p>
    </>
  );
}