import Link from "next/link";
import {
  HOME_FAQ,
  HOME_HERO,
  AUDIENCES,
  FEATURE_BLOCKS,
  HOW_IT_WORKS,
  PRICING,
  REGULATORY_STRIP,
} from "@/lib/marketing-home-content";
import { MarketingMockup } from "@/components/marketing/mockups/MarketingMockup";
import { Button } from "@/components/ui/button";
import { getAppUrl } from "@/lib/app-url";

export function MarketingHome() {
  const appUrl = getAppUrl();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#12343B] via-[#04606F] to-[#0A7F85] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#F8A112]">{HOME_HERO.kicker}</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{HOME_HERO.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-100">{HOME_HERO.subtitle}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {HOME_HERO.badges.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur"
                >
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="accent" className="min-h-11">
                <Link href="/contacto?motivo=demo">Ver una demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-11 border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                <a href={appUrl} rel="noopener noreferrer">
                  Acceder a la app
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <MarketingMockup view="equipos" className="shadow-2xl shadow-black/25" />
          </div>
        </div>
      </section>

      <section id="funcionalidades" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-ft-ink">Todo el libro de registro, en un solo software</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Módulos alineados con el RD 1066/2026: equipos, fugas, ventas, certificados e informes. Cada bloque cita el
          artículo aplicable.
        </p>
        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {FEATURE_BLOCKS.map((f) => (
            <li key={f.title} className="grid gap-4 sm:grid-cols-2 sm:items-start">
              <MarketingMockup view={f.mock} />
              <div>
                <h3 className="text-lg font-semibold text-ft-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="estadisticas" className="border-y border-slate-200 bg-ft-ice/50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-ft-ink">Indicadores para decidir con datos</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Visualiza t CO₂e por instalación, evolución de fugas y alertas de certificados. Los valores mostrados en la
            web son <strong className="font-semibold text-slate-800">datos de ejemplo</strong>.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <MarketingMockup view="dashboard" />
            <dl className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <dt className="text-xs font-medium uppercase text-slate-500">CO₂e instalación C (ejemplo)</dt>
                <dd className="mt-1 text-2xl font-bold text-[#04606F]">4,8 t</dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <dt className="text-xs font-medium uppercase text-slate-500">Fugas últimos 12 meses (ejemplo)</dt>
                <dd className="mt-1 text-2xl font-bold text-[#04606F]">6</dd>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <dt className="text-xs font-medium uppercase text-amber-900/80">Certificados &lt; 90 días (ejemplo)</dt>
                <dd className="mt-1 text-2xl font-bold text-amber-900">2</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-ft-ink">Así trabajas con FrigoTrace</h2>
        <ol className="mt-12 space-y-16">
          {HOW_IT_WORKS.map((step, index) => (
            <li
              key={step.step}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <MarketingMockup view={step.mock} />
              <div>
                <p className="text-sm font-bold text-[#0A7F85]">Paso {step.step}</p>
                <h3 className="mt-1 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="para-quien" className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-ft-ink">Un perfil para cada actor</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {AUDIENCES.map((a) => (
              <li key={a.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-ft-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="normativa" className="mx-auto max-w-6xl px-4 py-16">
        <RegulatoryBanner />
      </section>

      <section id="precios" className="bg-gradient-to-r from-[#12343B] to-[#04606F] py-14 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">{PRICING.title}</h2>
            <p className="mt-2 max-w-xl text-slate-100">{PRICING.text}</p>
          </div>
          <Button asChild size="lg" variant="accent" className="min-h-11 shrink-0">
            <Link href="/contacto">{PRICING.cta}</Link>
          </Button>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold text-ft-ink">Lo que más se pregunta</h2>
          <Link href="/preguntas-frecuentes" className="text-sm font-semibold text-[#0A7F85] hover:underline">
            Ver todas las FAQ
          </Link>
        </div>
        <dl className="mt-8 space-y-6">
          {HOME_FAQ.map((item) => (
            <div key={item.q} className="rounded-xl border border-slate-200 bg-white p-6">
              <dt className="text-lg font-semibold text-ft-ink">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="contacto" className="border-t border-slate-200 bg-ft-ice/40 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold text-ft-ink">Solicita demo o condiciones</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Formulario con ApiTools (misma integración que otras webs DAVINCHI). Te respondemos desde frigotrace@davinchi.es.
          </p>
          <Button asChild size="lg" className="mt-8 min-h-11">
            <Link href="/contacto">Ir al formulario de contacto</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function RegulatoryBanner() {
  return (
    <>
      <h2 className="text-3xl font-bold text-ft-ink">{REGULATORY_STRIP.title}</h2>
      <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">{REGULATORY_STRIP.text}</p>
      <ol className="mt-8 list-decimal space-y-2 pl-5 text-slate-700">
        {REGULATORY_STRIP.steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild variant="outline">
          <Link href="/formacion">Formación RD 1066/2026</Link>
        </Button>
        <Button asChild>
          <Link href="/contacto?motivo=demo">Pedir demo</Link>
        </Button>
      </div>
    </>
  );
}