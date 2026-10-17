"use client";

import { useEffect, useMemo, useState } from "react";
import { RotateCcw, Search, SlidersHorizontal } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { categories, type CategoryId } from "@/data/categories";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

type SortKey = "featured" | "name" | "price-low" | "price-high";
type CategoryFilter = CategoryId | "all";

const sortLabels: Record<SortKey, string> = {
  featured: "Featured first",
  name: "Name (A–Z)",
  "price-low": "Indicative price (low to high)",
  "price-high": "Indicative price (high to low)",
};

export function ProductExplorer({
  items,
  initialCategory = "all",
  lockCategory = false,
  className,
}: {
  items: Product[];
  initialCategory?: CategoryFilter;
  lockCategory?: boolean;
  className?: string;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>(initialCategory);
  const [sort, setSort] = useState<SortKey>("featured");
  const [availableOnly, setAvailableOnly] = useState(false);

  // Read the initial search term from the URL without opting the page into
  // dynamic rendering (uses the browser URL, not the searchParams API).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    const cat = params.get("category");
    if (q) setQuery(q);
    if (cat && !lockCategory) {
      const match = categories.find((entry) => entry.id === cat);
      if (match) setCategory(match.id);
    }
  }, [lockCategory]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();

    const result = items.filter((product) => {
      if (category !== "all" && product.category !== category) return false;
      if (availableOnly && typeof product.priceUGX !== "number") return false;
      if (!needle) return true;
      const haystack = [
        product.name,
        product.summary,
        ...product.tags,
        ...product.highlights,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });

    const price = (product: Product) =>
      typeof product.priceUGX === "number"
        ? product.priceUGX
        : Number.POSITIVE_INFINITY;

    switch (sort) {
      case "name":
        return [...result].sort((a, b) => a.name.localeCompare(b.name));
      case "price-low":
        return [...result].sort((a, b) => price(a) - price(b));
      case "price-high":
        return [...result].sort((a, b) => price(b) - price(a));
      default:
        return [...result].sort(
          (a, b) => Number(b.featured) - Number(a.featured),
        );
    }
  }, [items, query, category, sort, availableOnly]);

  const hasFilters =
    query.trim() !== "" ||
    category !== initialCategory ||
    sort !== "featured" ||
    availableOnly;

  const reset = () => {
    setQuery("");
    setCategory(initialCategory);
    setSort("featured");
    setAvailableOnly(false);
  };

  return (
    <div className={cn("", className)}>
      <div className="rounded-3xl border border-navy-100 bg-white p-4 shadow-card sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <label htmlFor="catalogue-search" className="sr-only">
              Search the catalogue
            </label>
            <Search
              className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-navy-400"
              aria-hidden
            />
            <input
              id="catalogue-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search panels, batteries, inverters…"
              autoComplete="off"
              className="h-12 w-full rounded-2xl border border-navy-100 bg-navy-50/60 pr-4 pl-11 text-sm text-navy-800 placeholder:text-navy-400 focus:border-solar-500 focus:bg-white focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative">
              <label htmlFor="catalogue-sort" className="sr-only">
                Sort products
              </label>
              <SlidersHorizontal
                className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-navy-400"
                aria-hidden
              />
              <select
                id="catalogue-sort"
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                className="h-12 w-full appearance-none rounded-2xl border border-navy-100 bg-navy-50/60 pr-9 pl-10 text-sm font-medium text-navy-700 focus:border-solar-500 focus:bg-white focus:outline-none sm:w-56"
              >
                {(Object.keys(sortLabels) as SortKey[]).map((key) => (
                  <option key={key} value={key}>
                    {sortLabels[key]}
                  </option>
                ))}
              </select>
            </div>

            <label className="inline-flex h-12 cursor-pointer items-center gap-2.5 rounded-2xl border border-navy-100 bg-navy-50/60 px-4 text-sm font-medium text-navy-700 select-none">
              <input
                type="checkbox"
                checked={availableOnly}
                onChange={(event) => setAvailableOnly(event.target.checked)}
                className="h-4 w-4 rounded border-navy-300 text-solar-500 focus:ring-solar-500"
              />
              Indicative price shown
            </label>
          </div>
        </div>

        {!lockCategory ? (
          <div className="mt-4 flex flex-wrap gap-2 border-t border-navy-100 pt-4">
            <button
              type="button"
              onClick={() => setCategory("all")}
              aria-pressed={category === "all"}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
                category === "all"
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-navy-200 bg-white text-navy-600 hover:border-navy-300 hover:bg-navy-50",
              )}
            >
              All categories
            </button>
            {categories.map((entry) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => setCategory(entry.id)}
                aria-pressed={category === entry.id}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
                  category === entry.id
                    ? "border-navy-900 bg-navy-900 text-white"
                    : "border-navy-200 bg-white text-navy-600 hover:border-navy-300 hover:bg-navy-50",
                )}
              >
                {entry.name}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm text-navy-500" aria-live="polite">
          Showing <span className="font-semibold text-navy-800">
            {filtered.length}
          </span>{" "}
          of {items.length} demo listings
        </p>
        {hasFilters ? (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-navy-600 transition-colors hover:bg-navy-50 hover:text-navy-900"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            Clear filters
          </button>
        ) : null}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              priority={index < 3}
            />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-navy-200 bg-navy-50/60 px-6 py-16 text-center">
          <p className="text-base font-semibold text-navy-800">
            No demo listings match your search
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-navy-500">
            Try a different keyword or clear the filters. Because the catalogue
            shown here is sample data, the fastest way to check a specific item
            is to ask the team on WhatsApp.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            <RotateCcw className="h-4 w-4" aria-hidden />
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
