import { defineConfig } from 'vite'
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default {
  plugins: [
    svelte({
      extensions: [".svelte", ".svelte.ts"], // Add this
    }),
  ],
};