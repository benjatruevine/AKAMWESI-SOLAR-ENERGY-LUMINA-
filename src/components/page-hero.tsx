import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  aside,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: Crumb[];
  actions?: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy-950 text-white",
        className,
      )}
    >
      <div className="bg-grid-navy absolute inset-0 opacity-70" aria-hidden />
      <div className="bg-radial-solar absolute inset-0" aria-hidden />
      <div
        className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-navy-700/40 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative py-14 sm:py-16 lg:py-20">
        {breadcrumbs ? (
          <Breadcrumbs items={breadcrumbs} tone="dark" className="mb-6" />
        ) : null}
        <div
          className={cn(
            "grid gap-10",
            aside ? "lg:grid-cols-[1.35fr_1fr] lg:items-center" : "",
          )}
        >
          <div className="max-w-3xl">
            {eyebrow ? <Eyebrow tone="dark">{eyebrow}</Eyebrow> : null}
            <h1 className="mt-4 text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
                {description}
              </p>
            ) : null}
            {actions ? (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {actions}
              </div>
            ) : null}
          </div>
          {aside ? <div className="relative">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
