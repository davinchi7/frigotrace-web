import { buildPublicMetadata } from "@/lib/seo";
import { LegalDocLayout } from "@/components/legal/LegalDocLayout";
import { CookiesContent } from "@/lib/legal/cookies-content";

export const metadata = buildPublicMetadata({
  title: "Política de cookies",
  description: "Política de cookies del sitio web FrigoTrace.",
  path: "cookies",
});

export default function CookiesPage() {
  return (
    <LegalDocLayout title="Política de cookies">
      <CookiesContent />
    </LegalDocLayout>
  );
}