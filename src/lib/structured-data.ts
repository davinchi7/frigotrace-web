import { LEGAL_ENTITY } from "@/lib/legal-entity";
import { getSiteUrl } from "@/lib/seo";

export function organizationJsonLd(contactEmail?: string) {
  const email = contactEmail?.trim() || LEGAL_ENTITY.email;
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: LEGAL_ENTITY.legalName,
    alternateName: LEGAL_ENTITY.productName,
    url,
    email,
    taxID: LEGAL_ENTITY.nif,
    telephone: LEGAL_ENTITY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "C/ San Agustín, 4, 1.º A",
      addressLocality: "Las Rozas de Madrid",
      postalCode: "28231",
      addressCountry: "ES",
    },
    brand: { "@type": "Brand", name: LEGAL_ENTITY.productName },
  };
}