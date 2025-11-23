<script setup>
useHead({
  title: "Redemption198's Portfolio",
});

const { data } = await useAsyncData("index", () => {
  return queryCollection("projects").all();
});
</script>

<template>
  <div class="w-full min-h-screen bg-gray-200 flex flex-col">
    <Hero />



    <div class="flex flex-col gap-4 mx-12 pb-8">
      <p class="font-black text-2xl">Projects and stuff</p>

      <div class="flex flex-col gap-8">
        <template v-for="project in data" :key="project.id">
          <ProjectCard :project="project" />
        </template>
      </div>
    </div>
  </div>
</template>

<style>
.animated-box {
  /* Ensure transform is applied smoothly */
  will-change: transform, opacity;
}
</style>
