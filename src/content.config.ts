import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const imageSchema = z.object({
  src: z.string(),
  alt: z.string()
});

const resenias = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resenias' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    product: z.string(),
    summary: z.string(),
    images: z.array(imageSchema),
    tags: z.array(z.string()),
    category: z.string(),
    links: z.array(z.object({ label: z.string(), url: z.string() }))
  })
});

const publicaciones = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publicaciones' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    images: z.array(imageSchema),
    tags: z.array(z.string()),
    category: z.string()
  })
});

export const collections = { resenias, publicaciones };
