import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server:{
    port:4005,
    hmr:true
  },
  plugins: [react(), tailwindcss(),],
})
