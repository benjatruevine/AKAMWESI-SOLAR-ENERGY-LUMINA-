import { site } from "@/data/site";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { CtaSection } from "@/components/cta-section";

export const metadata = createMetadata({
  title: "Privacy policy",
  description:
    "Privacy policy for the Akamwesi Solar Energy (Lumina) demo website.",
  path: "/privacy-policy",
});

const crumbs = [{ label: "Privacy Policy", href: "/privacy-policy" }];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description="This is a demonstration website for presentation purposes."
        breadcrumbs={crumbs}
      />
      <Section tone="light">
        <div className="prose prose-navy max-w-3xl">
          <h2>Introduction</h2>
          <p>
            This website is a design demonstration for Akamwesi Solar Energy (Lumina). It does not include a backend, user accounts, analytics scripts or payment processing.
          </p>
          <h2>Information we do not collect</h2>
          <p>
            No personally identifiable information is submitted to or stored on this website. Enquiries are handled by opening WhatsApp in your browser.
          </p>
          <h2>Third-party services</h2>
          <p>
            When you click the WhatsApp, TikTok or Google Maps links, you will be directed to those third-party services and their own privacy policies will apply.
          </p>
          <h2>Contact</h2>
          <p>
            If you have questions about this policy, please contact the team via WhatsApp on {site.contact.whatsappDisplay}.
          </p>
        </div>
      </Section>
      <CtaSection />
    </>
  );
}
