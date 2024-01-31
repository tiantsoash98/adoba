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
          type: 'image/png',
          href: '/favicon-dark.png',
        },
        {
          rel: 'icon',
          type: 'image/svg',
          href: '/favicon-dark.svg'
        },
        {
          rel: 'icon',
          type: 'image/svg',
          href: '/favicon-light.svg',
          media: '(prefers-color-scheme: dark)'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-light.png',
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
    sendGridApiKey: process.env.SENDGRID_API_KEY,
    sendGridMailFrom: process.env.SENDGRID_MAIL_FROM,
    sendGridMailTo: process.env.SENDGRID_MAIL_TO,
    sendGridMailCC: process.env.SENDGRID_MAIL_CC,
    mailChimpApiKey: process.env.MAILCHIMP_API_KEY,
    mailChimpAudienceKey: process.env.MAILCHIMP_AUDIENCE_KEY,
    mailChimpServerPrefix: process.env.MAILCHIMP_SERVER_PREFIX,
    public: {
      siteKey: process.env.SITE_RECAPTCHA_KEY,
      baseUrl: process.env.BASE_URL,
      cmsBaseUrl: process.env.CMS_BASE_URL,
      facebookAppId: process.env.FACEBOOK_APP_ID
    }
  }
})
