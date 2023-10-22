// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  ssr: false,
  modules: ['nuxt-gtag'],
  gtag: {
    id: 'G-9Y0WX3X7KZ',
    initialConsent: false
  }
})
