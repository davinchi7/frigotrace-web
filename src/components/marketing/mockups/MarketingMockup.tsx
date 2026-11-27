import { MockupChrome } from "@/components/marketing/mockups/MockupChrome";
import type { MockupView } from "@/components/marketing/mockups/types";

function EquiposView() {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-slate-100 bg-ft-ice/40 p-2">
          <p className="text-[10px] text-slate-500">Equipos activos</p>
          <p className="text-lg font-bold text-[#04606F]">24</p>
        </div>
        <div className="rounded-lg border border-slate-100 bg-ft-ice/40 p-2">
          <p className="text-[10px] text-slate-500">Kg gas (Σ)</p>
          <p className="text-lg font-bold text-[#04606F]">318</p>
        </div>
        <div className="rounded-lg border border-slate-100 bg-ft-ice/40 p-2">
          <p className="text-[10px] text-slate-500">t CO₂e</p>
          <p className="text-lg font-bold text-[#04606F]">12,4</p>
        </div>
      </div>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-slate-200 text-[10px] uppercase text-slate-500">
            <th className="py-1 pr-2 font-semibold">Equipo</th>
            <th className="py-1 pr-2 font-semibold">Gas</th>
            <th className="py-1 pr-2 font-semibold">Kg</th>
            <th className="py-1 font-semibold">CO₂e</th>
          </tr>
        </thead>
        <tbody className="text-slate-700">
          <tr className="border-b border-slate-100">
            <td className="py-1.5 pr-2">UTA-02</td>
            <td className="py-1.5 pr-2">R-32</td>
            <td className="py-1.5 pr-2">28</td>
            <td className="py-1.5">1,9 t</td>
          </tr>
          <tr className="border-b border-slate-100">
            <td className="py-1.5 pr-2">Cámara A</td>
            <td className="py-1.5 pr-2">R-404A</td>
            <td className="py-1.5 pr-2">96</td>
            <td className="py-1.5">4,8 t</td>
          </tr>
          <tr>
            <td className="py-1.5 pr-2">Vitrina 7</td>
            <td className="py-1.5 pr-2">R-600a</td>
            <td className="py-1.5 pr-2">3</td>
            <td className="py-1.5">0,1 t</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function FugasView() {
  return (
    <table className="w-full border-collapse text-left">
      <thead>
        <tr className="border-b border-slate-200 text-[10px] uppercase text-slate-500">
          <th className="py-1 pr-2">Fecha</th>
          <th className="py-1 pr-2">Equipo</th>
          <th className="py-1 pr-2">Kg perdidos</th>
          <th className="py-1">Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-slate-100">
          <td className="py-1.5 pr-2">14/03/26</td>
          <td className="py-1.5 pr-2">Cámara A</td>
          <td className="py-1.5 pr-2">0,4</td>
          <td className="py-1.5 text-emerald-700">Reparada</td>
        </tr>
        <tr className="border-b border-slate-100">
          <td className="py-1.5 pr-2">02/02/26</td>
          <td className="py-1.5 pr-2">UTA-02</td>
          <td className="py-1.5 pr-2">0,1</td>
          <td className="py-1.5 text-emerald-700">Reparada</td>
        </tr>
        <tr>
          <td className="py-1.5 pr-2">11/01/26</td>
          <td className="py-1.5 pr-2">Vitrina 7</td>
          <td className="py-1.5 pr-2">0,05</td>
          <td className="py-1.5 text-amber-700">En curso</td>
        </tr>
      </tbody>
    </table>
  );
}

function VentasView() {
  return (
    <table className="w-full border-collapse text-left">
      <thead>
        <tr className="border-b border-slate-200 text-[10px] uppercase text-slate-500">
          <th className="py-1 pr-2">Fecha</th>
          <th className="py-1 pr-2">Tipo</th>
          <th className="py-1 pr-2">Gas</th>
          <th className="py-1">Kg</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-slate-100">
          <td className="py-1.5 pr-2">20/03/26</td>
          <td className="py-1.5 pr-2">Venta</td>
          <td className="py-1.5 pr-2">R-32</td>
          <td className="py-1.5">12</td>
        </tr>
        <tr className="border-b border-slate-100">
          <td className="py-1.5 pr-2">05/03/26</td>
          <td className="py-1.5 pr-2">Compra</td>
          <td className="py-1.5 pr-2">R-404A</td>
          <td className="py-1.5">40</td>
        </tr>
        <tr>
          <td className="py-1.5 pr-2">18/02/26</td>
          <td className="py-1.5 pr-2">Venta</td>
          <td className="py-1.5 pr-2">R-600a</td>
          <td className="py-1.5">6</td>
        </tr>
      </tbody>
    </table>
  );
}

function CertificadosView() {
  return (
    <ul className="space-y-2">
      <li className="flex items-center justify-between rounded-lg border border-slate-100 px-2 py-1.5">
        <span>
          <span className="font-medium text-slate-800">M. García</span>
          <span className="text-slate-500"> · Cat. I</span>
        </span>
        <span className="text-emerald-700">Válido hasta 08/2028</span>
      </li>
      <li className="flex items-center justify-between rounded-lg border border-amber-200 bg-amber-50 px-2 py-1.5">
        <span>
          <span className="font-medium text-slate-800">L. Soto</span>
          <span className="text-slate-500"> · Cat. II</span>
        </span>
        <span className="font-semibold text-amber-800">Caduca en 45 días</span>
      </li>
      <li className="flex items-center justify-between rounded-lg border border-slate-100 px-2 py-1.5">
        <span>
          <span className="font-medium text-slate-800">P. Núñez</span>
          <span className="text-slate-500"> · Cat. I</span>
        </span>
        <span className="text-slate-600">Renovación en curso</span>
      </li>
    </ul>
  );
}

function InformeView() {
  return (
    <div className="rounded-lg border border-slate-200 bg-gradient-to-b from-white to-ft-ice/50 p-3">
      <p className="text-xs font-semibold text-slate-800">Informe sistema equivalente digital — Anexo V</p>
      <ul className="mt-2 list-inside list-disc space-y-1 text-slate-600">
        <li>Resumen de equipos y cargas</li>
        <li>Registro de fugas (art. 15.1)</li>
        <li>Movimientos de gases (arts. 10 y 15.3)</li>
        <li>Certificados del personal (art. 6.6)</li>
      </ul>
      <p className="mt-3 inline-flex rounded-md bg-[#0A7F85] px-3 py-1.5 text-[11px] font-semibold text-white">
        Exportar PDF / XML
      </p>
    </div>
  );
}

function DashboardView() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <svg viewBox="0 0 200 120" className="h-auto w-full rounded-lg border border-slate-100 bg-white p-2" role="img" aria-label="Gráfico de ejemplo: tCO₂e por instalación">
        <title>tCO₂e por instalación (ejemplo)</title>
        {[
          { x: 24, h: 70, label: "A" },
          { x: 64, h: 48, label: "B" },
          { x: 104, h: 88, label: "C" },
          { x: 144, h: 36, label: "D" },
        ].map((bar) => (
          <g key={bar.label}>
            <rect x={bar.x} y={110 - bar.h} width={28} height={bar.h} rx="4" fill="#0A7F85" opacity={0.85} />
            <text x={bar.x + 14} y={118} textAnchor="middle" fontSize="10" fill="#64748b">
              {bar.label}
            </text>
          </g>
        ))}
        <text x="4" y="14" fontSize="10" fill="#64748b">
          t CO₂e / instalación
        </text>
      </svg>
      <svg viewBox="0 0 200 120" className="h-auto w-full rounded-lg border border-slate-100 bg-white p-2" role="img" aria-label="Gráfico de ejemplo: fugas por mes">
        <title>Fugas por mes (ejemplo)</title>
        <polyline
          fill="none"
          stroke="#F8A112"
          strokeWidth="3"
          points="10,90 50,70 90,75 130,40 170,55"
        />
        <text x="4" y="14" fontSize="10" fill="#64748b">
          Fugas / mes
        </text>
      </svg>
    </div>
  );
}

const TITLES: Record<MockupView, { title: string; badge?: string }> = {
  equipos: { title: "Instalación Centro Norte · Equipos", badge: "Ejemplo" },
  fugas: { title: "Registro de fugas", badge: "art. 15.1" },
  ventas: { title: "Ventas y adquisiciones", badge: "arts. 10 y 15.3" },
  certificados: { title: "Certificados del personal", badge: "art. 6.6" },
  informe: { title: "Informe Anexo V", badge: "art. 11.2" },
  dashboard: { title: "Cuadro de mando", badge: "Datos ficticios" },
};

export function MarketingMockup({ view, className }: { view: MockupView; className?: string }) {
  const meta = TITLES[view];
  const body = {
    equipos: <EquiposView />,
    fugas: <FugasView />,
    ventas: <VentasView />,
    certificados: <CertificadosView />,
    informe: <InformeView />,
    dashboard: <DashboardView />,
  }[view];

  return (
    <MockupChrome active={view} title={meta.title} badge={meta.badge} className={className}>
      {body}
    </MockupChrome>
  );
}