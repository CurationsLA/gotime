// =============================================================================
// WYATT SKELETON COMPONENTS - Performance Optimization
// =============================================================================

/**
 * COPILOT INSTRUCTION: Wyatt skeleton components for loading states
 * Following brutalist design principles with proper accessibility
 * Implements lazy loading, intersection observers, and performance optimization
 */

import React from 'react';
import { cn } from '@/lib/utils';
import type { 
  WyattSkeletonProps, 
  WyattLoadingProps,
  WyattLazyComponentProps 
} from '../types/wyatt';

// Basic skeleton component with brutalist styling
export const WyattSkeleton: React.FC<WyattSkeletonProps> = ({
  lines = 3,
  width = "100%",
  height = "1rem",
  animated = true,
  shape = 'rectangle',
  className,
  ...props
}) => {
  const skeletonClass = cn(
    'wyatt-skeleton',
    {
      'wyatt-skeleton-animated': animated,
      'wyatt-skeleton-circle': shape === 'circle',
      'wyatt-skeleton-rounded': shape === 'rounded'
    },
    className
  );

  if (lines === 1) {
    const lineWidth = Array.isArray(width) ? width[0] : width;
    const lineHeight = Array.isArray(height) ? height[0] : height;
    
    return (
      <div
        className={skeletonClass}
        style={{ width: lineWidth, height: lineHeight }}
        role="status"
        aria-label="Loading content..."
        {...props}
      />
    );
  }

  return (
    <div className="wyatt-skeleton-group" role="status" aria-label="Loading content...">
      {Array.from({ length: lines }, (_, i) => {
        const lineWidth = Array.isArray(width) ? width[i] || width[0] : width;
        const lineHeight = Array.isArray(height) ? height[i] || height[0] : height;
        const isLastLine = i === lines - 1;
        
        return (
          <div
            key={i}
            className={cn(skeletonClass, {
              'wyatt-skeleton-line-short': isLastLine && !Array.isArray(width)
            })}
            style={{ 
              width: isLastLine && !Array.isArray(width) ? '75%' : lineWidth, 
              height: lineHeight 
            }}
          />
        );
      })}
    </div>
  );
};

// Service card skeleton
export const WyattServiceCardSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('wyatt-service-card-skeleton', className)} role="status" aria-label="Loading service card...">
    <div className="wyatt-service-card-skeleton-header">
      <WyattSkeleton 
        lines={1} 
        width="3rem" 
        height="3rem" 
        shape="circle" 
        className="wyatt-service-icon-skeleton"
      />
      <WyattSkeleton 
        lines={1} 
        width="80%" 
        height="1.5rem" 
        className="wyatt-service-title-skeleton"
      />
    </div>
    
    <div className="wyatt-service-card-skeleton-content">
      <div className="wyatt-service-description-skeleton">
        <WyattSkeleton lines={3} width={['100%', '90%', '75%']} />
      </div>
      
      <WyattSkeleton 
        lines={1} 
        width="40%" 
        height="2.5rem" 
        className="wyatt-service-cta-skeleton"
      />
    </div>
  </div>
);

// Loading indicator with brutalist spinner
export const WyattLoader: React.FC<WyattLoadingProps & { message?: string }> = ({
  variant = 'spinner',
  size = 'medium',
  message = 'Loading...',
  className
}) => {
  if (variant === 'spinner') {
    return (
      <div className={cn('wyatt-loader', `wyatt-loader-${size}`, className)} role="status">
        <div className="wyatt-brutal-spinner">
          <div className="wyatt-spinner-cube wyatt-spinner-cube-1"></div>
          <div className="wyatt-spinner-cube wyatt-spinner-cube-2"></div>
          <div className="wyatt-spinner-cube wyatt-spinner-cube-3"></div>
          <div className="wyatt-spinner-cube wyatt-spinner-cube-4"></div>
        </div>
        
        {message && (
          <div className="wyatt-loader-text">
            <span className="wyatt-loader-message">{message}</span>
            <div className="wyatt-loader-dots">
              <span className="wyatt-dot wyatt-dot-1">.</span>
              <span className="wyatt-dot wyatt-dot-2">.</span>
              <span className="wyatt-dot wyatt-dot-3">.</span>
            </div>
          </div>
        )}
        
        <span className="sr-only">{message}</span>
      </div>
    );
  }

  if (variant === 'skeleton') {
    return (
      <div className={cn('wyatt-skeleton-container', className)}>
        <WyattSkeleton lines={5} width={['100%', '90%', '80%', '85%', '60%']} />
      </div>
    );
  }

  return (
    <div className={cn('wyatt-pulse-loader', className)} role="status">
      <div className="wyatt-pulse-indicator"></div>
      <span className="sr-only">{message}</span>
    </div>
  );
};

// Lazy loading wrapper with intersection observer
export const WyattLazyLoader: React.FC<WyattLazyComponentProps & { children: React.ReactNode }> = ({
  children,
  fallback: FallbackComponent = () => <WyattLoader variant="skeleton" />,
  threshold = 0.1,
  rootMargin = '50px',
  delay = 200,
  className
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
          // Simulate loading delay for better UX
          setTimeout(() => setIsLoaded(true), delay);
        }
      },
      { rootMargin, threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold, delay]);

  return (
    <div ref={elementRef} className={cn('wyatt-lazy-loader-container', className)}>
      {isInView && isLoaded ? children : <FallbackComponent />}
    </div>
  );
};

// Progressive image loader
export const WyattImageLoader: React.FC<{
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}> = ({ src, alt, className, onLoad, onError }) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (!imgRef.current) return;

    const img = imgRef.current;
    
    const handleLoad = () => {
      setLoading(false);
      onLoad?.();
    };

    const handleError = () => {
      setLoading(false);
      setError(true);
      onError?.();
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [onLoad, onError]);

  return (
    <div className={cn('wyatt-image-loader-wrapper', className)} role="img" aria-label={alt}>
      {loading && (
        <div className="wyatt-image-loader">
          <div className="wyatt-image-loader-content">
            <span className="wyatt-image-icon" role="img" aria-label="Loading image">🖼️</span>
            <span className="wyatt-image-loading-text">Loading...</span>
            <div className="wyatt-image-progress-bar">
              <div className="wyatt-image-progress-fill"></div>
            </div>
          </div>
        </div>
      )}
      
      {error && (
        <div className="wyatt-image-error">
          <span className="wyatt-image-error-icon" role="img" aria-label="Error loading image">❌</span>
          <span className="wyatt-image-error-text">Failed to load image</span>
        </div>
      )}
      
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={cn('wyatt-image', {
          'wyatt-image-loading': loading,
          'wyatt-image-error': error
        })}
        style={{ 
          opacity: loading || error ? 0 : 1,
          transition: 'opacity 0.3s ease'
        }}
      />
    </div>
  );
};

// Button with loading state
export const WyattLoadingButton: React.FC<{
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'accent';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}> = ({
  children,
  loading = false,
  disabled = false,
  variant = 'primary',
  onClick,
  className,
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        'wyatt-loading-button',
        `wyatt-loading-button-${variant}`,
        {
          'wyatt-loading-button-loading': loading,
          'wyatt-loading-button-disabled': disabled
        },
        className
      )}
      aria-label={loading ? 'Loading...' : undefined}
    >
      {loading ? (
        <div className="wyatt-button-loader">
          <div className="wyatt-button-spinner">
            <div className="wyatt-button-spinner-dot"></div>
            <div className="wyatt-button-spinner-dot"></div>
            <div className="wyatt-button-spinner-dot"></div>
          </div>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

// Page loader overlay
export const WyattPageLoader: React.FC<{
  show: boolean;
  message?: string;
}> = ({ show, message = 'Loading page...' }) => {
  if (!show) return null;

  return (
    <div className="wyatt-page-loader-overlay" role="status" aria-live="polite">
      <div className="wyatt-page-loader-container">
        <WyattLoader variant="spinner" size="large" message={message} />
      </div>
    </div>
  );
};

// High-level loading context provider
const WyattLoadingContext = React.createContext<{
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  loadingMessage: string;
  setLoadingMessage: (message: string) => void;
}>({
  isLoading: false,
  setLoading: () => {},
  loadingMessage: '',
  setLoadingMessage: () => {}
});

export const WyattLoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setLoading] = React.useState(false);
  const [loadingMessage, setLoadingMessage] = React.useState('Loading...');

  return (
    <WyattLoadingContext.Provider value={{
      isLoading,
      setLoading,
      loadingMessage,
      setLoadingMessage
    }}>
      {children}
      <WyattPageLoader show={isLoading} message={loadingMessage} />
    </WyattLoadingContext.Provider>
  );
};

export const useWyattLoading = () => {
  const context = React.useContext(WyattLoadingContext);
  if (!context) {
    throw new Error('useWyattLoading must be used within WyattLoadingProvider');
  }
  return context;
};

// Export everything
export {
  WyattSkeleton as default,
  WyattServiceCardSkeleton,
  WyattLoader,
  WyattLazyLoader,
  WyattImageLoader,
  WyattLoadingButton,
  WyattPageLoader,
  WyattLoadingProvider,
  useWyattLoading
};