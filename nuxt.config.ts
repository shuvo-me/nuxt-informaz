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
  },
  css: ['@mdi/font/css/materialdesignicons.min.css','bootstrap-icons/font/bootstrap-icons.min.css','vue-awesome-paginate/dist/style.css'],
  runtimeConfig: {
    public: {
      API_KEY: process.env.API_KEY,
    },
  },
})
