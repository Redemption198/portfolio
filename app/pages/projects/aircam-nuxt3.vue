<script setup>
useHead({
  title: `Project - AirCam Nuxt 3`,
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

      <!-- Intro -->
      <div class="bg-slate-100 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center">
          <p class="font-bold text-5xl md:text-6xl text-slate-800">AirCam</p>
          <p class="font-semibold text-lg text-slate-600 mt-2">(Nuxt 3)</p>
          <p class="font-semibold text-lg text-slate-500">
            Late 2021 – May 2022 (Unfinished, Unreleased, Mobile Only)
          </p>
        </div>

        <div class="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            AirCam has been rebuilt from scratch using the newly released
            version of Nuxt. It features a new homescreen layout that shuffles
            the webcam and profile pages available from the backend, thanks to a
            custom backend script I wrote inside of Strapi, which runs as a CRON
            job every half an hour.
          </p>
          <p class="mt-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
            <span class="font-bold text-blue-800">Note:</span>
            A demo of this project isn't avaiable (demo video can be requested
            privately) some parts of the app are being reused in
            <NuxtLink
              to="/projects/nurnet-plus"
              class="font-semibold underline underline-offset-2 text-blue-600"
              >NurNet Plus</NuxtLink
            >, which has a public demo available.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src="/aircam-nuxt3-home-2.png"
            loading="lazy"
            class="rounded-2xl shadow-sm w-full"
          />
          <img
            src="/aircam-nuxt3-drawer-2.png"
            loading="lazy"
            class="rounded-2xl shadow-sm w-full"
          />
          <img
            src="/aircam-nuxt3-home-1.png"
            loading="lazy"
            class="rounded-2xl shadow-sm w-full"
          />
          <img
            src="/aircam-nuxt3-drawer-1.png"
            loading="lazy"
            class="rounded-2xl shadow-sm w-full"
          />
        </div>
      </div>

      <!-- Weather Info -->
      <div class="bg-slate-100 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center max-w-3xl mx-auto">
          <p class="font-bold text-4xl text-slate-800 mb-4">Weather info</p>
          <p class="text-slate-600 text-lg">
            The cam page now displays the current weather of the webcam
            coordinates, it’s a simple Strapi CRON script that fetches the
            weather from
            <a class="text-blue-500 hover:underline" href="https://wttr.in"
              >wttr.in</a
            >
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
      <div class="bg-slate-100 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center max-w-3xl mx-auto">
          <p class="font-bold text-4xl text-slate-800 mb-4">Drawer</p>
          <p class="text-slate-600 text-lg">
            The drawer is a custom component build using two VueUse extensions
            library VueUse/Gesture and VueUse/Motion. It aims to behave like a
            native OS drawer, while it’s not perfect and could be improved, it
            supports fast and slow gestures, dragging and thanks to Vue slots
            it’s easy to render anything inside of it.
          </p>
        </div>

        <div class="flex justify-center">
          <img
            src="/aircam-nuxt3-drawer-animated.gif"
            loading="lazy"
            class="rounded-2xl shadow-sm w-64"
          />
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

      <!-- Map -->
      <div class="bg-slate-100 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center max-w-3xl mx-auto">
          <p class="font-bold text-4xl text-slate-800 mb-4">Map</p>
          <p class="text-slate-600 text-lg">
            The map uses OpenStreetMap layers which are presented by Leaflet
            with the leaflet-rotate plugin for map rotation. It uses the WebGL
            renderer which boosts the rendering performance.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-4">
          <img
            src="/aircam-nuxt3-map-1.png"
            loading="lazy"
            class="rounded-2xl shadow-sm w-full"
          />
          <img
            src="/aircam-nuxt3-map-2.png"
            loading="lazy"
            class="rounded-2xl shadow-sm w-full"
          />
          <img
            src="/aircam-nuxt3-map-3.png"
            loading="lazy"
            class="rounded-2xl shadow-sm w-full"
          />
        </div>
      </div>

      <!-- ThreeJS -->
      <div class="bg-slate-100 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center max-w-3xl mx-auto">
          <p class="font-bold text-4xl text-slate-800 mb-4">ThreeJS</p>
          <p class="text-slate-600 text-lg">
            A simple 3D scene has been included for testing purposes, it uses
            ThreeJS and the default OrbitalControls to pan and rotate the
            camera.
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
