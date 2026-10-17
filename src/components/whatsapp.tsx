import { WhatsAppIcon } from "@/components/brand-icons";
import { cn } from "@/lib/utils";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  whatsappLink,
} from "@/lib/whatsapp";

/**
 * Contextual WhatsApp link. The message is URL-encoded and always reviewed by
 * the customer inside WhatsApp — this website never sends anything by itself.
 */
export function WhatsAppAction({
  message = DEFAULT_WHATSAPP_MESSAGE,
  children,
  className,
  size = "md",
  variant = "solid",
  label,
}: {
  message?: string;
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "white" | "plain";
  label?: string;
}) {
  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-7 text-base",
  } as const;

  const variants = {
    solid: "bg-eco-600 text-white shadow-card hover:bg-eco-500",
    outline:
      "border border-eco-600/30 bg-white text-eco-700 hover:border-eco-600/60 hover:bg-eco-50",
    white: "bg-white text-navy-900 shadow-card hover:bg-navy-50",
    plain: "text-eco-700 hover:bg-eco-50",
  } as const;

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ?? "Chat with Akamwesi Solar Energy on WhatsApp"}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eco-600",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      <WhatsAppIcon className="h-4 w-4 shrink-0" />
      <span>{children ?? "Chat on WhatsApp"}</span>
    </a>
  );
}

/**
 * Floating WhatsApp button, available on customer-facing pages.
 * Positioned clear of content and the mobile safe area.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Akamwesi Solar Energy on WhatsApp"
      className="group fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-eco-600 py-3 pr-4 pl-3 text-sm font-semibold text-white shadow-[0_18px_40px_-12px_rgba(5,150,105,0.7)] transition-transform duration-200 hover:scale-105 hover:bg-eco-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6 sm:bottom-6"
    >
      <span className="relative grid h-7 w-7 place-items-center">
        <span
          className="absolute inset-0 animate-ping rounded-full bg-white/30"
          aria-hidden
        />
        <WhatsAppIcon className="relative h-6 w-6" />
      </span>
      <span className="hidden sm:inline">WhatsApp us</span>
      <span className="sr-only sm:hidden">WhatsApp us</span>
    </a>
  );
}
