import { buildPublicMetadata } from "@/lib/seo";
import { PREGUNTAS_FRECUENTES } from "@/lib/marketing-faq";
import Link from "next/link";

export const metadata = buildPublicMetadata({
  title: "Preguntas frecuentes",
  description: "Respuestas sobre FrigoTrace, gases fluorados y RD 1066/2026.",
  path: "preguntas-frecuentes",
});

export default function PreguntasFrecuentesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Preguntas frecuentes</h1>
      <p className="mt-3 text-slate-600">
        Información general sobre el producto. Para orientación normativa detallada, visita{" "}
        <Link href="/formacion" className="text-[#0A7F85] underline">
          Formación RD 1066/2026
        </Link>
        .
      </p>
      <dl className="mt-10 space-y-8">
        {PREGUNTAS_FRECUENTES.map((item) => (
          <div key={item.question}>
            <dt className="text-lg font-semibold text-ft-ink">{item.question}</dt>
            <dd className="mt-2 text-slate-600 leading-relaxed">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}