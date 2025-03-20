// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith(".css")) {
              return "src/styles/[name].[hash].css"; // Moves CSS to `dist/styles/`
            }
            return "assets/[name].[hash][extname]";
          },
        },
      },
    },
  },
});
