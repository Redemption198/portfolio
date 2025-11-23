<script setup>
useHead({
  title: `Project - AirCam`,
});
</script>

<template>
  <div
    class="w-full min-h-screen flex flex-col items-center bg-gray-200 py-12"
  >
    <div class="w-full max-w-5xl px-4 flex flex-col gap-8">
      <NuxtLink
        to="/"
        class="flex items-center justify-center self-start rounded-full bg-slate-100 px-4 py-2.5 text-xl font-bold text-slate-600 shadow-sm transition-transform hover:scale-105 active:scale-95 hover:shadow-md"
      >
        <Icon
          name="ic:baseline-arrow-back-ios"
          class="h-6 w-6 text-slate-600"
        />Back</NuxtLink
      >

      <div class="bg-slate-100 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center">
          <p class="font-bold text-6xl text-slate-800">AirCam</p>
          <p class="font-semibold text-lg text-slate-600 mt-2">(Nuxt 2)</p>
        </div>

        <div class="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            <a
              href="https://aircam.io/"
              class="text-blue-500 hover:underline font-semibold"
              >AirCam</a
            >
            is a platform that tries to promote the Sardinian territory by
            streaming with tiny little cameras placed in points of interests.
            While the main website has been rebuilt multiple times from scratch
            using the vanilla Vue, we ultimately chose to move on Nuxt 2 for its
            SSR capabilities, to solve some of our SEO issues. The site is also
            a Progressive Web App and can be installed on supported devices. In
            order to manage the growing content available on the platform we
            chose to rely on a Strapi instance, with the GraphQL plugin, as our
            backend.
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-4 my-4">
          <a
            href="https://aircam.io/"
            target="_blank"
            class="bg-blue-500 px-6 py-2.5 text-center font-bold text-white rounded-xl shadow-sm transition-transform hover:scale-105 hover:shadow-md active:scale-95"
            >Aircam Homepage</a
          >
          <a
            href="https://web.archive.org/web/20230605124625/http://aircam.io/"
            target="_blank"
            class="bg-slate-200 px-6 py-2.5 text-center font-bold text-slate-700 rounded-xl transition-transform hover:scale-105 active:scale-95"
            >Archive.org Mirror</a
          >
        </div>

        <img
          class="w-full rounded-2xl shadow-sm"
          src="/aircam-home.png"
          alt="AirCam Homepage"
        />
      </div>
    </div>
  </div>
</template>
