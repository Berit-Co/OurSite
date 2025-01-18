import { fileURLToPath, URL } from "node:url"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        quality: 80,
        lossless: false,
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
  build: {
    minify: "esbuild",
    target: "es2020",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/")
          ) {
            return "react-vendor"
          }
          if (id.includes("node_modules/framer-motion")) {
            return "animation-vendor"
          }
          if (id.includes("/components/animation/")) {
            return "animation-components"
          }
          if (id.includes("/components/sections/")) {
            return "section-components"
          }
        },
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      minifyWhitespace: true,
      minifyIdentifiers: true,
      minifySyntax: true,
      drop: ["console", "debugger"],
      legalComments: "none",
    },
    include: ["react", "react-dom", "framer-motion"],
  },
})
