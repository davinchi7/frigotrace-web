import { buildPublicMetadata } from "@/lib/seo";
import { LegalDocLayout } from "@/components/legal/LegalDocLayout";
import { AvisoLegalContent } from "@/lib/legal/aviso-legal-content";

export async function generateMetadata() {
  return buildPublicMetadata({
    title: "Aviso legal",
    description: "Aviso legal del sitio web FrigoTrace.",
    path: "aviso-legal",
  });
}

export default function AvisoLegalPage() {
  return (
    <LegalDocLayout title="Aviso legal y condiciones de uso" breadcrumb={[{ name: "Aviso legal", path: "aviso-legal" }]}>
      <AvisoLegalContent />
    </LegalDocLayout>
  );
}