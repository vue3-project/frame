import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        // mock
        viteMockServe({
            mockPath: '@/mock/source', // 解析刚刚user.ts的位置
            localEnabled: true // 是否开启开发环境
        })
    ],
    server: {
        host: 'localhost',
        port: 8000,
        open: true,
    },
    build: {
        outDir: 'root'
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    }
})
