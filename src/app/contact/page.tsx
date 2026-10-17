import { MapPin, Phone, Sparkles } from "lucide-react";
import { CategoryIconGlyph } from "@/components/category-icon";
import { CtaSection } from "@/components/cta-section";
import { EnquiryForm } from "@/components/enquiry-form";
import { InspirationGallery } from "@/components/inspiration-gallery";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { WhatsAppAction } from "@/components/whatsapp";
import { inspirationGallery } from "@/data/assets";
import { trustPoints, whyChooseUs } from "@/data/content";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { ButtonAnchor } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Contact Akamwesi Solar Energy (Lumina)",
  description:
    "Get in touch with Akamwesi Solar Energy in Kampala. Chat on WhatsApp, call or visit us on Gayaza Road, next to Akamwesi Mall.",
  path: "/contact",
  keywords: ["solar contact Kampala", "solar supplier Gayaza Road"],
});

const crumbs = [{ label: "Contact", href: "/contact" }];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Contact us"
        title="Talk to the team about your solar requirements"
        description="Chat on WhatsApp is the fastest way to reach Akamwesi Solar Energy. You can also call or visit us on Gayaza Road, next to Akamwesi Mall, Kampala, Uganda."
        breadcrumbs={crumbs}
        actions={
          <>
            <WhatsAppAction size="lg">Chat on WhatsApp</WhatsAppAction>
            <ButtonAnchor href={site.contact.phoneHref} variant="whiteOutline" size="lg">
              <Phone className="h-4 w-4" aria-hidden />
              {site.contact.phoneDisplay}
            </ButtonAnchor>
          </>
        }
      />

      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-solar-600 uppercase">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                Visit us
              </span>
              <address className="mt-4 not-italic text-sm leading-relaxed text-navy-700">
                {site.location.street}
                <br />
                {site.location.landmark}
                <br />
                {site.location.city}, {site.location.country}
              </address>
              <p className="mt-3 text-xs text-navy-500">
                Opening hours were not confirmed for this demo — please check with the team before travelling.
              </p>
              <ButtonAnchor
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.location.mapSearchQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                className="mt-5"
              >
                Get directions
              </ButtonAnchor>
            </div>

            <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-solar-600 uppercase">
                <Phone className="h-3.5 w-3.5" aria-hidden />
                Call or message
              </span>
              <div className="mt-4 space-y-3 text-sm">
                <a href={site.contact.phoneHref} className="flex items-center gap-3 text-navy-700 hover:text-solar-600">
                  <Phone className="h-4 w-4 text-solar-600" aria-hidden />
                  {site.contact.phoneDisplay}
                </a>
                <WhatsAppAction variant="outline" size="sm">Chat on WhatsApp</WhatsAppAction>
              </div>
            </div>

            <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-solar-600 uppercase">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Why get in touch
              </span>
              <ul className="mt-4 space-y-3">
                {trustPoints.map((point) => (
                  <li key={point.title} className="flex gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-solar-50 text-solar-600">
                      <CategoryIconGlyph icon={point.icon} className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">{point.title}</p>
                      <p className="text-xs text-navy-500">{point.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <EnquiryForm variant="contact" />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="More about us"
          title="Practical support from a Kampala-based supplier"
          description="Based on Gayaza Road, next to Akamwesi Mall. Focused on honest advice, suitable equipment and straightforward WhatsApp communication."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.slice(0, 3).map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-solar-50 text-solar-600">
                <CategoryIconGlyph icon={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Solar inspiration"
          title="See the equipment in context"
          description="A selection of supplied photographs. Click to enlarge — these show solar equipment and installations in general, not specific client projects."
        />
        <div className="mt-8">
          <InspirationGallery images={inspirationGallery} />
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
