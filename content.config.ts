import { defineCollection, defineContentConfig } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      source: "**",
      type: "page",
    }),
  },
});
