<script setup>
useHead({
  title: `Project - AirCam`,
});
</script>

<template>
  <div
    class="w-full min-h-screen grid place-items-start bg-slate-900 text-slate-100"
  >
    <div class="w-1/2 mx-auto mt-24">
      <p class="text-center font-bold text-6xl">AirCam</p>
      <p class="text-center font-semibold text-md">(Nuxt 2)</p>
      <p>
        <a href="https://aircam.io/">AirCam</a> is a platform that tries to promote the Sardinian territory by streaming with tiny little cameras placed in points of interests.
        While the main website has been rebuilt multiple times from scratch using the vanilla Vue, we ultimately chose to move on Nuxt 2 for its SSR capabilities, to solve some of our SEO issues.
        The site is also a Progressive Web App and can be installed on supported devices.
        In order to manage the growing content available on the platform we chose to rely on a Strapi instance, with the GraphQL plugin, as our backend.
      </p>


      <div class="w-full flex items-center justify-center gap-8 my-4">
        <a href="https://aircam.io/" target="_blank" class="bg-blue-500 px-8 py-2.5 text-center font-semibold text-slate-100 transition-transform hover:scale-105 active:scale-95 rounded-lg">Aircam Homepage</a>
        <a href="https://web.archive.org/web/20230605124625/http://aircam.io/" target="_blank" class="bg-blue-500 px-8 py-2.5 text-center font-semibold text-slate-100 transition-transform hover:scale-105 active:scale-95 rounded-lg">Aircam Homepage (Archive.org Mirror)</a>
      </div>

      <img class="my-8 overflow-hidden rounded-lg" src="/aircam-home.png" />
    </div>
  </div>
</template>
