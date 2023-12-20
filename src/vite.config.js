import { defineConfig } from 'vite';
import { resolve } from 'path';

import { glslify } from 'vite-plugin-glslify'

const root = resolve(__dirname, '.');

export default defineConfig({
  plugins: [glslify()],
  root: root,
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        page1: resolve(root, 'page-1', 'index.html'),
        page2: resolve(root, 'page-2', 'index.html'),
        page3: resolve(root, 'page-3', 'index.html'),
        page4: resolve(root, 'page-4', 'index.html'),
        page5: resolve(root, 'page-5', 'index.html'),
        page6: resolve(root, 'page-6', 'index.html'),
        page7: resolve(root, 'page-7', 'index.html'),
        theend: resolve(root, 'the-end', 'index.html'),
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
});
