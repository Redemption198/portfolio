<script setup>
import { Starport } from "vue-starport";
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
    class="flex min-h-screen w-screen items-center justify-center bg-slate-900"
  >
    <div
      class="m-4 flex w-full flex-col items-center justify-center gap-y-4 xl:w-5/6 xl:gap-y-0"
    >
      <NuxtLink
        to="/"
        class="flex items-center justify-center self-start rounded-full bg-slate-800 px-4 py-2.5 text-xl font-bold text-slate-100 transition-transform hover:scale-105 active:scale-95"
      >
        <Icon
          name="ic:baseline-arrow-back-ios"
          class="h-6 w-6 text-slate-100"
        />Back</NuxtLink
      >

      <div
        class="flex h-full w-full flex-col gap-4 rounded-2xl bg-slate-800 p-4 xl:m-8 xl:flex-row"
      >
        <Starport
          :port="data.path"
          class="min-h-[20vh] transition-all duration-75 xl:min-h-[50vh] xl:w-2/3"
        >
          <TheImage
            :thumbnail-url="data.meta.thumbnail_url"
            :thumbnail-title="data.title"
          />
        </Starport>
        <div class="flex flex-col justify-start xl:w-1/2">
          <p class="text-3xl font-bold text-slate-100">{{ data.title }}</p>
          <p class="text-xl font-bold text-slate-200">
            {{ data.description }}
          </p>

          <ContentRenderer :value="data.body" class="text-slate-300" />

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

          <div class="mt-auto flex min-w-full items-center justify-end gap-x-4">
            <a
              v-if="data.meta.repository_url"
              target="_blank"
              :href="data.meta.repository_url"
              class="overflow-visible rounded-lg text-center font-semibold transition-transform hover:scale-105 active:scale-95"
            >
              <Icon
                name="simple-icons:github"
                class="h-11 w-11 text-blue-500"
              />
            </a>

            <a
              v-if="data.meta.demo_url"
              :href="data.meta.demo_url"
              class="w-full rounded-xl bg-blue-500 px-8 py-2.5 text-center font-semibold text-slate-100 transition-transform hover:scale-105 active:scale-95 xl:w-max"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
