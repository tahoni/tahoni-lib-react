import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { resolve } from "node:path";

import { peerDependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ include: ["lib"] }),
    dts({ include: ["lib"] }),
    libInjectCss(),
  ],
  build: {
    minify: true,
    sourcemap: false,
    copyPublicDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "lib/index.ts"),
      name: "TahoniLib",
      // the proper extensions will be added
      fileName: "tahoni-lib",
      formats: ["es"],
    },
    rollupOptions: {
      // make sure to externalise deps that shouldn't be bundled
      // into your library
      external: [
        "react",
        "react/jsx-runtime",
        ...Object.keys(peerDependencies)
      ],
      output: {
        assetFileNames: "[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
