import Image from "next/image";
import { CategoryIconGlyph } from "@/components/category-icon";
import type { AssetImage } from "@/data/assets";
import type { CategoryIcon } from "@/data/categories";
import { cn } from "@/lib/utils";

/**
 * Renders a product or category visual.
 *
 * Where a suitable supplied photograph exists it is used. Where one does not,
 * a branded icon tile is rendered instead — a clearly intentional design
 * treatment rather than an unrelated stock photo standing in for a product.
 */
export function MediaFrame({
  image,
  icon,
  alt,
  aspect = "square",
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw",
  priority = false,
  className,
  imageClassName,
  tone = "light",
}: {
  image?: AssetImage;
  icon: CategoryIcon;
  alt: string;
  aspect?: "square" | "4/3" | "16/9" | "3/4";
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  tone?: "light" | "dark";
}) {
  const aspectClass = {
    square: "aspect-square",
    "4/3": "aspect-[4/3]",
    "16/9": "aspect-video",
    "3/4": "aspect-[3/4]",
  }[aspect];

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        aspectClass,
        tone === "light" ? "bg-navy-50" : "bg-navy-900",
        className,
      )}
    >
      {image ? (
        <Image
          src={image.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className={cn("object-cover", imageClassName)}
        />
      ) : (
        <div
          className={cn(
            "absolute inset-0 grid place-items-center",
            tone === "light"
              ? "bg-gradient-to-br from-navy-50 via-white to-solar-50"
              : "bg-gradient-to-br from-navy-900 via-navy-950 to-navy-800",
          )}
        >
          <div
            className={cn(
              "absolute inset-0 opacity-[0.14]",
              tone === "light" ? "bg-grid-navy" : "bg-grid-navy",
            )}
            aria-hidden
          />
          <CategoryIconGlyph
            icon={icon}
            className={cn(
              "relative h-16 w-16",
              tone === "light" ? "text-navy-300" : "text-solar-400/80",
            )}
            strokeWidth={1.25}
          />
          <span className="sr-only">{alt}</span>
        </div>
      )}
    </div>
  );
}

/** Small pill used to flag that a catalogue entry is demo data. */
export function DemoBadge({
  children = "Demo listing",
  className,
  tone = "light",
}: {
  children?: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide uppercase",
        tone === "light"
          ? "border-solar-200 bg-solar-50 text-solar-700"
          : "border-white/15 bg-white/10 text-solar-300",
        className,
      )}
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-solar-500"
        aria-hidden
      />
      {children}
    </span>
  );
}

export function Pill({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark" | "eco";
}) {
  const tones = {
    light: "border-navy-100 bg-white text-navy-700",
    dark: "border-white/15 bg-white/5 text-navy-100",
    eco: "border-eco-200 bg-eco-50 text-eco-700",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
