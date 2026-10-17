import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FloatingWhatsApp } from "@/components/whatsapp";
import { JsonLd } from "@/components/ui/json-ld";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/metadata";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.fullName} — Solar equipment supply in Kampala, Uganda`,
    template: `%s | ${site.displayName}`,
  },
  description: site.shortDescription,
  applicationName: site.fullName,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Solar energy equipment",
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: siteUrl,
    siteName: site.fullName,
    title: `${site.fullName} — Solar equipment supply in Kampala, Uganda`,
    description: site.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} — Solar equipment supply in Kampala, Uganda`,
    description: site.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#060e1f" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={inter.variable}>
      <body className="flex min-h-dvh flex-col bg-white antialiased">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <CartProvider>
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <FloatingWhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}
