import StarportPlugin from "vue-starport";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(StarportPlugin({ keepAlive: true }));
});
