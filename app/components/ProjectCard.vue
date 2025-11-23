<script setup lang="ts">
defineProps<{
  project: any;
}>();

const handleCardClick = (project: any) => {
  if (project.meta.hasPage) {
    navigateTo(project.path);
  }
};
</script>

<template>
  <div
    class="p-4 rounded-3xl bg-slate-100 flex flex-col md:flex-row gap-6 shadow-sm transition-transform"
    :class="{
      'hover:scale-[1.02] hover:shadow-md cursor-pointer': project.meta.hasPage,
    }"
    @click="handleCardClick(project)"
  >
    <div
      class="rounded-2xl w-full md:w-72 h-48 flex-shrink-0 overflow-hidden"
      :class="project.meta.css_background || 'bg-blue-500'"
    >
      <TheImage
        :thumbnail-url="project.meta.thumbnail_url"
        :thumbnail-title="project.title"
        :css-background="project.meta.css_background"
        :css-text="project.meta.css_text"
        :css-icon="project.meta.css_icon"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="flex flex-col gap-3 py-2">
      <div class="flex flex-col">
        <p class="font-bold text-2xl text-slate-800">{{ project.title }}</p>
        <p class="font-semibold text-lg text-slate-600">
          {{ project.description }}
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <NuxtLink
          v-for="lib in project.meta.builtWithLibs"
          :key="lib.name"
          :to="lib.site"
          target="_blank"
          external
          class="transition-transform hover:scale-105 active:scale-95 bg-slate-200 rounded-full px-3 py-1 flex items-center gap-2"
          @click.stop
        >
          <div v-if="lib.logo" class="flex items-center justify-center">
            <Icon :name="lib.logo" class="text-sm" />
          </div>
          <p
            class="text-center text-sm font-bold text-slate-800 whitespace-nowrap"
          >
            {{ lib.name }}
          </p>
        </NuxtLink>
      </div>

      <div class="flex items-center gap-3 mt-auto">
        <NuxtLink
          v-if="project.meta.repository_url"
          :to="project.meta.repository_url"
          target="_blank"
          external
          class="flex items-center gap-2 px-4 py-2 bg-slate-200 rounded-xl transition-transform hover:scale-105 active:scale-95 hover:bg-slate-300"
          @click.stop
        >
          <Icon name="simple-icons:github" class="text-lg text-slate-800" />
          <span class="text-sm font-bold text-slate-800">Source</span>
        </NuxtLink>

        <NuxtLink
          v-if="project.meta.demo_url"
          :to="project.meta.demo_url"
          target="_blank"
          external
          class="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-xl transition-transform hover:scale-105 active:scale-95 hover:bg-blue-600 shadow-sm hover:shadow-md"
          @click.stop
        >
          <Icon name="ic:round-play-arrow" class="text-lg text-white" />
          <span class="text-sm font-bold text-white">Demo</span>
        </NuxtLink>

        <NuxtLink
          v-for="link in project.meta.extraLinks"
          :key="link.text"
          :to="link.url"
          target="_blank"
          external
          class="flex items-center gap-2 px-4 py-2 bg-slate-200 rounded-xl transition-transform hover:scale-105 active:scale-95 hover:bg-slate-300"
          @click.stop
        >
          <Icon v-if="link.icon" :name="link.icon" class="text-lg" />
          <span class="text-sm font-bold text-slate-800">{{ link.text }}</span>
        </NuxtLink>
      </div>

      <ContentRenderer :value="project.body" class="text-slate-600" />
    </div>
  </div>
</template>
