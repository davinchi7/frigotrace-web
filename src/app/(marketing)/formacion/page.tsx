import Link from "next/link";
import { buildPublicMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata = buildPublicMetadata({
  title: "Formación RD 1066/2026",
  description:
    "Marco del Real Decreto 1066/2026 sobre gases fluorados de efecto invernadero: registro, fugas, ventas y certificados.",
  path: "formacion",
});

export default function FormacionPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 prose prose-slate">
      <h1>Formación: RD 1066/2026 — gases fluorados</h1>
      <p className="lead">
        El Real Decreto 1066/2026 desarrolla en España el registro y control de gases fluorados de efecto invernadero en
        instalaciones frigoríficas y climatización, con obligaciones de libro de registro, fugas, ventas y personal
        certificado.
      </p>

      <h2>¿A quién afecta?</h2>
      <p>
        Operadores de instalaciones fijas que utilizan gases fluorados, empresas de instalación y mantenimiento,
        distribuidores de refrigerantes y responsables de cumplimiento en industria, comercio y servicios.
      </p>

      <h2>Obligaciones clave (visión operativa)</h2>
      <ul>
        <li>
          <strong>Inventario y carga (art. 10):</strong> datos de equipos, refrigerante y cantidades cargadas.
        </li>
        <li>
          <strong>Sistema equivalente digital (art. 11.2 y Anexo V):</strong> estructura del informe y registros
          exigidos.
        </li>
        <li>
          <strong>Registro MITECO (art. 13):</strong> remisión al registro cuando esté operativo; a la fecha de este
          texto FrigoTrace no realiza envíos automáticos a ese registro.
        </li>
        <li>
          <strong>Fugas (art. 15.1):</strong> anotación de detecciones y reparaciones.
        </li>
        <li>
          <strong>Ventas (art. 15.3):</strong> trazabilidad de entregas y adquisiciones de gases.
        </li>
        <li>
          <strong>Certificados (art. 6.6):</strong> control de la cualificación del personal y su caducidad a siete años.
        </li>
      </ul>

      <h2>Cómo apoya FrigoTrace</h2>
      <p>
        Centraliza equipos, fugas, ventas, certificados e informes con referencias a cada artículo. La responsabilidad
        del cumplimiento normativo sigue siendo del operador y de su servicio técnico.
      </p>

      <h2>Próximos pasos</h2>
      <p>
        Revisa las{" "}
        <Link href="/preguntas-frecuentes">preguntas frecuentes</Link> o solicita una demo con datos de ejemplo.
      </p>

      <div className="not-prose mt-8">
        <Button asChild>
          <Link href="/contacto">Solicitar demostración</Link>
        </Button>
      </div>

      <p className="text-sm text-slate-500 not-prose mt-10">
        Contenido orientativo. Consulta el texto oficial del BOE y a tu asesoría reglamentaria.
      </p>
    </article>
  );
}