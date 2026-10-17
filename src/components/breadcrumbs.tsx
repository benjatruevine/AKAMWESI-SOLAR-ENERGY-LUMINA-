import Link from "next/link";
import { House } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({
  items,
  tone = "light",
  className,
}: {
  items: Crumb[];
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium">
        <li className="flex items-center gap-2">
          <Link
            href="/"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full transition-colors",
              tone === "light"
                ? "text-navy-500 hover:text-solar-600"
                : "text-navy-300 hover:text-white",
            )}
          >
            <House className="h-3.5 w-3.5" aria-hidden />
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              <span
                className={cn(
                  "text-xs",
                  tone === "light" ? "text-navy-300" : "text-navy-500",
                )}
                aria-hidden
              >
                /
              </span>
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full transition-colors",
                    tone === "light"
                      ? "text-navy-500 hover:text-solar-600"
                      : "text-navy-300 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={cn(
                    "max-w-[16rem] truncate sm:max-w-none",
                    tone === "light" ? "text-navy-800" : "text-white",
                  )}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
