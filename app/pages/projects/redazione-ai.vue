<script setup>
useHead({
  title: `Project - Redazione AI`,
});
</script>

<template>
  <div
    class="w-full min-h-screen grid place-items-start bg-slate-900 text-slate-100"
  >
    <!-- Title & Intro -->
    <div class="w-1/2 mx-auto mt-24">
      <p class="text-center font-bold text-6xl">Redazione AI</p>
      <p class="text-center font-semibold text-md">
        (Nuxt 4 + PrimeVue + Laravel + n8n)
      </p>
      <p class="font-semibold text-lg mt-2">2025 – Ongoing (Web App)</p>
      <p>
        Redazione AI is a modern editorial management platform built with
        <span class="font-semibold">Nuxt 4</span> and
        <span class="font-semibold">PrimeVue</span> on the frontend,
        <span class="font-semibold">Laravel</span> for backend services, and
        <span class="font-semibold">n8n</span> for workflow automation and
        AI-based article & editorial plan generation.
      </p>

      <p class="my-2">
        <span class="font-semibold">Note:</span>
        Redazione AI provides tools for managing editorial teams, generating
        content plans automatically with AI, and streamlining publishing
        workflows across multiple social platforms.
      </p>
    </div>

    <!-- Article Generation Section -->
    <div class="w-1/2 mx-auto mt-24">
      <p class="text-center font-bold text-5xl mb-4">Article Generator</p>
      <p>
        AI-powered article creation driven by
        <span class="font-semibold">n8n workflows</span>, with support for
        multiple input sources and export formats.
      </p>
    </div>

    <div
      class="flex flex-col items-center gap-8 justify-evenly w-3/5 mx-auto my-8"
    >
      <img
        src="/redazione-ai/generate-article-redazione.png"
        alt="Dashboard Redazione AI"
        loading="lazy"
        class="overflow-hidden rounded-lg"
      />
    </div>

    <div
      class="flex flex-col items-center gap-8 justify-evenly w-3/5 mx-auto my-8"
    >
      <img
        src="/redazione-ai/article-preview-redazione.png"
        alt="Dashboard Redazione AI"
        loading="lazy"
        class="overflow-hidden rounded-lg"
      />
    </div>

    <!-- Dashboard Section -->
    <div class="w-1/2 mx-auto mt-24">
      <p class="text-center font-bold text-5xl mb-4">Dashboard</p>
      <p>
        The admin dashboard allows editors to manage multiple redazioni
        (editorial groups), credits, users, and subscription plans. It’s powered
        by Laravel APIs and presented with PrimeVue’s dynamic data tables.
      </p>
    </div>

    <div
      class="flex flex-col items-center gap-8 justify-evenly w-3/5 mx-auto my-8"
    >
      <img
        src="/redazione-ai/admin-dashboard-redazione.png"
        alt="Dashboard Redazione AI"
        loading="lazy"
        class="overflow-hidden rounded-lg"
      />
    </div>

    <!-- Editorial Plan Generator -->
    <div class="w-1/2 mx-auto mt-24">
      <p class="text-center font-bold text-5xl mb-4">
        Editorial Plan Generator
      </p>
      <p>
        A unique feature of Redazione AI is the generation of editorial plans.
        By integrating
        <span class="font-semibold">n8n workflows</span> with large language
        models, editors can generate post schedules, AI-written article drafts,
        and accompanying images for different platforms.
      </p>
    </div>

    <div
      class="flex flex-col items-center gap-8 justify-evenly w-3/5 mx-auto my-8"
    >
      <img
        src="/redazione-ai/editorial-plan-single-redazione.png"
        alt="Editorial Plan Generator"
        loading="lazy"
        class="overflow-hidden rounded-lg"
      />
    </div>

    <!-- User Management -->
    <div class="w-1/2 mx-auto mt-24">
      <p class="text-center font-bold text-5xl mb-4">User Management</p>
      <p>
        User and team management is seamlessly handled within the dashboard.
        Admins can add editors, assign roles, and manage authentication through
        Laravel’s secure backend.
      </p>
    </div>

    <div
      class="flex flex-col items-center gap-8 justify-evenly w-2/5 mx-auto my-8"
    >
      <img
        src="/redazione-ai/user-edit-redazione.png"
        alt="User Management"
        loading="lazy"
        class="overflow-hidden rounded-lg"
      />
    </div>

    <!-- Automation -->
    <div class="w-1/2 mx-auto mt-24">
      <p class="text-center font-bold text-5xl mb-4">Automation with n8n</p>
      <p>
        Behind the scenes, <span class="font-semibold">n8n</span> orchestrates
        workflows that connect AI models and image generators. This makes
        Redazione AI flexible, extendable, and ready for custom integrations.
      </p>
    </div>

    <div
      class="flex flex-col items-center gap-8 justify-evenly w-3/5 mx-auto my-8"
    >
      <img
        src="/redazione-ai/n8n-redazione.png"
        alt="Dashboard Redazione AI"
        loading="lazy"
        class="overflow-hidden rounded-lg"
      />
    </div>
  </div>
</template>
