import { buildPublicMetadata } from "@/lib/seo";
import { LegalDocLayout } from "@/components/legal/LegalDocLayout";
import { PrivacidadContent } from "@/lib/legal/privacidad-content";

export async function generateMetadata() {
  return buildPublicMetadata({
  title: "Política de privacidad",
  description: "Política de privacidad del sitio web FrigoTrace.",
  path: "privacidad",
  });
}

export default function PrivacidadPage() {
  return (
    <LegalDocLayout title="Política de privacidad" breadcrumb={[{ name: "Política de privacidad", path: "privacidad" }]}>
      <PrivacidadContent />
    </LegalDocLayout>
  );
}