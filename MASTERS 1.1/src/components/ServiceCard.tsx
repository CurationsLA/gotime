import React from 'react';
import { ServiceData } from '../data/services';

interface ServiceCardProps {
  service: ServiceData;
  withCTA?: boolean;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  withCTA = false, 
  className = '' 
}) => {
  // Determine if link is internal (starts with /) or external
  const isInternal = service.href.startsWith('/');
  
  // Create the card content
  const cardContent = (
    <div 
      className={`service-card ${className}`}
      role="listitem"
    >
      <div 
        className="service-card-header"
        style={{
          background: service.palette.gradient || service.palette.background,
          color: service.palette.textColor
        }}
      >
        <div className="service-card-icon">
          {service.icon}
        </div>
        <h3 className="service-card-title">
          {service.title}
        </h3>
      </div>
      
      <div className="service-card-content">
        <p className="service-card-description">
          {service.description}
        </p>
        
        {withCTA && (
          <div className="service-card-cta">
            <span className="service-card-cta-text">
              Explore →
            </span>
          </div>
        )}
      </div>
    </div>
  );

  // Return appropriate link wrapper
  if (isInternal) {
    return (
      <a 
        href={`#${service.href}`}
        className="service-card-link"
        aria-label={`Learn more about ${service.title}`}
      >
        {cardContent}
      </a>
    );
  } else {
    return (
      <a 
        href={service.href}
        className="service-card-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Learn more about ${service.title} (opens in new tab)`}
      >
        {cardContent}
      </a>
    );
  }
};

export default ServiceCard;