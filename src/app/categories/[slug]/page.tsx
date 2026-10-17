import type { CategoryId } from "@/data/categories";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryCard } from "@/components/category-card";
import { CategoryIconGlyph } from "@/components/category-icon";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/page-hero";
import { ProductExplorer } from "@/components/product-explorer";
import { Section, SectionHeading } from "@/components/ui/section";
import { WhatsAppAction } from "@/components/whatsapp";
import { categories, getCategory } from "@/data/categories";
import { products, productsByCategory, PRODUCT_DEMO_NOTE } from "@/data/products";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.id }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategory(slug as CategoryId);

  if (!cat) {
    return createMetadata({
      title: "Category not found",
      description: "The requested category could not be found.",
      path: `/categories/${slug}`,
    });
  }

  return createMetadata({
    title: cat.name,
    description: cat.description,
    path: `/categories/${slug}`,
    keywords: cat.buyFor,
  });
}

export default async function CategoryPage(
  props: PageProps<"/categories/[slug]">
) {
  const params = await props.params;
  const cat = getCategory(params.slug as CategoryId);

  if (!cat) {
    notFound();
  }

  const items = productsByCategory(cat.id);
  const crumbs = [
    { label: "Products", href: "/products" },
    { label: cat.name },
  ];
  const others = categories.filter((c) => c.id !== cat.id);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Product category"
        title={cat.name}
        description={cat.description}
        breadcrumbs={crumbs}
        actions={
          <>
            <WhatsAppAction size="lg">
              Enquire about {cat.shortName}
            </WhatsAppAction>
          </>
        }
      />

      <Section tone="light" className="py-10 sm:py-12">
        <div className="flex flex-wrap items-center gap-4">
          {cat.buyFor.map((bf) => (
            <span
              key={bf}
              className="inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy-700 shadow-card"
            >
              {bf}
            </span>
          ))}
        </div>
      </Section>

      <Section tone="muted" id="catalogue">
        <SectionHeading
          eyebrow="Demo listings"
          title={`Browse ${cat.name.toLowerCase()}`}
          description="Showing sample catalogue entries for this category. Use the search and sort to narrow the list further."
        />
        <div className="mt-8">
          <ProductExplorer
            items={items}
            initialCategory={cat.id}
            lockCategory
          />
        </div>
        <p className="mt-4 text-xs text-navy-500">{PRODUCT_DEMO_NOTE}</p>
      </Section>

      {others.length > 0 ? (
        <Section tone="light">
          <SectionHeading
            eyebrow="Other categories"
            title="Explore other equipment"
            description="You may also be interested in the other product categories supplied by Akamwesi Solar Energy."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((c) => (
              <CategoryCard key={c.id} category={c} />
            ))}
          </div>
        </Section>
      ) : null}

      <CtaSection
        title={`Need ${cat.name.toLowerCase()} advice?`}
        description="Send your appliance list and required backup time on WhatsApp, and the team will suggest suitable options."
      />
    </>
  );
}
