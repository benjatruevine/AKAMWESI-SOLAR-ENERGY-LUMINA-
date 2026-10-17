/**
 * Verified business information supplied for the Akamwesi Solar Energy (LUMINA)
 * demo build. Anything not confirmed by the client is intentionally omitted
 * rather than invented — see README "Information the client must confirm".
 */

export const site = {
  legalName: "Akamwesi Solar Energy",
  brandName: "Lumina",
  displayName: "Akamwesi Solar Energy",
  fullName: "Akamwesi Solar Energy (Lumina)",
  tagline: "Solar equipment supply in Kampala, Uganda",
  shortDescription:
    "Supplier of solar panels, lithium batteries, inverters and solar lighting for homes, businesses and projects across Uganda.",

  contact: {
    whatsappDisplay: "+256 700 267711",
    whatsappNumber: "256700267711",
    phoneDisplay: "+256 700 267711",
    phoneHref: "tel:+256700267711",
    // Email address was not supplied — intentionally left blank.
    email: null as string | null,
  },

  location: {
    street: "Gayaza Road, Kyebando",
    landmark: "Next to Akamwesi Mall",
    city: "Kampala",
    country: "Uganda",
    full: "Gayaza Road, next to Akamwesi Mall, Kampala, Uganda",
    // No verified GPS coordinates were supplied, so none are published.
    coordinates: null as { lat: number; lng: number } | null,
    mapSearchQuery: "Akamwesi Mall, Gayaza Road, Kampala, Uganda",
  },

  social: {
    tiktokHandle: "@akamwesisolarenergies",
    tiktokUrl: "https://www.tiktok.com/@akamwesisolarenergies",
    tiktokVideoUrl:
      "https://www.tiktok.com/@akamwesisolarenergies/video/7693127673509367047?is_from_webapp=1&sender_device=pc",
  },

  /**
   * Business hours were NOT confirmed by the client, so no hours are published.
   * Set `hours` once the client confirms them, and the footer/contact page will
   * render them automatically.
   */
  hours: null as { days: string; time: string }[] | null,

  /**
   * Deployment URL. Used for canonical URLs, sitemap and Open Graph metadata.
   * Override with NEXT_PUBLIC_SITE_URL at build time.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://akamwesisolarenergy.example",

  /**
   * HERO VIDEO
   * ----------
   * The client supplied a TikTok *page* URL, which is not a direct video file
   * and must not be placed in a native <video> source. When the client supplies
   * an authorised MP4, set NEXT_PUBLIC_HERO_VIDEO_URL and the hero will play it
   * as a muted, looping background video. Until then the hero uses a cinematic
   * still from /public/assets with a dark overlay, plus a link to the TikTok
   * video. See README for details.
   */
  heroVideo: {
    mp4Url: process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() || null,
    tiktokUrl:
      "https://www.tiktok.com/@akamwesisolarenergies/video/7693127673509367047?is_from_webapp=1&sender_device=pc",
  },
} as const;

export const nav = {
  primary: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products", hasMenu: true },
    { label: "Solutions", href: "/solutions" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  utility: [
    { label: "Request a Quote", href: "/request-quote" },
    { label: "FAQs", href: "/faq" },
  ],
  footerLegal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;
