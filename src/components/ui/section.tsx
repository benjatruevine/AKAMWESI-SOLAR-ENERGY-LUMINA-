import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "light",
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "muted" | "navy" | "none";
  as?: "section" | "div" | "article";
}) {
  const tones = {
    light: "bg-white text-navy-900",
    muted: "bg-navy-50 text-navy-900",
    navy: "bg-navy-950 text-white",
    none: "",
  } as const;

  return (
    <Tag
      id={id}
      className={cn("relative py-16 sm:py-20 lg:py-24", tones[tone], className)}
    >
      <div className="container-page">{children}</div>
    </Tag>
  );
}

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase",
        tone === "light" ? "text-solar-600" : "text-solar-400",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-6",
          tone === "light" ? "bg-solar-500" : "bg-solar-400",
        )}
        aria-hidden
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow
          tone={tone}
          className={cn(align === "center" && "justify-center")}
        >
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-3xl font-bold sm:text-4xl",
          tone === "light" ? "text-navy-900" : "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-navy-600" : "text-navy-200",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}

export function DemoNote({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={cn(
        "flex items-start gap-2 rounded-2xl border px-4 py-3 text-xs leading-relaxed",
        tone === "light"
          ? "border-solar-200 bg-solar-50 text-navy-700"
          : "border-white/15 bg-white/5 text-navy-200",
        className,
      )}
    >
      <span
        className="mt-0.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-solar-500"
        aria-hidden
      />
      <span>{children}</span>
    </p>
  );
}
