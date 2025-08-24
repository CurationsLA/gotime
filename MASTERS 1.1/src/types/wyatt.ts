// =============================================================================
// WYATTLIKESCOMPONENT ARCHITECTURE - TypeScript Interfaces
// =============================================================================

/**
 * COPILOT INSTRUCTION: Generate TypeScript interfaces for all WyattLikes components
 * Key patterns:
 * - Prefix all interfaces with 'Wyatt'
 * - Include accessibility props (aria-label, role)
 * - Support both light and dark themes
 * - Maintain brutalist design principles
 */

export interface WyattServiceCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  gradient: 'primary' | 'accent' | 'success';
  ctaText: string;
  href: string;
  className?: string;
  'aria-label'?: string;
  role?: string;
}

export interface WyattLandingPageProps {
  heroTitle: string;
  heroDescription: string;
  services: WyattServiceCardProps[];
  theme?: 'day' | 'night';
  className?: string;
}

export interface WyattErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: string;
}

export interface WyattErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<WyattErrorFallbackProps>;
  onError?: (error: Error, errorInfo: string) => void;
  resetKeys?: Array<string | number>;
}

export interface WyattErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
  errorInfo?: string;
}

export interface WyattBaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  'aria-label'?: string;
  role?: string;
  id?: string;
  onClick?: (event: React.MouseEvent) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
}

export interface WyattButtonProps extends WyattBaseComponentProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
}

export interface WyattCardProps extends WyattBaseComponentProps {
  title?: string;
  description?: string;
  icon?: string;
  gradient?: 'primary' | 'accent' | 'success' | 'neutral';
  hover?: boolean;
  sparkle?: boolean;
  corner?: string;
}

export interface WyattSectionProps extends WyattBaseComponentProps {
  title?: string;
  subtitle?: string;
  theme?: 'day' | 'night';
  background?: 'gradient' | 'solid' | 'transparent';
}

export interface WyattGridProps extends WyattBaseComponentProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: 'small' | 'medium' | 'large';
  responsive?: boolean;
}

export interface WyattThemeContextType {
  theme: 'day' | 'night';
  toggleTheme: () => void;
  setTheme: (theme: 'day' | 'night') => void;
}

export interface WyattAnimationProps {
  enabled?: boolean;
  duration?: number;
  delay?: number;
  easing?: string;
  hover?: boolean;
  focus?: boolean;
}

export interface WyattAccessibilityProps {
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-hidden'?: boolean;
  'aria-live'?: 'polite' | 'assertive' | 'off';
  'aria-pressed'?: boolean;
  'aria-selected'?: boolean;
  tabIndex?: number;
  role?: string;
}

// Service-specific interfaces
export interface WyattServiceData {
  slug: string;
  title: string;
  description: string;
  icon: string;
  palette?: 'primary' | 'accent' | 'highlight' | 'neutral' | 'inverted';
  featured?: boolean;
  category?: string;
  tags?: string[];
}

export interface WyattServicesGridProps extends WyattBaseComponentProps {
  services: WyattServiceData[];
  limit?: number;
  columns?: number;
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

// Typography interfaces
export interface WyattTypographyProps extends WyattBaseComponentProps {
  variant?: 'display' | 'heading' | 'body' | 'caption' | 'code';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  align?: 'left' | 'center' | 'right' | 'justify';
  color?: 'foreground' | 'muted' | 'accent' | 'success' | 'error' | 'warning';
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  as?: keyof JSX.IntrinsicElements;
}

// Loading and skeleton interfaces
export interface WyattLoadingProps {
  variant?: 'spinner' | 'skeleton' | 'pulse' | 'shimmer';
  size?: 'small' | 'medium' | 'large';
  lines?: number;
  width?: string;
  height?: string;
}

export interface WyattSkeletonProps extends WyattBaseComponentProps {
  lines?: number;
  width?: string | string[];
  height?: string | string[];
  animated?: boolean;
  shape?: 'rectangle' | 'circle' | 'rounded';
}

// Performance optimization types
export interface WyattLazyComponentProps {
  fallback?: React.ComponentType;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

// Form component interfaces
export interface WyattFormProps extends WyattBaseComponentProps {
  onSubmit: (data: any) => void;
  validation?: object;
  loading?: boolean;
  resetAfterSubmit?: boolean;
}

export interface WyattInputProps extends WyattBaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'url' | 'tel' | 'search';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onBlur?: (event: React.FocusEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  label?: string;
  helper?: string;
  icon?: string;
}

// Export all as a namespace for easier imports
export namespace Wyatt {
  export type ServiceCardProps = WyattServiceCardProps;
  export type LandingPageProps = WyattLandingPageProps;
  export type ErrorBoundaryProps = WyattErrorBoundaryProps;
  export type ErrorBoundaryState = WyattErrorBoundaryState;
  export type ButtonProps = WyattButtonProps;
  export type CardProps = WyattCardProps;
  export type SectionProps = WyattSectionProps;
  export type GridProps = WyattGridProps;
  export type ThemeContextType = WyattThemeContextType;
  export type AnimationProps = WyattAnimationProps;
  export type AccessibilityProps = WyattAccessibilityProps;
  export type ServiceData = WyattServiceData;
  export type ServicesGridProps = WyattServicesGridProps;
  export type TypographyProps = WyattTypographyProps;
  export type LoadingProps = WyattLoadingProps;
  export type SkeletonProps = WyattSkeletonProps;
  export type LazyComponentProps = WyattLazyComponentProps;
  export type FormProps = WyattFormProps;
  export type InputProps = WyattInputProps;
}