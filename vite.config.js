import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'node:path';

export default defineConfig({
  plugins: [eslintPlugin({ cache: false })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
