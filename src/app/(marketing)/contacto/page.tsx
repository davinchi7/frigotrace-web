import { buildPublicMetadata } from "@/lib/seo";
import { DemoRequestForm } from "@/components/marketing/DemoRequestForm";
import { LEGAL_ENTITY } from "@/lib/legal-entity";

export const metadata = buildPublicMetadata({
  title: "Contacto",
  description: "Solicita una demostración de FrigoTrace o escribe a nuestro equipo.",
  path: "contacto",
});

export default function ContactoPage() {
  const email = process.env.CONTACT_EMAIL?.trim() || LEGAL_ENTITY.email;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Contacto</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Cuéntanos tu operativa de frío y te mostramos FrigoTrace. También puedes escribir a{" "}
        <a href={`mailto:${email}`} className="text-[#0A7F85] underline">
          {email}
        </a>{" "}
        o llamar al {LEGAL_ENTITY.phone}.
      </p>
      <div className="mt-10 max-w-lg">
        <DemoRequestForm />
      </div>
    </div>
  );
}