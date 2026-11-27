import { DAVINCHI_ENTITY } from "@/lib/legal-entity";
import Link from "next/link";

type Purpose = "demo";

const PURPOSE_TEXT: Record<Purpose, string> = {
  demo:
    "Atender tu solicitud de información o de demostración sobre FrigoTrace y mantener el contacto necesario para ello.",
};

const LEGITIMATION_TEXT: Record<Purpose, string> = {
  demo:
    "Art. 6.1.b RGPD: medidas precontractuales a tu solicitud de información o demostración. El envío comercial, si lo marcas, se basa en tu consentimiento (art. 6.1.a).",
};

export function BasicDataProtectionTable({ purpose }: { purpose: Purpose }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700 not-prose">
      <p className="mb-2 font-semibold text-slate-900">Información básica sobre protección de datos</p>
      <table className="w-full border-collapse">
        <tbody>
          <tr>
            <th className="border-b border-slate-200 py-1 pr-2 text-left align-top font-medium">Responsable</th>
            <td className="border-b border-slate-200 py-1">
              {DAVINCHI_ENTITY.legalName} — NIF {DAVINCHI_ENTITY.nif}
            </td>
          </tr>
          <tr>
            <th className="border-b border-slate-200 py-1 pr-2 text-left align-top font-medium">Finalidad</th>
            <td className="border-b border-slate-200 py-1">{PURPOSE_TEXT[purpose]}</td>
          </tr>
          <tr>
            <th className="border-b border-slate-200 py-1 pr-2 text-left align-top font-medium">Legitimación</th>
            <td className="border-b border-slate-200 py-1">{LEGITIMATION_TEXT[purpose]}</td>
          </tr>
          <tr>
            <th className="border-b border-slate-200 py-1 pr-2 text-left align-top font-medium">Destinatarios</th>
            <td className="border-b border-slate-200 py-1">
              No se ceden datos a terceros, salvo obligación legal. Acceden proveedores de DAVINCHI con contrato de
              encargo (art. 28 RGPD): alojamiento en Reino Unido (país con decisión de adecuación de la UE) y correo
              electrónico. Véase la{" "}
              <Link href="/privacidad" className="text-[#0A7F85] underline">
                Política de privacidad
              </Link>
              .
            </td>
          </tr>
          <tr>
            <th className="border-b border-slate-200 py-1 pr-2 text-left align-top font-medium">Derechos</th>
            <td className="border-b border-slate-200 py-1">
              Acceder, rectificar y suprimir los datos, así como otros derechos, y reclamar ante la AEPD, según se explica
              en la información adicional.
            </td>
          </tr>
          <tr>
            <th className="py-1 pr-2 text-left align-top font-medium">Información adicional</th>
            <td className="py-1">
              <Link href="/privacidad" className="text-[#0A7F85] underline">
                Política de privacidad
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}