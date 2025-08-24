import React from 'react';
import type { WyattServiceData, WyattServicesGridProps } from '../types/wyatt';

interface Service extends WyattServiceData {
  slug: string;
  title: string;
  description: string;
  icon: string;
  palette?: 'primary' | 'accent' | 'highlight' | 'neutral' | 'inverted';
}

const services: Service[] = [
  {
    slug: '/restaurant-biz',
    title: 'Restaurant & Biz',
    description: 'Grand openings, menu marketing, delivery optimization, and cultural integration.',
    icon: '🍽️',
    palette: 'primary'
  },
  {
    slug: '/ai-discovery',
    title: 'AI Discovery',
    description: 'Prompt engineering, SEO optimization, and tech stack discovery for the AI age.',
    icon: '🤖',
    palette: 'accent'
  },
  {
    slug: '/public-relations',
    title: 'Public Relations',
    description: 'Media coverage, crisis management, and thought leadership positioning.',
    icon: '📺',
    palette: 'highlight'
  },
  {
    slug: '/creative-campaigns',
    title: 'Creative Campaigns',
    description: 'Campaigns that drive engagement and build authentic community connections.',
    icon: '🎨',
    palette: 'accent'
  },
  {
    slug: '/influencer-ugc',
    title: 'Influencer & UGC',
    description: 'Strategic partnerships and user-generated content programs that build trust.',
    icon: '🤝',
    palette: 'primary'
  },
  {
    slug: '/newsletters',
    title: 'Newsletter Services',
    description: 'Newsletters that build owned audience and deepen loyalty.',
    icon: '📧',
    palette: 'highlight'
  },
  {
    slug: '/branding-toolkit',
    title: 'Branding Toolkit',
    description: 'Complete visual identity and brand development solutions.',
    icon: '🛠️',
    palette: 'primary'
  }
];

interface FeaturedServicesSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  className?: string;
}

const FeaturedServicesSection: React.FC<FeaturedServicesSectionProps> = ({
  title = 'Our Curations',
  subtitle = 'Full-stack solutions for brands ready to make cultural impact',
  limit,
  className = ''
}) => {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className={`wyatt-likes-services universal-section ${className}`}>
      <div className="universal-container">
        <div className="wyatt-services-header">
          <h2 className="wyatt-section-title">
            <span className="wyatt-highlight">{title}</span>
          </h2>
          {subtitle && (
            <p className="wyatt-section-subtitle">{subtitle}</p>
          )}
        </div>

        <div className="wyatt-services-grid">
          {displayServices.map((service, index) => (
            <a 
              key={service.slug} 
              href={`#${service.slug}`}
              className="wyatt-service-link"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`wyatt-service-card wyatt-card-${(index % 3) + 1}`}>
                <div className="wyatt-card-sparkle"></div>
                
                <div className="wyatt-card-icon-section">
                  <div className="wyatt-icon-container">
                    <span className="wyatt-service-icon">{service.icon}</span>
                  </div>
                </div>

                <div className="wyatt-card-content">
                  <h3 className="wyatt-service-title">{service.title}</h3>
                  <p className="wyatt-service-description">{service.description}</p>
                  
                  <div className="wyatt-cta-container">
                    <div className="wyatt-service-cta">
                      <span className="wyatt-cta-text">Explore</span>
                      <span className="wyatt-cta-arrow">→</span>
                    </div>
                  </div>
                </div>

                <div className="wyatt-corner-badge">
                  <span className="wyatt-badge-text">New</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="wyatt-services-bottom-cta">
          <div className="wyatt-bottom-cta-box">
            <h3 className="wyatt-bottom-title">Ready to Transform Your Business?</h3>
            <p className="wyatt-bottom-description">
              Join 100+ brands that chose culture over algorithms, authenticity over automation.
            </p>
            <div className="wyatt-bottom-buttons">
              <a href="#/contact" className="wyatt-bottom-btn primary">
                <span>Start Your Journey</span>
              </a>
              <a href="#/outbox" className="wyatt-bottom-btn secondary">
                <span>View Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServicesSection;