import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import postCssPxToRem from 'postcss-pxtorem'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      // 配置src目录
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    // 配置后，Vant各组件才生效
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        // px换算成rem
        postCssPxToRem({
          rootValue: 37.5, // 根据设计图尺寸写，设计图是375，就写37.5 换算的基数
          selectorBlackList: ['van-'], // 忽略转换正则匹配项
          propList: ['*'],
        }),
      ],
    },
  },
  server: {
    // 是否开启 https
    https: false,
    /**
     * 端口号
     * @default 3000
     */
    port: 8888,
    host: '0.0.0.0',
    // 本地跨域代理
    proxy: {
      '/local': {
        target: 'http://local.goatgames.com.com',
        changeOrigin: true,
        ws: false,
        headers: {
          Referer: 'http://local.goatgames.com',
        },
        rewrite: (path) => path.replace(/^\/local/, '/api'),
      },
      '/api': {
        target: 'http://api.goatgames.com',
        changeOrigin: true,
        rewrite: (path) => path.replace('^/api', '/api'),
      },
    },
  },
})
