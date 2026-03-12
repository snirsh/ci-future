import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sections = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/sections' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    status: z.enum(['draft', 'review', 'published']),
    lastUpdated: z.coerce.date(),
  }),
});

export const collections = { sections };
