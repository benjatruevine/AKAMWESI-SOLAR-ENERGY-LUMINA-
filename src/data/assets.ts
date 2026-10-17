import { asset } from "@/lib/utils";

/**
 * ASSET INVENTORY
 * ---------------
 * The client supplied 24 image files. They were moved, unchanged and without
 * renaming, from the original `assests/` folder into `public/assets/` so that
 * Next.js can serve and optimise them.
 *
 * Filenames are deliberately preserved (including spaces and parentheses) so
 * nothing the client provided is lost or renamed. `asset()` encodes them.
 *
 * Alt text is written conservatively: where the subject of a photo could not be
 * confirmed with certainty from the file itself, the description stays general
 * rather than stating something unverified. See README for the full inventory.
 */

export type AssetImage = {
  /** Original file name, preserved exactly as supplied. */
  file: string;
  alt: string;
  width: number;
  height: number;
  /** Public URL, safe for use in markup. */
  src: string;
};

function img(
  file: string,
  width: number,
  height: number,
  alt: string,
): AssetImage {
  return { file, width, height, alt, src: asset(file) };
}

export const brand = {
  logo: img(
    "logo.jpeg",
    1080,
    1080,
    "Akamwesi Solar Energy (Lumina) logo",
  ),
};

export const heroImages = {
  primary: img(
    "user6.jpg",
    2528,
    1696,
    "Solar equipment and installation outdoors, supplied by Akamwesi Solar Energy",
  ),
  secondary: img(
    "images (8).jpg",
    738,
    414,
    "Solar modules installed outdoors under an open sky",
  ),
};

/* --- Photographs used for the six product categories --------------------- */

export const categoryImages = {
  panels: img(
    "images (5).jpg",
    262,
    191,
    "Solar panel module mounted on a frame against a blue sky",
  ),
  panelsArray: img(
    "images (11).jpg",
    515,
    388,
    "Row of solar panels in an open field under a cloudy sky",
  ),
  panelBlue: img(
    "images (7).jpg",
    614,
    499,
    "Close view of the dark blue cells of a solar panel",
  ),
  panelsOverhead: img(
    "OIP.webp",
    386,
    257,
    "Solar panel array photographed at an angle",
  ),
  equipmentWhite: img(
    "images (13).jpg",
    300,
    300,
    "Solar equipment unit photographed on a white background",
  ),
  equipmentWhiteAlt: img(
    "images (2).jpg",
    300,
    300,
    "Solar power equipment photographed on a white background",
  ),
  equipmentSet: img(
    "user2.jpg",
    1536,
    1024,
    "Solar power equipment and components arranged on a white background",
  ),
  cabinet: img(
    "user1.jpg",
    1254,
    1254,
    "Energy storage equipment photographed against a dark background",
  ),
  device: img(
    "images (6).jpg",
    252,
    200,
    "Solar power equipment ready for installation",
  ),
  deviceHeld: img(
    "images (12).jpg",
    194,
    259,
    "Solar equipment being handled during a demonstration",
  ),
  darkInstall: img(
    "images.jpg",
    399,
    501,
    "Solar panel installation photographed in low light",
  ),
  roofArray: img(
    "images (1).jpg",
    225,
    225,
    "Solar panel array installed on a structure",
  ),
  brochure: img(
    "unnamed.webp",
    780,
    819,
    "Solar product catalogue page showing several modules",
  ),
  fieldArray: img(
    "unnamed (1).webp",
    1284,
    932,
    "Solar installation photographed outdoors",
  ),
};

/* --- People, installations and site photography -------------------------- */

export const siteImages = {
  crewInstall: img(
    "images (3).jpg",
    678,
    452,
    "Technicians working around solar panels during an installation",
  ),
  rooftop: img(
    "images (4).jpg",
    584,
    525,
    "Solar panels installed on a rooftop",
  ),
  outdoorSite: img(
    "user3.jpg",
    800,
    600,
    "Outdoor solar equipment area photographed on site",
  ),
  technician: img(
    "images (9).jpg",
    415,
    739,
    "Person photographed at a solar equipment site",
  ),
  technicianAlt: img(
    "images (10).jpg",
    415,
    739,
    "Person photographed at a solar equipment site",
  ),
  person: img(
    "img.jpg",
    640,
    640,
    "Visitor photographed at a solar equipment display",
  ),
  personAlt: img(
    "user.jpg",
    1024,
    1024,
    "Person photographed at a solar equipment display",
  ),
};

/**
 * Gallery images for the "Solar Inspiration" section.
 * These are supplied photographs. Their exact provenance was not confirmed by
 * the client, so the section is deliberately not titled "Our Projects".
 */
export const inspirationGallery: AssetImage[] = [
  siteImages.crewInstall,
  categoryImages.panelsArray,
  siteImages.rooftop,
  categoryImages.panelBlue,
  siteImages.outdoorSite,
  categoryImages.panelsOverhead,
  categoryImages.equipmentSet,
  heroImages.secondary,
];

/** Every asset in the supplied folder, for the inventory report. */
export const allAssets: AssetImage[] = [
  brand.logo,
  heroImages.primary,
  heroImages.secondary,
  categoryImages.panels,
  categoryImages.panelsArray,
  categoryImages.panelBlue,
  categoryImages.panelsOverhead,
  categoryImages.equipmentWhite,
  categoryImages.equipmentWhiteAlt,
  categoryImages.equipmentSet,
  categoryImages.cabinet,
  categoryImages.device,
  categoryImages.deviceHeld,
  categoryImages.darkInstall,
  categoryImages.roofArray,
  categoryImages.brochure,
  categoryImages.fieldArray,
  siteImages.crewInstall,
  siteImages.rooftop,
  siteImages.outdoorSite,
  siteImages.technician,
  siteImages.technicianAlt,
  siteImages.person,
  siteImages.personAlt,
];
