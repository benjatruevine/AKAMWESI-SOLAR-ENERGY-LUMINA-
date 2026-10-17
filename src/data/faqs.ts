export type Faq = {
  question: string;
  answer: string;
  category: "Products" | "Sizing" | "Buying" | "Location";
};

export const faqs: Faq[] = [
  {
    question: "Which solar products do you supply?",
    answer:
      "Akamwesi Solar Energy supplies solar panels, lithium solar batteries, solar inverters, solar streetlights and related solar equipment. Complete system packages combining a panel array, battery storage and an inverter can also be requested. Because stock changes, please confirm the specific model and availability with the team on WhatsApp.",
    category: "Products",
  },
  {
    question: "How do I choose a suitable inverter?",
    answer:
      "Start with the list of appliances you want to run and add up their power draw, then note which of them may run at the same time. The inverter must cover that combined load, plus a margin for motor-driven appliances such as fridges, pumps and air conditioners which draw more power at start-up. The inverter also has to match the battery voltage. Share your appliance list with the team and they will point you towards a suitable capacity class.",
    category: "Sizing",
  },
  {
    question: "What size battery do I need?",
    answer:
      "Battery size depends on three things: how much power your essential appliances use, how long you need them to keep running during an outage, and whether you want to increase capacity later. As a rough guide, energy stored is measured in kilowatt-hours (kWh), and a longer backup time or a bigger load needs more kWh. Actual sizing should be based on your own consumption, so please share your appliance list and required backup hours.",
    category: "Sizing",
  },
  {
    question: "Can I request a complete solar system quotation?",
    answer:
      "Yes. Use the Request a Quote page or message the team on WhatsApp with your appliance list, the location of the installation and how long you would like power to last during an outage. A quotation is then prepared for a suitable panel, battery and inverter combination. Sizing depends on your appliances, your power consumption, the backup duration you want and the overall system requirements.",
    category: "Buying",
  },
  {
    question: "How can I enquire about current prices and availability?",
    answer:
      "Prices and stock are confirmed directly by the business, because they change with the market and with the exact model chosen. The fastest way is the WhatsApp button on any product, which opens a chat with the product already named. You can also call the number on the Contact page or send the enquiry form. This website does not publish confirmed prices — any figure shown in the demo catalogue is an indicative sample only.",
    category: "Buying",
  },
  {
    question: "Where is the business located?",
    answer:
      "Akamwesi Solar Energy is located on Gayaza Road in Kyebando, next to Akamwesi Mall, Kampala, Uganda. You are welcome to visit during business hours to discuss your requirements. Please confirm opening times with the team before travelling.",
    category: "Location",
  },
  {
    question: "How can I contact the team?",
    answer:
      "The quickest option is WhatsApp on +256 700 267711. You can also call the same number, use the enquiry form on the Contact page, or send a quotation request. The team is also on TikTok as @akamwesisolarenergies.",
    category: "Location",
  },
  {
    question: "Do you install the systems you supply?",
    answer:
      "The information confirmed for this website covers solar equipment supply and guidance on suitable equipment. Installation arrangements, and whether installation is included in a particular quotation, must be confirmed directly with Akamwesi Solar Energy for your specific project.",
    category: "Buying",
  },
  {
    question: "Can you give advice before I buy anything?",
    answer:
      "Yes. You can describe what you want to power and the team will help you identify suitable equipment. You do not need to know the technical details in advance — the appliance list, your daily usage pattern and how long backup should last are the most useful things to share.",
    category: "Sizing",
  },
  {
    question: "Are the prices on this website the final prices?",
    answer:
      "No. Where a price appears in the demo catalogue it is clearly marked as an indicative sample figure created for this website demonstration. It is not a quotation and it does not confirm stock. Please always confirm the current price and availability with Akamwesi Solar Energy.",
    category: "Buying",
  },
];

export const faqCategories = [
  "Products",
  "Sizing",
  "Buying",
  "Location",
] as const;
