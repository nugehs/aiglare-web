// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
// Hosted as a GitHub Pages project site at https://nugehs.github.io/aiglare-web/
export default defineConfig({
  site: "https://nugehs.github.io",
  base: "/aiglare-web",
  // Astro 7 defaults to "jsx" whitespace handling, which can drop spaces between
  // inline elements; keep the Astro 5/6 behaviour so the rendered copy is unchanged.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
