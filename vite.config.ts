import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [vue()],
    // @ts-expect-error vite-ssg extends config
    ssgOptions: {
        dirStyle: 'nested',
        formatting: 'minify',
    },
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
                manualChunks(id) {
                    if (id.includes('node_modules/chart.js')) return 'chart'
                    if (id.includes('node_modules/vue-router')) return 'vue-router'
                },
            },
        },
    },
})
