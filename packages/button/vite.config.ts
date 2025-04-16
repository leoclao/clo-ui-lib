import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(new URL('.', import.meta.url).pathname, 'src/index.ts'),
      name: 'UIButton',
      fileName: 'index',
      formats: ['es'],
    },
    outDir: 'dist',
  },
  plugins: [dts()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "../../../styles/index.scss";`
      }
    }
  }
});
