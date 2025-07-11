// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://aitools.vercel.app",
  integrations: [mdx()],

  server: {
    port: 3000,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  output: "server",
  adapter: vercel(),
});