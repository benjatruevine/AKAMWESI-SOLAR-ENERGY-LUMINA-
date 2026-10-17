import { ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { EnquiryForm } from "@/components/enquiry-form";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { WhatsAppAction } from "@/components/whatsapp";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { ButtonLink } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Request a solar quotation",
  description:
    "Request a quotation for solar panels, batteries, inverters or a complete system. Share your appliance list and required backup time to get suitable options.",
  path: "/request-quote",
  keywords: ["solar quotation Uganda", "solar quote Kampala"],
});

const crumbs = [{ label: "Request a quote", href: "/request-quote" }];

export default function RequestQuotePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Request a quote"
        title="Get a quotation based on your power needs"
        description="The most useful thing to share is the list of appliances you want to run, your location and roughly how long you need power to last during an outage. We'll help match suitable equipment."
        breadcrumbs={crumbs}
        actions={
          <>
            <WhatsAppAction size="lg">Chat on WhatsApp</WhatsAppAction>
            <ButtonLink href="/contact" variant="whiteOutline" size="lg">
              Back to contact
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </>
        }
      />

      <Section tone="light">
        <SectionHeading
          eyebrow="Tell us your requirements"
          title="Complete the quick form"
          description="The form prepares a WhatsApp message for you to review and send — nothing is stored or submitted to this website."
        />
        <div className="mt-8">
          <EnquiryForm variant="quote" />
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-6 sm:grid-cols-3">
          {["1. Share appliance list", "2. Review suitable options", "3. Confirm specification & next steps"].map((step, i) => (
            <div key={step} className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-solar-500 text-sm font-bold text-navy-950">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-bold text-navy-900">{step}</h3>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
