// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  css: ["~/assets/css/main.css"],
  typescript: {
    typeCheck: true,
    strict: true,
  },
});
