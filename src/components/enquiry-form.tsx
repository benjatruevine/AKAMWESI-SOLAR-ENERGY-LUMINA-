"use client";

import { useState } from "react";
import { ArrowRight, CircleCheck, Send, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand-icons";
import { categories } from "@/data/categories";
import { audienceTypes } from "@/data/content";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { quotationMessage, whatsappLink } from "@/lib/whatsapp";

type Variant = "quote" | "contact";

const interestOptions = [
  ...categories.map((category) => category.name),
  "A complete system (panels + battery + inverter)",
  "Not sure yet — please advise",
];

const contactMethodOptions = [
  "WhatsApp",
  "Phone call",
  ...(site.contact.email ? ["Email"] : []),
];

/**
 * Enquiry form.
 *
 * There is no website backend in this demo, so the form does not store or send
 * anything by itself. It composes a clear message and hands it to WhatsApp for
 * the customer to review and send — nothing leaves the browser otherwise.
 */
export function EnquiryForm({
  variant = "quote",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const [name, setName] = useState("");
  const [customerType, setCustomerType] = useState(audienceTypes[0] as string);
  const [interest, setInterest] = useState(interestOptions[0] as string);
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [contactMethod, setContactMethod] = useState(
    contactMethodOptions[0] as string,
  );
  const [requirements, setRequirements] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sentLink, setSentLink] = useState<string | null>(null);

  const isQuote = variant === "quote";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim()) {
      setError("Please add your name so the team knows who they are replying to.");
      return;
    }
    if (!requirements.trim()) {
      setError(
        isQuote
          ? "Please describe what you would like to power."
          : "Please add a short message.",
      );
      return;
    }

    setError(null);

    const message = isQuote
      ? quotationMessage({
          name,
          customerType,
          interest,
          location,
          budget,
          contactMethod,
          requirements,
        })
      : [
          "Hello Akamwesi Solar Energy, I have an enquiry from your website.",
          `Name: ${name.trim()}`,
          location.trim() ? `Location: ${location.trim()}` : "",
          `Preferred contact: ${contactMethod}`,
          `Message: ${requirements.trim()}`,
        ]
          .filter(Boolean)
          .join("\n");

    const link = whatsappLink(message);
    setSentLink(link);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const inputClasses =
    "h-12 w-full rounded-2xl border border-navy-200 bg-white px-4 text-sm text-navy-900 placeholder:text-navy-400 focus:border-solar-500 focus:outline-none";
  const labelClasses = "mb-2 block text-sm font-semibold text-navy-800";

  if (sentLink) {
    return (
      <div
        className={cn(
          "rounded-3xl border border-eco-200 bg-eco-50 p-6 sm:p-8",
          className,
        )}
      >
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-eco-600 text-white">
          <CircleCheck className="h-6 w-6" aria-hidden />
        </span>
        <h3 className="mt-4 text-xl font-bold text-navy-900">
          Your message is ready in WhatsApp
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-600">
          WhatsApp should have opened in a new tab with your message written
          out. Review it and press send — your enquiry is only delivered once
          you send it.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={sentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-eco-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-eco-500"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Reopen WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setSentLink(null);
              setRequirements("");
            }}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-navy-200 bg-white px-6 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-50"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn(
        "rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8",
        className,
      )}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="enquiry-name" className={labelClasses}>
            Your name
          </label>
          <input
            id="enquiry-name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="e.g. Sarah N."
            autoComplete="name"
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="enquiry-location" className={labelClasses}>
            Location / area{" "}
            <span className="font-normal text-navy-400">(optional)</span>
          </label>
          <input
            id="enquiry-location"
            name="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="e.g. Nansana, Wakiso"
            autoComplete="address-level2"
            className={inputClasses}
          />
        </div>

        {isQuote ? (
          <>
            <div>
              <label htmlFor="enquiry-type" className={labelClasses}>
                I am enquiring as
              </label>
              <select
                id="enquiry-type"
                name="customerType"
                value={customerType}
                onChange={(event) => setCustomerType(event.target.value)}
                className={inputClasses}
              >
                {audienceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="enquiry-interest" className={labelClasses}>
                I am interested in
              </label>
              <select
                id="enquiry-interest"
                name="interest"
                value={interest}
                onChange={(event) => setInterest(event.target.value)}
                className={inputClasses}
              >
                {interestOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="enquiry-budget" className={labelClasses}>
                Indicative budget{" "}
                <span className="font-normal text-navy-400">(optional)</span>
              </label>
              <input
                id="enquiry-budget"
                name="budget"
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
                placeholder="e.g. UGX 3–5m, or leave blank"
                className={inputClasses}
              />
            </div>
          </>
        ) : null}

        <div className={isQuote ? "sm:col-span-2" : "sm:col-span-2"}>
          <fieldset>
            <legend className={labelClasses}>Preferred contact method</legend>
            <div className="flex flex-wrap gap-2">
              {contactMethodOptions.map((option) => (
                <label
                  key={option}
                  className={cn(
                    "inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    contactMethod === option
                      ? "border-navy-900 bg-navy-900 text-white"
                      : "border-navy-200 bg-white text-navy-700 hover:bg-navy-50",
                  )}
                >
                  <input
                    type="radio"
                    name="contactMethod"
                    value={option}
                    checked={contactMethod === option}
                    onChange={() => setContactMethod(option)}
                    className="sr-only"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="enquiry-requirements" className={labelClasses}>
            {isQuote
              ? "What would you like to power?"
              : "How can we help?"}
          </label>
          <textarea
            id="enquiry-requirements"
            name="requirements"
            value={requirements}
            onChange={(event) => setRequirements(event.target.value)}
            rows={5}
            placeholder={
              isQuote
                ? "List the appliances or equipment you want to run (e.g. 6 lights, fridge, TV, Wi-Fi, 2 fans), and roughly how long you need power to last during an outage."
                : "Tell us what you need and the best time to reach you."
            }
            className="w-full rounded-2xl border border-navy-200 bg-white px-4 py-3 text-sm leading-relaxed text-navy-900 placeholder:text-navy-400 focus:border-solar-500 focus:outline-none"
          />
          <p className="mt-2 text-xs text-navy-500">
            An appliance list and your required backup time are the most useful
            details you can give.
          </p>
        </div>
      </div>

      {error ? (
        <p
          role="alert"
          className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-eco-600 px-6 text-sm font-semibold text-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-eco-500"
        >
          <Send className="h-4 w-4" aria-hidden />
          {isQuote ? "Send enquiry on WhatsApp" : "Send message on WhatsApp"}
        </button>
        <a
          href={site.contact.phoneHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-navy-200 bg-white px-6 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50"
        >
          Or call {site.contact.phoneDisplay}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      </div>

      <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-navy-500">
        <ShieldCheck
          className="mt-0.5 h-4 w-4 shrink-0 text-eco-600"
          aria-hidden
        />
        This demo form does not store your details or send anything by itself.
        It simply prepares a WhatsApp message for you to review and send from
        your own phone.
      </p>
    </form>
  );
}
