import Image from "next/image";
import Link from "next/link";
import { brand } from "@/data/assets";
import { cn } from "@/lib/utils";

/**
 * Brand lockup. The client supplied `logo.jpeg`, so it is used as-is rather than
 * inventing an official mark. `tone` switches the text for dark backgrounds.
 */
export function Logo({
  tone = "light",
  className,
  href = "/",
  compact = false,
}: {
  tone?: "light" | "dark";
  className?: string;
  href?: string | null;
  compact?: boolean;
}) {
  const content = (
    <span className="flex items-center gap-3">
      <span
        className={cn(
          "relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl ring-1",
          tone === "light"
            ? "bg-white ring-navy-100"
            : "bg-white/10 ring-white/20",
        )}
      >
        <Image
          src={brand.logo.src}
          alt={brand.logo.alt}
          width={brand.logo.width}
          height={brand.logo.height}
          sizes="44px"
          className="h-full w-full object-contain p-0.5"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[0.95rem] font-bold tracking-tight sm:text-base",
            tone === "light" ? "text-navy-900" : "text-white",
          )}
        >
          Akamwesi Solar Energy
        </span>
        {!compact ? (
          <span
            className={cn(
              "mt-1 text-[0.65rem] font-semibold tracking-[0.28em] uppercase",
              tone === "light" ? "text-solar-600" : "text-solar-400",
            )}
          >
            Lumina
          </span>
        ) : null}
      </span>
    </span>
  );

  if (!href) {
    return <span className={className}>{content}</span>;
  }

  return (
    <Link
      href={href}
      aria-label="Akamwesi Solar Energy (Lumina) — home"
      className={cn(
        "rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solar-500",
        className,
      )}
    >
      {content}
    </Link>
  );
}
