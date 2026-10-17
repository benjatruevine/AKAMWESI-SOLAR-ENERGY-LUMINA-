import Image from "next/image";
import { MapPin, Phone, Sparkles } from "lucide-react";
import { CategoryIconGlyph } from "@/components/category-icon";
import { CtaSection } from "@/components/cta-section";
import { InspirationGallery } from "@/components/inspiration-gallery";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { WhatsAppAction } from "@/components/whatsapp";
import { heroImages, inspirationGallery } from "@/data/assets";
import { trustPoints, whyChooseUs } from "@/data/content";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "About Akamwesi Solar Energy (Lumina)",
  description:
    "Akamwesi Solar Energy (Lumina) supplies solar panels, lithium batteries, inverters and solar lighting from Gayaza Road, next to Akamwesi Mall, Kampala.",
  path: "/about",
  keywords: ["solar supplier Kampala", "Lumina solar Gayaza Road"],
});

const crumbs = [{ label: "About Us", href: "/about" }];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="About us"
        title="Akamwesi Solar Energy (Lumina)"
        description="A Kampala-based supplier of solar panels, lithium batteries, inverters and solar streetlights. The focus is on helping homes, businesses and projects find equipment that suits their actual power needs."
        breadcrumbs={crumbs}
        actions={
          <>
            <WhatsAppAction size="lg">Chat with the team</WhatsAppAction>
            <ButtonLink href="/products" variant="whiteOutline" size="lg">
              View product range
            </ButtonLink>
          </>
        }
      />

      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Solar equipment supply with honest advice"
              description="Based on Gayaza Road, next to Akamwesi Mall, Kampala, Uganda, Akamwesi Solar Energy (Lumina) supplies solar equipment for household backup, business use and project work. Guidance starts with your appliance list and required backup time."
            />
            <ul className="mt-6 space-y-4">
              {trustPoints.map((point) => (
                <li key={point.title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-solar-50 text-solar-600">
                    <CategoryIconGlyph icon={point.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-navy-900">{point.title}</p>
                    <p className="mt-1 text-sm text-navy-600">{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={heroImages.secondary.src}
                alt={heroImages.secondary.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="What guides us"
          title="Practical reasons to get in touch"
          description="Simple, requirement-led conversations that help you avoid buying more — or less — than you actually need."
          align="center"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
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
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Visit us"
              title="Convenient Kampala location"
              description="Based next to Akamwesi Mall on Gayaza Road, Kyebando. Speak to the team in person about your requirements."
            />
            <div className="mt-6 space-y-4">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-solar-600" aria-hidden />
                <p className="text-sm text-navy-700">
                  {site.location.street}
                  <br />
                  {site.location.landmark}
                  <br />
                  {site.location.city}, {site.location.country}
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-solar-600" aria-hidden />
                <a href={site.contact.phoneHref} className="text-sm font-semibold text-solar-600 hover:text-solar-700">
                  {site.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonAnchor
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.location.mapSearchQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                >
                  Get directions
                </ButtonAnchor>
                <WhatsAppAction size="md">Chat on WhatsApp</WhatsAppAction>
              </div>
            </div>
          </div>
          <div>
            <InspirationGallery images={inspirationGallery.slice(0, 6)} />
          </div>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
