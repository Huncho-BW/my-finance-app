import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-finance-app/',
  plugins: [
    tailwindcss(),
    react(), // Simplified: no compiler plugin needed for now
  ],
})