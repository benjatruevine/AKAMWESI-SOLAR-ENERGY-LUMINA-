import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "whatsapp"
  | "white"
  | "whiteOutline";

export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solar-500 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-solar-500 text-navy-950 shadow-glow hover:bg-solar-400 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-navy-900 text-white shadow-card hover:bg-navy-800 hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-navy-200 bg-white text-navy-800 hover:border-navy-300 hover:bg-navy-50",
  ghost: "text-navy-700 hover:bg-navy-50",
  whatsapp:
    "bg-eco-600 text-white shadow-card hover:bg-eco-500 hover:-translate-y-0.5 active:translate-y-0",
  white: "bg-white text-navy-900 shadow-card hover:bg-navy-50",
  whiteOutline:
    "border border-white/35 bg-white/10 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/20",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:text-[0.95rem]",
  lg: "h-12 px-7 text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}): string {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClasses({ variant, size, className })} {...props} />
  );
}

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  prefetch?: boolean;
};

/** Internal navigation styled as a button. */
export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  prefetch,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={buttonClasses({ variant, size, className })}
    >
      {children}
    </Link>
  );
}

type ButtonAnchorProps = ComponentPropsWithoutRef<"a"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

/** External link styled as a button (WhatsApp, TikTok, maps). */
export function ButtonAnchor({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonAnchorProps) {
  return (
    <a className={buttonClasses({ variant, size, className })} {...props}>
      {children}
    </a>
  );
}
