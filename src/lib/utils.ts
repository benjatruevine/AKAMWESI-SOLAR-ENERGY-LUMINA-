/** Join conditional class names without pulling in an extra dependency. */
export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

/**
 * Build a public URL for a file in /public/assets.
 * The supplied asset filenames contain spaces and parentheses, so they are
 * safely encoded for use in `src` attributes and social metadata.
 */
export function asset(fileName: string): string {
  return `/assets/${encodeURI(fileName)}`;
}

const ugxFormatter = new Intl.NumberFormat("en-UG", {
  style: "currency",
  currency: "UGX",
  maximumFractionDigits: 0,
});

/** Format an indicative UGX figure, e.g. UGX 1,250,000. */
export function formatUGX(value: number): string {
  return ugxFormatter.format(value).replace("UGX", "UGX ").replace(/\s+/g, " ");
}

/** Human-readable label for a price, falling back to "Request price". */
export function priceLabel(price: number | null | undefined): string {
  return typeof price === "number" ? formatUGX(price) : "Request price";
}
