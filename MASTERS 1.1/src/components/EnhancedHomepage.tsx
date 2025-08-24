import React, { useState, useEffect } from 'react';
import { useLoading, useAsyncLoading } from '../hooks/useLoading';
import { 
  ServiceCardSkeleton, 
  PageLoader, 
  ProgressiveLoader, 
  LazyLoader,
  ButtonLoader,
  ImageLoader
} from '../components/LoadingStates';

// Enhanced Homepage with comprehensive loading states
const EnhancedHomepage: React.FC = () => {
  const { isLoading } = useLoading();
  const { executeWithLoading } = useAsyncLoading();
  const [pageReady, setPageReady] = useState(false);
  const [servicesLoaded, setServicesLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Simulate initial page load
  useEffect(() => {
    executeWithLoading('homepage-init', async () => {
      // Simulate loading time for initial page setup
      await new Promise(resolve => setTimeout(resolve, 800));
      setPageReady(true);
    }, {
      minLoadingTime: 500,
      maxLoadingTime: 3000
    });
  }, [executeWithLoading]);

  // Simulate services loading
  useEffect(() => {
    if (pageReady) {
      setTimeout(() => {
        executeWithLoading('services-load', async () => {
          await new Promise(resolve => setTimeout(resolve, 600));
          setServicesLoaded(true);
        }, {
          minLoadingTime: 300
        });
      }, 200);
    }
  }, [pageReady, executeWithLoading]);

  // Simulate image loading
  useEffect(() => {
    if (servicesLoaded) {
      setTimeout(() => {
        setImagesLoaded(true);
      }, 400);
    }
  }, [servicesLoaded]);

  const handleCTAClick = async (action: string) => {
    await executeWithLoading(`cta-${action}`, async () => {
      // Simulate navigation or action
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log(`CTA clicked: ${action}`);
    }, {
      minLoadingTime: 300,
      onFinally: () => {
        console.log(`${action} action completed`);
      }
    });
  };

  if (!pageReady) {
    return <PageLoader message="Loading CURATIONS..." />;
  }

  return (
    <div className="enhanced-homepage">
      <style jsx>{`
        .enhanced-homepage {
          min-height: 100vh;
          background: var(--background);
        }

        .hero-section {
          padding: 6rem 2rem 4rem;
          text-align: center;
          background: linear-gradient(135deg, var(--master-primary) 0%, var(--master-accent) 50%, var(--master-success) 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          text-transform: uppercase;
          margin-bottom: 2rem;
          line-height: 1;
          text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
          animation: hero-fade-in 1s ease-out;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          max-width: 800px;
          margin: 0 auto 3rem;
          line-height: 1.6;
          animation: hero-fade-in 1s ease-out 0.3s both;
        }

        .hero-cta-group {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: hero-fade-in 1s ease-out 0.6s both;
        }

        .hero-cta {
          padding: 1.5rem 2.5rem;
          border: 4px solid white;
          font-family: var(--font-display);
          font-weight: 900;
          text-transform: uppercase;
          font-size: 1.125rem;
          transition: all 0.3s ease;
          cursor: pointer;
          min-width: 200px;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .hero-cta.primary {
          background: white;
          color: var(--master-primary);
        }

        .hero-cta.secondary {
          background: transparent;
          color: white;
        }

        .hero-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }

        .services-section {
          padding: 4rem 2rem;
          background: var(--background);
        }

        .services-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .services-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .services-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          text-transform: uppercase;
          color: var(--foreground);
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .services-subtitle {
          font-size: 1.25rem;
          color: var(--neutral-60);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .enhanced-service-card {
          background: var(--card);
          border: 4px solid var(--border);
          box-shadow: 8px 8px 0px var(--border);
          transition: all 0.3s ease;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .enhanced-service-card:hover {
          transform: translate(-2px, -2px);
          box-shadow: 10px 10px 0px var(--border);
        }

        .service-header {
          padding: 2rem;
          text-align: center;
          border-bottom: 2px solid var(--border);
          background: var(--primary);
          color: var(--primary-foreground);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
          line-height: 1;
        }

        .service-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          text-transform: uppercase;
          margin: 0;
          line-height: 1.2;
        }

        .service-content {
          padding: 2rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .service-description {
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .service-cta {
          background: var(--primary);
          color: var(--primary-foreground);
          padding: 1rem 2rem;
          border: 2px solid var(--border);
          font-family: var(--font-display);
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
        }

        .service-cta:hover {
          background: var(--secondary);
        }

        .image-gallery {
          padding: 4rem 2rem;
          background: var(--neutral-10);
        }

        .gallery-title {
          text-align: center;
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 900;
          text-transform: uppercase;
          margin-bottom: 3rem;
          color: var(--foreground);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .gallery-item {
          aspect-ratio: 16/9;
          border: 4px solid var(--border);
          box-shadow: 6px 6px 0px var(--border);
          overflow: hidden;
        }

        @keyframes hero-fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-cta-group {
            flex-direction: column;
            align-items: center;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">CURATIONS</h1>
          <p className="hero-subtitle">
            We curate the heart and headlines of brands through strategic creativity, 
            cultural intelligence, and authentic storytelling.
          </p>
          
          <div className="hero-cta-group">
            <button 
              className="hero-cta primary"
              onClick={() => handleCTAClick('start-project')}
              disabled={isLoading('cta-start-project')}
            >
              {isLoading('cta-start-project') ? (
                <ButtonLoader size="md" />
              ) : (
                'START YOUR PROJECT'
              )}
            </button>
            
            <a 
              href="#services"
              className="hero-cta secondary"
              onClick={() => handleCTAClick('view-services')}
            >
              {isLoading('cta-view-services') ? (
                <ButtonLoader size="md" />
              ) : (
                'VIEW SERVICES'
              )}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">Our Services</h2>
            <p className="services-subtitle">
              Comprehensive solutions for brands ready to make cultural impact
            </p>
          </div>

          <ProgressiveLoader
            isLoading={!servicesLoaded}
            fallback={
              <div className="services-grid">
                {Array.from({ length: 6 }, (_, i) => (
                  <ServiceCardSkeleton key={i} />
                ))}
              </div>
            }
          >
            <div className="services-grid">
              {[
                { icon: '🍽️', title: 'Restaurant & Biz', desc: 'Strategic marketing for restaurants and local businesses', href: '/restaurant-biz' },
                { icon: '🤖', title: 'AI Discovery', desc: 'AI integration and optimization services', href: '/ai-discovery' },
                { icon: '📺', title: 'Public Relations', desc: 'Media relations and reputation management', href: '/public-relations' },
                { icon: '🎨', title: 'Creative Campaigns', desc: 'Campaign development and creative strategy', href: '/creative-campaigns' },
                { icon: '🤝', title: 'Influencer & UGC', desc: 'Influencer partnerships and user-generated content', href: '/influencer-ugc' },
                { icon: '📧', title: 'Newsletters', desc: 'Email marketing and newsletter design', href: '/newsletters' }
              ].map((service, index) => (
                <LazyLoader
                  key={service.title}
                  fallback={<ServiceCardSkeleton />}
                  rootMargin="100px"
                >
                  <a 
                    href={service.href}
                    className="enhanced-service-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="service-header">
                      <span className="service-icon">{service.icon}</span>
                      <h3 className="service-title">{service.title}</h3>
                    </div>
                    <div className="service-content">
                      <p className="service-description">{service.desc}</p>
                      <div className="service-cta">
                        Learn More →
                      </div>
                    </div>
                  </a>
                </LazyLoader>
              ))}
            </div>
          </ProgressiveLoader>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="image-gallery">
        <div className="gallery-container">
          <h2 className="gallery-title">Our Work</h2>
          
          <ProgressiveLoader
            isLoading={!imagesLoaded}
            fallback={
              <div className="gallery-grid">
                {Array.from({ length: 6 }, (_, i) => (
                  <ImageLoader 
                    key={i}
                    alt={`Portfolio item ${i + 1}`}
                  />
                ))}
              </div>
            }
          >
            <div className="gallery-grid">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="gallery-item">
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    background: `linear-gradient(135deg, 
                      var(--master-primary) 0%, 
                      var(--master-accent) 50%, 
                      var(--master-success) 100%
                    )`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </ProgressiveLoader>
        </div>
      </section>
    </div>
  );
};

export default EnhancedHomepage;