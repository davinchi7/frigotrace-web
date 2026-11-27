import { LEGAL_ENTITY } from "@/lib/legal-entity";
import { PREGUNTAS_FRECUENTES } from "@/lib/marketing-faq";
import { getSiteUrl } from "@/lib/seo";

export function organizationJsonLd(contactEmail?: string) {
  const email = contactEmail?.trim() || LEGAL_ENTITY.email;
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: LEGAL_ENTITY.legalName,
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

export function softwareApplicationJsonLd() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: LEGAL_ENTITY.productName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url,
    author: {
      "@type": "Organization",
      name: LEGAL_ENTITY.legalName,
    },
    offers: {
      "@type": "Offer",
      url: `${url}/contacto`,
      availability: "https://schema.org/InStock",
    },
  };
}

export function faqPageJsonLd() {
  const url = `${getSiteUrl()}/preguntas-frecuentes`;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PREGUNTAS_FRECUENTES.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    url,
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path ? `${base}/${item.path.replace(/^\//, "")}` : base,
    })),
  };
}