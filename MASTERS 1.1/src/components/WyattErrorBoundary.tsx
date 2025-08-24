// =============================================================================
// WYATT ERROR BOUNDARY - Component Implementation
// =============================================================================

/**
 * COPILOT INSTRUCTION: WyattErrorBoundary implementation with brutalist design
 * Following the comprehensive template provided in the issue description
 * Includes proper error handling, accessibility, and theme support
 */

import React from 'react';
import { cn } from '@/lib/utils';
import type { WyattErrorBoundaryProps, WyattErrorBoundaryState, WyattErrorFallbackProps } from '../types/wyatt';

export class WyattErrorBoundary extends React.Component<
  WyattErrorBoundaryProps,
  WyattErrorBoundaryState
> {
  private resetTimeoutId?: number;

  constructor(props: WyattErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: undefined,
      errorInfo: undefined
    };
  }

  static getDerivedStateFromError(error: Error): WyattErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
      errorInfo: error.stack || error.message
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to error reporting service
    console.error('WyattErrorBoundary caught an error:', error, errorInfo);

    // Call the onError callback if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo.componentStack);
    }

    // Update state with error info
    this.setState({
      hasError: true,
      error,
      errorInfo: errorInfo.componentStack
    });
  }

  componentDidUpdate(prevProps: WyattErrorBoundaryProps) {
    const { resetKeys } = this.props;
    const { hasError } = this.state;

    // Reset error boundary if resetKeys have changed
    if (
      hasError &&
      prevProps.resetKeys !== resetKeys &&
      resetKeys &&
      resetKeys.some((key, index) => 
        prevProps.resetKeys?.[index] !== key
      )
    ) {
      this.resetErrorBoundary();
    }
  }

  resetErrorBoundary = () => {
    // Clear any pending timeout
    if (this.resetTimeoutId) {
      window.clearTimeout(this.resetTimeoutId);
    }

    // Reset state
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined
    });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || WyattErrorFallback;
      
      return (
        <FallbackComponent
          error={this.state.error!}
          resetErrorBoundary={this.resetErrorBoundary}
          errorInfo={this.state.errorInfo}
        />
      );
    }

    return this.props.children;
  }
}

// Default fallback component with Wyatt brutalist styling
export const WyattErrorFallback: React.FC<WyattErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
  errorInfo
}) => {
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <div 
      className="wyatt-error-boundary-fallback"
      role="alert"
      aria-live="assertive"
      aria-label="Application error occurred"
    >
      <div className="wyatt-error-content">
        <div className="wyatt-error-icon">
          <span className="wyatt-error-emoji" role="img" aria-label="Error">⚠️</span>
        </div>
        
        <div className="wyatt-error-text">
          <h2 className="wyatt-error-title">
            Something Went <span className="wyatt-highlight">Wrong</span>
          </h2>
          
          <p className="wyatt-error-message">
            We encountered an unexpected error. Don't worry — your data is safe.
          </p>

          {isDevelopment && error && (
            <details className="wyatt-error-details">
              <summary className="wyatt-error-details-summary">
                Technical Details (Development Mode)
              </summary>
              <div className="wyatt-error-details-content">
                <code className="wyatt-error-code">
                  <strong>Error:</strong> {error.message}
                </code>
                {errorInfo && (
                  <pre className="wyatt-error-stack">
                    <strong>Stack Trace:</strong>
                    {errorInfo}
                  </pre>
                )}
              </div>
            </details>
          )}
        </div>

        <div className="wyatt-error-actions">
          <button
            onClick={resetErrorBoundary}
            className="wyatt-error-button wyatt-btn primary"
            type="button"
            aria-label="Try again"
          >
            <span>Try Again</span>
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="wyatt-error-button wyatt-btn secondary"
            type="button"
            aria-label="Reload page"
          >
            <span>Reload Page</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Higher-order component for easy wrapping
export function withWyattErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<WyattErrorBoundaryProps, 'children'>
) {
  const WrappedComponent: React.FC<P> = (props) => (
    <WyattErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </WyattErrorBoundary>
  );

  WrappedComponent.displayName = `withWyattErrorBoundary(${Component.displayName || Component.name})`;

  return WrappedComponent;
}

// Hook for triggering error boundary reset
export function useWyattErrorReset() {
  const [resetKey, setResetKey] = React.useState(0);

  const resetError = React.useCallback(() => {
    setResetKey((prev) => prev + 1);
  }, []);

  return [resetKey, resetError] as const;
}

export default WyattErrorBoundary;