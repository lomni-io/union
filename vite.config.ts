import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    emptyOutDir: false,
    rollupOptions: {
        output: {
            dir: 'dist/',
            entryFileNames: 'plugin.js',
            assetFileNames: 'plugin.css',
            chunkFileNames: "chunk.js",
            manualChunks: undefined,
        }
    }
},
  base: '/dist',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }
})