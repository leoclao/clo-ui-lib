import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  build: {
    target: "esnext",
    lib: {
      entry: path.resolve("packages/index.ts"), // import lại từ các module con
      name: "UiLib",
      formats: ["es", "cjs"],
      fileName: (format) => `cli-ui-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "vue", "angular"],
      output: {
        globals: {
          react: "React",
          vue: "Vue",
          angular: "Angular",
        },
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  plugins: [
    dts({
      entryRoot: "src",
      outDir: "dist",
      logDiagnostics: true,
    }),
  ],
});
