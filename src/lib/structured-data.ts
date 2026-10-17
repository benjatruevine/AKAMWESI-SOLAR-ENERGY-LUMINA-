import type { Faq } from "@/data/faqs";
import type { Product } from "@/data/products";
import type { Crumb } from "@/components/breadcrumbs";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/metadata";

/**
 * Structured data.
 *
 * Only verified information is published. There is deliberately no
 * aggregateRating, no price/offer object and no opening-hours claim, because
 * none of those were confirmed by the client.
 */

export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.legalName,
    alternateName: site.brandName,
    description: site.shortDescription,
    url: siteUrl,
    telephone: site.contact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.location.street}, ${site.location.landmark}`,
      addressLocality: site.location.city,
      addressCountry: "UG",
    },
    areaServed: {
      "@type": "Country",
      name: "Uganda",
    },
    sameAs: [site.social.tiktokUrl],
  };
}

export function websiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.fullName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/products?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(
  items: Crumb[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
      })),
    ],
  };
}

export function productSchema(product: Product): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    category: product.category,
    url: `${siteUrl}/products/${product.slug}`,
    ...(product.image ? { image: `${siteUrl}${product.image.src}` } : {}),
    additionalProperty: product.highlights.map((highlight) => ({
      "@type": "PropertyValue",
      name: "Detail",
      value: highlight,
    })),
  };
}

export function faqSchema(faqs: Faq[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
