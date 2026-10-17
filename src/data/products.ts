import {
  categoryImages,
  siteImages,
  type AssetImage,
} from "@/data/assets";
import type { CategoryIcon, CategoryId } from "@/data/categories";

/**
 * DEMO CATALOGUE DATA
 * -------------------
 * These entries are illustrative sample listings created for this website demo.
 * They are deliberately written so that no unverified claim is presented as
 * fact:
 *
 *  - Product names describe the *type* of equipment, not a specific stock item.
 *  - Power figures are written as broad "class" ranges.
 *  - Prices are clearly marked as indicative sample figures.
 *  - Nothing here confirms availability, warranty, certification or delivery.
 *
 * The data is fully separated from presentation so the client can later replace
 * it with a database or ecommerce backend without touching any component.
 */

export const PRODUCT_DEMO_NOTE =
  "Demo catalogue entry. Specifications, availability and final pricing must be confirmed with Akamwesi Solar Energy.";

export const PRODUCT_PRICE_NOTE =
  "Prices shown are indicative sample figures for this demo only and are not a quotation.";

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  summary: string;
  highlights: string[];
  image?: AssetImage;
  icon: CategoryIcon;
  priceUGX: number | null;
  priceIsIndicative: boolean;
  tags: string[];
  featured: boolean;
  demo: true;
};

export const products: Product[] = [
  {
    slug: "monocrystalline-solar-panel-450-550w",
    name: "Monocrystalline Solar Panel — 450–550 W class",
    category: "solar-panels",
    summary:
      "High-efficiency monocrystalline module for rooftop and ground-mount arrays, sized for residential and small commercial loads.",
    highlights: [
      "Monocrystalline (single-crystal) cell technology",
      "Typical power class: 450 W – 550 W per module",
      "Framed module suitable for rooftop or ground mounting",
    ],
    image: categoryImages.panels,
    icon: "panel",
    priceUGX: 480000,
    priceIsIndicative: true,
    tags: ["Monocrystalline", "Rooftop", "Residential"],
    featured: true,
    demo: true,
  },
  {
    slug: "bifacial-solar-panel-500w-plus",
    name: "Bifacial Solar Panel — 500 W+ class",
    category: "solar-panels",
    summary:
      "Double-sided module that can capture reflected light on its rear face, useful where there is a bright surface beneath the array.",
    highlights: [
      "Bifacial design captures front and rear irradiance",
      "Best suited to elevated or reflective ground surfaces",
      "Typical power class: 500 W and above",
    ],
    image: categoryImages.panelsArray,
    icon: "panel",
    priceUGX: 620000,
    priceIsIndicative: true,
    tags: ["Bifacial", "Ground-mount", "Commercial"],
    featured: true,
    demo: true,
  },
  {
    slug: "portable-solar-panel-kit-200w",
    name: "Portable Solar Panel Kit — 200 W class",
    category: "solar-panels",
    summary:
      "Compact, movable panel kit for small backup setups, site offices, caravans or temporary power needs.",
    highlights: [
      "Lightweight and repositionable",
      "Suited to small backup and temporary supply",
      "Typical combined power class: around 200 W",
    ],
    image: categoryImages.panelsOverhead,
    icon: "panel",
    priceUGX: null,
    priceIsIndicative: false,
    tags: ["Portable", "Small backup"],
    featured: false,
    demo: true,
  },

  {
    slug: "lithium-battery-module-24v",
    name: "Lithium Battery Module — 24 V class",
    category: "lithium-batteries",
    summary:
      "Lithium storage module for smaller backup systems, commonly paired with an off-grid or hybrid inverter in the 1–3 kVA range.",
    highlights: [
      "Nominal voltage class: 24 V",
      "Deep-cycle lithium chemistry",
      "Suitable for small home and shop backup",
    ],
    image: categoryImages.equipmentWhite,
    icon: "battery",
    priceUGX: 1750000,
    priceIsIndicative: true,
    tags: ["Lithium", "24 V", "Backup"],
    featured: true,
    demo: true,
  },
  {
    slug: "lithium-battery-module-48v",
    name: "Lithium Battery Module — 48 V class",
    category: "lithium-batteries",
    summary:
      "Higher-voltage lithium module for larger household and small business systems with a greater daily energy requirement.",
    highlights: [
      "Nominal voltage class: 48 V",
      "Expandable in a battery bank configuration",
      "Matched to 3–5 kVA+ hybrid inverters",
    ],
    image: categoryImages.equipmentWhiteAlt,
    icon: "battery",
    priceUGX: 3450000,
    priceIsIndicative: true,
    tags: ["Lithium", "48 V", "Expandable"],
    featured: true,
    demo: true,
  },
  {
    slug: "rack-mounted-lithium-battery-bank",
    name: "Rack-Mounted Lithium Battery Bank — 48 V",
    category: "lithium-batteries",
    summary:
      "Rack-style battery bank for installations that need a tidier, scalable storage arrangement with room to grow.",
    highlights: [
      "Rack format for organised, expandable storage",
      "Suits commercial and larger residential systems",
      "Configuration confirmed against your load profile",
    ],
    image: categoryImages.cabinet,
    icon: "battery",
    priceUGX: null,
    priceIsIndicative: false,
    tags: ["Rack", "Commercial", "Scalable"],
    featured: false,
    demo: true,
  },

  {
    slug: "hybrid-solar-inverter-3-5kva",
    name: "Hybrid Solar Inverter — 3–5 kVA class",
    category: "solar-inverters",
    summary:
      "Hybrid pure sine wave inverter that manages solar, battery and utility supply in one unit for typical household loads.",
    highlights: [
      "Pure sine wave AC output",
      "Automatic switching between solar, battery and grid",
      "Typical capacity class: 3 kVA – 5 kVA",
    ],
    image: categoryImages.device,
    icon: "inverter",
    priceUGX: 2150000,
    priceIsIndicative: true,
    tags: ["Hybrid", "Pure sine wave", "Residential"],
    featured: true,
    demo: true,
  },
  {
    slug: "hybrid-solar-inverter-8-10kva",
    name: "Hybrid Solar Inverter — 8–10 kVA class",
    category: "solar-inverters",
    summary:
      "Larger hybrid inverter for shops, offices and larger homes running several appliances and lighting circuits at once.",
    highlights: [
      "Supports higher continuous and surge loads",
      "Solar, battery and utility inputs",
      "Typical capacity class: 8 kVA – 10 kVA",
    ],
    image: categoryImages.equipmentSet,
    icon: "inverter",
    priceUGX: null,
    priceIsIndicative: false,
    tags: ["Hybrid", "Commercial", "High capacity"],
    featured: false,
    demo: true,
  },
  {
    slug: "off-grid-pure-sine-wave-inverter",
    name: "Off-Grid Pure Sine Wave Inverter — 1–2 kVA class",
    category: "solar-inverters",
    summary:
      "Compact off-grid inverter for lighting, electronics and small appliances where there is no utility supply at all.",
    highlights: [
      "Designed for sites without grid power",
      "Pure sine wave output for sensitive electronics",
      "Typical capacity class: 1 kVA – 2 kVA",
    ],
    image: categoryImages.deviceHeld,
    icon: "inverter",
    priceUGX: null,
    priceIsIndicative: false,
    tags: ["Off-grid", "Compact"],
    featured: false,
    demo: true,
  },

  {
    slug: "all-in-one-solar-streetlight-60-100w",
    name: "All-in-One Solar Streetlight — 60–100 W class",
    category: "solar-streetlights",
    summary:
      "Self-contained streetlight with integrated panel, battery and lamp, for compound roads and access ways.",
    highlights: [
      "All-in-one format with no separate wiring run",
      "Motion-sensing and dusk-to-dawn modes are common options",
      "Coverage and pole height to be confirmed on site",
    ],
    icon: "streetlight",
    priceUGX: 850000,
    priceIsIndicative: true,
    tags: ["Streetlight", "All-in-one", "Outdoor"],
    featured: true,
    demo: true,
  },
  {
    slug: "solar-compound-light-100-200w",
    name: "Solar Compound Light — 100–200 W class",
    category: "solar-streetlights",
    summary:
      "Higher-output solar light for yards, parking areas and larger compounds where a wider spread of light is needed.",
    highlights: [
      "Higher output for larger outdoor areas",
      "Pole or wall mounting options",
      "Runtime depends on battery capacity and weather",
    ],
    icon: "streetlight",
    priceUGX: null,
    priceIsIndicative: false,
    tags: ["Compound", "Parking", "Outdoor"],
    featured: false,
    demo: true,
  },
  {
    slug: "solar-security-flood-light",
    name: "Solar Security Flood Light",
    category: "solar-streetlights",
    summary:
      "Panel-and-battery flood light for gateways, walls and security points where a bright, localised light is required.",
    highlights: [
      "Localised lighting for gates and walls",
      "Motion activation is a common configuration",
      "Remote panel placement to catch daylight",
    ],
    image: categoryImages.darkInstall,
    icon: "streetlight",
    priceUGX: null,
    priceIsIndicative: false,
    tags: ["Security", "Flood light"],
    featured: false,
    demo: true,
  },

  {
    slug: "home-solar-backup-system-3kva",
    name: "Home Solar Backup System — 3 kVA starter",
    category: "complete-systems",
    summary:
      "A starter home package combining panels, a lithium battery and a hybrid inverter for essential lighting and electronics.",
    highlights: [
      "Panel, battery and inverter proposed together",
      "Aimed at essential loads during an outage",
      "Final sizing depends on your appliance list",
    ],
    image: siteImages.rooftop,
    icon: "system",
    priceUGX: 7500000,
    priceIsIndicative: true,
    tags: ["Home", "Starter", "Backup"],
    featured: true,
    demo: true,
  },
  {
    slug: "home-solar-backup-system-5kva",
    name: "Home Solar Backup System — 5 kVA family",
    category: "complete-systems",
    summary:
      "Larger household package for running lighting, refrigeration, entertainment and a water pump alongside one another.",
    highlights: [
      "Supports a broader household load list",
      "Matched panel array and battery storage",
      "Sizing confirmed after a load review",
    ],
    image: siteImages.crewInstall,
    icon: "system",
    priceUGX: 14500000,
    priceIsIndicative: true,
    tags: ["Home", "Family", "Backup"],
    featured: true,
    demo: true,
  },
  {
    slug: "shop-office-solar-system",
    name: "Shop & Office Solar System — 5–8 kVA class",
    category: "complete-systems",
    summary:
      "Package for small businesses that need lighting, tills, computers and networking to stay on through an outage.",
    highlights: [
      "Designed around business operating hours",
      "Keeps essential business equipment running",
      "Load and runtime confirmed before specifying",
    ],
    image: siteImages.outdoorSite,
    icon: "system",
    priceUGX: null,
    priceIsIndicative: false,
    tags: ["Business", "Shop", "Office"],
    featured: false,
    demo: true,
  },
  {
    slug: "commercial-solar-system-10kva-plus",
    name: "Commercial Solar System — 10 kVA+ class",
    category: "complete-systems",
    summary:
      "Larger multi-inverter arrangements for commercial and institutional premises, scoped after a site and load assessment.",
    highlights: [
      "Scalable multi-inverter and battery arrangements",
      "Requires a site and load assessment",
      "Quotation is prepared project by project",
    ],
    image: categoryImages.fieldArray,
    icon: "system",
    priceUGX: null,
    priceIsIndicative: false,
    tags: ["Commercial", "Institutional", "Project"],
    featured: false,
    demo: true,
  },

  {
    slug: "solar-mounting-rail-set",
    name: "Solar Mounting Rail & Bracket Set",
    category: "accessories",
    summary:
      "Mounting rails, brackets and clamps used to fix modules safely to roof or ground structures.",
    highlights: [
      "Rails, brackets and module clamps",
      "Roof and ground configurations",
      "Correct sizing depends on array layout",
    ],
    icon: "accessories",
    priceUGX: 260000,
    priceIsIndicative: true,
    tags: ["Mounting", "Hardware"],
    featured: false,
    demo: true,
  },
  {
    slug: "pv-cable-and-connector-kit",
    name: "PV Cable & Connector Kit",
    category: "accessories",
    summary:
      "Solar-rated DC cable and connectors to run the array to the inverter safely and tidily.",
    highlights: [
      "Solar-rated DC cabling",
      "Panel and inverter connectors",
      "Lengths confirmed against cable runs",
    ],
    icon: "accessories",
    priceUGX: null,
    priceIsIndicative: false,
    tags: ["Cabling", "Connectors"],
    featured: false,
    demo: true,
  },
  {
    slug: "solar-changeover-and-protection-kit",
    name: "Solar Changeover & Protection Kit",
    category: "accessories",
    summary:
      "Changeover, isolation and protection components that let a solar supply be used alongside or instead of the utility supply.",
    highlights: [
      "Supply changeover components",
      "Isolation and protection devices",
      "Configuration confirmed by a qualified installer",
    ],
    icon: "accessories",
    priceUGX: null,
    priceIsIndicative: false,
    tags: ["Protection", "Changeover", "BOS"],
    featured: false,
    demo: true,
  },
];

export const productMap: Record<string, Product> = products.reduce(
  (acc, product) => {
    acc[product.slug] = product;
    return acc;
  },
  {} as Record<string, Product>,
);

export function getProduct(slug: string): Product | undefined {
  return productMap[slug];
}

export function productsByCategory(category: CategoryId): Product[] {
  return products.filter((product) => product.category === category);
}

export function featuredProducts(): Product[] {
  return products.filter((product) => product.featured);
}

/** Related products: same category first, then other featured items. */
export function relatedProducts(product: Product, limit = 3): Product[] {
  const sameCategory = products.filter(
    (item) => item.category === product.category && item.slug !== product.slug,
  );
  const others = products.filter(
    (item) => item.category !== product.category && item.featured,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export const productCountByCategory = products.reduce(
  (acc, product) => {
    acc[product.category] = (acc[product.category] ?? 0) + 1;
    return acc;
  },
  {} as Partial<Record<CategoryId, number>>,
);
