// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
// On GitHub Pages (project site) CI sets SITE + BASE; locally / custom domain use sapezhko.com at root.
export default defineConfig({
  site: process.env.SITE ?? "https://sapezhko.com",
  base: process.env.BASE ?? "/",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
