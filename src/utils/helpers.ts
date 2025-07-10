export function formatCategory(category: string): string {
  const categoryMap: Record<string, string> = {
    'chat': 'Chat Tools',
    'code-assistant': 'Code Assistants',
    'image-generation': 'Image Generation',
    'agent-builder': 'Agent Builders',
    'writing': 'Writing Tools',
    'voice': 'Voice & Audio',
    'video': 'Video Tools',
    'analytics': 'Analytics'
  };
  
  return categoryMap[category] || category;
}

export function filterTools(tools: any[], filters: {
  search?: string;
  category?: string;
  pricing?: string[];
  source?: string[];
}) {
  return tools.filter(tool => {
    const matchesSearch = !filters.search || 
      tool.data.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      tool.data.description.toLowerCase().includes(filters.search.toLowerCase()) ||
      tool.data.tags.some((tag: string) => tag.toLowerCase().includes(filters.search!.toLowerCase()));
    
    const matchesCategory = !filters.category || tool.data.category === filters.category;
    
    const matchesPricing = !filters.pricing?.length || filters.pricing.includes(tool.data.pricing);
    
    const matchesSource = !filters.source?.length || filters.source.includes(tool.data.source);
    
    return matchesSearch && matchesCategory && matchesPricing && matchesSource;
  });
}

export function sortTools(tools: any[], sortBy: 'rating' | 'name' | 'category' | 'pricing') {
  return [...tools].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.data.rating - a.data.rating;
      case 'name':
        return a.data.title.localeCompare(b.data.title);
      case 'category':
        return a.data.category.localeCompare(b.data.category);
      case 'pricing':
        const pricingOrder = ['free', 'freemium', 'paid'];
        return pricingOrder.indexOf(a.data.pricing) - pricingOrder.indexOf(b.data.pricing);
      default:
        return 0;
    }
  });
}