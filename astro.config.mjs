// astro.config.mjs
export default {
  build: {
    outdir: './docs',
    rollupOptions: {
      external: ['astro/app'],
     } // Set the output directory to 'docs' for GitHub Page
  },
  markdown: {
    // options for markdown processing (optional)
  },
  // add more configuration options here
};
