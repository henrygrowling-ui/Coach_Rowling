import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts for the Thoughts page. Add a new .md file to src/content/thoughts/ to publish one.
const thoughts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/thoughts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    sport: z.enum(['Football', 'Baseball', 'General']).default('General'),
  }),
});

// Coaching materials for the Playbook. Add a new .md file to src/content/playbook/.
// Only PUBLIC materials go here. This repository is public, so private materials must not be committed.
const playbook = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/playbook' }),
  schema: z.object({
    title: z.string(),
    sport: z.enum(['Football', 'Baseball', 'General']),
    type: z.enum(['Drill', 'Practice Plan', 'System', 'Program', 'Leadership']),
    summary: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { thoughts, playbook };
