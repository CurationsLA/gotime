import React from 'react';

// Skeleton Loading Component for Service Cards
export const ServiceCardSkeleton: React.FC = () => (
  <div className="service-card-skeleton brutal-box">
    <div className="service-card-skeleton-header">
      <div className="service-card-skeleton-icon"></div>
      <div className="service-card-skeleton-title"></div>
    </div>
    <div className="service-card-skeleton-content">
      <div className="service-card-skeleton-description">
        <div className="service-card-skeleton-line"></div>
        <div className="service-card-skeleton-line short"></div>
        <div className="service-card-skeleton-line"></div>
      </div>
      <div className="service-card-skeleton-cta"></div>
    </div>
  </div>
);

// Enhanced Page Loading Component
export const PageLoader: React.FC<{ message?: string }> = ({ 
  message = "Loading..." 
}) => (
  <div className="page-loader-overlay">
    <div className="page-loader-container">
      <div className="brutal-spinner">
        <div className="spinner-cube spinner-cube-1"></div>
        <div className="spinner-cube spinner-cube-2"></div>
        <div className="spinner-cube spinner-cube-3"></div>
        <div className="spinner-cube spinner-cube-4"></div>
      </div>
      <div className="loader-text">
        <span className="loader-message">{message}</span>
        <div className="loader-dots">
          <span className="dot dot-1">.</span>
          <span className="dot dot-2">.</span>
          <span className="dot dot-3">.</span>
        </div>
      </div>
    </div>
  </div>
);

// Content Loading Component
export const ContentLoader: React.FC<{ lines?: number; width?: string }> = ({ 
  lines = 3, 
  width = "100%" 
}) => (
  <div className="content-loader" style={{ width }}>
    {Array.from({ length: lines }, (_, i) => (
      <div 
        key={i}
        className={`content-loader-line ${i === lines - 1 ? 'short' : ''}`}
        style={{ animationDelay: `${i * 0.1}s` }}
      ></div>
    ))}
  </div>
);

// AI Terminal Loading Component
export const AITerminalLoader: React.FC = () => (
  <div className="ai-terminal-loader">
    <div className="terminal-line prompt">$ curations-ai --processing</div>
    <div className="terminal-loader-progress">
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
      <div className="loader-status">
        <span className="status-text">Processing request</span>
        <div className="status-dots">
          <span className="status-dot"></span>
          <span className="status-dot"></span>
          <span className="status-dot"></span>
        </div>
      </div>
    </div>
  </div>
);

// Navigation Loading Component
export const NavLoader: React.FC = () => (
  <div className="nav-loader">
    <div className="nav-skeleton-logo"></div>
    <div className="nav-skeleton-links">
      <div className="nav-skeleton-link"></div>
      <div className="nav-skeleton-link"></div>
      <div className="nav-skeleton-link"></div>
      <div className="nav-skeleton-link"></div>
    </div>
  </div>
);

// Button Loading State
export const ButtonLoader: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ 
  size = 'md' 
}) => (
  <div className={`button-loader button-loader-${size}`}>
    <div className="button-spinner">
      <div className="button-spinner-dot"></div>
      <div className="button-spinner-dot"></div>
      <div className="button-spinner-dot"></div>
    </div>
  </div>
);

// Image Loading Placeholder
export const ImageLoader: React.FC<{ 
  width?: string; 
  height?: string; 
  alt?: string 
}> = ({ 
  width = "100%", 
  height = "200px", 
  alt = "Loading image..." 
}) => (
  <div 
    className="image-loader brutal-box"
    style={{ width, height }}
    aria-label={alt}
    role="img"
  >
    <div className="image-loader-content">
      <div className="image-icon">🖼️</div>
      <div className="image-loading-text">Loading...</div>
      <div className="image-progress-bar">
        <div className="image-progress-fill"></div>
      </div>
    </div>
  </div>
);

// Hero Section Skeleton
export const HeroSkeleton: React.FC = () => (
  <div className="hero-skeleton">
    <div className="hero-skeleton-content">
      <div className="hero-skeleton-icon"></div>
      <div className="hero-skeleton-title"></div>
      <div className="hero-skeleton-subtitle"></div>
      <div className="hero-skeleton-buttons">
        <div className="hero-skeleton-button"></div>
        <div className="hero-skeleton-button secondary"></div>
      </div>
    </div>
  </div>
);

// Metrics Loading Component
export const MetricsLoader: React.FC<{ count?: number }> = ({ count = 4 }) => (
  <div className="metrics-loader">
    <div className="metrics-grid">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="metric-skeleton brutal-box">
          <div className="metric-skeleton-value"></div>
          <div className="metric-skeleton-label"></div>
        </div>
      ))}
    </div>
  </div>
);

// Progressive Loading Wrapper
export const ProgressiveLoader: React.FC<{
  isLoading: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  delay?: number;
}> = ({ 
  isLoading, 
  children, 
  fallback = <PageLoader />, 
  delay = 300 
}) => {
  const [showLoader, setShowLoader] = React.useState(false);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isLoading) {
      timer = setTimeout(() => setShowLoader(true), delay);
    } else {
      setShowLoader(false);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isLoading, delay]);

  if (isLoading && showLoader) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

// Lazy Loading Wrapper with Intersection Observer
export const LazyLoader: React.FC<{
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
}> = ({ 
  children, 
  fallback = <ContentLoader />, 
  rootMargin = '50px',
  threshold = 0.1 
}) => {
  const [isInView, setIsInView] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          // Simulate loading delay
          setTimeout(() => setIsLoaded(true), 200);
        }
      },
      { rootMargin, threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={elementRef} className="lazy-loader-container">
      {isInView && isLoaded ? children : fallback}
    </div>
  );
};

export default {
  ServiceCardSkeleton,
  PageLoader,
  ContentLoader,
  AITerminalLoader,
  NavLoader,
  ButtonLoader,
  ImageLoader,
  HeroSkeleton,
  MetricsLoader,
  ProgressiveLoader,
  LazyLoader
};