import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import pkg from './package.json'

function resolveExternal() {
  const defaultExternal = ["react", "react/jsx-runtime"]
  return [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    ...defaultExternal
  ]
}

export default defineConfig({
  plugins: [react(), dts({ include: ["src"] })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: '[name]',
    },
    rollupOptions: {
      external: resolveExternal(),
      output: {
        preserveModules: true,
      },
    },
    cssCodeSplit: true
  },
});
