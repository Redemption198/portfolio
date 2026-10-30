<script setup lang="ts">
const isDark = ref(false);

const apply = (theme: "light" | "dark") => {
  document.documentElement.dataset.theme = theme;
  isDark.value = theme === "dark";
};

const toggle = () => {
  const theme = isDark.value ? "light" : "dark";
  apply(theme);
  try {
    localStorage.setItem("theme", theme);
  } catch {}
};

onMounted(() => {
  isDark.value = document.documentElement.dataset.theme === "dark";

  // Follow the system setting until the user picks a theme
  const media = matchMedia("(prefers-color-scheme: dark)");
  useEventListener(media, "change", (e: MediaQueryListEvent) => {
    try {
      if (localStorage.getItem("theme")) return;
    } catch {}
    apply(e.matches ? "dark" : "light");
  });
});
</script>

<template>
  <button
    type="button"
    class="fixed top-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-surface text-ink-muted shadow-sm transition-transform hover:scale-105 hover:text-ink hover:shadow-md active:scale-95 cursor-pointer"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggle"
  >
    <ClientOnly>
      <Icon :name="isDark ? 'ic:round-light-mode' : 'ic:round-dark-mode'" class="text-2xl" />
    </ClientOnly>
  </button>
</template>
