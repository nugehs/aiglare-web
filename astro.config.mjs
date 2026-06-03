// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
// Hosted as a GitHub Pages project site at https://nugehs.github.io/aiglare-web/
export default defineConfig({
  site: "https://nugehs.github.io",
  base: "/aiglare-web",
  vite: {
    plugins: [tailwindcss()],
  },
});
