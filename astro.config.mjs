import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// User site (rupaut98.github.io) serves from root — no base path needed.
export default defineConfig({
  site: 'https://rupaut98.github.io',
  vite: { plugins: [tailwindcss()] },
});
