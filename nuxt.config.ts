// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@pinia/nuxt'
  ],
  postcss: {
    plugins: {
      'autoprefixer': {}, 
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  // app: {
  //   head: {
  //     // 网站图标（favicon）
  //     link: [
  //       {
  //         rel: 'icon',
  //         type: 'image/png',
  //         href: 'https://img.alicdn.com/tfs/TB1XlF3RpXXXXc6XXXXXXXXXXXX-16-16.png'
  //       },
  //     ]
  //   }
  // }
})
