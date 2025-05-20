<script setup>
import { Starport } from "vue-starport";

useHead({
  title: "Redemption198's Portfolio",
});

const { data } = await useAsyncData("index", () => {
  return queryCollection("projects").all();
});
</script>

<template>
  <div class="w-screen bg-slate-900 p-4 flex flex-col gap-4">
    <div class="flex h-[75dvh] flex-col items-center justify-center gap-y-8">
      <p class="text-xl font-semibold text-slate-100 md:text-4xl">
        Jacopo Pinna
      </p>
      <p class="text-2xl font-semibold text-slate-100 md:text-3xl xl:text-5xl">
        Developer
      </p>

      <div class="flex items-center justify-center gap-x-4 text-slate-100">
        <a href="https://www.linkedin.com/in/jacopo-pinna" target="_blank">
          <Icon name="simple-icons:linkedin" class="h-8 w-8" />
        </a>
        <a href="https://github.com/Redemption198" target="_blank">
          <Icon name="simple-icons:github" class="h-8 w-8" />
        </a>
      </div>
      <a
        href="https://github.com/Redemption198/portfolio"
        class="underline font-semibold text-slate-100"
        target="_blank"
      >
        Portfolio Source Code
      </a>
    </div>
    <div class="flex flex-col gap-4">
      <p class="text-lg font-bold text-slate-100 md:text-2xl xl:text-3xl">
        Projects and Experiments
      </p>
      <div
        class="grid place-items-center justify-items-center gap-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        <NuxtLink
          v-for="project in data"
          :key="project.path"
          :to="project.path"
        >
          <div
            class="relative flex items-center justify-center overflow-hidden rounded-2xl transition-transform hover:scale-105 active:scale-95"
          >
            <p
              v-if="project.meta.thumbnail_title"
              class="absolute text-4xl font-bold text-slate-100 shadow-slate-900 drop-shadow-2xl"
            ></p>

            <Starport
              :port="project.path"
              class="h-52 w-96 transition-all duration-75"
            >
              <TheImage
                :thumbnail-url="project.meta.thumbnail_url"
                :thumbnail-title="project.title"
              />
            </Starport>
          </div>
        </NuxtLink>

        <NuxtLink to="/projects/aircam">
          <div
            class="relative flex items-center justify-center overflow-hidden rounded-2xl transition-transform hover:scale-105 active:scale-95"
          >
            <Starport
              port="/projects/aircam"
              class="h-52 w-96 transition-all duration-75"
            >
              <TheImage thumbnail-url="aircam.png" />
            </Starport>
          </div>
        </NuxtLink>

        <NuxtLink to="/projects/aircam-nuxt3">
          <div
            class="relative flex items-center justify-center overflow-hidden rounded-2xl transition-transform hover:scale-105 active:scale-95"
          >
            <Starport
              port="/projects/aircam-nuxt3"
              class="h-52 w-96 transition-all duration-75"
            >
              <TheImage thumbnail-url="aircam-nuxt3.png" />
            </Starport>
          </div>
        </NuxtLink>

        <NuxtLink to="/projects/aircam-tv">
          <div
            class="relative flex items-center justify-center overflow-hidden rounded-2xl transition-transform hover:scale-105 active:scale-95"
          >
            <Starport
              port="/projects/aircam-tv"
              class="h-52 w-96 transition-all duration-75"
            >
              <TheImage thumbnail-url="aircam-tv.png" />
            </Starport>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
