import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return defineConfig({
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
            process.env.VITE_CONNECT_STAGING === 'true' ? 'https://strayballoon.phungnnl.dev' : 'http://localhost:8000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        '/ws': {
          target:
            process.env.VITE_CONNECT_STAGING === 'true' ? 'wss://strayballoon.phungnnl.dev' : 'ws://localhost:8000',
          changeOrigin: true,
        },
      },
    },
  });
};
