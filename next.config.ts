import type { NextConfig } from "next";

/**
 * GitHub Pages hosting.
 *
 * The site is exported as a fully static site (`output: "export"`) which is
 * what GitHub Pages can serve. GitHub project pages are served under a
 * sub-path, e.g. `/AKAMWESI-SOLAR-ENERGY-LUMINA-`, so `basePath` must match or
 * every CSS/JS/image request 404s and the page renders unstyled.
 *
 * `actions/configure-pages` exposes that sub-path as the `PAGES_BASE_PATH`
 * environment variable during the GitHub Actions build. Locally it is empty,
 * so the site works at the domain root.
 */
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Public assets (images in /public/assets) and metadata URLs are built
  // manually, so the prefix is exposed to the app via NEXT_PUBLIC_BASE_PATH.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // The default image loader needs a server, which a static export does not
  // have. Serve the supplied images as-is instead.
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
