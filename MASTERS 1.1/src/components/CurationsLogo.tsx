import React from 'react';
import atomGradient from '@/assets/images/atom-gradient.svg';
import atomBlack from '@/assets/images/atom-black.svg';
import atomWhite from '@/assets/images/atom-white.svg';
import atomEnhanced from '@/assets/images/atom-enhanced.svg';

interface CurationsLogoProps {
  variant?: 'default' | 'white' | 'black' | 'gradient' | 'enhanced';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  animate?: boolean;
}

export default function CurationsLogo({ 
  variant = 'default', 
  size = 'md', 
  showText = true, 
  className = '',
  animate = false
}: CurationsLogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-20 w-20'
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-5xl'
  };

  const getAtomSrc = () => {
    switch (variant) {
      case 'white':
        return atomWhite;
      case 'black':
        return atomBlack;
      case 'enhanced':
        return atomEnhanced;
      case 'gradient':
        return atomEnhanced; // Use enhanced for better visibility
      default:
        return atomEnhanced;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'white':
        return { color: 'white', fontWeight: '900', letterSpacing: '-0.02em' };
      case 'black':
        return { color: 'black', fontWeight: '900', letterSpacing: '-0.02em' };
      case 'enhanced':
      case 'gradient':
      default:
        return { 
          background: 'linear-gradient(135deg, #6370E7 0%, #38B6FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontWeight: '900',
          letterSpacing: '-0.02em'
        };
    }
  };

  const getAnimationClass = () => {
    if (!animate) return '';
    return 'atom-enhanced transition-all duration-300';
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Enhanced Atom Icon */}
      <div className="relative">
        <img 
          src={getAtomSrc()} 
          alt="CURATIONS Atom Logo" 
          className={`${sizeClasses[size]} transition-all duration-300 hover:rotate-12 hover:scale-110 ${getAnimationClass()}`}
          style={{
            filter: animate ? 'drop-shadow(0 0 10px rgba(255, 105, 180, 0.3))' : 'none'
          }}
        />
      </div>
      {/* CURATIONS Text */}
      {showText && (
        <div 
          className={`font-black ${textSizeClasses[size]} tracking-tight uppercase leading-none transition-all duration-300 hover:tracking-wide`}
          style={getTextStyle()}
        >CURATIONS</div>
      )}
    </div>
  );
}

// Alternative compact logo for mobile/small spaces
export function CurationsCompactLogo({ variant = 'enhanced', className = '', animate = false }: { variant?: 'default' | 'white' | 'black' | 'gradient' | 'enhanced'; className?: string; animate?: boolean }) {
  return (
    <CurationsLogo 
      variant={variant}
      size="sm"
      showText={true}
      className={className}
      animate={animate}
    />
  );
}

// Just the atom icon
export function AtomIcon({ variant = 'enhanced', size = 'md', className = '', animate = false }: { variant?: 'default' | 'white' | 'black' | 'gradient' | 'enhanced'; size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string; animate?: boolean }) {
  return (
    <CurationsLogo 
      variant={variant}
      size={size}
      showText={false}
      className={className}
      animate={animate}
    />
  );
}