// AI DISCOVERY START
// AI Discovery data and types for the AI Discovery service page
// Environment variable documentation:
// - NEXT_PUBLIC_SHOW_DRAFT_NAV: Set to "true" to show draft navigation in development

export interface DemoTab {
  id: string;
  label: string;
  prompt: string;
  output: string;
}

export interface FeatureCard {
  id: string;
  icon: string;
  title: string;
  desc: string;
  points: string[];
  highlight?: boolean;
}

export interface WorkflowPhase {
  id: string;
  title: string;
  desc: string;
  badges: string[];
}

export interface ROIStat {
  value: string;
  label: string;
}

export interface PricingTier {
  id: string;
  title: string;
  price: string;
  tagline: string;
  variant: 'starter' | 'accelerator' | 'enterprise';
  points: string[];
}

export const aiDemoTabs: DemoTab[] = [
  {
    id: 'prompt-eng',
    label: 'Prompt Engineering',
    prompt: 'Create a viral social media campaign for a new vegan restaurant in Silver Lake',
    output: `CAMPAIGN: #PlantRush Silver Lake
HOOK: "Vegan that even carnivores sneak back for."

POST SERIES:
1) Opening Reel – 0.7s quick cuts of neon signage, steaming bowls, smiling staff.
2) "Flip the Script" Carousel – Each slide: a common vegan myth → your fun rebuttal.
3) UGC Duet Challenge – Offer free dessert for best remix.

INFLUENCER MICRO-PODS:
• 5 local fitness & wellness creators
• Mandate: 1 taste-test story + 1 "hidden gem" reel

IRL ACTIVATION:
Weekend "Flavor Passport" – 4 mini bites, stamp card, share to unlock secret menu.

KPIs:
• 500 first-week foot traffic
• 1,200 hashtag uses
• 25% story-to-reservation conversion.`
  },
  {
    id: 'ai-seo',
    label: 'AI SEO Strategy',
    prompt: 'Outline AI-driven SEO improvements for a boutique hospitality brand in LA',
    output: `OBJECTIVE: Dominate AI overview + conversational answer surfaces.

PILLARS:
• Structured Data Coverage (Hotel, LocalBusiness, Event)
• Entity Reinforcement (brand ↔ neighborhood ↔ experience)
• Citation Seeding in travel Q&A forums

TACTICS:
1. "Experience Packs" pages (sunrise hikes, rooftop brunch, art walk).
2. Internal linking: experience → booking + related micro-stories.
3. Conversational FAQ blocks (AI answer intent).
4. Weekly AI Synopsis Audit: monitor brand mention.

METRICS:
• AI Overview impressions
• Entity salience
• Answer click-through.`
  },
  {
    id: 'tech-stack',
    label: 'Tech Stack Discovery',
    prompt: 'Recommend an AI marketing stack for a DTC beverage startup',
    output: `STACK LAYERS:

INSIGHT:
• Perplexity – rapid market scans
• Trend scouting (Exploding Topics)

CREATIVE:
• Midjourney / Ideogram for packaging ideation
• Runway for kinetic loops

VOICE:
• Fine-tuned GPT with brand tone memory
• Prompt template library (launch, retention)

OPS:
• Zapier automation
• Airtable AI categorization
• Notion AI weekly synthesis

GOVERNANCE:
• Prompt changelog
• Guardrails
• Bias triage

ROLLOUT:
W1 instrumentation
W2–3 pilot prompts
W4 automation batch.`
  }
];

export const featureCards: FeatureCard[] = [
  {
    id: 'prompt-engineering',
    icon: '⚡',
    title: 'AI PROMPT ENGINEERING',
    desc: 'Custom-engineered prompts that deliver consistent, brand-aligned outputs.',
    points: [
      'Brand voice datasets',
      'Multi-modal optimization',
      'Output QA loops',
      'Performance analytics'
    ],
    highlight: true
  },
  {
    id: 'ai-seo-citations',
    icon: '🔍',
    title: 'AI SEO & CITATIONS',
    desc: 'Optimize presence in AI-driven search surfaces & answer engines.',
    points: [
      'Citation optimization',
      'Perplexity visibility',
      'AI Overview ranking',
      'Snippet enhancement'
    ]
  },
  {
    id: 'tech-stack-card',
    icon: '🛠️',
    title: 'TECH STACK DISCOVERY',
    desc: 'Select & integrate tools for scale and ROI.',
    points: [
      'Tool audits',
      'Integration roadmap',
      'ROI projections',
      'Onboarding & training'
    ]
  },
  {
    id: 'team-workshops',
    icon: '👥',
    title: 'TEAM WORKSHOPS',
    desc: 'Hands-on enablement that builds AI confidence & speed.',
    points: [
      'Custom workshop design',
      'Scenario labs',
      'Best practices',
      'Ongoing support'
    ]
  }
];

export const workflowPhases: WorkflowPhase[] = [
  {
    id: 'phase1',
    title: 'PHASE 1: AI AUDIT & DISCOVERY',
    desc: 'Comprehensive scan of processes, data flows, capability gaps, & competition.',
    badges: ['Process Mapping', 'Tool Assessment', 'ROI Analysis']
  },
  {
    id: 'phase2',
    title: 'PHASE 2: CUSTOM AI DEVELOPMENT',
    desc: 'Engineer prompts, fine-tune models, assemble a toolchain built for your voice.',
    badges: ['Prompt Engineering', 'Model Training', 'Integration Setup']
  },
  {
    id: 'phase3',
    title: 'PHASE 3: DEPLOYMENT & OPTIMIZATION',
    desc: 'Launch with observability & iterate using performance metrics.',
    badges: ['Deployment', 'Monitoring', 'Optimization']
  }
];

export const roiStats: ROIStat[] = [
  { value: '85%', label: 'Cost Reduction' },
  { value: '10x', label: 'Speed Increase' },
  { value: '300%', label: 'Output Quality' },
  { value: '500%', label: 'Team Productivity' }
];

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    title: 'AI STARTER',
    price: '$8K',
    tagline: 'Perfect for AI beginners',
    variant: 'starter',
    points: [
      'AI audit & strategy',
      'Basic prompt engineering',
      'Tool recommendations',
      'Team workshop (4 hrs)',
      '30-day support'
    ]
  },
  {
    id: 'accelerator',
    title: 'AI ACCELERATOR',
    price: '$25K',
    tagline: 'Most popular package',
    variant: 'accelerator',
    points: [
      'Complete AI integration',
      'Custom model tuning',
      'Advanced SEO optimization',
      'Multiple workshops',
      '6-month optimization'
    ]
  },
  {
    id: 'enterprise',
    title: 'AI ENTERPRISE',
    price: '$75K+',
    tagline: 'Full AI transformation',
    variant: 'enterprise',
    points: [
      'Custom AI development',
      'Proprietary model creation',
      'Enterprise integrations',
      'Dedicated AI team',
      '12+ month partnership'
    ]
  }
];

export const serviceSchemaJSON = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Discovery Services',
  provider: {
    '@type': 'Organization',
    name: 'Curations'
  },
  description: 'AI integration services: prompt engineering, SEO optimization, tech stack discovery, workshops.',
  serviceType: 'AI Consulting',
  areaServed: 'Global',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Discovery Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Prompt Engineering',
          description: 'Custom prompt development for business outcomes'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI SEO & Citations',
          description: 'Optimization for AI-discovery era'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tech Stack Discovery',
          description: 'AI tool selection and integration planning'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Team Workshops',
          description: 'Hands-on AI training and enablement'
        }
      }
    ]
  }
};
// AI DISCOVERY END