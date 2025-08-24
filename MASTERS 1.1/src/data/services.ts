// Services data for Featured Services section
// Each service maps to existing landing pages and maintains brand palette consistency

export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  icon: string;
  palette: {
    background: string;
    textColor: string;
    gradient?: string;
  };
  href: string;
}

export const services: ServiceData[] = [
  {
    slug: 'restaurant-biz',
    title: 'Restaurant & Biz',
    description: 'Grand openings, optimized delivery, and digital buzz. Become the vibe that powers the scene.',
    icon: '🍽️',
    palette: {
      background: 'var(--gradient-restaurant)',
      textColor: '#FFFFFF',
      gradient: 'linear-gradient(135deg, #EBF998 0%, #38B6FF 100%)'
    },
    href: '/restaurant-biz'
  },
  {
    slug: 'ai-discovery',
    title: 'AI Discovery',
    description: 'Custom prompt engineering, edge SEO, and future-proof strategy—unlock a new era of digital reach.',
    icon: '🤖',
    palette: {
      background: 'var(--gradient-ai)',
      textColor: '#FFFFFF',
      gradient: 'linear-gradient(135deg, #38B6FF 0%, #FF69B4 100%)'
    },
    href: '/ai-discovery'
  },
  {
    slug: 'public-relations',
    title: 'Public Relations',
    description: 'Elevate your message, manage your narrative, and create conversations that move culture.',
    icon: '📰',
    palette: {
      background: 'var(--gradient-pr)',
      textColor: '#FFFFFF',
      gradient: 'linear-gradient(135deg, #222222 0%, #FF69B4 100%)'
    },
    href: '/public-relations'
  },
  {
    slug: 'creative-campaigns',
    title: 'Creative Campaigns',
    description: 'Where strategy meets art. We build campaigns that spark sharing, action, and belonging.',
    icon: '🎨',
    palette: {
      background: 'var(--gradient-creative)',
      textColor: '#FFFFFF',
      gradient: 'linear-gradient(135deg, #FF69B4 0%, #EBF998 100%)'
    },
    href: '/creative-campaigns'
  },
  {
    slug: 'influencer-ugc',
    title: 'Influencer & UGC',
    description: 'Real creators, real results. Community programs and influencer marketing that multiplies your audience and voice.',
    icon: '🤝',
    palette: {
      background: 'var(--gradient-influencer)',
      textColor: '#FFFFFF',
      gradient: 'linear-gradient(135deg, #FF69B4 0%, #38B6FF 50%, #EBF998 100%)'
    },
    href: '/influencer-ugc'
  },
  {
    slug: 'newsletters',
    title: 'Newsletters',
    description: 'Grow, engage, and monetize your audience with stunning email newsletters and digest products—built for culture, not spam.',
    icon: '🗞️',
    palette: {
      background: 'var(--gradient-newsletter)',
      textColor: '#FFFFFF',
      gradient: 'linear-gradient(135deg, #EBF998 0%, #FF69B4 100%)'
    },
    href: '/newsletters'
  },
  {
    slug: 'branding-toolkit',
    title: 'Branding Toolkit',
    description: 'We build brands: logos, sites, packages, assets—anything you need to leave your mark.',
    icon: '🛠️',
    palette: {
      background: 'var(--gradient-branding)',
      textColor: '#FFFFFF',
      gradient: 'linear-gradient(135deg, #38B6FF 0%, #EBF998 50%, #FF69B4 100%)'
    },
    href: '/branding-toolkit'
  },
  {
    slug: 'youth-curator',
    title: 'Youth Curators',
    description: 'Empowering the next generation of cultural tastemakers through mentorship and creative collaboration.',
    icon: '✨',
    palette: {
      background: 'var(--gradient-youth)',
      textColor: '#FFFFFF',
      gradient: 'linear-gradient(135deg, #FF69B4 0%, #38B6FF 50%, #EBF998 100%)'
    },
    href: '/youth-curator'
  }
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return services.find(service => service.slug === slug);
};

// Helper function to get featured services (can be customized)
export const getFeaturedServices = (limit?: number): ServiceData[] => {
  const featured = services.slice(0, limit || services.length);
  return featured;
};