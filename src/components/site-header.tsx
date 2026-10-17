"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  X,
} from "lucide-react";
import { CategoryIconGlyph } from "@/components/category-icon";
import { CartButton } from "@/components/cart";
import { Logo } from "@/components/logo";
import { TikTokIcon, WhatsAppIcon } from "@/components/brand-icons";
import { categories } from "@/data/categories";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40">
      {/* Utility bar */}
      <div className="hidden bg-navy-950 text-navy-200 lg:block">
        <div className="container-page flex h-10 items-center justify-between text-xs">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.location.mapSearchQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <MapPin className="h-3.5 w-3.5 text-solar-400" aria-hidden />
            {site.location.street}, {site.location.landmark}, {site.location.city}
          </a>
          <div className="flex items-center gap-5">
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-solar-400" aria-hidden />
              {site.contact.phoneDisplay}
            </a>
            <a
              href={site.social.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <TikTokIcon className="h-3.5 w-3.5 text-solar-400" />
              {site.social.tiktokHandle}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-navy-100 bg-white/90 backdrop-blur-md">
        <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-18">
          <Logo />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {nav.primary.map((item) =>
              item.href === "/products" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    setMegaOpen(true);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    aria-expanded={megaOpen}
                    aria-controls="products-mega-menu"
                    onClick={() => setMegaOpen((open) => !open)}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                      isActive(item.href)
                        ? "bg-navy-50 text-navy-900"
                        : "text-navy-600 hover:bg-navy-50 hover:text-navy-900",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        megaOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                    isActive(item.href)
                      ? "bg-navy-50 text-navy-900"
                      : "text-navy-600 hover:bg-navy-50 hover:text-navy-900",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <form
              action="/products"
              method="get"
              role="search"
              className="hidden items-center xl:flex"
            >
              <label htmlFor="header-search" className="sr-only">
                Search products
              </label>
              <div className="relative">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-navy-400"
                  aria-hidden
                />
                <input
                  id="header-search"
                  name="q"
                  type="search"
                  placeholder="Search products"
                  autoComplete="off"
                  className="h-11 w-52 rounded-full border border-navy-100 bg-navy-50/60 pr-3 pl-9 text-sm text-navy-800 placeholder:text-navy-400 focus:border-solar-500 focus:bg-white focus:outline-none"
                />
              </div>
            </form>

            <CartButton />

            <Link
              href="/request-quote"
              className="hidden h-11 items-center gap-2 rounded-full bg-solar-500 px-5 text-sm font-semibold text-navy-950 shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-solar-400 md:inline-flex"
            >
              Request a Quote
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-100 bg-white text-navy-700 transition-colors hover:bg-navy-50 lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        {/* Mega menu */}
        <div
          id="products-mega-menu"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          className={cn(
            "absolute inset-x-0 top-full hidden origin-top border-b border-navy-100 bg-white shadow-lift transition-all duration-200 lg:block",
            megaOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0",
          )}
        >
          <div className="container-page grid gap-8 py-8 lg:grid-cols-[2fr_1fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-solar-600 uppercase">
                Shop by category
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/categories/${category.id}`}
                    className="group flex gap-3 rounded-2xl border border-transparent p-3 transition-colors hover:border-navy-100 hover:bg-navy-50"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-solar-50 text-solar-600">
                      <CategoryIconGlyph
                        icon={category.icon}
                        className="h-5 w-5"
                      />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-navy-900">
                        {category.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-navy-500">
                        {category.tagline}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-navy-950 p-6 text-white">
              <p className="text-xs font-semibold tracking-[0.18em] text-solar-400 uppercase">
                Not sure what you need?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-200">
                Share the appliances you want to run and the team will help you
                work towards a suitable panel, battery and inverter combination.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-solar-400 hover:text-solar-300"
                >
                  View full catalogue
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-solar-400 hover:text-solar-300"
                >
                  See solutions by need
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={cn(
            "absolute inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={cn(
            "absolute top-0 right-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-lift transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
            <Logo compact />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-100 text-navy-600 hover:bg-navy-50"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div className="scrollbar-thin flex-1 overflow-y-auto px-5 py-5">
            <form action="/products" method="get" role="search" className="mb-5">
              <label htmlFor="mobile-search" className="sr-only">
                Search products
              </label>
              <div className="relative">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-navy-400"
                  aria-hidden
                />
                <input
                  id="mobile-search"
                  name="q"
                  type="search"
                  placeholder="Search products"
                  autoComplete="off"
                  className="h-11 w-full rounded-full border border-navy-100 bg-navy-50/60 pr-3 pl-9 text-sm text-navy-800 placeholder:text-navy-400 focus:border-solar-500 focus:bg-white focus:outline-none"
                />
              </div>
            </form>

            <nav aria-label="Mobile" className="space-y-1">
              {nav.primary.map((item) =>
                item.href === "/products" ? (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() => setMobileProductsOpen((open) => !open)}
                      aria-expanded={mobileProductsOpen}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-navy-800 hover:bg-navy-50"
                    >
                      Products
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-navy-400 transition-transform",
                          mobileProductsOpen && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>
                    {mobileProductsOpen ? (
                      <div className="mt-1 mb-2 space-y-1 pl-2">
                        <Link
                          href="/products"
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-navy-700 hover:bg-navy-50"
                        >
                          All products
                        </Link>
                        {categories.map((category) => (
                          <Link
                            key={category.id}
                            href={`/categories/${category.id}`}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-navy-700 hover:bg-navy-50"
                          >
                            <span className="grid h-8 w-8 place-items-center rounded-lg bg-solar-50 text-solar-600">
                              <CategoryIconGlyph
                                icon={category.icon}
                                className="h-4 w-4"
                              />
                            </span>
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-xl px-3 py-3 text-sm font-semibold transition-colors",
                      isActive(item.href)
                        ? "bg-navy-50 text-navy-900"
                        : "text-navy-800 hover:bg-navy-50",
                    )}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              {nav.utility.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center rounded-xl px-3 py-3 text-sm font-semibold text-navy-800 hover:bg-navy-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 space-y-2 border-t border-navy-100 pt-5">
              <a
                href={site.contact.phoneHref}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-navy-700 hover:bg-navy-50"
              >
                <Phone className="h-4 w-4 text-solar-600" aria-hidden />
                {site.contact.phoneDisplay}
              </a>
              <a
                href={site.social.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-navy-700 hover:bg-navy-50"
              >
                <TikTokIcon className="h-4 w-4 text-solar-600" />
                TikTok
              </a>
              {site.contact.email ? (
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-navy-700 hover:bg-navy-50"
                >
                  <Mail className="h-4 w-4 text-solar-600" aria-hidden />
                  {site.contact.email}
                </a>
              ) : null}
            </div>
          </div>

          <div className="border-t border-navy-100 px-5 py-4">
            <a
              href="https://wa.me/256700267711"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-eco-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-eco-500"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
