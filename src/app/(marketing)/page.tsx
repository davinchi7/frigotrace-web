import Link from "next/link";
import { buildPublicMetadata } from "@/lib/seo";
import { getAppUrl } from "@/lib/app-url";
import { Button } from "@/components/ui/button";
import { Thermometer, FileCheck, Bell, Truck } from "lucide-react";

export const metadata = buildPublicMetadata({
  title: "Trazabilidad de cadena de frío",
  description:
    "FrigoTrace: registro digital de temperaturas, alarmas y evidencias para operadores alimentarios. RD 1066/2026.",
  path: "",
});

const FEATURES = [
  {
    icon: Thermometer,
    title: "Registro continuo",
    text: "Captura manual, sensores o integraciones para dejar constancia de temperaturas por equipo, zona o expedición.",
  },
  {
    icon: Bell,
    title: "Alarmas y avisos",
    text: "Notificaciones ante desviaciones para actuar antes de que afecten a la seguridad alimentaria.",
  },
  {
    icon: FileCheck,
    title: "Evidencias listas",
    text: "Históricos exportables para inspecciones, auditorías y revisión interna del plan APPCC.",
  },
  {
    icon: Truck,
    title: "Trazabilidad logística",
    text: "Vincula registros a lotes, albaranes y puntos de la cadena de frío.",
  },
] as const;

export default function HomePage() {
  const appUrl = getAppUrl();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#12343B] via-[#04606F] to-[#0A7F85] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#F8A112]">Cadena de frío</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Controla la temperatura con trazabilidad digital
            </h1>
            <p className="mt-4 text-lg text-slate-100 leading-relaxed">
              FrigoTrace ayuda a operadores, distribuidores y restauración a cumplir el RD 1066/2026 con registros
              fiables, alarmas y documentación lista para inspección.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="accent" className="min-h-11">
                <a href={appUrl} rel="noopener noreferrer">
                  Acceder a la app
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-11 border-white/40 bg-white/10 text-white hover:bg-white/20">
                <Link href="/contacto">Solicitar demo</Link>
              </Button>
            </div>
          </div>
          <div id="demo" className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold">Solicita información</h2>
            <p className="mt-2 text-sm text-slate-100">
              Completa el formulario de contacto y te respondemos con condiciones o una demo sin compromiso.
            </p>
            <Button asChild size="lg" variant="accent" className="mt-6 min-h-11 w-full">
              <Link href="/contacto?motivo=demo">Ir al formulario</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="solucion" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-ft-ink">Una solución pensada para frío alimentario</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Desde cámaras y vitrinas hasta transporte refrigerado: un solo registro con roles, puntos de control y evidencias
          alineadas con la normativa española de trazabilidad de temperatura.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-2xl border border-slate-200 bg-ft-ice/50 p-6">
              <Icon className="h-8 w-8 text-[#0A7F85]" aria-hidden />
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold">¿Listo para el RD 1066/2026?</h2>
            <p className="mt-1 text-slate-600">Material formativo y preguntas frecuentes en el sitio.</p>
          </div>
          <Button asChild variant="default">
            <Link href="/formacion">Ver formación</Link>
          </Button>
        </div>
      </section>
    </>
  );
}