import { site } from "@/data/site";

/** Verified WhatsApp number, digits only, as required by wa.me links. */
export const WHATSAPP_NUMBER = site.contact.whatsappNumber;

/**
 * Build a wa.me link with a safely URL-encoded message.
 * The customer always reviews and sends the message inside WhatsApp —
 * nothing is ever sent automatically by this website.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Akamwesi Solar Energy, I saw your website and I am interested in your solar systems. Please share more information.";

export function productEnquiryMessage(productName: string): string {
  return `Hello Akamwesi Solar Energy, I would like to enquire about ${productName}. Please share the current price, availability and specifications.`;
}

export function categoryEnquiryMessage(categoryName: string): string {
  return `Hello Akamwesi Solar Energy, I would like to enquire about your ${categoryName} range. Please share the options, current prices and availability.`;
}

export type QuoteSummary = {
  name?: string;
  customerType?: string;
  interest?: string;
  location?: string;
  budget?: string;
  requirements?: string;
  contactMethod?: string;
};

/**
 * Turn a quotation request into a readable WhatsApp handoff message.
 * Empty fields are skipped so the message stays concise.
 */
export function quotationMessage(input: QuoteSummary): string {
  const lines: string[] = [
    "Hello Akamwesi Solar Energy, I would like to request a quotation.",
  ];

  const add = (label: string, value?: string) => {
    const trimmed = value?.trim();
    if (trimmed) lines.push(`${label}: ${trimmed}`);
  };

  add("Name", input.name);
  add("Customer type", input.customerType);
  add("Interested in", input.interest);
  add("Location", input.location);
  add("Estimated budget", input.budget);
  add("Preferred contact", input.contactMethod);
  add("Requirements", input.requirements);

  lines.push("Please advise on suitable equipment and next steps.");
  return lines.join("\n");
}
