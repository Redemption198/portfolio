import tailwindcss from "@tailwindcss/vite";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-08",

  modules: [
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/eslint",
  ],

  css: ['./app/assets/css/main.css'],

  vite: {  
    plugins: [   
      tailwindcss(),   
    ],
  },
});