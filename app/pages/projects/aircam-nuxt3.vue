<script setup>
useHead({
  title: `Project - AirCam Nuxt 3`,
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
          <p class="font-bold text-5xl md:text-6xl text-ink">AirCam</p>
          <p class="font-semibold text-lg text-ink-muted mt-2">(Nuxt 3)</p>
          <p class="font-semibold text-lg text-ink-subtle">
            Late 2021 – May 2022 (Unfinished, Unreleased, Mobile Only)
          </p>
        </div>

        <div class="text-ink-muted text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            AirCam has been rebuilt from scratch using the newly released version of Nuxt. It
            features a new homescreen layout that shuffles the webcam and profile pages available
            from the backend, thanks to a custom backend script I wrote inside of Strapi, which runs
            as a CRON job every half an hour.
          </p>
          <p class="mt-4 bg-note p-4 rounded-xl border border-note-border">
            <span class="font-bold text-note-ink">Note:</span>
            A demo of this project isn't avaiable (demo video can be requested privately) some parts
            of the app are being reused in
            <NuxtLink
              to="/projects/nurnet-plus"
              class="font-semibold underline underline-offset-2 text-link"
              >NurNet Plus</NuxtLink
            >, which has a public demo available.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/aircam-nuxt3-home-2.png" loading="lazy" class="rounded-2xl shadow-sm w-full" />
          <img
            src="/aircam-nuxt3-drawer-2.png"
            loading="lazy"
            class="rounded-2xl shadow-sm w-full"
          />
          <img src="/aircam-nuxt3-home-1.png" loading="lazy" class="rounded-2xl shadow-sm w-full" />
          <img
            src="/aircam-nuxt3-drawer-1.png"
            loading="lazy"
            class="rounded-2xl shadow-sm w-full"
          />
        </div>
      </div>

      <!-- Weather Info -->
      <div class="bg-surface rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center max-w-3xl mx-auto">
          <p class="font-bold text-4xl text-ink mb-4">Weather info</p>
          <p class="text-ink-muted text-lg">
            The cam page now displays the current weather of the webcam coordinates, it’s a simple
            Strapi CRON script that fetches the weather from
            <a class="text-link hover:underline" href="https://wttr.in">wttr.in</a>
            and stores it inside the database.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <img
            src="/aircam-nuxt3-drawer-1.png"
            loading="lazy"
            class="rounded-2xl shadow-sm w-full"
          />
          <img
            src="/aircam-nuxt3-drawer-4.png"
            loading="lazy"
            class="rounded-2xl shadow-sm w-full"
          />
        </div>
      </div>

      <!-- Drawer -->
      <div class="bg-surface rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center max-w-3xl mx-auto">
          <p class="font-bold text-4xl text-ink mb-4">Drawer</p>
          <p class="text-ink-muted text-lg">
            The drawer is a custom component build using two VueUse extensions library
            VueUse/Gesture and VueUse/Motion. It aims to behave like a native OS drawer, while it’s
            not perfect and could be improved, it supports fast and slow gestures, dragging and
            thanks to Vue slots it’s easy to render anything inside of it.
          </p>
        </div>

        <div class="flex justify-center">
          <img
            src="/aircam-nuxt3-drawer-animated.gif"
            loading="lazy"
            class="rounded-2xl shadow-sm w-64"
          />
        </div>
      </div>

      <!-- Map -->
      <div class="bg-surface rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center max-w-3xl mx-auto">
          <p class="font-bold text-4xl text-ink mb-4">Map</p>
          <p class="text-ink-muted text-lg">
            The map uses OpenStreetMap layers which are presented by Leaflet with the leaflet-rotate
            plugin for map rotation. It uses the WebGL renderer which boosts the rendering
            performance.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-4">
          <img src="/aircam-nuxt3-map-1.png" loading="lazy" class="rounded-2xl shadow-sm w-full" />
          <img src="/aircam-nuxt3-map-2.png" loading="lazy" class="rounded-2xl shadow-sm w-full" />
          <img src="/aircam-nuxt3-map-3.png" loading="lazy" class="rounded-2xl shadow-sm w-full" />
        </div>
      </div>

      <!-- ThreeJS -->
      <div class="bg-surface rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center max-w-3xl mx-auto">
          <p class="font-bold text-4xl text-ink mb-4">ThreeJS</p>
          <p class="text-ink-muted text-lg">
            A simple 3D scene has been included for testing purposes, it uses ThreeJS and the
            default OrbitalControls to pan and rotate the camera.
          </p>
        </div>

        <div class="flex justify-center">
          <img
            src="/aircam-nuxt3-threejs-1.png"
            loading="lazy"
            class="rounded-2xl shadow-sm w-64"
          />
        </div>
      </div>
    </div>
  </div>
</template>
