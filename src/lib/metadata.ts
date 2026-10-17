import type { Metadata } from "next";
import { site } from "@/data/site";

export const siteUrl = site.url;

export const baseKeywords = [
  "solar Uganda",
  "solar panels Kampala",
  "lithium solar battery Uganda",
  "solar inverters Kampala",
  "solar streetlights Uganda",
  "solar company Gayaza Road",
  "Akamwesi Solar Energy",
  "Lumina solar",
];

/**
 * Consistent page metadata: canonical URL, Open Graph and Twitter cards.
 * Titles are composed with the site template defined in the root layout.
 */
export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords: [...baseKeywords, ...keywords],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: site.fullName,
      locale: "en_UG",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
