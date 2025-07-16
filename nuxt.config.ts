// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt'
  ],
  // 添加 PostCSS 配置
  postcss: {
    plugins: {
      // 这里放置原 postcss.config.js 中的插件配置
      'autoprefixer': {}, // 已在 dependencies 中，无需额外安装
      // 例如：'postcss-custom-properties': { preserve: false }
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ]
})
