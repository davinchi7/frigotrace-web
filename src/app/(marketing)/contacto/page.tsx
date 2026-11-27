import { Suspense } from "react";
import { buildPublicMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/marketing/ContactForm";
import { LEGAL_ENTITY } from "@/lib/legal-entity";

export const metadata = buildPublicMetadata({
  title: "Contacto: información, demo y condiciones",
  description:
    "Solicita información y las condiciones de contratación de FrigoTrace o pide una demo sobre el registro digital según el RD 1066/2026.",
  path: "contacto",
});

export default function ContactoPage() {
  const email = process.env.CONTACT_EMAIL?.trim() || LEGAL_ENTITY.email;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
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
        <Suspense fallback={<p className="text-sm text-slate-500">Cargando formulario…</p>}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
