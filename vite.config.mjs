import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  optimizeDeps: {
    include: ["tailwindcss", "autoprefixer"],
  },
  build: {
    commonjsOptions: {
      include: [/tailwind\.config\.js/, /postcss\.config\.js/, /node_modules/],
    },
  },
});
