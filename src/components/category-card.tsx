import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryIconGlyph } from "@/components/category-icon";
import { MediaFrame } from "@/components/media-frame";
import type { Category } from "@/data/categories";
import { productCountByCategory } from "@/data/products";
import { cn } from "@/lib/utils";

export function CategoryCard({
  category,
  className,
}: {
  category: Category;
  className?: string;
}) {
  const count = productCountByCategory[category.id] ?? 0;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-lift",
        className,
      )}
    >
      <Link
        href={`/categories/${category.id}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solar-500"
        aria-label={`View ${category.name}`}
      >
        <MediaFrame
          image={category.image}
          icon={category.icon}
          alt={category.image?.alt ?? category.name}
          aspect="16/9"
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          imageClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-solar-50 text-solar-600">
            <CategoryIconGlyph icon={category.icon} className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-base leading-tight font-bold text-navy-900">
              <Link
                href={`/categories/${category.id}`}
                className="transition-colors hover:text-solar-600"
              >
                {category.name}
              </Link>
            </h3>
            <p className="text-xs text-navy-500">{category.tagline}</p>
          </div>
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-navy-600">
          {category.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="text-xs font-semibold text-navy-400">
            {count} demo listing{count === 1 ? "" : "s"}
          </span>
          <Link
            href={`/categories/${category.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-solar-600 transition-colors hover:text-solar-700"
          >
            Explore
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
