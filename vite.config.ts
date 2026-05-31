import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore - Bypass CI TS resolution errors for Tailwind Vite plugin
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
