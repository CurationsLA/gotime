import React, { useState } from 'react';

interface ThemeServicePageProps {
  serviceName: string;
  emoji: string;
  description: string;
  features: string[];
  theme: {
    id: string;
    name: string;
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      foreground: string;
    };
    typography: {
      display: string;
      body: string;
      mono: string;
    };
    style: 'light' | 'dark';
    category: 'day' | 'night';
  };
  packages?: Array<{
    title: string;
    price: string;
    features: string[];
  }>;
}

export const ThemeServicePage: React.FC<ThemeServicePageProps> = ({
  serviceName,
  emoji,
  description,
  features,
  theme,
  packages = []
}) => {
  const [currentSection, setCurrentSection] = useState<'overview' | 'features' | 'packages' | 'contact'>('overview');

  const isDark = theme.style === 'dark';
  const isNight = theme.category === 'night';

  // Dynamic styling based on theme
  const getThemeStyles = () => ({
    heroBackground: isNight 
      ? `radial-gradient(ellipse at center, ${theme.colors.primary}40 0%, #000 100%)`
      : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 50%, ${theme.colors.accent} 100%)`,
    
    sectionBackground: isDark 
      ? '#0a0a0a'
      : theme.colors.background,
      
    cardBackground: isDark 
      ? 'rgba(255, 255, 255, 0.05)'
      : 'white',
      
    textShadow: isNight 
      ? `0 0 20px ${theme.colors.primary}` 
      : 'none',
      
    border: isDark
      ? `2px solid ${theme.colors.primary}`
      : '4px solid #000',
      
    boxShadow: isDark
      ? `0 0 20px ${theme.colors.primary}40`
      : '8px 8px 0px #000'
  });

  const styles = getThemeStyles();

  // Special effects for specific themes
  const renderThemeEffects = () => {
    if (theme.id === 'cyberpunk') {
      return (
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(${theme.colors.primary}40 1px, transparent 1px),
            linear-gradient(90deg, ${theme.colors.secondary}40 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 10s linear infinite',
          opacity: 0.3
        }} />
      );
    }
    
    if (theme.id === 'aurora') {
      return (
        <>
          <div style={{
            position: 'absolute',
            width: '200%',
            height: '200%',
            top: '-50%',
            left: '-50%',
            background: `radial-gradient(ellipse at center, ${theme.colors.primary} 0%, transparent 40%)`,
            animation: 'aurora-dance 20s ease-in-out infinite',
            opacity: 0.4,
            filter: 'blur(100px)'
          }} />
          <div style={{
            position: 'absolute',
            width: '200%',
            height: '200%',
            top: '-50%',
            left: '-50%',
            background: `radial-gradient(ellipse at center, ${theme.colors.secondary} 0%, transparent 40%)`,
            animation: 'aurora-dance 20s ease-in-out infinite',
            animationDelay: '-7s',
            opacity: 0.4,
            filter: 'blur(100px)'
          }} />
        </>
      );
    }
    
    return null;
  };

  const renderNavigation = () => (
    <nav style={{
      background: isDark ? '#000' : 'white',
      borderBottom: styles.border,
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        {[
          { key: 'overview', label: '📋 Overview' },
          { key: 'features', label: '⭐ Features' },
          { key: 'packages', label: '💰 Packages' },
          { key: 'contact', label: '📞 Contact' }
        ].map(section => (
          <button
            key={section.key}
            onClick={() => setCurrentSection(section.key as any)}
            style={{
              background: currentSection === section.key ? theme.colors.primary : 'transparent',
              color: currentSection === section.key 
                ? (isDark ? '#000' : 'white')
                : (isDark ? theme.colors.primary : theme.colors.foreground),
              border: `2px solid ${theme.colors.primary}`,
              padding: '0.75rem 1.5rem',
              fontFamily: theme.typography.display,
              fontWeight: '700',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              letterSpacing: '0.5px',
              textShadow: isDark && currentSection === section.key ? 'none' : styles.textShadow
            }}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );

  const renderHero = () => (
    <section style={{
      background: styles.heroBackground,
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      color: 'white',
      textAlign: 'center'
    }}>
      {renderThemeEffects()}
      
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          fontSize: '4rem',
          marginBottom: '1rem',
          filter: isNight ? `drop-shadow(0 0 20px ${theme.colors.primary})` : 'none'
        }}>
          {emoji}
        </div>
        
        <h1 style={{
          fontFamily: theme.typography.display,
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: '900',
          textTransform: 'uppercase',
          margin: '0 0 2rem 0',
          textShadow: styles.textShadow
        }}>
          {serviceName}
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          fontWeight: '500',
          margin: '0 0 3rem 0',
          lineHeight: '1.6',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          {description}
        </p>
        
        <button
          onClick={() => setCurrentSection('contact')}
          style={{
            background: theme.colors.accent,
            color: isDark ? '#000' : 'white',
            border: styles.border,
            padding: '1.5rem 3rem',
            fontFamily: theme.typography.display,
            fontSize: '1.125rem',
            fontWeight: '900',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: styles.boxShadow,
            letterSpacing: '0.5px'
          }}
        >
          Get Started Today
        </button>
      </div>
    </section>
  );

  const renderOverview = () => (
    <section style={{
      background: styles.sectionBackground,
      padding: '6rem 2rem',
      color: isDark ? 'white' : theme.colors.foreground
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: theme.typography.display,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '900',
          textTransform: 'uppercase',
          textAlign: 'center',
          margin: '0 0 3rem 0',
          color: theme.colors.primary,
          textShadow: isDark ? `0 0 10px ${theme.colors.primary}` : 'none'
        }}>
          Why Choose Our {serviceName}?
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {features.slice(0, 6).map((feature, index) => (
            <div
              key={index}
              style={{
                background: styles.cardBackground,
                color: isDark ? 'white' : theme.colors.foreground,
                padding: '2rem',
                border: styles.border,
                boxShadow: styles.boxShadow,
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                color: theme.colors.primary,
                fontSize: '1.5rem',
                fontWeight: '900',
                marginBottom: '1rem',
                fontFamily: theme.typography.display,
                textShadow: isDark ? `0 0 10px ${theme.colors.primary}` : 'none'
              }}>
                0{index + 1}
              </div>
              <p style={{
                fontWeight: '600',
                lineHeight: '1.6',
                margin: 0
              }}>
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderFeatures = () => (
    <section style={{
      background: isDark 
        ? `linear-gradient(135deg, ${theme.colors.primary}10 0%, ${theme.colors.secondary}10 100%)`
        : `linear-gradient(135deg, ${theme.colors.primary}20 0%, ${theme.colors.secondary}20 100%)`,
      padding: '6rem 2rem',
      color: isDark ? 'white' : theme.colors.foreground
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: theme.typography.display,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '900',
          textTransform: 'uppercase',
          textAlign: 'center',
          margin: '0 0 4rem 0',
          color: theme.colors.primary,
          textShadow: isDark ? `0 0 10px ${theme.colors.primary}` : 'none'
        }}>
          Complete Feature Set
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1rem'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                background: styles.cardBackground,
                color: isDark ? 'white' : theme.colors.foreground,
                padding: '1.5rem',
                border: `1px solid ${theme.colors.primary}40`,
                boxShadow: isDark ? `0 0 10px ${theme.colors.primary}20` : '4px 4px 0px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                background: theme.colors.primary,
                color: isDark ? '#000' : 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '900',
                flexShrink: 0
              }}>
                ✓
              </div>
              <span style={{ fontWeight: '600' }}>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderPackages = () => (
    <section style={{
      background: styles.sectionBackground,
      padding: '6rem 2rem',
      color: isDark ? 'white' : theme.colors.foreground
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: theme.typography.display,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '900',
          textTransform: 'uppercase',
          textAlign: 'center',
          margin: '0 0 4rem 0',
          color: theme.colors.primary,
          textShadow: isDark ? `0 0 10px ${theme.colors.primary}` : 'none'
        }}>
          Service Packages
        </h2>
        
        {packages.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {packages.map((pkg, index) => (
              <div
                key={index}
                style={{
                  background: styles.cardBackground,
                  color: isDark ? 'white' : theme.colors.foreground,
                  padding: '2.5rem',
                  border: styles.border,
                  boxShadow: styles.boxShadow,
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <h3 style={{
                  fontFamily: theme.typography.display,
                  fontSize: '1.5rem',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  margin: '0 0 1rem 0',
                  color: theme.colors.primary
                }}>
                  {pkg.title}
                </h3>
                
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  color: theme.colors.accent,
                  margin: '0 0 2rem 0',
                  fontFamily: theme.typography.display
                }}>
                  {pkg.price}
                </div>
                
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 2rem 0',
                  textAlign: 'left'
                }}>
                  {pkg.features.map((feature, i) => (
                    <li key={i} style={{ 
                      padding: '0.5rem 0',
                      borderBottom: `1px solid ${theme.colors.primary}30`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <span style={{ color: theme.colors.primary, fontWeight: '900' }}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button style={{
                  background: theme.colors.primary,
                  color: isDark ? '#000' : 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  fontFamily: theme.typography.display,
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  width: '100%',
                  boxShadow: isDark ? `0 0 20px ${theme.colors.primary}40` : '4px 4px 0px #000'
                }}>
                  Choose {pkg.title}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            background: styles.cardBackground,
            padding: '3rem',
            border: styles.border,
            boxShadow: styles.boxShadow,
            textAlign: 'center',
            color: isDark ? 'white' : theme.colors.foreground
          }}>
            <h3 style={{
              fontFamily: theme.typography.display,
              fontSize: '2rem',
              fontWeight: '900',
              textTransform: 'uppercase',
              margin: '0 0 1rem 0',
              color: theme.colors.primary
            }}>
              Custom Pricing
            </h3>
            <p style={{ fontSize: '1.25rem', margin: '0 0 2rem 0' }}>
              Every project is unique. Let's discuss your specific needs and create a custom package that delivers exactly what you're looking for.
            </p>
            <button style={{
              background: theme.colors.accent,
              color: isDark ? '#000' : 'white',
              border: styles.border,
              padding: '1.5rem 3rem',
              fontFamily: theme.typography.display,
              fontSize: '1.125rem',
              fontWeight: '900',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: styles.boxShadow
            }}>
              Get Custom Quote
            </button>
          </div>
        )}
      </div>
    </section>
  );

  const renderContact = () => (
    <section style={{
      background: isDark 
        ? `linear-gradient(135deg, #000 0%, ${theme.colors.primary}20 100%)`
        : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
      padding: '6rem 2rem',
      color: 'white',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: theme.typography.display,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '900',
          textTransform: 'uppercase',
          margin: '0 0 2rem 0',
          textShadow: styles.textShadow
        }}>
          Ready to Get Started?
        </h2>
        
        <p style={{
          fontSize: '1.25rem',
          margin: '0 0 3rem 0',
          lineHeight: '1.6'
        }}>
          Let's discuss how our {serviceName.toLowerCase()} services can transform your business. 
          Get in touch today for a free consultation.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:hello@curations.org"
            style={{
              background: theme.colors.accent,
              color: isDark ? '#000' : 'white',
              padding: '1.5rem 3rem',
              fontFamily: theme.typography.display,
              fontSize: '1.125rem',
              fontWeight: '900',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: styles.border,
              boxShadow: styles.boxShadow,
              transition: 'all 0.3s ease'
            }}
          >
            📧 Email Us
          </a>
          
          <a
            href="#"
            style={{
              background: 'transparent',
              color: 'white',
              padding: '1.5rem 3rem',
              fontFamily: theme.typography.display,
              fontSize: '1.125rem',
              fontWeight: '900',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '3px solid white',
              boxShadow: '4px 4px 0px rgba(255,255,255,0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            📞 Schedule Call
          </a>
        </div>
      </div>
    </section>
  );

  return (
    <div style={{ minHeight: '100vh' }}>
      {renderHero()}
      {renderNavigation()}
      
      {currentSection === 'overview' && renderOverview()}
      {currentSection === 'features' && renderFeatures()}
      {currentSection === 'packages' && renderPackages()}
      {currentSection === 'contact' && renderContact()}
    </div>
  );
};

export default ThemeServicePage;