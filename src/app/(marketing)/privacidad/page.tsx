import { buildPublicMetadata } from "@/lib/seo";
import { LegalDocLayout } from "@/components/legal/LegalDocLayout";
import { PrivacidadContent } from "@/lib/legal/privacidad-content";

export const metadata = buildPublicMetadata({
  title: "Política de privacidad",
  description: "Política de privacidad del sitio web FrigoTrace.",
  path: "privacidad",
});

export default function PrivacidadPage() {
  return (
    <LegalDocLayout title="Política de privacidad">
      <PrivacidadContent />
    </LegalDocLayout>
  );
}