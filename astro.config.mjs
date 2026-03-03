import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://lopinspeck.github.io',
  base: '/cjwtw-website/',
  integrations: [tailwind()],
});
