import type { MockupView } from "@/components/marketing/mockups/types";
import { cn } from "@/lib/utils";

const NAV: { id: MockupView; label: string }[] = [
  { id: "equipos", label: "Equipos" },
  { id: "fugas", label: "Fugas" },
  { id: "ventas", label: "Ventas" },
  { id: "certificados", label: "Certificados" },
  { id: "informe", label: "Informes" },
];

type MockupChromeProps = {
  active: MockupView;
  title: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
};

export function MockupChrome({ active, title, badge, children, className }: MockupChromeProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/10",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-3 py-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
        </div>
        <p className="ml-2 truncate text-xs text-slate-500">app.frigotrace.es</p>
      </div>
      <div className="flex min-h-[280px] text-[11px] sm:text-xs">
        <nav className="hidden w-[112px] shrink-0 border-r border-slate-100 bg-ft-ice/60 p-2 sm:block" aria-label="Mockup">
          <p className="px-2 pb-2 text-[10px] font-bold uppercase tracking-wide text-[#04606F]">FrigoTrace</p>
          <ul className="space-y-0.5">
            {NAV.map((item) => (
              <li key={item.id}>
                <span
                  className={cn(
                    "block rounded-md px-2 py-1.5 font-medium",
                    item.id === active ? "bg-[#0A7F85] text-white" : "text-slate-600"
                  )}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </nav>
        <div className="min-w-0 flex-1 p-3 sm:p-4">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{title}</h3>
            {badge ? (
              <span className="rounded-full bg-[#F8A112]/15 px-2 py-0.5 text-[10px] font-semibold text-[#b36b08]">
                {badge}
              </span>
            ) : null}
          </div>
          {children}
        </div>
      </div>
      <figcaption className="border-t border-slate-100 bg-slate-50 px-3 py-2 text-center text-[10px] text-slate-500 sm:text-xs">
        Interfaz ilustrativa con datos de ejemplo
      </figcaption>
    </figure>
  );
}