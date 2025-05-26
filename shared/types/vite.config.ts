import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Types',
      fileName: (format) => `index.${format}.js`,
      formats: ['es']
    },
    outDir: 'dist',
    emptyOutDir: true
  },
  plugins: [dts({ entryRoot: 'src', outputDir: 'dist' })]
});
