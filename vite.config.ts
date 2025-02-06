import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: "build",
    sourcemap: true,
    commonjsOptions: {
      include: [/braille/],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  publicDir: "public",
  optimizeDeps: {
    include: ["braille"],
  },
});
