import Link from "next/link";
import { buildPublicMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata = buildPublicMetadata({
  title: "Formación RD 1066/2026",
  description:
    "Marco normativo español sobre trazabilidad y control de temperatura en la cadena de frío de productos alimenticios.",
  path: "formacion",
});

export default function FormacionPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 prose prose-slate">
      <h1>Formación: RD 1066/2026 y cadena de frío</h1>
      <p className="lead">
        El Real Decreto 1066/2026 establece las reglas sobre trazabilidad y control de la temperatura a lo largo de la
        cadena de frío de los productos alimenticios, en desarrollo del Reglamento (UE) 2017/625 y del Real Decreto
        40/2015 sobre inocuidad alimentaria.
      </p>

      <h2>¿A quién afecta?</h2>
      <p>
        Operadores que almacenan, transportan, distribuyen o exponen productos que requieren temperatura controlada:
        industria alimentaria, mayoristas, distribución HORECA, catering y logística refrigerada.
      </p>

      <h2>Obligaciones clave (visión operativa)</h2>
      <ul>
        <li>
          <strong>Registro de temperaturas:</strong> constancia periódica o continua según el punto de la cadena y el
          producto.
        </li>
        <li>
          <strong>Trazabilidad:</strong> capacidad de relacionar registros con lotes, equipos, vehículos o envíos.
        </li>
        <li>
          <strong>Acciones correctivas:</strong> documentar incidencias y medidas cuando se superen límites.
        </li>
        <li>
          <strong>Conservación:</strong> mantener evidencias accesibles para inspecciones y auditorías internas.
        </li>
      </ul>

      <h2>Cómo apoya FrigoTrace</h2>
      <p>
        La plataforma centraliza puntos de medición, usuarios responsables, alertas y exportación de históricos. No
        sustituye el criterio técnico del operador ni la validación de cada instalación conforme a su APPCC.
      </p>

      <h2>Próximos pasos</h2>
      <p>
        Revisa las{" "}
        <Link href="/preguntas-frecuentes">preguntas frecuentes</Link> o solicita una demo para ver el flujo en tu
        operativa.
      </p>

      <div className="not-prose mt-8">
        <Button asChild>
          <Link href="/contacto">Solicitar demostración</Link>
        </Button>
      </div>

      <p className="text-sm text-slate-500 not-prose mt-10">
        Este contenido es orientativo. Consulta el texto oficial del BOE y a tu asesoría reglamentaria.
      </p>
    </article>
  );
}