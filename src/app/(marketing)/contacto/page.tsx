import { buildPublicMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/marketing/ContactForm";
import { LEGAL_ENTITY } from "@/lib/legal-entity";
import { resolveMotivoFromSearch } from "@/lib/contact-form-motivo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export async function generateMetadata() {
  return buildPublicMetadata({
    title: "Contacto: información, demo y condiciones",
    description:
      "Solicita información y las condiciones de contratación de FrigoTrace o pide una demo sobre el registro digital según el RD 1066/2026.",
    path: "contacto",
  });
}

type SearchParams = Promise<{ motivo?: string }>;

export default async function ContactoPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const email = process.env.CONTACT_EMAIL?.trim() || LEGAL_ENTITY.email;
  const motivoDefault = resolveMotivoFromSearch(sp.motivo);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "" },
          { name: "Contacto", path: "contacto" },
        ])}
      />
      <h1 className="text-3xl font-bold">Solicita información y condiciones de contratación</h1>
      <p className="mt-3 text-lg text-slate-600">Cuéntanos tu caso y te enviamos las condiciones para contratar FrigoTrace.</p>
      <p className="mt-2 text-slate-700">
        <strong>¿Quieres ver una demo? Escríbenos</strong> y te la enseñamos. También puedes contactar en{" "}
        <a href={`mailto:${email}`} className="text-[#0A7F85] underline">
          {email}
        </a>{" "}
        o llamar al {LEGAL_ENTITY.phone}.
      </p>
      <div className="mt-10">
        <ContactForm motivoDefault={motivoDefault} />
      </div>
    </div>
  );
}