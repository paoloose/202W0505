import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://paoloose.site',
  base: '/202W0505',
  trailingSlash: 'ignore',
  integrations: [mdx()],
  vite: {
    plugins: []
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    }
  },
  redirects: {
    '/weeks': '/202W0505',
  }
});
