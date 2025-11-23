<template>
  <div
    class="flex flex-col items-center gap-2 text-gray-400 transition cursor-pointer w-fit"
  >
    <div class="relative">
      <div
        class="w-20 h-20 border-gray-500 border-2 bg-gray-100 text-gray-400 rounded-lg flex items-center justify-center isolate relative"
        :class="{
          'border-green-500': success,
          'border-red-500': error,
          'outline-gray-400 outline-2 outline-offset-1': selected,
        }"
      >
        <div>
          <Icon name="mingcute:code-line" class="text-5xl" />
        </div>

        <div
          v-if="isLoading"
          class="absolute inset-0 flex items-center justify-center text-5xl text-orange-400 z-10 bg-gray-100/80"
        >
          <Icon name="ph:arrows-clockwise-bold" class="animate-spin" />
        </div>

        <div
          v-else-if="success"
          class="absolute right-1 bottom-1 flex items-center justify-center"
        >
          <Icon name="material-symbols:check-rounded" class="text-green-500" />
        </div>
        <div
          v-else-if="error"
          class="absolute right-1 bottom-1 flex items-center justify-center"
        >
          <Icon name="tabler:circle-x-filled" class="text-red-500" />
        </div>
      </div>
      <div
        v-if="displayInputPoint"
        class="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-4 bg-gray-400"
      />
      <div
        v-if="displayOutputPointAdd"
        class="absolute top-1/2 -translate-y-1/2 -right-1.5 w-4 h-4 bg-gray-400 rounded-full"
      />
    </div>

    <div>
      <p class="text-sm text-gray-700">Super Cool Node</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  displayInputPoint: {
    type: Boolean,
    default: true,
  },
  displayOutputPointAdd: {
    type: Boolean,
    default: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  success: {
    type: Boolean,
    default: true,
  },
  error: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Boolean,
    default: false,
  },
});
</script>
