<script setup>
useHead({
  title: `Project - AirCam TV`,
});
</script>

<template>
  <div class="w-full min-h-screen flex flex-col items-center bg-canvas py-12">
    <div class="w-full max-w-5xl px-4 flex flex-col gap-8">
      <NuxtLink
        to="/"
        class="flex items-center justify-center self-start rounded-full bg-surface px-4 py-2.5 text-xl font-bold text-ink-muted shadow-sm transition-transform hover:scale-105 active:scale-95 hover:shadow-md"
      >
        <Icon name="ic:baseline-arrow-back-ios" class="h-6 w-6 text-ink-muted" />Back</NuxtLink
      >

      <!-- Intro -->
      <div class="bg-surface rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center">
          <p class="font-bold text-5xl md:text-6xl text-ink">AirCam TV</p>
          <p class="font-semibold text-lg text-ink-muted mt-2">(Nuxt 3)</p>
          <p class="font-semibold text-lg text-ink-subtle">
            January - February (2022) (Released, Large Screens Only)
          </p>
        </div>

        <div class="text-ink-muted text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            AirCam TV is a separate client built with Nuxt 3, it is meant to run on large screens
            with no interactions in mind, such as Smart TVs or totems.
          </p>
          <p class="mt-4 bg-note p-4 rounded-xl border border-note-border">
            <span class="font-bold text-note-ink">Note:</span>
            Only some pictures from phones are available, sorry for the low quality.
          </p>
        </div>

        <img src="/aircam-tv-1.jpeg" class="w-full rounded-2xl shadow-sm" alt="AirCam TV" />
      </div>

      <!-- Dock -->
      <div class="bg-surface rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center max-w-3xl mx-auto">
          <p class="font-bold text-4xl text-ink mb-4">Dock</p>
          <p class="text-ink-muted text-lg">
            The dock offers some additional info about what’s being played on screen, like a dynamic
            QR Code that points to the cam page on the main AirCam site; the cam name, weather info
            and the current local time.
          </p>
        </div>
      </div>

      <!-- Playlist -->
      <div class="bg-surface rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center max-w-3xl mx-auto">
          <p class="font-bold text-4xl text-ink mb-4">Playlist</p>
          <p class="text-ink-muted text-lg">
            The AirCam TV client plays all cams in loop, a playlist manager (with external video
            support) was planned but never developed.
          </p>
        </div>

        <img src="/aircam-tv-2.jpeg" class="w-full rounded-2xl shadow-sm" alt="Playlist" />
      </div>
    </div>
  </div>
</template>
