import React from 'react';
import Navigation from './Navigation';
import FeaturedServicesSection from './FeaturedServicesSection';

// Example page component showing how to use the FeaturedServicesSection
const ServicesPage: React.FC = () => {
  return (
    <main className="bg-background text-foreground min-h-screen" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Navigation currentPage="/services" />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-6">
            <span className="curations-hero-text" style={{ WebkitTextFillColor: '#ff69b4' }}>
              Our Services
            </span>
          </h1>
          <div className="curations-card p-6 max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed">
              From restaurant grand openings to AI discovery, we curate culture across every touchpoint. 
              Each service is designed to transform brands into cultural forces.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services with full descriptions and CTAs */}
      <FeaturedServicesSection 
        title="All Services"
        subtitle="Complete solutions for every stage of your cultural journey"
        withCTA={true}
        className="services-page-section"
      />

      {/* Demo: Limited Services Section */}
      <section className="py-16 px-8" style={{ background: '#f8fafc' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black uppercase mb-4">Popular Services</h2>
          <p className="text-lg mb-8 text-neutral-60">Our most requested cultural curation services</p>
          
          <FeaturedServicesSection 
            title=""
            subtitle=""
            limit={4}
            withCTA={true}
            className="popular-services-section"
          />
        </div>
      </section>

      {/* Demo: Skeleton Loading State */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black uppercase mb-4">Loading State Demo</h2>
          <p className="text-lg mb-8 text-neutral-60">How services appear while loading</p>
          
          <FeaturedServicesSection 
            title="Loading Services..."
            subtitle="Please wait while we load our cultural services"
            showSkeleton={true}
            placeholderCount={3}
            withCTA={true}
            className="loading-demo-section"
          />
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;