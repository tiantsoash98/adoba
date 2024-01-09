// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Adoba',
      htmlAttrs: {
        lang: 'fr',
        prefix: 'og: https://ogp.me/ns#'
      },
      link: [
        {
          rel: 'icon',
          type: 'image/svg',
          href: '/favicon.svg'
        }
      ]
    }
  },
  build: {
    transpile: ['gsap'],
  },
  css: ['~/assets/css/main.scss'],
  modules: [
    'nuxt-lenis',
    '@nuxt/image',
    '@nuxtjs/strapi'
  ],
  strapi: {
    url: process.env.CMS_BASE_URL
  },
  runtimeConfig: {
    public: {
      cmsBaseUrl: process.env.CMS_BASE_URL
    }
  }
})
