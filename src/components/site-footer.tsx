import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { TikTokIcon, WhatsAppIcon } from "@/components/brand-icons";
import { Logo } from "@/components/logo";
import { categories } from "@/data/categories";
import { nav, site } from "@/data/site";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/whatsapp";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-300">
      <div className="bg-grid-navy absolute inset-0 opacity-40" aria-hidden />
      <div className="container-page relative">
        <div className="grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-16">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">
              {site.shortDescription}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-eco-500/60 hover:bg-eco-600"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <a
                href={site.social.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Akamwesi Solar Energy on TikTok"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-solar-500/60 hover:bg-navy-800"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
              Product categories
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/categories/${category.id}`}
                    className="transition-colors hover:text-solar-400"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
              Company
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.primary
                .filter((item) => item.href !== "/")
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-solar-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              {nav.utility.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-solar-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-solar-400"
                  aria-hidden
                />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.location.mapSearchQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-solar-400"
                >
                  {site.location.street}
                  <br />
                  {site.location.landmark}
                  <br />
                  {site.location.city}, {site.location.country}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-solar-400"
                  aria-hidden
                />
                <a
                  href={site.contact.phoneHref}
                  className="transition-colors hover:text-solar-400"
                >
                  {site.contact.phoneDisplay}
                </a>
              </li>
              {site.contact.email ? (
                <li className="flex gap-3">
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-solar-400"
                    aria-hidden
                  />
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="transition-colors hover:text-solar-400"
                  >
                    {site.contact.email}
                  </a>
                </li>
              ) : null}
              {site.hours ? (
                <li className="flex gap-3">
                  <Clock
                    className="mt-0.5 h-4 w-4 shrink-0 text-solar-400"
                    aria-hidden
                  />
                  <span>
                    {site.hours.map((entry) => (
                      <span key={entry.days} className="block">
                        {entry.days}: {entry.time}
                      </span>
                    ))}
                  </span>
                </li>
              ) : (
                <li className="flex gap-3">
                  <Clock
                    className="mt-0.5 h-4 w-4 shrink-0 text-solar-400"
                    aria-hidden
                  />
                  <span>Opening hours: please confirm with the team.</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-4 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.legalName} ({site.brandName}). All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {nav.footerLegal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-solar-400"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-4 max-w-4xl text-[0.7rem] leading-relaxed text-navy-500">
            This website is a design demonstration. Catalogue entries and any
            prices shown are sample data for presentation purposes only and do
            not constitute a quotation or a confirmation of availability.
            Specifications, stock and current pricing must always be confirmed
            directly with {site.legalName}. Product names and categories are
            described by equipment type.
          </p>
        </div>
      </div>
    </footer>
  );
}
