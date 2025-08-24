import React from 'react';
import Navigation from './Navigation';

export default function ThemePreview() {
  const dayThemes = [
    { id: 1, name: 'Day Theme One', path: '/daytest/1', description: 'Clean corporate aesthetic with professional styling' },
    { id: 2, name: 'Day Theme Two', path: '/daytest/2', description: 'Modern minimalist approach with subtle animations' },
    { id: 3, name: 'Day Theme Three', path: '/daytest/3', description: 'Bold typography with striking color combinations' },
    { id: 4, name: 'Day Theme Four', path: '/daytest/4', description: 'Geometric patterns with contemporary layout' },
    { id: 5, name: 'Day Theme Five', path: '/daytest/5', description: 'Vibrant gradients with dynamic elements' },
  ];

  const nightThemes = [
    { id: 1, name: 'Night Theme One', path: '/nighttest/1', description: 'Dark elegant design with premium feel' },
    { id: 2, name: 'Night Theme Two', path: '/nighttest/2', description: 'Cyberpunk aesthetic with neon accents' },
    { id: 3, name: 'Night Theme Three', path: '/nighttest/3', description: 'Sophisticated dark mode with gold highlights' },
    { id: 4, name: 'Night Theme Four', path: '/nighttest/4', description: 'Deep space theme with cosmic elements' },
    { id: 5, name: 'Night Theme Five', path: '/nighttest/5', description: 'Modern dark with electric blue accents' },
  ];

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #FF69B4 0%, #38B6FF 100%)', 
        padding: '6rem 2rem 4rem', 
        color: 'white', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎨</div>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 5vw, 5rem)', 
            fontWeight: 800, 
            textTransform: 'uppercase', 
            margin: '1rem 0',
            fontFamily: 'var(--font-display)'
          }}>
            THEME PREVIEW
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            Explore our collection of day and night themes - each crafted with unique aesthetics and personality.
          </p>
        </div>
      </section>

      {/* Day Themes Section */}
      <section style={{ padding: '4rem 2rem', background: '#FAFBFC' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 800, 
            textAlign: 'center', 
            marginBottom: '3rem', 
            textTransform: 'uppercase',
            fontFamily: 'var(--font-display)'
          }}>
            Day Themes
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}>
            {dayThemes.map(theme => (
              <div key={theme.id} style={{
                background: 'white',
                border: '4px solid black',
                boxShadow: '8px 8px 0px black',
                padding: '2rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => window.location.hash = theme.path}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                e.currentTarget.style.boxShadow = '10px 10px 0px black';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '8px 8px 0px black';
              }}>
                <div style={{ 
                  background: 'linear-gradient(135deg, #EBF998 0%, #38B6FF 100%)',
                  height: '120px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: 'white',
                  fontWeight: 800
                }}>
                  ☀️
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 800, 
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-display)'
                }}>
                  {theme.name}
                </h3>
                <p style={{ 
                  lineHeight: 1.6, 
                  marginBottom: '1.5rem',
                  color: '#475569'
                }}>
                  {theme.description}
                </p>
                <div style={{
                  background: '#FF69B4',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  textAlign: 'center',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  fontSize: '0.875rem',
                  border: '2px solid black'
                }}>
                  Preview Theme
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Night Themes Section */}
      <section style={{ padding: '4rem 2rem', background: '#222222', color: 'white' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 800, 
            textAlign: 'center', 
            marginBottom: '3rem', 
            textTransform: 'uppercase',
            fontFamily: 'var(--font-display)'
          }}>
            Night Themes
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}>
            {nightThemes.map(theme => (
              <div key={theme.id} style={{
                background: '#1a1a1a',
                border: '4px solid #38B6FF',
                boxShadow: '8px 8px 0px #38B6FF',
                padding: '2rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => window.location.hash = theme.path}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                e.currentTarget.style.boxShadow = '10px 10px 0px #38B6FF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '8px 8px 0px #38B6FF';
              }}>
                <div style={{ 
                  background: 'linear-gradient(135deg, #FF69B4 0%, #6370E7 100%)',
                  height: '120px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: 'white',
                  fontWeight: 800
                }}>
                  🌙
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 800, 
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-display)',
                  color: '#EBF998'
                }}>
                  {theme.name}
                </h3>
                <p style={{ 
                  lineHeight: 1.6, 
                  marginBottom: '1.5rem',
                  color: '#94a3b8'
                }}>
                  {theme.description}
                </p>
                <div style={{
                  background: '#EBF998',
                  color: '#222222',
                  padding: '0.75rem 1.5rem',
                  textAlign: 'center',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  fontSize: '0.875rem',
                  border: '2px solid #EBF998'
                }}>
                  Preview Theme
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Main Section */}
      <section style={{ 
        padding: '4rem 2rem', 
        background: 'linear-gradient(135deg, #38B6FF 0%, #FF69B4 100%)', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 800, 
            color: 'white', 
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-display)'
          }}>
            Ready to Choose Your Theme?
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: 'white', 
            marginBottom: '2rem',
            lineHeight: 1.6
          }}>
            Each theme represents a unique approach to design and user experience. 
            Click any theme above to see it in action.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="#/" 
              style={{
                background: 'white',
                color: '#FF69B4',
                padding: '1rem 2rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                textDecoration: 'none',
                border: '4px solid black',
                fontSize: '0.875rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '6px 6px 0px black';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Back to Homepage
            </a>
            <a 
              href="#/services" 
              style={{
                background: '#EBF998',
                color: '#222222',
                padding: '1rem 2rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                textDecoration: 'none',
                border: '4px solid black',
                fontSize: '0.875rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '6px 6px 0px black';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}