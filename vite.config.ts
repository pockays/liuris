import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteRestart from 'vite-plugin-restart'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteRestart({
      restart: [
        'my.config.[jt]s',
      ]
    })
  ],
  server: {
    open: true
  }
})
