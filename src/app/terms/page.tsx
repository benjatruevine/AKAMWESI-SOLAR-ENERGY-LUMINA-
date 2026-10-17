import { site } from "@/data/site";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { CtaSection } from "@/components/cta-section";

export const metadata = createMetadata({
  title: "Terms & conditions",
  description:
    "Terms and conditions for the Akamwesi Solar Energy (Lumina) demonstration website.",
  path: "/terms",
});

const crumbs = [{ label: "Terms & Conditions", href: "/terms" }];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Legal"
        title="Terms & conditions"
        description="These terms apply to this demonstration website. The information provided is illustrative only."
        breadcrumbs={crumbs}
      />
      <Section tone="light">
        <div className="prose prose-navy max-w-3xl">
          <h2>Demonstration purpose</h2>
          <p>
            This site is a design demonstration for Akamwesi Solar Energy (Lumina). Catalogue entries, prices and images are sample data and do not constitute an offer.
          </p>
          <h2>Accuracy</h2>
          <p>
            While care has been taken to avoid unverified claims, specifications, stock and pricing must always be confirmed directly with the business.
          </p>
          <h2>Third-party links</h2>
          <p>
            Links to WhatsApp, TikTok, Google Maps and external services are provided for convenience; their terms apply.
          </p>
          <h2>Contact</h2>
          <p>
            For enquiries about these terms, contact {site.contact.whatsappDisplay}.
          </p>
        </div>
      </Section>
      <CtaSection />
    </>
  );
}
