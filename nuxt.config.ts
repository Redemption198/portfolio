import tailwindcss from "@tailwindcss/vite";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-08",

  modules: ["@vueuse/nuxt", "@nuxt/content", "@nuxt/icon", "@nuxt/image"],

  app: {
    head: {
      script: [
        {
          // Apply the saved (or system) theme before first paint to avoid a flash
          innerHTML:
            "try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}",
          tagPosition: "head",
        },
      ],
    },
  },

  content: {
    experimental: { sqliteConnector: "native" },
  },

  icon: {
    clientBundle: { scan: true },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },
});
