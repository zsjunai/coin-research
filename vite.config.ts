import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        port: 10000,
        host: true,
        strictPort: true,
    },
    preview: {
        port: 10000,
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vue: ['vue', 'vue-router'],
                    chart: ['chart.js'],
                },
            },
        },
    },
})
