import { defineConfig } from 'vite';
export default defineConfig({
  server: { port: 3162, strictPort: true },
  build: { assetsInlineLimit: 0 },
});
