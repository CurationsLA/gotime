import React, { useState, useEffect } from 'react';
import DevHomeEscape from './DevHomeEscape';

interface ThemeConfig {
  id: string;
  name: string;
  description: string;
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
}

interface SiteConfig {
  name: string;
  tagline: string;
  services: string[];
  theme: ThemeConfig;
  pages: string[];
}

const serviceEmojis: Record<string, string> = {
  'AI Discovery': '🤖',
  'Creative Campaigns': '🎨',
  'Branding Toolkit': '🛠️',
  'Restaurant & Biz': '🍽️',
  'Public Relations': '📰',
  'Influencer & UGC': '🤝',
  'Newsletters': '📧',
  'Youth Curator': '👥'
};

const getThemeStyles = (theme: ThemeConfig) => {
  const isNight = theme.category === 'night';
  const isDark = theme.style === 'dark';
  
  return {
    // Background patterns
    heroBackground: isNight 
      ? 'radial-gradient(ellipse at center, #1a1a2e 0%, #000 100%)'
      : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 50%, ${theme.colors.accent} 100%)`,
    
    sectionBackground: isDark 
      ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
      : theme.colors.background,
      
    cardBackground: isDark 
      ? 'rgba(255, 255, 255, 0.05)'
      : 'white',
      
    // Animations
    primaryAnimation: theme.id === 'aurora' 
      ? 'aurora-dance 20s ease-in-out infinite'
      : theme.id === 'cyberpunk'
      ? 'grid-move 10s linear infinite'  
      : theme.id === 'neon-trio'
      ? 'neon-pulse 2s ease-in-out infinite'
      : 'none',
      
    // Special effects
    textShadow: isNight 
      ? `0 0 20px ${theme.colors.primary}, 0 0 40px ${theme.colors.secondary}`
      : 'none',
      
    boxShadow: isDark
      ? `0 0 30px ${theme.colors.primary}40`
      : '8px 8px 0px #000',
      
    border: isDark
      ? `2px solid ${theme.colors.primary}`
      : '4px solid #000'
  };
};

export default function ThemeSitePreview() {
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Parse URL parameters
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
    const themeId = urlParams.get('theme');
    const configStr = urlParams.get('config');
    
    if (configStr) {
      try {
        const config = JSON.parse(decodeURIComponent(configStr));
        setSiteConfig(config);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error parsing site config:', error);
      }
    }
  }, []);

  if (!isLoaded || !siteConfig) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        color: '#EBF998'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚡</div>
          <div style={{ fontFamily: 'Oswald', fontSize: '2rem', fontWeight: '900' }}>
            LOADING THEME PREVIEW...
          </div>
        </div>
      </div>
    );
  }

  const theme = siteConfig.theme;
  const styles = getThemeStyles(theme);

  // Dynamic CSS injection for advanced themes
  useEffect(() => {
    if (!theme) return;
    
    const styleSheet = document.createElement('style');
    styleSheet.id = 'theme-preview-styles';
    
    let css = '';
    
    // Aurora theme animations
    if (theme.id === 'aurora') {
      css += `
        @keyframes aurora-dance {
          0%, 100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
          25% { transform: translate(-30%, -30%) rotate(45deg) scale(1.2); }
          50% { transform: translate(30%, -30%) rotate(90deg) scale(0.8); }
          75% { transform: translate(0%, 30%) rotate(180deg) scale(1.1); }
        }
        .aurora-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.4;
          filter: blur(100px);
          mix-blend-mode: screen;
        }
      `;
    }
    
    // Cyberpunk grid animation
    if (theme.id === 'cyberpunk') {
      css += `
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        .cyber-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(${theme.colors.primary}40 1px, transparent 1px),
            linear-gradient(90deg, ${theme.colors.secondary}40 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 10s linear infinite;
        }
      `;
    }
    
    // Neon pulse animation
    if (theme.id === 'neon-trio') {
      css += `
        @keyframes neon-pulse {
          0%, 100% { 
            box-shadow: 0 0 20px ${theme.colors.primary}, 0 0 40px ${theme.colors.secondary}, 0 0 60px ${theme.colors.accent};
            filter: brightness(1);
          }
          50% { 
            box-shadow: 0 0 30px ${theme.colors.primary}, 0 0 60px ${theme.colors.secondary}, 0 0 90px ${theme.colors.accent};
            filter: brightness(1.2);
          }
        }
      `;
    }
    
    styleSheet.textContent = css;
    document.head.appendChild(styleSheet);
    
    return () => {
      const existingStyleSheet = document.getElementById('theme-preview-styles');
      if (existingStyleSheet) {
        existingStyleSheet.remove();
      }
    };
  }, [theme]);

  const renderNavigation = () => (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: theme.style === 'dark' ? '#000' : 'white',
      borderBottom: styles.border,
      zIndex: 100,
      boxShadow: theme.style === 'dark' ? `0 2px 20px ${theme.colors.primary}40` : '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontFamily: theme.typography.display,
          fontSize: '1.5rem',
          fontWeight: '900',
          color: theme.style === 'dark' ? theme.colors.primary : theme.colors.foreground,
          textShadow: theme.style === 'dark' ? `0 0 10px ${theme.colors.primary}` : 'none'
        }}>
          [{siteConfig.name}]
        </div>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Home', 'About', 'Services', 'Contact'].map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page.toLowerCase())}
              style={{
                background: 'transparent',
                border: 'none',
                color: currentPage === page.toLowerCase() 
                  ? theme.colors.primary 
                  : (theme.style === 'dark' ? 'white' : theme.colors.foreground),
                fontFamily: theme.typography.body,
                fontWeight: currentPage === page.toLowerCase() ? '800' : '600',
                fontSize: '1rem',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textShadow: theme.style === 'dark' && currentPage === page.toLowerCase() 
                  ? `0 0 10px ${theme.colors.primary}` 
                  : 'none'
              }}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const renderHero = () => (
    <section style={{
      background: styles.heroBackground,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      color: 'white',
      textAlign: 'center'
    }}>
      {/* Special theme effects */}
      {theme.id === 'aurora' && (
        <>
          <div className="aurora-layer" style={{
            background: `radial-gradient(ellipse at center, ${theme.colors.primary} 0%, transparent 40%)`,
            animation: 'aurora-dance 20s ease-in-out infinite'
          }} />
          <div className="aurora-layer" style={{
            background: `radial-gradient(ellipse at center, ${theme.colors.secondary} 0%, transparent 40%)`,
            animation: 'aurora-dance 20s ease-in-out infinite',
            animationDelay: '-7s'
          }} />
          <div className="aurora-layer" style={{
            background: `radial-gradient(ellipse at center, ${theme.colors.accent} 0%, transparent 40%)`,
            animation: 'aurora-dance 20s ease-in-out infinite',
            animationDelay: '-14s'
          }} />
        </>
      )}
      
      {theme.id === 'cyberpunk' && (
        <div className="cyber-grid" />
      )}
      
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', padding: '0 2rem' }}>
        <h1 style={{
          fontFamily: theme.typography.display,
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: '900',
          textTransform: 'uppercase',
          margin: '0 0 2rem 0',
          textShadow: styles.textShadow,
          animation: theme.id === 'neon-trio' ? 'neon-pulse 2s ease-in-out infinite' : 'none'
        }}>
          {siteConfig.name}
        </h1>
        
        <p style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          margin: '0 0 3rem 0',
          textShadow: theme.style === 'dark' ? `0 0 10px ${theme.colors.secondary}` : 'none'
        }}>
          {siteConfig.tagline}
        </p>
        
        <button style={{
          background: theme.colors.accent,
          color: theme.style === 'dark' ? '#000' : 'white',
          border: styles.border,
          padding: '1.5rem 3rem',
          fontFamily: theme.typography.display,
          fontSize: '1.25rem',
          fontWeight: '900',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: styles.boxShadow,
          animation: theme.id === 'neon-trio' ? 'neon-pulse 2s ease-in-out infinite' : 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translate(-4px, -4px)';
          if (theme.style === 'light') {
            e.currentTarget.style.boxShadow = '12px 12px 0px #000';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = styles.boxShadow;
        }}
        >
          Explore Our Services
        </button>
      </div>
    </section>
  );

  const renderServices = () => (
    <section style={{
      background: styles.sectionBackground,
      padding: '6rem 2rem',
      color: theme.colors.foreground
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: theme.typography.display,
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '900',
          textTransform: 'uppercase',
          textAlign: 'center',
          margin: '0 0 4rem 0',
          color: theme.colors.primary,
          textShadow: theme.style === 'dark' ? `0 0 20px ${theme.colors.primary}` : 'none'
        }}>
          Our Services
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {siteConfig.services.map((service, index) => (
            <div
              key={service}
              style={{
                background: styles.cardBackground,
                color: theme.style === 'dark' ? 'white' : theme.colors.foreground,
                padding: '2rem',
                border: styles.border,
                boxShadow: styles.boxShadow,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-4px, -4px)';
                if (theme.style === 'light') {
                  e.currentTarget.style.boxShadow = '12px 12px 0px #000';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = styles.boxShadow;
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                textAlign: 'center',
                filter: theme.style === 'dark' ? `drop-shadow(0 0 10px ${theme.colors.primary})` : 'none'
              }}>
                {serviceEmojis[service] || '⭐'}
              </div>
              
              <h3 style={{
                fontFamily: theme.typography.display,
                fontSize: '1.5rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                margin: '0 0 1rem 0',
                textAlign: 'center',
                color: theme.colors.primary
              }}>
                {service}
              </h3>
              
              <p style={{
                textAlign: 'center',
                lineHeight: '1.6',
                opacity: 0.8
              }}>
                Professional {service.toLowerCase()} services tailored to your brand's unique needs and goals.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderAbout = () => (
    <section style={{
      background: theme.style === 'dark' 
        ? 'linear-gradient(135deg, #1a1a2e 0%, #000 100%)'
        : `linear-gradient(135deg, ${theme.colors.primary}20 0%, ${theme.colors.secondary}20 100%)`,
      padding: '6rem 2rem',
      color: theme.colors.foreground
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: theme.typography.display,
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '900',
          textTransform: 'uppercase',
          margin: '0 0 3rem 0',
          color: theme.colors.primary,
          textShadow: theme.style === 'dark' ? `0 0 20px ${theme.colors.primary}` : 'none'
        }}>
          About {siteConfig.name}
        </h2>
        
        <div style={{
          background: styles.cardBackground,
          padding: '3rem',
          border: styles.border,
          boxShadow: styles.boxShadow,
          color: theme.style === 'dark' ? 'white' : theme.colors.foreground
        }}>
          <p style={{
            fontSize: '1.25rem',
            lineHeight: '1.8',
            marginBottom: '2rem'
          }}>
            {siteConfig.tagline} - We're a {theme.category === 'night' ? 'cutting-edge' : 'innovative'} agency 
            specializing in {siteConfig.services.slice(0, 3).join(', ')} and more. Our {theme.name.toLowerCase()} 
            approach combines creativity with strategy to deliver exceptional results.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', color: theme.colors.accent, marginBottom: '0.5rem' }}>100+</div>
              <div style={{ fontWeight: '700' }}>Projects Completed</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', color: theme.colors.accent, marginBottom: '0.5rem' }}>50+</div>
              <div style={{ fontWeight: '700' }}>Happy Clients</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', color: theme.colors.accent, marginBottom: '0.5rem' }}>5+</div>
              <div style={{ fontWeight: '700' }}>Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <DevHomeEscape />
      {renderNavigation()}
      
      {currentPage === 'home' && (
        <>
          {renderHero()}
          {renderServices()}
        </>
      )}
      
      {currentPage === 'about' && renderAbout()}
      
      {currentPage === 'services' && (
        <div style={{ paddingTop: '4rem' }}>
          {renderServices()}
        </div>
      )}
      
      {currentPage === 'contact' && (
        <section style={{
          background: styles.sectionBackground,
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          padding: '4rem 2rem'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            <h2 style={{
              fontFamily: theme.typography.display,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              textTransform: 'uppercase',
              textAlign: 'center',
              margin: '0 0 3rem 0',
              color: theme.colors.primary,
              textShadow: theme.style === 'dark' ? `0 0 20px ${theme.colors.primary}` : 'none'
            }}>
              Get In Touch
            </h2>
            
            <div style={{
              background: styles.cardBackground,
              padding: '3rem',
              border: styles.border,
              boxShadow: styles.boxShadow,
              color: theme.style === 'dark' ? 'white' : theme.colors.foreground
            }}>
              <p style={{
                textAlign: 'center',
                fontSize: '1.25rem',
                marginBottom: '2rem'
              }}>
                Ready to work with us? Let's create something amazing together.
              </p>
              
              <div style={{ textAlign: 'center' }}>
                <a
                  href="mailto:hello@curations.org"
                  style={{
                    background: theme.colors.primary,
                    color: theme.style === 'dark' ? '#000' : 'white',
                    padding: '1.5rem 3rem',
                    fontFamily: theme.typography.display,
                    fontSize: '1.25rem',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    border: styles.border,
                    boxShadow: styles.boxShadow,
                    display: 'inline-block',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Back to Builder Button */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000
      }}>
        <a
          href="#/theme-builder"
          style={{
            background: theme.colors.accent,
            color: theme.style === 'dark' ? '#000' : 'white',
            padding: '1rem 2rem',
            fontFamily: theme.typography.display,
            fontWeight: '900',
            textTransform: 'uppercase',
            textDecoration: 'none',
            border: styles.border,
            boxShadow: styles.boxShadow,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease'
          }}
        >
          ← Back to Builder
        </a>
      </div>
    </div>
  );
}