import { defineCollection } from "astro/content/runtime";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md*", base: "./src/pages/posts/" }),
});

export const collections = { blog };
