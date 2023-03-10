// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: 'content-wind',
  content: {
    documentDriven: true
  },
  nitro: {
    preset: "netlify",
    prerender: {
      crawlLinks: true,
    }
  },
})
