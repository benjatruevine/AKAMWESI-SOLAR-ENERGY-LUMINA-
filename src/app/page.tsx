import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { CategoryIconGlyph } from "@/components/category-icon";
import { CategoryCard } from "@/components/category-card";
import { CtaSection } from "@/components/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { Hero } from "@/components/hero";
import { InspirationGallery } from "@/components/inspiration-gallery";
import { ProductCard } from "@/components/product-card";
import { TikTokIcon, WhatsAppIcon } from "@/components/brand-icons";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { DemoNote, Section, SectionHeading } from "@/components/ui/section";
import { WhatsAppAction } from "@/components/whatsapp";
import {
  categoryImages,
  heroImages,
  inspirationGallery,
  siteImages,
  type AssetImage,
} from "@/data/assets";
import { categories } from "@/data/categories";
import { faqs } from "@/data/faqs";
import { featuredProducts, PRODUCT_DEMO_NOTE } from "@/data/products";
import { solutions, trustPoints, whyChooseUs } from "@/data/content";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/structured-data";
import { DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

export const metadata = createMetadata({
  title: "Solar equipment supply in Kampala, Uganda",
  description:
    "Akamwesi Solar Energy (Lumina) supplies solar panels, lithium batteries, inverters and solar streetlights for homes, businesses and projects across Uganda. Chat with the team on WhatsApp.",
  path: "/",
  keywords: [
    "solar panels Gayaza Road",
    "buy solar battery Uganda",
    "solar installation Kampala",
    "Lumina solar Uganda",
  ],
});

const solutionImages: Record<string, AssetImage> = {
  crewInstall: siteImages.crewInstall,
  rooftop: siteImages.rooftop,
  outdoorSite: siteImages.outdoorSite,
  panelsArray: categoryImages.panelsArray,
};

export default function HomePage() {
  const featured = featuredProducts();
  const homeFaqs = faqs.slice(0, 5);

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      <Hero />

      {/* Trust strip */}
      <Section tone="light" className="py-12 sm:py-14 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="flex gap-4 rounded-3xl border border-navy-100 bg-white p-5 shadow-card"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-navy-950 text-solar-400">
                <CategoryIconGlyph icon={point.icon} className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-sm font-bold text-navy-900">
                  {point.title}
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-navy-500">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Categories */}
      <Section tone="muted" id="categories">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What we supply"
            title="Solar equipment, organised by category"
            description="From individual components to matched packages, explore the range by category and enquire about any specific item."
          />
          <ButtonLink
            href="/products"
            variant="outline"
            size="md"
            className="shrink-0"
          >
            View full catalogue
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Section>

      {/* Featured products */}
      <Section tone="light" id="featured">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Popular starting points"
            title="Featured demo listings"
            description="A few sample catalogue entries to show how products are presented. Specifications, stock and final pricing are always confirmed by the team."
          />
          <ButtonLink
            href="/products"
            variant="secondary"
            size="md"
            className="shrink-0"
          >
            Browse all products
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.slice(0, 6).map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              priority={index < 3}
            />
          ))}
        </div>

        <DemoNote className="mt-8">{PRODUCT_DEMO_NOTE}</DemoNote>
      </Section>

      {/* Solutions */}
      <Section tone="navy">
        <SectionHeading
          tone="dark"
          eyebrow="Solutions by need"
          title="Guidance that starts with what you want to power"
          description="Rather than fixed packages, the approach is to understand your appliances, consumption and required backup time, then recommend equipment that suits."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {solutions.slice(0, 4).map((solution) => {
            const image = solution.imageKey
              ? solutionImages[solution.imageKey]
              : undefined;
            return (
              <article
                key={solution.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-colors hover:border-white/20 sm:flex-row"
              >
                <div className="relative h-44 w-full shrink-0 sm:h-auto sm:w-44">
                  {image ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 640px) 176px, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="grid h-full min-h-44 w-full place-items-center bg-navy-900 text-solar-400">
                      <CategoryIconGlyph
                        icon={solution.icon}
                        className="h-8 w-8"
                      />
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold tracking-[0.15em] text-solar-400 uppercase">
                    {solution.audience}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-white">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-300">
                    {solution.need}
                  </p>
                  <Link
                    href={`/solutions#${solution.id}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-solar-400 transition-colors hover:text-solar-300"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/solutions" variant="white" size="lg">
            Explore all solutions
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
          <WhatsAppAction size="lg" message={DEFAULT_WHATSAPP_MESSAGE}>
            Ask about your load
          </WhatsAppAction>
        </div>
      </Section>

      {/* Why choose us */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Why Akamwesi Solar Energy"
          title="A single place to sort out your solar requirements"
          description="Practical, requirement-led support from a supplier based on Gayaza Road in Kampala."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-solar-50 text-solar-600">
                <CategoryIconGlyph icon={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Inspiration gallery */}
      <Section tone="muted">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Solar inspiration"
            title="Solar equipment in the field"
            description="Photographs supplied by Akamwesi Solar Energy. This is a glimpse of the equipment in use rather than a claim about specific completed projects."
          />
          <a
            href={site.social.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-navy-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:border-navy-300 hover:bg-navy-50"
          >
            <TikTokIcon className="h-4 w-4 text-solar-600" />
            More on TikTok
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="mt-10">
          <InspirationGallery images={inspirationGallery} />
        </div>
      </Section>

      {/* CTA band */}
      <CtaSection />

      {/* FAQ + location */}
      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <SectionHeading
              eyebrow="Common questions"
              title="Answers before you commit"
              description="A few of the questions customers ask most. See the FAQs page for the full list."
            />
            <div className="mt-8 rounded-3xl border border-navy-100 bg-white p-4 shadow-card sm:p-6">
              <FaqAccordion items={homeFaqs} />
            </div>
            <div className="mt-6">
              <ButtonLink href="/faq" variant="outline" size="md">
                See all FAQs
                <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card">
              <div className="relative h-40 w-full">
                <Image
                  src={heroImages.secondary.src}
                  alt={heroImages.secondary.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
              </div>
              <div className="p-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-solar-600 uppercase">
                  <MapPin className="h-3.5 w-3.5" aria-hidden />
                  Visit us
                </span>
                <p className="mt-3 text-sm leading-relaxed text-navy-700">
                  {site.location.street}
                  <br />
                  {site.location.landmark}
                  <br />
                  {site.location.city}, {site.location.country}
                </p>
                <p className="mt-3 flex items-start gap-2 text-xs text-navy-500">
                  <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                  Opening hours were not supplied for this demo — please confirm
                  with the team before travelling.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <ButtonAnchor
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.location.mapSearchQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="md"
                    className="w-full"
                  >
                    <MapPin className="h-4 w-4" aria-hidden />
                    Get directions
                  </ButtonAnchor>
                  <ButtonAnchor
                    href={site.contact.phoneHref}
                    variant="secondary"
                    size="md"
                    className="w-full"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    {site.contact.phoneDisplay}
                  </ButtonAnchor>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-navy-100 bg-navy-50 p-6">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-navy-950 text-solar-400">
                <Sparkles className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy-900">
                Prefer to chat first?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                Send a photo of your setup or a list of your appliances on
                WhatsApp and the team will guide you from there.
              </p>
              <a
                href={`https://wa.me/${site.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-eco-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-eco-500"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Open WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
