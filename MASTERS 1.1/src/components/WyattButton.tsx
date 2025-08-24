// =============================================================================
// WYATT BUTTON COMPONENT - Complete Implementation
// =============================================================================

/**
 * COPILOT INSTRUCTION: Complete Wyatt button implementation
 * Following all brutalist design principles, accessibility requirements,
 * and the comprehensive template provided in the issue description
 */

import React from 'react';
import { cn } from '@/lib/utils';
import type { WyattButtonProps } from '../types/wyatt';

const WyattButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, WyattButtonProps>(
  ({
    children,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    loading = false,
    type = 'button',
    href,
    target,
    className,
    onClick,
    onKeyDown,
    'aria-label': ariaLabel,
    role,
    id,
    ...props
  }, ref) => {
    // Handle keyboard navigation for accessibility
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        if (!disabled && !loading && onClick) {
          onClick(event as any);
        }
      }
      onKeyDown?.(event);
    };

    const buttonClass = cn(
      // Base Wyatt button styles
      'wyatt-btn',
      'wyatt-component',
      
      // Variant styles
      `wyatt-btn-${variant}`,
      
      // Size styles
      `wyatt-btn-${size}`,
      
      // State styles
      {
        'wyatt-btn-disabled': disabled,
        'wyatt-btn-loading': loading,
      },
      
      className
    );

    const content = (
      <>
        {loading && (
          <div className="wyatt-btn-loader" aria-hidden="true">
            <div className="wyatt-btn-spinner">
              <div className="wyatt-btn-spinner-dot"></div>
              <div className="wyatt-btn-spinner-dot"></div>
              <div className="wyatt-btn-spinner-dot"></div>
            </div>
          </div>
        )}
        
        <span className={cn('wyatt-btn-content', { 'wyatt-btn-content-loading': loading })}>
          {children}
        </span>
        
        {/* Brutalist sparkle effect */}
        <div className="wyatt-btn-sparkle" aria-hidden="true"></div>
      </>
    );

    // Render as link if href is provided
    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={disabled || loading ? undefined : href}
          target={target}
          className={buttonClass}
          onClick={disabled || loading ? undefined : onClick}
          onKeyDown={handleKeyDown}
          aria-label={ariaLabel || (loading ? 'Loading...' : undefined)}
          aria-disabled={disabled || loading}
          role={role || 'button'}
          id={id}
          tabIndex={disabled || loading ? -1 : 0}
          {...props}
        >
          {content}
        </a>
      );
    }

    // Render as button
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled || loading}
        className={buttonClass}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        aria-label={ariaLabel || (loading ? 'Loading...' : undefined)}
        role={role}
        id={id}
        {...props}
      >
        {content}
      </button>
    );
  }
);

WyattButton.displayName = 'WyattButton';

export { WyattButton };
export default WyattButton;