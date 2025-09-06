<script setup>
useHead({
  title: `Project - AirCam TV`,
});
</script>

<template>
  <div
    class="w-full min-h-screen grid place-items-start bg-slate-900 text-slate-100"
  >
    <div class="w-1/2 mx-auto my-12">
      <p class="text-center font-bold text-6xl">AirCam TV</p>
      <p class="text-center font-semibold text-md">(Nuxt 3)</p>
      <p class="font-semibold text-lg mt-2">
        January - February (2022) (Released, Large Screens Only)
      </p>
      <p>
        AirCam TV is a separate client built with Nuxt 3, it is meant to run on large screens with no interactions in mind, such as Smart TVs or totems.
      </p>

      <p class="my-2">
        <span class="font-semibold">Note:</span>
        Only some pictures from phones are available, sorry for the low quality.
      </p>

      <img src="/aircam-tv-1.jpeg" class="overflow-hidden rounded-lg" alt="" />
    </div>

    <div class="w-1/2 mx-auto my-12">
      <p class="text-center font-bold text-5xl">Dock</p>
      <p class="my-2">
        The dock offers some additional info about what’s being played on screen, like a dynamic QR Code that points to the  cam page on the main AirCam site; the cam name, weather info and the current local time.
      </p>
    </div>

    <div class="w-1/2 mx-auto my-12">
      <p class="text-center font-bold text-5xl">Playlist</p>
      <p class="my-2">
        The AirCam TV client plays all cams in loop, a playlist manager (with external video support) was planned but never developed.
      </p>

      <img src="/aircam-tv-2.jpeg" class="overflow-hidden rounded-lg" alt="" />
    </div>
  </div>
</template>
