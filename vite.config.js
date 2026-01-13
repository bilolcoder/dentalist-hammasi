import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://app.dentago.uz',        // asosiy domen
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/public')  // Bu qatorni qaytaring!
      }
    }
  }
})