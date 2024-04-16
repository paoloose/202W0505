import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://paoloose.site',
  base: '/202W0505',
  integrations: [mdx()],
  vite: {
    plugins: []
  }
});