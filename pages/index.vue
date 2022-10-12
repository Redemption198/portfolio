<script setup>
const config = useRuntimeConfig();
</script>

<template>
  <div class="w-screen bg-slate-900 p-4">
    <div class="flex h-[75vh] flex-col items-center justify-center gap-y-8">
      <p class="text-5xl font-semibold text-slate-100 md:text-8xl xl:text-9xl">
        Jacopo Pinna
      </p>
      <p class="text-2xl font-semibold text-slate-100 md:text-3xl xl:text-5xl">
        Developer
      </p>
      <p class="text-lg font-semibold text-slate-100 md:text-xl xl:text-3xl">
        🚧 Under Construction 🚧
      </p>
    </div>
    <div class="mx-auto w-full xl:w-5/6">
      <p class="my-4 text-lg font-bold text-slate-100 md:text-2xl xl:text-3xl">
        Sneak Peek
      </p>
      <div
        class="grid place-items-center justify-items-center gap-8 sm:grid-cols-2 xl:grid-cols-4"
      >
        <ContentList v-slot="{ list }" path="/projects/">
          <NuxtLink
            v-for="project in list"
            :key="project._path"
            :to="project._path"
          >
            <div
              class="relative flex items-center justify-center overflow-hidden rounded-2xl transition-transform hover:scale-105 active:scale-95"
            >
              <p
                v-if="project.thumbnail_title"
                class="absolute text-4xl font-bold text-slate-100 shadow-slate-900 drop-shadow-2xl"
              >
                {{ project.thumbnail_title }}
              </p>

              <img
                :src="config.app.baseURL + project.thumbnail_url"
                class="h-52 w-96"
                :alt="project.title"
              />
            </div>
          </NuxtLink>
        </ContentList>
      </div>
    </div>
  </div>
</template>
