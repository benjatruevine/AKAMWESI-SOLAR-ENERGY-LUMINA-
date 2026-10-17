import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { AddToCartButton } from "@/components/cart";
import { DemoBadge, MediaFrame } from "@/components/media-frame";
import { WhatsAppAction } from "@/components/whatsapp";
import { categoryMap } from "@/data/categories";
import type { Product } from "@/data/products";
import { cn, formatUGX } from "@/lib/utils";
import { productEnquiryMessage } from "@/lib/whatsapp";

export function ProductCard({
  product,
  priority = false,
  className,
}: {
  product: Product;
  priority?: boolean;
  className?: string;
}) {
  const category = categoryMap[product.category];
  const price =
    typeof product.priceUGX === "number"
      ? formatUGX(product.priceUGX)
      : "Request price";

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-lift",
        className,
      )}
    >
      <div className="relative">
        <Link
          href={`/products/${product.slug}`}
          className="block"
          aria-label={`View details for ${product.name}`}
        >
          <MediaFrame
            image={product.image}
            icon={product.icon}
            alt={product.image?.alt ?? product.name}
            aspect="4/3"
            priority={priority}
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 92vw"
            imageClassName="transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <Link
            href={`/categories/${category.id}`}
            className="rounded-full bg-navy-950/80 px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-white uppercase backdrop-blur-sm transition-colors hover:bg-navy-900"
          >
            {category.shortName}
          </Link>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base leading-snug font-bold text-navy-900">
            <Link
              href={`/products/${product.slug}`}
              className="transition-colors hover:text-solar-600"
            >
              {product.name}
            </Link>
          </h3>
        </div>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-navy-600">
          {product.summary}
        </p>

        <ul className="mt-4 space-y-1.5">
          {product.highlights.slice(0, 2).map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2 text-xs leading-relaxed text-navy-500"
            >
              <span
                className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-solar-500"
                aria-hidden
              />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-end justify-between gap-3 border-t border-navy-100 pt-4">
          <div>
            <p className="text-lg font-bold text-navy-900">{price}</p>
            {product.priceIsIndicative ? (
              <p className="mt-0.5 flex items-center gap-1 text-[0.68rem] text-navy-500">
                <Info className="h-3 w-3" aria-hidden />
                Indicative demo price
              </p>
            ) : (
              <p className="mt-0.5 text-[0.68rem] text-navy-500">
                Confirm with the team
              </p>
            )}
          </div>
          <DemoBadge />
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-navy-200 bg-white px-4 text-sm font-semibold text-navy-800 transition-colors hover:border-navy-300 hover:bg-navy-50"
          >
            View details
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <WhatsAppAction
            size="sm"
            className="h-11 flex-1 px-4"
            message={productEnquiryMessage(product.name)}
            label={`Enquire about ${product.name} on WhatsApp`}
          >
            Enquire
          </WhatsAppAction>
        </div>
        <AddToCartButton slug={product.slug} className="mt-2 w-full" />
      </div>
    </article>
  );
}

export function ProductCardCompact({ product }: { product: Product }) {
  const category = categoryMap[product.category];
  const price =
    typeof product.priceUGX === "number"
      ? formatUGX(product.priceUGX)
      : "Request price";

  return (
    <article className="group flex gap-4 rounded-2xl border border-navy-100 bg-white p-3 shadow-card transition-all duration-200 hover:border-navy-200 hover:shadow-lift">
      <Link
        href={`/products/${product.slug}`}
        className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl"
        aria-label={`View details for ${product.name}`}
      >
        <MediaFrame
          image={product.image}
          icon={product.icon}
          alt={product.image?.alt ?? product.name}
          aspect="square"
          sizes="96px"
          imageClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="min-w-0 flex-1">
        <p className="text-[0.65rem] font-semibold tracking-wide text-solar-600 uppercase">
          {category.shortName}
        </p>
        <h3 className="mt-1 line-clamp-2 text-sm font-bold text-navy-900">
          <Link
            href={`/products/${product.slug}`}
            className="hover:text-solar-600"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-semibold text-navy-700">{price}</p>
      </div>
    </article>
  );
}
