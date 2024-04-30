import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://paoloose.site',
  base: '/202W0505',
  trailingSlash: 'ignore',
  integrations: [mdx(), react()],
  vite: {
    plugins: [vanillaExtractPlugin()]
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  },
  redirects: {
    '/weeks': '/202W0505'
  }
});
