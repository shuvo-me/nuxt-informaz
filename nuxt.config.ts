// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports:{
    dirs: ['store']
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss',['@pinia/nuxt',{
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  }],'nuxt-bootstrap-icons'],
  bootstrapIcons:{
    renderType: "component"
  }
})
