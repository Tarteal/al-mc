import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { tanstackStartVite } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    tanstackStartVite(),
    TanStackRouterVite(),
    react(),
  ],
});
