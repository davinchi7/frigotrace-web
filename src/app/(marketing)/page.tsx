import { buildPublicMetadata } from "@/lib/seo";
import { MarketingHome } from "@/components/marketing/home/MarketingHome";

export const metadata = buildPublicMetadata({
  title: "Libro de registro de gases fluorados",
  description:
    "FrigoTrace: registro digital de equipos, fugas, ventas, certificados e informes conforme al RD 1066/2026. Demo con datos de ejemplo.",
  path: "",
});

export default function HomePage() {
  return <MarketingHome />;
}