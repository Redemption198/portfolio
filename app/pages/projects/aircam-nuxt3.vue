<script setup>
useHead({
  title: `Project - AirCam Nuxt 3`,
});
</script>

<template>
  <div
    class="w-full min-h-screen grid place-items-start bg-slate-900 text-slate-100"
  >
    <div class="w-1/2 mx-auto mt-24">
      <p class="text-center font-bold text-6xl">AirCam</p>
      <p class="text-center font-semibold text-md">(Nuxt 3)</p>
      <p class="font-semibold text-lg mt-2">
        Late 2021 – May 2022 (Unfinished, Unreleased, Mobile Only)
      </p>
      <p>
        AirCam has been rebuilt from scratch using the newly released version of
        Nuxt. It features a new homescreen layout that shuffles the webcam and
        profile pages available from the backend, thanks to a custom backend
        script I wrote inside of Strapi, which runs as a CRON job every half an
        hour.
      </p>

      <p class="my-2">
        <span class="font-semibold">Note:</span>
        A demo of this project isn't avaiable (demo video can be requested
        privately) some parts of the app are being reused in
        <NuxtLink
          to="/projects/nurnet-plus"
          class="font-semibold underline underline-offset-2"
          >NurNet Plus</NuxtLink
        >, which has a public demo available.
      </p>
    </div>

    <div
      class="flex flex-col lg:flex-row items-center gap-8 justify-evenly w-4/5 mx-auto my-8"
    >
      <div>
        <img
          src="/aircam-nuxt3-home-2.png"
          alt=""
          loading="lazy"
          class="overflow-hidden rounded-lg"
        />
      </div>
      <div>
        <img
          src="/aircam-nuxt3-drawer-2.png"
          alt=""
          loading="lazy"
          class="overflow-hidden rounded-lg"
        />
      </div>
      <div>
        <img
          src="/aircam-nuxt3-home-1.png"
          alt=""
          loading="lazy"
          class="overflow-hidden rounded-lg"
        />
      </div>
      <div>
        <img
          src="/aircam-nuxt3-drawer-1.png"
          alt=""
          loading="lazy"
          class="overflow-hidden rounded-lg"
        />
      </div>

      <div>
        <img
          src="/aircam-nuxt3-drawer-3.png"
          alt=""
          loading="lazy"
          class="overflow-hidden rounded-lg"
        />
      </div>
    </div>

    <div class="w-1/2 mx-auto mt-24">
      <p class="text-center font-bold text-5xl mb-4">Weather info</p>
      <p>
        The cam page now displays the current weather of the webcam coordinates,
        it’s a simple Strapi CRON script that fetches the weather from
        <a class="underline" href="https://wttr.in">wttr.in</a>
        and stores it inside the database.
      </p>
    </div>

    <div
      class="flex flex-col lg:flex-row items-center gap-8 justify-evenly w-1/3 mx-auto my-8"
    >
      <div>
        <img
          src="/aircam-nuxt3-drawer-1.png"
          alt=""
          loading="lazy"
          class="overflow-hidden rounded-lg"
        />
      </div>

      <div>
        <img
          src="/aircam-nuxt3-drawer-4.png"
          alt=""
          loading="lazy"
          class="overflow-hidden rounded-lg"
        />
      </div>
    </div>

    <div class="w-1/2 mx-auto mt-24">
      <p class="text-center font-bold text-5xl mb-4">Drawer</p>
      <p>
        The drawer is a custom component build using two VueUse extensions
        library VueUse/Gesture and VueUse/Motion. It aims to behave like a
        native OS drawer, while it’s not perfect and could be improved, it
        supports fast and slow gestures, dragging and thanks to Vue slots it’s
        easy to render anything inside of it.
      </p>
    </div>

    <div
      class="flex flex-col mx-8 items-center gap-8 justify-evenly lg:w-1/6 lg:mx-auto my-8"
    >
      <div>
        <img
          src="/aircam-nuxt3-drawer-animated.gif"
          alt=""
          loading="lazy"
          class="overflow-hidden rounded-lg"
        />
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row items-center gap-8 justify-evenly w-1/3 mx-auto my-8"
    >
      <div>
        <img
          src="/aircam-nuxt3-drawer-1.png"
          alt=""
          loading="lazy"
          class="overflow-hidden rounded-lg"
        />
      </div>
      <div>
        <img
          src="/aircam-nuxt3-drawer-4.png"
          alt=""
          loading="lazy"
          class="overflow-hidden rounded-lg"
        />
      </div>
    </div>

    <div class="w-1/2 mx-auto mt-24">
      <p class="text-center font-bold text-5xl mb-4">Map</p>
      <p>
        The map uses OpenStreetMap layers which are presented by Leaflet with
        the leaflet-rotate plugin for map rotation. It uses the WebGL renderer
        which boosts the rendering performance.
      </p>
    </div>

    <div
      class="flex flex-col lg:flex-row items-center gap-8 justify-evenly w-1/2 mx-auto my-8"
    >
      <div>
        <img
          src="/aircam-nuxt3-map-1.png"
          alt=""
          loading="lazy"
          class="overflow-hidden rounded-lg"
        />
      </div>

      <div>
        <img
          src="/aircam-nuxt3-map-2.png"
          alt=""
          loading="lazy"
          class="overflow-hidden rounded-lg"
        />
      </div>

      <div>
        <img
          src="/aircam-nuxt3-map-3.png"
          alt=""
          loading="lazy"
          class="overflow-hidden rounded-lg"
        />
      </div>
    </div>

    <div class="w-1/2 mx-auto mt-24">
      <p class="text-center font-bold text-5xl mb-4">ThreeJS</p>
      <p>
        A simple 3D scene has been included for testing purposes, it uses
        ThreeJS and the default OrbitalControls to pan and rotate the camera.
      </p>
    </div>

    <div
      class="flex flex-col mx-8 items-center gap-8 justify-evenly lg:w-1/6 lg:mx-auto my-8"
    >
      <div>
        <img
          src="/aircam-nuxt3-threejs-1.png"
          alt=""
          loading="lazy"
          class="overflow-hidden rounded-lg"
        />
      </div>
    </div>
  </div>
</template>
