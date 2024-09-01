const Path = require("path");
const vuePlugin = require("@vitejs/plugin-vue");

const { defineConfig } = require("vite");

import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

/**
 * https://vitejs.dev/config
 */
const config = defineConfig({
  root: Path.join(__dirname, "src", "renderer"),
  publicDir: "public",
  server: {
    port: 8080,
  },
  open: false,
  build: {
    outDir: Path.join(__dirname, "build", "renderer"),
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [vuePlugin()],
  resolve: {
    alias: {
      "@": Path.resolve(__dirname, "./src/renderer"),
    },
  },
});

module.exports = config;
