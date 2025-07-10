# Astro AI Tools Directory - Project Plan

Project Overview
Build a comprehensive directory of AI tools for professionals using Astro, with tools stored as Markdown files and organized by categories, pricing, and source type.

1. Project Structure
   ai-tools-directory/
   ├── src/
   │ ├── components/
   │ │ ├── ToolCard.astro
   │ │ ├── ToolGrid.astro
   │ │ ├── CategoryFilter.astro
   │ │ ├── SearchBar.astro
   │ │ └── Navigation.astro
   │ ├── layouts/
   │ │ ├── BaseLayout.astro
   │ │ └── ToolLayout.astro
   │ ├── pages/
   │ │ ├── index.astro
   │ │ ├── tools/
   │ │ │ └── [slug].astro
   │ │ └── category/
   │ │ └── [category].astro
   │ ├── content/
   │ │ ├── config.ts
   │ │ └── tools/
   │ │ ├── chatgpt.md
   │ │ ├── claude.md
   │ │ ├── gemini.md
   │ │ ├── n8n.md
   │ │ └── ... (other tools)
   │ ├── styles/
   │ │ └── global.css
   │ └── utils/
   │ └── helpers.ts
   ├── public/
   │ ├── images/
   │ │ └── tools/
   │ └── favicon.ico
   ├── astro.config.mjs
   ├── package.json
   └── tsconfig.json
2. Technology Stack

Framework: Astro 4.x
Content Management: Astro Content Collections
Styling: Tailwind CSS
TypeScript: For type safety
Icons: Lucide React or Heroicons
Deployment: Vercel/Netlify

3. Content Schema
   Tool Markdown Frontmatter Structure
   yaml---
   title: "ChatGPT"
   description: "AI-powered conversational assistant by OpenAI"
   category: "chat"
   subcategory: "conversational-ai"
   pricing: "freemium"
   source: "closed-source"
   website: "https://chat.openai.com"
   logo: "/images/tools/chatgpt.svg"
   tags: ["conversation", "writing", "coding", "analysis"]
   features:

- "Natural language conversations"
- "Code generation and debugging"
- "Content creation"
- "Data analysis"
  pricing_details:
  free: "20 messages per 3 hours"
  paid: "$20/month for ChatGPT Plus"
  api_available: true
  mobile_app: true
  integrations: ["API", "Zapier", "Custom"]
  last_updated: "2024-12-15"
  rating: 4.8
  user_count: "100M+"

---

4. Categories Structure
   Primary Categories

Chat Tools: ChatGPT, Claude, Gemini, Deepseek
Agent Builders: n8n, Langflow, Flowise
Image Generation: Midjourney, DALL-E, Stable Diffusion
Code Assistants: GitHub Copilot, Cursor, Codeium
Writing Tools: Jasper, Copy.ai, Notion AI
Analytics: DataRobot, H2O.ai
Voice/Audio: ElevenLabs, Murf, Speechify
Video: Runway, Synthesia, Pictory

Secondary Classifications

Pricing: Free, Freemium, Paid
Source: Open Source, Closed Source
Access: Web App, Desktop App, Mobile App, API Only

5. Key Features Implementation
   5.1 Homepage (src/pages/index.astro)

Hero section with search bar
Featured tools carousel
Category grid with tool counts
Recent additions section
Statistics overview

5.2 Tool Cards Component (src/components/ToolCard.astro)
astro---
interface Props {
tool: {
slug: string;
data: {
title: string;
description: string;
category: string;
pricing: string;
source: string;
logo: string;
rating: number;
tags: string[];
};
};
}

---

<div class="tool-card">
  <img src={tool.data.logo} alt={tool.data.title} />
  <h3>{tool.data.title}</h3>
  <p>{tool.data.description}</p>
  <div class="badges">
    <span class="category">{tool.data.category}</span>
    <span class="pricing">{tool.data.pricing}</span>
    <span class="source">{tool.data.source}</span>
  </div>
  <div class="rating">⭐ {tool.data.rating}</div>
</div>
5.3 Filtering System

Category filters (Chat, Agent Builders, etc.)
Pricing filters (Free, Freemium, Paid)
Source filters (Open Source, Closed Source)
Search functionality
Sort options (Rating, Popularity, Recently Added)

5.4 Tool Detail Pages (src/pages/tools/[slug].astro)

Tool overview with key metrics
Detailed description
Feature list
Pricing breakdown
Screenshots/demos
User reviews section
Similar tools recommendations
Integration information

6. Content Collections Setup
   src/content/config.ts
   typescriptimport { defineCollection, z } from 'astro:content';

const toolsCollection = defineCollection({
type: 'content',
schema: z.object({
title: z.string(),
description: z.string(),
category: z.enum(['chat', 'agent-builder', 'image-generation', 'code-assistant', 'writing', 'analytics', 'voice', 'video']),
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
}; 7. Development Phases
Phase 1: Foundation (Week 1-2)

Set up Astro project with TypeScript
Configure Tailwind CSS
Create basic layout and components
Set up content collections
Create 5-10 sample tool markdown files

Phase 2: Core Features (Week 3-4)

Implement tool listing page
Create tool detail pages
Add search functionality
Implement category filtering
Add responsive design

Phase 3: Advanced Features (Week 5-6)

Add advanced filtering (pricing, source type)
Implement sorting options
Add tool comparison feature
Create admin panel for easy tool addition
Add analytics tracking

Phase 4: Polish & Launch (Week 7-8)

Performance optimization
SEO implementation
Add more tools (aim for 50+ tools)
User testing and feedback
Deploy to production

8. Sample Tool Markdown Files
   ChatGPT Example (src/content/tools/chatgpt.md)
   markdown---
   title: "ChatGPT"
   description: "Advanced AI chatbot for conversations, content creation, and problem-solving"
   category: "chat"
   subcategory: "conversational-ai"
   pricing: "freemium"
   source: "closed-source"
   website: "https://chat.openai.com"
   logo: "/images/tools/chatgpt.svg"
   tags: ["conversation", "writing", "coding", "analysis", "creative"]
   features:

- "Natural language conversations"
- "Code generation and debugging"
- "Content creation and editing"
- "Data analysis and visualization"
- "Multiple language support"
  pricing_details:
  free: "Limited daily usage with GPT-3.5"
  paid: "$20/month for ChatGPT Plus (GPT-4, priority access)"
  api_available: true
  mobile_app: true
  integrations: ["OpenAI API", "Zapier", "Custom plugins"]
  last_updated: "2024-12-15"
  rating: 4.8
  user_count: "100M+"

---

## Overview

ChatGPT is OpenAI's flagship conversational AI that can assist with a wide range of tasks including writing, coding, analysis, and creative projects.

## Key Features

- **Advanced Reasoning**: Handles complex logical problems and multi-step tasks
- **Code Generation**: Supports multiple programming languages with debugging capabilities
- **Content Creation**: Helps with writing, editing, and brainstorming
- **Data Analysis**: Can analyze and visualize data from various sources

## Use Cases

- Content creation and copywriting
- Programming assistance and code review
- Research and analysis
- Creative writing and brainstorming
- Educational support and tutoring

## Pricing

- **Free Tier**: Access to GPT-3.5 with daily usage limits
- **ChatGPT Plus ($20/month)**: GPT-4 access, priority availability, faster response times
- **ChatGPT Team ($25/user/month)**: Team collaboration features
- **ChatGPT Enterprise**: Custom pricing for large organizations

9. SEO & Performance Considerations
   SEO Strategy

Generate sitemap automatically
Add meta tags for each tool
Implement structured data (JSON-LD)
Create category and tag-based URLs
Add Open Graph and Twitter Card meta tags

Performance Optimization

Use Astro's static site generation
Optimize images with Astro's image optimization
Implement lazy loading for tool cards
Use minimal JavaScript for filtering
Add service worker for offline functionality

10. Future Enhancements
    Phase 2 Features

User reviews and ratings system
Tool comparison matrix
API integration for real-time data
Newsletter signup for new tools
Blog section for AI tool reviews

Community Features

User-submitted tools
Community voting on tool quality
Discussion forums for each tool
Tool recommendation engine

11. Launch Strategy
    Content Strategy

Start with 20-30 popular tools
Focus on high-quality, detailed descriptions
Regular updates with new tools
SEO-optimized content for each tool

Marketing

Submit to directories like Product Hunt
Share on AI communities (Reddit, Discord)
Reach out to tool creators for partnerships
Create social media content around launches

This plan provides a solid foundation for building a comprehensive AI tools directory that can grow and evolve with the rapidly changing AI landscape.
