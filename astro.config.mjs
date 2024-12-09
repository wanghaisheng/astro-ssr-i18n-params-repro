// @ts-check
import node from '@astrojs/node';
import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }) ,
   server: {
    host: true,
    port: 4444
  },
  integrations: [svelte()],
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'en',
    fallback: {
      es: 'en',
    },
    routing: {
      fallbackType: 'rewrite',
    },
  },
});
