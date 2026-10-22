import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const dienstleistungen = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/dienstleistungen" }),
  schema: z.object({
    title: z.string(),
    teaser: z.string(),
    order: z.number(),
  }),
});

export const collections = { dienstleistungen };
