// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://socius-beistandschaften.ch",
  integrations: [sitemap()],
  // Alte WordPress-URLs weiterleiten
  redirects: {
    "/impresum": "/impressum",
    "/karte": "/kontakt",
    "/ueber-uns/johannes-suter/": "/ueber-uns",
    "/ueber-uns/jannik-beugger/": "/ueber-uns",
  },
});
