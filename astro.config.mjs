// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://socius-beistandschaften.ch",
  // Alte WordPress-URLs weiterleiten
  redirects: {
    "/impresum": "/impressum",
    "/karte": "/kontakt",
  },
});
