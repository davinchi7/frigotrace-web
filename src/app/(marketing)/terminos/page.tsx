import { buildPublicMetadata } from "@/lib/seo";
import { LegalDocLayout } from "@/components/legal/LegalDocLayout";
import { TerminosContent } from "@/lib/legal/terminos-content";

export async function generateMetadata() {
  return buildPublicMetadata({
  title: "Condiciones generales",
  description: "Condiciones generales del servicio FrigoTrace.",
  path: "terminos",
  });
}

export default function TerminosPage() {
  return (
    <LegalDocLayout
      title="Condiciones generales de contratación"
      breadcrumb={[{ name: "Condiciones generales", path: "terminos" }]}
    >
      <TerminosContent />
    </LegalDocLayout>
  );
}