import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Info, MapPin, Phone, ShieldCheck } from "lucide-react";
import { AddToCartButton } from "@/components/cart";
import { CategoryIconGlyph } from "@/components/category-icon";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/page-hero";
import { ProductCardCompact } from "@/components/product-card";
import { WhatsAppAction } from "@/components/whatsapp";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button";
import { DemoNote, Section } from "@/components/ui/section";
import { categoryMap } from "@/data/categories";
import {
  getProduct,
  products,
  PRODUCT_DEMO_NOTE,
  PRODUCT_PRICE_NOTE,
  relatedProducts,
} from "@/data/products";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, productSchema } from "@/lib/structured-data";
import { cn, formatUGX } from "@/lib/utils";
import { productEnquiryMessage } from "@/lib/whatsapp";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return createMetadata({
      title: "Product not found",
      description: "The requested product could not be found in the demo catalogue.",
      path: `/products/${slug}`,
    });
  }

  return createMetadata({
    title: product.name,
    description: product.summary,
    path: `/products/${slug}`,
    keywords: product.tags,
  });
}

export default async function ProductPage(props: PageProps<"/products/[slug]">) {
  const params = await props.params;
  const product = getProduct(params.slug);

  if (!product) {
    notFound();
  }

  const category = categoryMap[product.category];
  const price =
    typeof product.priceUGX === "number"
      ? formatUGX(product.priceUGX)
      : "Request price";
  const related = relatedProducts(product);

  const crumbs = [
    { label: "Products", href: "/products" },
    { label: category.name, href: `/categories/${category.id}` },
    { label: product.name },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={productSchema(product)} />

      <PageHero
        eyebrow={category.name}
        title={product.name}
        description={product.summary}
        breadcrumbs={crumbs}
        actions={
          <>
            <WhatsAppAction
              size="lg"
              message={productEnquiryMessage(product.name)}
              label={`Enquire about ${product.name} on WhatsApp`}
            >
              Enquire on WhatsApp
            </WhatsAppAction>
            <AddToCartButton slug={product.slug} variant="primary" />
          </>
        }
      />

      <Section tone="light" className="scroll-mt-28">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] text-solar-600 uppercase">
                    Demo listing
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-navy-900 sm:text-2xl">
                    Key details
                  </h2>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-navy-900">{price}</p>
                  <p className="text-xs text-navy-500">
                    {product.priceIsIndicative
                      ? "Indicative sample price"
                      : "Price to be confirmed"}
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {product.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 rounded-2xl bg-navy-50 p-3 text-sm leading-relaxed text-navy-700"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-solar-500"
                      aria-hidden
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <WhatsAppAction
                  size="md"
                  message={productEnquiryMessage(product.name)}
                >
                  Get current price & availability
                </WhatsAppAction>
                <ButtonLink
                  href="/products"
                  variant="outline"
                  size="md"
                >
                  Back to catalogue
                </ButtonLink>
              </div>

              <div className="mt-6 space-y-3">
                <DemoNote>{PRODUCT_DEMO_NOTE}</DemoNote>
                <DemoNote>{PRODUCT_PRICE_NOTE}</DemoNote>
              </div>
            </div>

            {product.image ? (
              <div className="rounded-3xl border border-navy-100 bg-white p-3 shadow-card">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-navy-50">
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 px-2 text-xs text-navy-500">
                  {product.image.alt}
                </p>
              </div>
            ) : null}
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-navy-950 text-solar-400">
                  <CategoryIconGlyph icon={category.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] text-solar-600 uppercase">
                    Category
                  </p>
                  <h3 className="text-base font-bold text-navy-900">
                    {category.name}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy-600">
                {category.description}
              </p>
              <ButtonLink
                href={`/categories/${category.id}`}
                variant="ghost"
                size="sm"
                className="mt-4"
              >
                View all {category.shortName}
              </ButtonLink>
            </div>

            <div className="rounded-3xl border border-navy-100 bg-navy-50 p-6">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-eco-600 text-white">
                <ShieldCheck className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy-900">
                A quick, honest enquiry
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                WhatsApp is the fastest way to confirm current prices,
                availability and whether this item fits your system.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <WhatsAppAction
                  size="md"
                  className="w-full"
                  message={productEnquiryMessage(product.name)}
                >
                  Ask about this item
                </WhatsAppAction>
                <ButtonAnchor
                  href={site.contact.phoneHref}
                  variant="outline"
                  size="md"
                  className="w-full"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Call {site.contact.phoneDisplay}
                </ButtonAnchor>
              </div>
            </div>

            <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-5 w-5 text-solar-600" aria-hidden />
                <p className="text-xs leading-relaxed text-navy-500">
                  This is a demonstration listing to show how a full product
                  page would look. Nothing here confirms stock, warranty or
                  delivery. Always verify with the team before making any
                  commitment.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section tone="muted">
          <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">
            Related demo listings
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-navy-600">
            Other items in the same category that might be worth considering.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ProductCardCompact key={r.slug} product={r} />
            ))}
          </div>
        </Section>
      ) : null}

      <CtaSection />
    </>
  );
}
