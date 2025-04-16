import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./styles/tailwind/utilities.scss";`
      }
    },
    postcss: './postcss.config.js'
  },
  build: {
    lib: {
      entry: path.resolve('packages/index.ts'), // import lại từ các module con
      name: 'UiLib',
      formats: ['es', 'cjs'],
      fileName: (format) => `cli-ui-lib.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'vue', 'angular'],
      output: {
        globals: {
          react: 'React',
          vue: 'Vue',
          angular: 'Angular'
        }
      }
    }
  },
  plugins: [dts()]
});
