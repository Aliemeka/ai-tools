import { defineCollection, z } from 'astro:content';

const toolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['chat', 'agent-builder', 'image-generation', 'code-assistant', 'writing', 'analytics', 'voice', 'video', 'search', 'productivity', 'development']),
    subcategory: z.string(),
    pricing: z.enum(['free', 'freemium', 'paid']),
    source: z.enum(['open-source', 'closed-source']),
    website: z.string().url(),
    logo: z.string(),
    tags: z.array(z.string()),
    features: z.array(z.string()),
    pricing_details: z.object({
      free: z.string().optional(),
      paid: z.string().optional(),
    }),
    api_available: z.boolean(),
    mobile_app: z.boolean(),
    integrations: z.array(z.string()),
    last_updated: z.string(),
    rating: z.number().min(1).max(5),
    user_count: z.string(),
  }),
});

export const collections = {
  tools: toolsCollection,
};