<template>
  <div class="w-full min-h-[75dvh] flex items-center justify-center py-12">
    <div
      class="grid grid-cols-2 md:grid-cols-6 gap-4 w-full max-w-7xl px-4 auto-rows-[100px] md:auto-rows-[120px]"
    >
      <!-- Profile Card (Centered) -->
      <div
        class="col-span-2 row-span-2 md:col-span-4 md:col-start-2 md:row-start-2 z-10 flex flex-col items-center justify-center gap-y-3 bg-slate-100 p-4 rounded-3xl shadow-sm"
        :class="{ 'animated-box': shouldAnimate }"
        style="animation-delay: 0ms"
      >
        <p class="text-3xl font-semibold text-slate-600 md:text-4xl">
          Jacopo Pinna
        </p>
        <p class="text-2xl font-semibold text-slate-600 md:text-3xl">
          Developer
        </p>

        <div class="flex items-center justify-center gap-x-4 text-slate-600 mt-2">
          <NuxtLink
            to="https://www.linkedin.com/in/jacopo-pinna"
            external
            target="_blank"
            class="transition-transform hover:scale-110"
          >
            <Icon name="simple-icons:linkedin" class="h-8 w-8" />
          </NuxtLink>
          <NuxtLink
            to="https://github.com/Redemption198"
            external
            target="_blank"
            class="transition-transform hover:scale-110"
          >
            <Icon name="simple-icons:github" class="h-8 w-8" />
          </NuxtLink>

          <NuxtLink
            to="https://www.upwork.com/freelancers/~01487464eaff7cbef2"
            target="_blank"
            class="transition-transform hover:scale-110"
            external
          >
            <Icon name="simple-icons:upwork" class="h-8 w-8" />
          </NuxtLink>
        </div>
      </div>

      <!-- Library Tiles -->
      <div
        v-for="(lib, index) in libraries"
        :key="lib.name"
        class="col-span-1 row-span-1 bg-slate-100 rounded-3xl flex flex-col items-center justify-center gap-2 shadow-sm transition-transform hover:scale-105 hover:shadow-md cursor-default"
        :class="{ 'animated-box': shouldAnimate }"
        :style="{ animationDelay: `${(index + 1) * 50}ms` }"
      >
        <Icon
          :name="lib.logo"
          class="text-4xl md:text-5xl"
          :style="{ color: lib.color }"
        />
        <span class="font-bold text-sm md:text-lg text-slate-700">{{
          lib.name
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const libraries = [
  { name: "Nuxt", logo: "logos:nuxt-icon" },
  { name: "Vue", logo: "logos:vue" },
  { name: "Tailwind", logo: "logos:tailwindcss-icon" },
  { name: "JavaScript", logo: "devicon:javascript" },
  { name: "TypeScript", logo: "logos:typescript-icon" },
  { name: "VueUse", logo: "logos:vueuse" },
  { name: "Strapi", logo: "logos:strapi-icon" },
  { name: "Leaflet", logo: "logos:leaflet" },
  { name: "ThreeJS", logo: "logos:threejs" },
  { name: "GraphQL", logo: "logos:graphql" },
  { name: "Vite PWA", logo: "logos:vitejs" },
  { name: "Openlayers", logo: "logos:openlayers" },
  { name: "PrimeVue", logo: "prime:prime" },
  { name: "Laravel", logo: "logos:laravel" },
  { name: "n8n", logo: "simple-icons:n8n", color: "#eb4b71" },
  { name: "git", logo: "simple-icons:git", color: "#f03c2e" },
];

const animationPlayed = useState("hero-animation-played", () => false);
const shouldAnimate = !animationPlayed.value;

onMounted(() => {
  animationPlayed.value = true;
});
</script>

<style scoped>
.animated-box {
  opacity: 0;
  transform: scale(0.9);
  animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
