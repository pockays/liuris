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
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    proxy: {
      "/api": {
        target: "http://imissu.herokuapp.com/api/",
        ws: true,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    },
  }
})
