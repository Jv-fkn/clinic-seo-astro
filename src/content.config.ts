import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Knowledge hub. Adding an article = adding one Markdown file.
 * Routes, metadata, Article/FAQ schema, sitemap entries and listings are generated from it.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().max(70, 'Keep titles under 70 characters for search results'),
    description: z.string().min(70).max(160, 'Meta descriptions should be 70 to 160 characters'),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Lumen clinical team'),
    readingMinutes: z.number().int().positive(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { articles };
