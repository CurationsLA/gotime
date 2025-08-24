// =============================================================================
// WYATTLIKESCOMPONENT SYSTEM - Main Export Index
// =============================================================================

/**
 * COPILOT INSTRUCTION: Complete WyattLikes component system export
 * This index file provides easy access to all WyattLikes components,
 * types, and utilities following the comprehensive template guidelines
 */

// Type exports
export * from '../types/wyatt';
export type {
  WyattServiceCardProps,
  WyattLandingPageProps,
  WyattErrorBoundaryProps,
  WyattErrorBoundaryState,
  WyattErrorFallbackProps,
  WyattBaseComponentProps,
  WyattButtonProps,
  WyattCardProps,
  WyattSectionProps,
  WyattGridProps,
  WyattThemeContextType,
  WyattAnimationProps,
  WyattAccessibilityProps,
  WyattServiceData,
  WyattServicesGridProps,
  WyattTypographyProps,
  WyattLoadingProps,
  WyattSkeletonProps,
  WyattLazyComponentProps,
  WyattFormProps,
  WyattInputProps
} from '../types/wyatt';

// Component exports
export { default as WyattButton, WyattButton } from './WyattButton';
export {
  WyattErrorBoundary,
  WyattErrorFallback,
  withWyattErrorBoundary,
  useWyattErrorReset
} from './WyattErrorBoundary';
export {
  default as WyattSkeleton,
  WyattServiceCardSkeleton,
  WyattLoader,
  WyattLazyLoader,
  WyattImageLoader,
  WyattLoadingButton,
  WyattPageLoader,
  WyattLoadingProvider,
  useWyattLoading
} from './WyattSkeletonComponents';

// Existing components that follow Wyatt patterns
export { default as FeaturedServicesSection } from './FeaturedServicesSection';
export { default as LoadingStates } from './LoadingStates';

// Utility functions for Wyatt components
export const WyattUtils = {
  /**
   * Generate Wyatt-compliant CSS class names
   */
  generateWyattClass: (base: string, variant?: string, size?: string, state?: string) => {
    let className = `wyatt-${base}`;
    if (variant) className += ` wyatt-${base}-${variant}`;
    if (size) className += ` wyatt-${base}-${size}`;
    if (state) className += ` wyatt-${base}-${state}`;
    return className;
  },

  /**
   * Apply Wyatt accessibility props
   */
  applyAccessibilityProps: (props: any) => ({
    'aria-label': props['aria-label'],
    role: props.role,
    tabIndex: props.disabled ? -1 : props.tabIndex || 0,
    'aria-disabled': props.disabled,
    'aria-hidden': props['aria-hidden'],
    'aria-expanded': props['aria-expanded'],
    'aria-selected': props['aria-selected'],
    'aria-pressed': props['aria-pressed'],
    'aria-live': props['aria-live'],
    'aria-describedby': props['aria-describedby']
  }),

  /**
   * Get theme-aware styles
   */
  getThemeStyles: (theme: 'day' | 'night') => ({
    'data-theme': theme,
    className: theme === 'night' ? 'wyatt-night-mode' : 'wyatt-day-mode'
  }),

  /**
   * Generate brutalist box shadow
   */
  getBrutalistShadow: (offset = 8, color = '#000000', alpha = 1) => 
    `${offset}px ${offset}px 0px ${color}${alpha < 1 ? Math.round(alpha * 255).toString(16).padStart(2, '0') : ''}`,

  /**
   * Generate responsive breakpoints for Wyatt components
   */
  getResponsiveBreakpoints: () => ({
    ultraMobile: '480px',
    mobile: '768px', 
    tablet: '1024px',
    desktop: '1400px'
  }),

  /**
   * Validate color contrast for accessibility
   */
  validateContrast: (foreground: string, background: string) => {
    // Simple contrast validation - in production, use a proper contrast library
    const fgLum = WyattUtils.getLuminance(foreground);
    const bgLum = WyattUtils.getLuminance(background);
    const contrast = (Math.max(fgLum, bgLum) + 0.05) / (Math.min(fgLum, bgLum) + 0.05);
    return {
      ratio: contrast,
      passesAA: contrast >= 4.5,
      passesAAA: contrast >= 7,
      recommendation: contrast < 4.5 ? 'Increase contrast for better accessibility' : 'Good contrast'
    };
  },

  /**
   * Calculate relative luminance (simplified)
   */
  getLuminance: (color: string) => {
    // Simplified luminance calculation - in production, use a proper color library
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
};

// Master color constants following the brand system
export const WyattColors = {
  // Master trio
  primary: '#ff69b4', // Hot Pink Magenta
  accent: '#38b6ff',  // Vibrant Cyan Blue
  success: '#ebf998', // Energetic Lime Green
  
  // Structural
  foreground: '#222222',
  background: '#FAFBFC',
  border: '#000000',
  card: '#FFFFFF',
  
  // Extended palette
  neutral: {
    0: '#FFFFFF',
    10: '#FAFBFC',
    20: '#F8FAFC',
    30: '#F1F5F9',
    40: '#F4F4F5',
    60: '#475569',
    80: '#27272A',
    90: '#222222',
    100: '#000000'
  },
  
  // Gradients
  gradients: {
    influencer: 'linear-gradient(135deg, #ff69b4 0%, #38b6ff 50%, #ebf998 100%)',
    creative: 'linear-gradient(135deg, #ff69b4 0%, #ebf998 100%)',
    ai: 'linear-gradient(135deg, #38b6ff 0%, #ff69b4 100%)',
    restaurant: 'linear-gradient(135deg, #ebf998 0%, #38b6ff 100%)',
    branding: 'linear-gradient(135deg, #38b6ff 0%, #ebf998 50%, #ff69b4 100%)',
    primary: 'linear-gradient(135deg, #FAFBFC 0%, #F1F5F9 100%)'
  }
};

// Animation constants following brutalist principles
export const WyattAnimations = {
  // Durations
  fast: '0.2s',
  medium: '0.3s',
  slow: '0.5s',
  
  // Easings
  easing: {
    bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    smooth: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)'
  },
  
  // Transform values
  hover: {
    translateY: '-4px',
    scale: '1.02',
    rotate: '-1deg'
  },
  
  // Shadow offsets
  shadow: {
    base: '6px 6px 0px',
    hover: '8px 8px 0px',
    active: '4px 4px 0px'
  }
};

// Responsive breakpoints
export const WyattBreakpoints = {
  ultraMobile: 480,
  mobile: 768,
  tablet: 1024,
  desktop: 1400
};

// Typography scale
export const WyattTypography = {
  fontFamily: {
    display: 'var(--font-display)',
    primary: 'var(--font-primary)', 
    mono: 'var(--font-mono)'
  },
  
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem'
  },
  
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  
  lineHeight: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75
  }
};

// Export everything as default for easier importing
export default {
  // Components
  WyattButton,
  WyattErrorBoundary,
  WyattErrorFallback,
  WyattSkeleton,
  WyattServiceCardSkeleton,
  WyattLoader,
  WyattLazyLoader,
  WyattImageLoader,
  WyattLoadingButton,
  WyattPageLoader,
  WyattLoadingProvider,
  
  // Utilities
  WyattUtils,
  WyattColors,
  WyattAnimations,
  WyattBreakpoints,
  WyattTypography,
  
  // HOCs and Hooks
  withWyattErrorBoundary,
  useWyattErrorReset,
  useWyattLoading
};

// Version and metadata
export const WYATT_VERSION = '1.0.0';
export const WYATT_BUILD_DATE = new Date().toISOString();

/**
 * Master WyattLikes component implementation checklist:
 * ✅ TypeScript interfaces with proper accessibility props
 * ✅ Brutalist design principles (6px borders, bold shadows)
 * ✅ Master color system integration (#ff69b4, #38b6ff, #ebf998)
 * ✅ Responsive design with mobile-first approach
 * ✅ Accessibility compliance (ARIA, keyboard nav, focus indicators)
 * ✅ Animation system with reduced motion support
 * ✅ Error boundary with brutalist styling
 * ✅ Loading states and skeleton components
 * ✅ Performance optimization (lazy loading, memoization)
 * ✅ Night/day theme support
 * ✅ Comprehensive CSS class naming (wyatt- prefix)
 * ✅ Export system for easy component usage
 */