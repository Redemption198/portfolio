<script setup lang="ts">
defineProps({
  thumbnailUrl: String,
  thumbnailTitle: String,
});

const config = useRuntimeConfig();
</script>

<template>
  <div
    class="h-full w-full overflow-hidden rounded-xl transition-all duration-200"
  >
    <img
      :src="config.app.baseURL + thumbnailUrl"
      class="aspect-video h-full w-full object-fill"
      :alt="thumbnailTitle"
    />
  </div>
</template>
