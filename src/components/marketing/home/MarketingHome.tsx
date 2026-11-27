import Link from "next/link";
import {
  HOME_FAQ,
  HOME_HERO,
  AUDIENCES,
  FEATURE_SHOWCASES,
  HOW_IT_WORKS,
  PRICING,
  REGULATORY_STRIP,
  STATS_SCREEN,
} from "@/lib/marketing-home-content";
import { BrowserScreenshot } from "@/components/marketing/screens/BrowserScreenshot";
import { FeatureShowcaseRow } from "@/components/marketing/screens/FeatureShowcaseRow";
import { Button } from "@/components/ui/button";
import { getAppUrl } from "@/lib/app-url";

export function MarketingHome() {
  const appUrl = getAppUrl();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#12343B] via-[#04606F] to-[#0A7F85] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="max-w-3xl">
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
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  Acceder a la app
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-12">
            <BrowserScreenshot
              slug={HOME_HERO.heroScreen}
              alt="Panel principal de FrigoTrace con indicadores de cumplimiento"
              priority
              sizes="(max-width: 1280px) 100vw, 1152px"
              className="shadow-2xl shadow-black/30"
            />
          </div>
        </div>
      </section>

      <section id="funcionalidades" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-ft-ink">Todo el libro de registro, en un solo software</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Módulos alineados con el RD 1066/2026. Capturas reales de la interfaz con datos de ejemplo.
        </p>
        <div className="mt-14 flex flex-col gap-20 sm:gap-24">
          {FEATURE_SHOWCASES.map((block) => (
            <FeatureShowcaseRow key={block.slug} block={block} />
          ))}
        </div>
      </section>

      <section id="estadisticas" className="border-y border-slate-200 bg-ft-ice/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-ft-ink">Indicadores para decidir con datos</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            El panel central resume t CO₂e, fugas y certificados. Cifras de las capturas:{" "}
            <strong className="font-semibold text-slate-800">datos de ejemplo</strong>.
          </p>
          <div className="mt-10">
            <BrowserScreenshot
              slug={STATS_SCREEN}
              alt="Panel con gráficos de CO2 equivalente y fugas"
              sizes="(max-width: 1280px) 100vw, 1152px"
            />
          </div>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-ft-ink">Así trabajas con FrigoTrace</h2>
        <ol className="mt-14 flex list-none flex-col gap-20 sm:gap-24">
          {HOW_IT_WORKS.map((step) => (
            <li key={step.step}>
              <article className="grid gap-8 lg:grid-cols-5 lg:items-center lg:gap-10">
                <div className={cnColImage(step.imageOnRight)}>
                  <BrowserScreenshot slug={step.slug} alt={step.alt} sizes="(max-width: 1024px) 100vw, 60vw" />
                </div>
                <div className={cnColText(step.imageOnRight)}>
                  <p className="text-sm font-bold text-[#0A7F85]">Paso {step.step}</p>
                  <h3 className="mt-1 text-2xl font-semibold text-ft-ink">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">{step.text}</p>
                </div>
              </article>
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
            Formulario con ApiTools. Respuesta desde frigotrace@davinchi.es.
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

function cnColImage(imageOnRight?: boolean) {
  return imageOnRight ? "lg:col-span-3 lg:order-2" : "lg:col-span-3";
}

function cnColText(imageOnRight?: boolean) {
  return imageOnRight ? "lg:col-span-2 lg:order-1" : "lg:col-span-2";
}