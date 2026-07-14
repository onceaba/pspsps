import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Tailwind kullanıyorsun, bunu da ekle

export default defineConfig({
  base: '/pspsps/', // <-- BU SATIR ÇOK ÖNEMLİ
  plugins: [
    react(),
    tailwindcss(),
  ],
})