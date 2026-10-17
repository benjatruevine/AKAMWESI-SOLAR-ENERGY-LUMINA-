import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { CategoryIconGlyph } from "@/components/category-icon";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { WhatsAppAction } from "@/components/whatsapp";
import { categoryImages, siteImages, type AssetImage } from "@/data/assets";
import { solutions } from "@/data/content";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { ButtonLink } from "@/components/ui/button";

const solutionImages: Record<string, AssetImage> = {
  crewInstall: siteImages.crewInstall,
  rooftop: siteImages.rooftop,
  outdoorSite: siteImages.outdoorSite,
  panelsArray: categoryImages.panelsArray,
};

export const metadata = createMetadata({
  title: "Solar solutions for homes, businesses and projects",
  description:
    "Guidance on solar systems for homes, shops, offices, commercial sites and outdoor lighting. Speak to the team about equipment matched to your power requirements.",
  path: "/solutions",
  keywords: [
    "home solar Uganda",
    "solar backup Kampala",
    "solar system quote Uganda",
  ],
});

const crumbs = [{ label: "Solutions", href: "/solutions" }];

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Solutions by need"
        title="Solar solutions tailored to what you want to power"
        description="Every requirement is different. The team helps size panels, batteries and inverters based on your appliance list, usage and required backup time."
        breadcrumbs={crumbs}
        actions={
          <WhatsAppAction size="lg">Discuss your load</WhatsAppAction>
        }
      />

      <Section tone="light">
        {solutions.map((solution, index) => {
          const image = solution.imageKey ? solutionImages[solution.imageKey] : undefined;
          return (
            <article
              key={solution.id}
              id={solution.id}
              className="grid gap-10 py-10 first:pt-0 last:pb-0 sm:grid-cols-2 sm:items-center sm:py-14"
            >
              <div className={index % 2 === 1 ? "sm:order-2" : "sm:order-1"}>
                <span className="text-xs font-semibold tracking-[0.18em] text-solar-600 uppercase">
                  {solution.audience}
                </span>
                <h2 className="mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
                  {solution.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-navy-600">
                  {solution.need}
                </p>
                <ul className="mt-5 space-y-3">
                  {solution.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-navy-700">
                      <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-eco-600/20 text-eco-600">
                        <Check className="h-3 w-3" aria-hidden />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <WhatsAppAction size="md">Enquire about this solution</WhatsAppAction>
                  <ButtonLink href={`/categories/${solution.relatedCategory}`} variant="outline" size="md">
                    Browse category
                  </ButtonLink>
                </div>
              </div>
              <div className={index % 2 === 1 ? "sm:order-1" : "sm:order-2"}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card">
                  {image ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 90vw"
                      className="object-cover"
                    />
                  ) : (
                    <span className="grid h-full place-items-center text-navy-400">
                      <CategoryIconGlyph icon={solution.icon} className="h-16 w-16" />
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </Section>

      <CtaSection title="Tell us what you want to power" description="Send your appliance list, location and required backup time on WhatsApp — the team will help you identify the right equipment." />
    </>
  );
}
