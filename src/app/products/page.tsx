import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CategoryIconGlyph } from "@/components/category-icon";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ProductExplorer } from "@/components/product-explorer";
import { ButtonAnchor } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { DemoNote, Section, SectionHeading } from "@/components/ui/section";
import { WhatsAppAction } from "@/components/whatsapp";
import { categories } from "@/data/categories";
import { products, PRODUCT_DEMO_NOTE, PRODUCT_PRICE_NOTE } from "@/data/products";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = createMetadata({
  title: "Solar products & equipment catalogue",
  description:
    "Browse solar panels, lithium batteries, inverters, solar streetlights, complete systems and accessories. Enquire about any item on WhatsApp for current pricing and availability.",
  path: "/products",
  keywords: [
    "solar panel price Uganda",
    "lithium battery Kampala",
    "hybrid inverter Uganda",
    "buy solar streetlight Kampala",
  ],
});

const crumbs = [{ label: "Products", href: "/products" }];

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="Product catalogue"
        title="Solar equipment for homes, businesses and projects"
        description="Everything below is a demonstration catalogue entry. It shows how the full range would be presented online — specifications, stock and final prices are always confirmed directly by the team."
        breadcrumbs={crumbs}
        actions={
          <>
            <WhatsAppAction size="lg">
              Ask about an item
            </WhatsAppAction>
            <ButtonAnchor
              href={site.contact.phoneHref}
              variant="whiteOutline"
              size="lg"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {site.contact.phoneDisplay}
            </ButtonAnchor>
          </>
        }
      />

      <Section tone="light" className="py-10 sm:py-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="group inline-flex items-center gap-2.5 rounded-full border border-navy-100 bg-white py-2 pr-4 pl-2 text-sm font-semibold text-navy-700 shadow-card transition-colors hover:border-navy-200 hover:bg-navy-50"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-solar-50 text-solar-600">
                <CategoryIconGlyph icon={category.icon} className="h-4 w-4" />
              </span>
              {category.name}
              <ArrowRight
                className="h-3.5 w-3.5 text-navy-400 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="muted" id="catalogue" className="scroll-mt-28 pt-4">
        <SectionHeading
          eyebrow="Full catalogue"
          title="Search, filter and sort"
          description="Use the search box and filters to explore the demo listings. Every entry links to a detail page with a one-tap WhatsApp enquiry."
        />

        <div className="mt-8">
          <ProductExplorer items={products} />
        </div>

        <div className="mt-8 space-y-3">
          <DemoNote>{PRODUCT_DEMO_NOTE}</DemoNote>
          <DemoNote>{PRODUCT_PRICE_NOTE}</DemoNote>
        </div>
      </Section>

      <CtaSection
        title="Found something you are interested in?"
        description="Send the product name on WhatsApp and the team will confirm current pricing, availability and suitable alternatives."
      />
    </>
  );
}
