<script setup lang="ts">
defineProps({
  thumbnailUrl: String,
  thumbnailTitle: String,
  cssBackground: String,
  cssText: String,
  cssIcon: String,
});

const config = useRuntimeConfig();
</script>

<template>
  <div
    class="h-full w-full overflow-hidden rounded-xl transition-all duration-200"
  >
    <NuxtImg
      v-if="thumbnailUrl"
      :src="thumbnailUrl"
      class="aspect-video h-full w-full object-cover"
      :alt="thumbnailTitle"
      format="webp"
      loading="lazy"
    />
    <div
      v-else
      class="h-full w-full flex flex-col items-center justify-center gap-2"
      :class="cssBackground"
    >
      <Icon v-if="cssIcon" :name="cssIcon" class="text-4xl text-white" />
      <span v-if="cssText" class="text-2xl font-bold text-white">{{
        cssText
      }}</span>
    </div>
  </div>
</template>
