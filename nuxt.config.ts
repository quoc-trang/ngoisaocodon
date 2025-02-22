// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  routeRules: {
    '/sd/home': { prerender: true },
  },
  compatibilityDate: '2024-12-31',
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
