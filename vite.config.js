import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target:
          import.meta.env.VITE_CONNECT_STAGING !== 'false'
            ? 'http://localhost:8000'
            : 'https://strayballoon.phungnnl.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/ws': {
        target:
          import.meta.env.VITE_CONNECT_STAGING !== 'false' ? 'ws://localhost:8000' : 'wss://strayballoon.phungnnl.dev',
        changeOrigin: true,
      },
    },
  },
});
