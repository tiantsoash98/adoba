// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
    cmsBaseUrl: process.env.CMS_BASE_URL
  }
})
