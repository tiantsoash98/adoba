// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
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
          href: '/favicon-dark.svg',
          media: '(prefers-color-scheme: light)'
        },
        {
          rel: 'icon',
          type: 'image/svg',
          href: '/favicon-light.svg',
          media: '(prefers-color-scheme: dark)'
        }
      ]
    }
  },
  build: {
    transpile: [
      'gsap'
    ],
  },
  css: ['~/assets/css/main.scss'],
  modules: [
    'nuxt-lenis',
    '@nuxt/image',
    '@nuxtjs/strapi',
  ],
  strapi: {
    url: process.env.CMS_BASE_URL
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      cmsBaseUrl: process.env.CMS_BASE_URL
    }
  }
})
