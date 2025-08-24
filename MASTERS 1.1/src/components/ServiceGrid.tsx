import React from 'react';
import { ServiceData } from '../data/services';
import ServiceCard from './ServiceCard';

interface ServiceGridProps {
  services: ServiceData[];
  withCTA?: boolean;
  limit?: number;
  showSkeleton?: boolean;
  placeholderCount?: number;
  className?: string;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({
  services = [],
  withCTA = false,
  limit,
  showSkeleton = false,
  placeholderCount = 3,
  className = ''
}) => {
  // Handle skeleton loading state
  if (showSkeleton) {
    const skeletonCards = Array.from({ length: placeholderCount }, (_, index) => (
      <div key={`skeleton-${index}`} className="service-card service-card-skeleton" role="listitem">
        <div className="service-card-header service-card-skeleton-header">
          <div className="service-card-icon service-card-skeleton-icon"></div>
          <div className="service-card-skeleton-title"></div>
        </div>
        <div className="service-card-content">
          <div className="service-card-skeleton-description">
            <div className="service-card-skeleton-line"></div>
            <div className="service-card-skeleton-line"></div>
            <div className="service-card-skeleton-line short"></div>
          </div>
          {withCTA && (
            <div className="service-card-skeleton-cta"></div>
          )}
        </div>
      </div>
    ));

    return (
      <div 
        className={`service-grid ${className}`}
        role="list"
        aria-label="Loading services..."
      >
        {skeletonCards}
      </div>
    );
  }

  // Filter and limit services if needed
  const displayServices = limit ? services.slice(0, limit) : services;

  if (displayServices.length === 0) {
    return (
      <div className="service-grid-empty">
        <p>No services available at this time.</p>
      </div>
    );
  }

  return (
    <div 
      className={`service-grid ${className}`}
      role="list"
      aria-label={`${displayServices.length} services available`}
    >
      {displayServices.map((service) => (
        <ServiceCard
          key={service.slug}
          service={service}
          withCTA={withCTA}
        />
      ))}
    </div>
  );
};

export default ServiceGrid;