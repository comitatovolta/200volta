import { defineConfig } from "astro/config";
import { resolve } from "path";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@splidejs/splide/src/css/core/index": resolve(
          "node_modules/@splidejs/splide/src/css/core/index.scss"
        ),
      },
    },
  },

  integrations: [react()],
});