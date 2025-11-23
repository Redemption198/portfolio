<script setup>
const router = useRouter();
const route = useRoute();

const { data } = await useAsyncData(route.path, () => {
  return queryCollection("projects").path(route.path).first();
});

if (!data.value) router.push("/");

useHead({
  title: `Project - ${data.value.title}`,
});
</script>

<template>
  <main
    class="flex min-h-screen w-screen items-center justify-center bg-gray-200 py-12"
  >
    <div
      class="m-4 flex w-full flex-col items-center justify-center gap-y-4 xl:w-5/6 xl:gap-y-6 max-w-6xl"
    >
      <NuxtLink
        to="/"
        class="flex items-center justify-center self-start rounded-full bg-slate-100 px-4 py-2.5 text-xl font-bold text-slate-600 shadow-sm transition-transform hover:scale-105 active:scale-95 hover:shadow-md"
      >
        <Icon
          name="ic:baseline-arrow-back-ios"
          class="h-6 w-6 text-slate-600"
        />Back</NuxtLink
      >

      <div
        class="flex h-full w-full flex-col gap-8 rounded-3xl bg-slate-100 p-8 shadow-sm xl:flex-row"
      >
        <div
          class="min-h-[20vh] w-full overflow-hidden rounded-2xl xl:min-h-[50vh] xl:w-2/3"
        >
          <TheImage
            :thumbnail-url="data.meta.thumbnail_url"
            :thumbnail-title="data.title"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="flex flex-col justify-start gap-4 xl:w-1/2">
          <div>
            <p class="text-3xl font-bold text-slate-800">{{ data.title }}</p>
            <p class="text-xl font-semibold text-slate-600">
              {{ data.description }}
            </p>
          </div>

          <ContentRenderer :value="data.body" class="text-slate-600 text-lg" />

          <div class="mt-auto flex flex-col gap-4">
            <div v-if="data.builtWithLibs">
              <p class="font-semibold text-slate-800 mb-2">Built with</p>
              <div class="flex flex-wrap gap-3">
                <a
                  v-for="lib in data.builtWithLibs"
                  :key="lib.name"
                  :href="lib.site"
                  target="_blank"
                  class="flex items-center gap-2 rounded-full bg-slate-200 px-3 py-1 transition-transform hover:scale-105 active:scale-95"
                >
                  <Icon v-if="lib.logo" :name="lib.logo" class="h-5 w-5" />
                  <span class="text-sm font-bold text-slate-700">{{
                    lib.name
                  }}</span>
                </a>
              </div>
            </div>

            <div class="flex items-center gap-4 mt-4">
              <a
                v-if="data.meta.repository_url"
                target="_blank"
                :href="data.meta.repository_url"
                class="rounded-lg transition-transform hover:scale-110 active:scale-95"
              >
                <Icon
                  name="simple-icons:github"
                  class="h-10 w-10 text-slate-700 hover:text-slate-900"
                />
              </a>

              <a
                v-if="data.meta.demo_url"
                :href="data.meta.demo_url"
                class="rounded-xl bg-blue-500 px-6 py-2 text-center font-bold text-white shadow-sm transition-transform hover:scale-105 hover:shadow-md active:scale-95"
                target="_blank"
              >
                View Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
