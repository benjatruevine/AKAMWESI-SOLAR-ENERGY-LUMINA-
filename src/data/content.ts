import type { CategoryId, CategoryIcon } from "@/data/categories";

export type Solution = {
  id: string;
  title: string;
  audience: string;
  need: string;
  approach: string;
  points: string[];
  icon: CategoryIcon;
  imageKey?: "crewInstall" | "rooftop" | "outdoorSite" | "panelsArray";
  relatedCategory: CategoryId;
};

export const solutions: Solution[] = [
  {
    id: "home-solar-and-backup-power",
    title: "Home solar and backup power",
    audience: "Households",
    need: "Keep lighting, refrigeration, phones, Wi-Fi and entertainment running when the utility supply goes off, and reduce reliance on the grid over time.",
    approach:
      "We work from your appliance list to propose a panel array, battery capacity and inverter size that suits your household rather than a one-size-fits-all package.",
    points: [
      "Lighting, sockets and small appliances",
      "Refrigeration and water pumping",
      "Expandable storage for future needs",
    ],
    icon: "system",
    imageKey: "rooftop",
    relatedCategory: "complete-systems",
  },
  {
    id: "shops-offices-and-smes",
    title: "Shops, offices and SMEs",
    audience: "Small businesses",
    need: "Stay open and productive through outages so that tills, computers, networking and lighting keep working and trading is not interrupted.",
    approach:
      "Systems are scoped around your operating hours and the equipment you cannot afford to lose, with the option to prioritise essential circuits.",
    points: [
      "Point-of-sale, computers and networking",
      "Shop and office lighting",
      "Priority circuits for critical equipment",
    ],
    icon: "inverter",
    imageKey: "outdoorSite",
    relatedCategory: "solar-inverters",
  },
  {
    id: "commercial-and-industrial-power",
    title: "Commercial and industrial power",
    audience: "Larger premises",
    need: "Manage large or continuous loads across a site, where the system has to be planned around real consumption rather than a simple appliance count.",
    approach:
      "These projects start with a site and load assessment, then scale through multiple inverters, larger battery banks and a correspondingly larger array.",
    points: [
      "Multi-inverter scalable arrangements",
      "Larger storage capacity",
      "Project-by-project quotation",
    ],
    icon: "battery",
    imageKey: "panelsArray",
    relatedCategory: "complete-systems",
  },
  {
    id: "outdoor-compound-and-street-lighting",
    title: "Outdoor, compound and street lighting",
    audience: "Compounds & access roads",
    need: "Light gates, parking areas, walkways and perimeter roads without running new electrical cable to each point.",
    approach:
      "Standalone solar lights are selected by the area to be covered and the hours of light required through the night, including cloudy-weather performance.",
    points: [
      "Gates, walls and security points",
      "Parking areas and compounds",
      "Access roads and walkways",
    ],
    icon: "streetlight",
    imageKey: "crewInstall",
    relatedCategory: "solar-streetlights",
  },
];

export const trustPoints: { icon: CategoryIcon; title: string; text: string }[] =
  [
    {
      icon: "panel",
      title: "Solar equipment supply",
      text: "Panels, lithium batteries, inverters and solar lighting from one supplier.",
    },
    {
      icon: "system",
      title: "Homes and businesses",
      text: "Guidance for household backup as well as shop, office and project supply.",
    },
    {
      icon: "inverter",
      title: "Product guidance",
      text: "Help identifying equipment that suits your load instead of guessing.",
    },
    {
      icon: "accessories",
      title: "Direct WhatsApp enquiries",
      text: "Speak to the team directly about prices, availability and next steps.",
    },
  ];

export const whyChooseUs = [
  {
    icon: "panel" as CategoryIcon,
    title: "Several equipment categories in one place",
    text: "Instead of sourcing modules, storage, inverters and lighting from different places, you can discuss the whole installation with one supplier on Gayaza Road.",
  },
  {
    icon: "inverter" as CategoryIcon,
    title: "Help identifying suitable equipment",
    text: "Share what you want to power and the team will help you work towards an appropriate inverter, battery and panel combination.",
  },
  {
    icon: "system" as CategoryIcon,
    title: "Single products or complete systems",
    text: "Enquire about an individual item or ask for a matched package covering the array, storage and inverter together.",
  },
  {
    icon: "accessories" as CategoryIcon,
    title: "Convenient contact options",
    text: "WhatsApp is the quickest way to reach the team, and every product page opens a chat with that product already named.",
  },
  {
    icon: "battery" as CategoryIcon,
    title: "A Kampala location you can visit",
    text: "The business is based next to Akamwesi Mall on Gayaza Road, so you can visit to discuss your requirements in person.",
  },
  {
    icon: "streetlight" as CategoryIcon,
    title: "Practical, requirement-led advice",
    text: "Sizing is based on your appliance list, consumption and required backup time — not on a fixed package.",
  },
];

export const howToStart = [
  {
    step: "01",
    title: "Tell us your power requirements",
    text: "Send a list of the appliances you want to run, your location and roughly how long you need power to last during an outage.",
  },
  {
    step: "02",
    title: "Get guidance and a quotation",
    text: "The team reviews your requirements and comes back with suitable equipment options and a quotation for your project.",
  },
  {
    step: "03",
    title: "Confirm equipment and next steps",
    text: "Agree the specification that suits you, then confirm availability, collection or delivery and the next steps with the business.",
  },
];

export const audienceTypes = [
  "Home",
  "Business",
  "Institution",
  "Commercial / Industrial",
  "Other",
] as const;

export const contactMethods = ["WhatsApp", "Phone call", "Email"] as const;
