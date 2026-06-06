// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {enabled: true},
  modules: ['@formkit/nuxt', '@nuxtjs/tailwindcss', '@nuxt/fonts', '@pinia/nuxt'],
  components: [{ path: '~/components', pathPrefix: false }],
  css: ['~/assets/styles/common/common.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *;'
        }
      }
    }
  }
})