import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  }
  // build: {
  //   // Exclude .docx files from being processed by Rollup
  //   rollupOptions: {
  //     output: {
  //       // Ensure that .docx files are not processed by Rollup
  //       exclude: ['**/*.docx'],
  //     },
  //   },
  // },
  // // Include .docx files as assets
  // assetsInclude: ['**/*.docx'],
});
