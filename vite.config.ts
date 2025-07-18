import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [
      react(),
    ],

    server: {
      port: 5173,
      watch: {
        usePolling: true,
      },
    },
  };
});
