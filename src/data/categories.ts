import { categoryImages, type AssetImage } from "@/data/assets";

export type CategoryId =
  | "solar-panels"
  | "lithium-batteries"
  | "solar-inverters"
  | "solar-streetlights"
  | "complete-systems"
  | "accessories";

export type CategoryIcon =
  | "panel"
  | "battery"
  | "inverter"
  | "streetlight"
  | "system"
  | "accessories";

export type Category = {
  id: CategoryId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  /** Optional photograph; when absent a branded icon tile is rendered. */
  image?: AssetImage;
  icon: CategoryIcon;
  buyFor: string[];
};

export const categories: Category[] = [
  {
    id: "solar-panels",
    name: "Solar Panels",
    shortName: "Panels",
    tagline: "Monocrystalline & bifacial modules",
    description:
      "PV modules in a range of power ratings for rooftop, ground-mount and off-grid installations. Panel choice depends on available roof or ground space, daily energy demand and how much of the load you want to cover.",
    image: categoryImages.panels,
    icon: "panel",
    buyFor: ["Rooftop systems", "Ground-mount arrays", "Off-grid sites"],
  },
  {
    id: "lithium-batteries",
    name: "Lithium Solar Batteries",
    shortName: "Batteries",
    tagline: "Energy storage for backup and night use",
    description:
      "Lithium battery storage in common nominal voltages. Battery capacity is matched to your essential load and to how long you need power to last during an outage.",
    image: categoryImages.cabinet,
    icon: "battery",
    buyFor: ["Load shedding backup", "Night-time supply", "Off-grid storage"],
  },
  {
    id: "solar-inverters",
    name: "Solar Inverters",
    shortName: "Inverters",
    tagline: "Hybrid, pure sine wave & off-grid",
    description:
      "Inverters that convert DC power from panels and batteries into usable AC power, with models that can switch between solar, battery and grid supply.",
    image: categoryImages.equipmentWhite,
    icon: "inverter",
    buyFor: ["Hybrid grid-tied backup", "Off-grid power", "Load management"],
  },
  {
    id: "solar-streetlights",
    name: "Solar Streetlights",
    shortName: "Streetlights",
    tagline: "All-in-one outdoor & compound lighting",
    description:
      "Standalone solar lighting for compounds, access roads, parking areas and security perimeters, sized by area coverage and required night-time hours.",
    icon: "streetlight",
    buyFor: ["Compound lighting", "Access roads", "Perimeter security"],
  },
  {
    id: "complete-systems",
    name: "Complete Solar Systems",
    shortName: "Systems",
    tagline: "Matched panel, battery and inverter packages",
    description:
      "Panel, battery and inverter combinations proposed together so the components are correctly matched to each other and to your load profile.",
    image: categoryImages.equipmentSet,
    icon: "system",
    buyFor: ["Home backup", "Shop & office supply", "Off-grid properties"],
  },
  {
    id: "accessories",
    name: "Accessories & Balance of System",
    shortName: "Accessories",
    tagline: "Mounting, cabling and protection",
    description:
      "Mounting structures, cables, connectors, changeover and protection components that complete an installation safely and tidily.",
    icon: "accessories",
    buyFor: ["Mounting & rails", "Cabling & connectors", "Protection & switching"],
  },
];

export const categoryMap: Record<CategoryId, Category> = categories.reduce(
  (acc, category) => {
    acc[category.id] = category;
    return acc;
  },
  {} as Record<CategoryId, Category>,
);

export function getCategory(id: CategoryId): Category {
  return categoryMap[id];
}

export function categoryName(id: CategoryId): string {
  return categoryMap[id]?.name ?? id;
}
