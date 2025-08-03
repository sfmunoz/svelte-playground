import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  base: "./", // default = '/' ; it may be absolute: '/svelte-playground/'
  plugins: [tailwindcss(), svelte(), tsconfigPaths()],
});
