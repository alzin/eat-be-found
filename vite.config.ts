import { fileURLToPath } from "node:url";

import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// GitHub Pages serves a project site from /<repo>/, so every asset and route
// needs that prefix. Overridable via BASE_PATH for custom-domain deploys.
const base = process.env["BASE_PATH"] ?? "/eat-be-found/";

export default defineConfig({
  base,
  plugins: [
    // Must run before the React plugin so routeTree.gen.ts exists first.
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
