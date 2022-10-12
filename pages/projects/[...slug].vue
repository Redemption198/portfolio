<script setup>
const route = useRoute();
const config = useRuntimeConfig();

const { data } = await useAsyncData(`/projects/${route.params.slug}`, () =>
  queryContent(`/projects/${route.params.slug}`).findOne()
);

useHead({
  title: `Project - ${data.value.title}`,
});
</script>

<template>
  <main
    class="flex min-h-screen w-screen items-center justify-center bg-slate-900"
  >
    <div
      class="m-4 flex w-full flex-col items-center justify-center gap-y-4 xl:w-5/6 xl:gap-y-0"
    >
      <NuxtLink
        to="/"
        class="flex items-center justify-center gap-x-2 self-start rounded-full bg-slate-800 px-4 py-2.5 text-xl font-bold text-slate-100 transition-transform hover:scale-105 active:scale-95"
        ><IconArrowRight class="h-6 w-6 rotate-180 fill-slate-100" />
        Back</NuxtLink
      >
      <ContentRenderer :value="data">
        <div
          fssfasff
          class="flex h-full w-full flex-col gap-4 rounded-2xl bg-slate-800 p-4 xl:m-8 xl:flex-row"
        >
          <img
            :src="config.app.baseURL + data.thumbnail_url"
            class="aspect-video h-auto rounded-lg xl:w-2/3"
            :alt="data.title"
          />

          <div class="flex flex-col justify-start xl:w-1/2">
            <p class="text-3xl font-bold text-slate-100">{{ data.title }}</p>
            <p class="text-xl font-bold text-slate-200">
              {{ data.description }}
            </p>

            <ContentRendererMarkdown :value="data" class="text-slate-300" />

            <p
              v-if="data.builtWithLibs"
              class="mt-4 text-center font-semibold text-slate-100"
            >
              Built with
            </p>

            <div
              class="mb-8 mt-4 grid place-items-center gap-x-4 gap-y-8 sm:grid-cols-2 xl:grid-cols-4"
            >
              <a
                v-for="lib in data.builtWithLibs"
                :key="lib"
                :href="lib.site"
                target="_blank"
                class="transition-transform hover:scale-105 active:scale-95"
              >
                <img
                  v-if="lib.logo"
                  :src="lib.logo"
                  class="w-24"
                  :alt="lib.name"
                />
                <p v-else class="text-center text-lg font-bold text-slate-100">
                  {{ lib.name }}
                </p>
              </a>
            </div>

            <div
              class="mt-auto flex min-w-full items-center justify-end gap-x-4"
            >
              <a
                v-if="data.repository_url"
                target="_blank"
                :href="data.repository_url"
                class="overflow-visible rounded-lg text-center font-semibold transition-transform hover:scale-105 active:scale-95"
                ><GitHubLogo class="h-11 w-11 fill-blue-500" />
              </a>

              <a
                v-if="data.demo_url"
                :href="data.demo_url"
                class="w-full rounded-xl bg-blue-500 px-8 py-2.5 text-center font-semibold text-slate-100 transition-transform hover:scale-105 active:scale-95 xl:w-max"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
        <template #empty>
          <p class="text-white">No content found.</p>
        </template>
      </ContentRenderer>
    </div>
  </main>
</template>
