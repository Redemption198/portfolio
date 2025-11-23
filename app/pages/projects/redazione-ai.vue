<script setup>
useHead({
  title: `Project - Redazione AI`,
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

      <!-- Title & Intro -->
      <div class="bg-slate-100 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center">
          <p class="font-bold text-5xl md:text-6xl text-slate-800">
            Redazione AI
          </p>
          <p class="font-semibold text-lg text-slate-600 mt-2">
            (Nuxt 4 + PrimeVue + Laravel + n8n)
          </p>
          <p class="font-semibold text-lg text-slate-500">
            2025 – Ongoing (Web App)
          </p>
        </div>

        <div class="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            Redazione AI is a modern editorial management platform built with
            <span class="font-bold text-slate-800">Nuxt 4</span> and
            <span class="font-bold text-slate-800">PrimeVue</span> on the
            frontend,
            <span class="font-bold text-slate-800">Laravel</span> for backend
            services, and
            <span class="font-bold text-slate-800">n8n</span> for workflow
            automation and AI-based article & editorial plan generation.
          </p>
          <p class="mt-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
            <span class="font-bold text-blue-800">Note:</span>
            Redazione AI provides tools for managing editorial teams, generating
            content plans automatically with AI, and streamlining publishing
            workflows across multiple social platforms.
          </p>
        </div>
      </div>

      <!-- Article Generation Section -->
      <div class="bg-slate-100 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center max-w-3xl mx-auto">
          <p class="font-bold text-4xl text-slate-800 mb-4">
            Article Generator
          </p>
          <p class="text-slate-600 text-lg">
            AI-powered article creation driven by
            <span class="font-bold text-slate-800">n8n workflows</span>, with
            support for multiple input sources and export formats.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <img
            src="/redazione-ai/generate-article-redazione.png"
            alt="Generate Article"
            loading="lazy"
            class="rounded-2xl shadow-sm w-full"
          />
          <img
            src="/redazione-ai/article-preview-redazione.png"
            alt="Article Preview"
            loading="lazy"
            class="rounded-2xl shadow-sm w-full"
          />
        </div>
      </div>

      <!-- Dashboard Section -->
      <div class="bg-slate-100 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center max-w-3xl mx-auto">
          <p class="font-bold text-4xl text-slate-800 mb-4">Dashboard</p>
          <p class="text-slate-600 text-lg">
            The admin dashboard allows editors to manage multiple redazioni
            (editorial groups), credits, users, and subscription plans. It’s
            powered by Laravel APIs and presented with PrimeVue’s dynamic data
            tables.
          </p>
        </div>
        <img
          src="/redazione-ai/admin-dashboard-redazione.png"
          alt="Admin Dashboard"
          loading="lazy"
          class="rounded-2xl shadow-sm w-full"
        />
      </div>

      <!-- Editorial Plan Generator -->
      <div class="bg-slate-100 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center max-w-3xl mx-auto">
          <p class="font-bold text-4xl text-slate-800 mb-4">
            Editorial Plan Generator
          </p>
          <p class="text-slate-600 text-lg">
            A unique feature of Redazione AI is the generation of editorial
            plans. By integrating
            <span class="font-bold text-slate-800">n8n workflows</span> with
            large language models, editors can generate post schedules,
            AI-written article drafts, and accompanying images for different
            platforms.
          </p>
        </div>
        <img
          src="/redazione-ai/editorial-plan-single-redazione.png"
          alt="Editorial Plan"
          loading="lazy"
          class="rounded-2xl shadow-sm w-full"
        />
      </div>

      <!-- User Management -->
      <div class="bg-slate-100 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center max-w-3xl mx-auto">
          <p class="font-bold text-4xl text-slate-800 mb-4">
            User Management
          </p>
          <p class="text-slate-600 text-lg">
            User and team management is seamlessly handled within the dashboard.
            Admins can add editors, assign roles, and manage authentication
            through Laravel’s secure backend.
          </p>
        </div>
        <img
          src="/redazione-ai/user-edit-redazione.png"
          alt="User Management"
          loading="lazy"
          class="rounded-2xl shadow-sm w-full max-w-3xl mx-auto"
        />
      </div>

      <!-- Automation -->
      <div class="bg-slate-100 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
        <div class="text-center max-w-3xl mx-auto">
          <p class="font-bold text-4xl text-slate-800 mb-4">
            Automation with n8n
          </p>
          <p class="text-slate-600 text-lg">
            Behind the scenes,
            <span class="font-bold text-slate-800">n8n</span> orchestrates
            workflows that connect AI models and image generators. This makes
            Redazione AI flexible, extendable, and ready for custom
            integrations.
          </p>
        </div>
        <img
          src="/redazione-ai/n8n-redazione.png"
          alt="n8n Workflow"
          loading="lazy"
          class="rounded-2xl shadow-sm w-full"
        />
      </div>
    </div>
  </div>
</template>
