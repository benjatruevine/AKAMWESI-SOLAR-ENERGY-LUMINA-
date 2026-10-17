import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { FaqAccordion } from "@/components/faq-accordion";
import { WhatsAppAction } from "@/components/whatsapp";
import { faqs, faqCategories } from "@/data/faqs";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";
import { ButtonLink } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";

export const metadata = createMetadata({
  title: "Frequently asked questions",
  description:
    "Answers about solar panels, batteries, inverters, pricing, location and how to request a quote from Akamwesi Solar Energy in Kampala.",
  path: "/faq",
  keywords: ["solar FAQ Uganda", "solar questions Kampala"],
});

const crumbs = [{ label: "FAQs", href: "/faq" }];

export default function FaqPage() {
  const byCategory = faqCategories.map((cat) => ({
    cat,
    items: faqs.filter((f) => f.category === cat),
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="FAQs"
        title="Answers before you commit"
        description="Clear, practical answers about products, sizing, buying and getting in touch. If your question isn't listed, speak to the team on WhatsApp."
        breadcrumbs={crumbs}
        actions={
          <>
            <WhatsAppAction size="lg">Ask a question</WhatsAppAction>
            <ButtonLink href="/request-quote" variant="whiteOutline" size="lg">
              Request a quote
            </ButtonLink>
          </>
        }
      />

      <Section tone="light">
        {byCategory.map(({ cat, items }) => (
          <div key={cat} className="mb-12 last:mb-0">
            <SectionHeading title={cat} description={`Common questions about ${cat.toLowerCase()}.`} />
            <div className="mt-6 rounded-3xl border border-navy-100 bg-white p-4 shadow-card sm:p-6">
              <FaqAccordion items={items} />
            </div>
          </div>
        ))}
      </Section>

      <CtaSection title="Still have questions?" description="Share your requirements on WhatsApp and the team will help you work out the right approach." />
    </>
  );
}
