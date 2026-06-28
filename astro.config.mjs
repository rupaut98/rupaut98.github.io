import { defineConfig } from 'astro/config';

// User site (rupaut98.github.io) serves from root — no base path needed.
// Tailwind v4 is wired via PostCSS (postcss.config.mjs) rather than the Vite
// plugin, which isn't compatible with Astro 6's rolldown-vite yet.
export default defineConfig({
  site: 'https://rupaut98.github.io',
});
