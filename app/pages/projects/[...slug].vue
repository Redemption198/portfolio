<script setup>
const route = useRoute();

const { data } = await useAsyncData(route.path, () => {
  return queryCollection("projects").path(route.path).first();
});

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Project not found", fatal: true });
}

useHead({
  title: `Project - ${data.value.title}`,
});
</script>

<template>
  <main class="flex min-h-screen w-screen items-center justify-center bg-canvas py-12">
    <div
      class="m-4 flex w-full flex-col items-center justify-center gap-y-4 xl:w-5/6 xl:gap-y-6 max-w-6xl"
    >
      <NuxtLink
        to="/"
        class="flex items-center justify-center self-start rounded-full bg-surface px-4 py-2.5 text-xl font-bold text-ink-muted shadow-sm transition-transform hover:scale-105 active:scale-95 hover:shadow-md"
      >
        <Icon name="ic:baseline-arrow-back-ios" class="h-6 w-6 text-ink-muted" />Back</NuxtLink
      >

      <div
        class="flex h-full w-full flex-col gap-8 rounded-3xl bg-surface p-8 shadow-sm xl:flex-row"
      >
        <div class="min-h-[20vh] w-full overflow-hidden rounded-2xl xl:min-h-[50vh] xl:w-2/3">
          <TheImage
            :thumbnail-url="data.meta.thumbnail_url"
            :thumbnail-title="data.title"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="flex flex-col justify-start gap-4 xl:w-1/2">
          <div>
            <p class="text-3xl font-bold text-ink">{{ data.title }}</p>
            <p class="text-xl font-semibold text-ink-muted">
              {{ data.description }}
            </p>
          </div>

          <ContentRenderer :value="data.body" class="text-ink-muted text-lg" />

          <div class="mt-auto flex flex-col gap-4">
            <div v-if="data.meta.builtWithLibs">
              <p class="font-semibold text-ink mb-2">Built with</p>
              <div class="flex flex-wrap gap-3">
                <a
                  v-for="lib in data.meta.builtWithLibs"
                  :key="lib.name"
                  :href="lib.site"
                  target="_blank"
                  class="flex items-center gap-2 rounded-full bg-chip px-3 py-1 transition-transform hover:scale-105 active:scale-95"
                >
                  <Icon v-if="lib.logo" :name="lib.logo" class="h-5 w-5" />
                  <span class="text-sm font-bold text-ink-soft">{{ lib.name }}</span>
                </a>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-3 mt-4">
              <a
                v-if="data.meta.repository_url"
                target="_blank"
                :href="data.meta.repository_url"
                class="flex items-center gap-2 px-4 py-2 bg-chip rounded-xl transition-transform hover:scale-105 active:scale-95 hover:bg-chip-hover"
              >
                <Icon name="simple-icons:github" class="text-lg text-ink" />
                <span class="text-sm font-bold text-ink">Source</span>
              </a>

              <a
                v-if="data.meta.demo_url"
                :href="data.meta.demo_url"
                class="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-xl transition-transform hover:scale-105 active:scale-95 hover:bg-blue-600 shadow-sm hover:shadow-md"
                target="_blank"
              >
                <Icon name="ic:round-play-arrow" class="text-lg text-white" />
                <span class="text-sm font-bold text-white">Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
