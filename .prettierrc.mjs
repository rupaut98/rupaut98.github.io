/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  // Tailwind v4 is CSS-first (no tailwind.config.js) — point the class sorter at the entry stylesheet.
  tailwindStylesheet: './src/styles/global.css',
  singleQuote: true,
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
