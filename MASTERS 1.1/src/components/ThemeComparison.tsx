import React, { useState } from 'react';

const ThemeComparison = () => {
  const [selectedTheme, setSelectedTheme] = useState(1);

  const themes = [
    {
      id: 1,
      name: "Trio Gradient",
      dayPath: "/daytest/1",
      nightPath: "/nighttest/1",
      description: "Sunrise trio gradient vs neon cyberpunk"
    },
    {
      id: 2,
      name: "Universal Canvas", 
      dayPath: "/daytest/2",
      nightPath: "/nighttest/2",
      description: "Floating orbs vs cyberpunk grid"
    },
    {
      id: 3,
      name: "Brutalist",
      dayPath: "/daytest/3", 
      nightPath: "/nighttest/3",
      description: "Brutalist trio cards vs aurora borealis"
    },
    {
      id: 4,
      name: "Soft Mesh",
      dayPath: "/daytest/4",
      nightPath: "/nighttest/4", 
      description: "Glass morphism vs holographic effects"
    },
    {
      id: 5,
      name: "Playful",
      dayPath: "/daytest/5",
      nightPath: "/nighttest/5",
      description: "Stacked cards vs laser beam symphony"
    }
  ];

  const currentTheme = themes.find(t => t.id === selectedTheme) || themes[0];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#FAFBFC',
      fontFamily: 'var(--font-primary)'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #FF69B4 0%, #38B6FF 50%, #EBF998 100%)',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '800',
          textTransform: 'uppercase',
          margin: '0 0 1rem 0'
        }}>
          Theme Comparison Gallery
        </h1>
        <p style={{
          fontSize: '1.125rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Compare day and night theme variations side by side
        </p>
      </div>

      {/* Theme Selector */}
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        background: '#FFFFFF',
        borderBottom: '4px solid #000'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          fontWeight: '800',
          textTransform: 'uppercase',
          marginBottom: '1rem'
        }}>
          Select Theme to Compare
        </h2>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {themes.map(theme => (
            <button
              key={theme.id}
              onClick={() => setSelectedTheme(theme.id)}
              style={{
                background: selectedTheme === theme.id ? '#FF69B4' : 'white',
                color: selectedTheme === theme.id ? 'white' : '#222',
                border: '4px solid #000',
                padding: '0.75rem 1rem',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: selectedTheme === theme.id ? '4px 4px 0px #000' : '2px 2px 0px #000'
              }}
              onMouseEnter={(e) => {
                if (selectedTheme !== theme.id) {
                  e.currentTarget.style.background = '#EBF998';
                  e.currentTarget.style.transform = 'translate(-1px, -1px)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedTheme !== theme.id) {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.transform = 'translate(0, 0)';
                }
              }}
            >
              {theme.name}
            </button>
          ))}
        </div>
        
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: '#F1F5F9',
          border: '2px solid #38B6FF',
          display: 'inline-block'
        }}>
          <strong style={{ color: '#38B6FF' }}>Current:</strong> {currentTheme.description}
        </div>
      </div>

      {/* Side by Side Comparison */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '80vh'
      }}>
        {/* Day Theme */}
        <div style={{
          position: 'relative',
          background: '#FAFBFC',
          borderRight: '4px solid #000'
        }}>
          <div style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            background: '#EBF998',
            color: '#000',
            padding: '0.5rem 1rem',
            border: '3px solid #000',
            fontFamily: 'var(--font-display)',
            fontWeight: '800',
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            zIndex: 10,
            boxShadow: '4px 4px 0px #000'
          }}>
            ☀️ Day Theme {selectedTheme}
          </div>
          
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            right: '1rem'
          }}>
            <a
              href={`#${currentTheme.dayPath}`}
              style={{
                background: '#38B6FF',
                color: 'white',
                padding: '0.75rem 1rem',
                border: '3px solid #000',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'block',
                textAlign: 'center',
                transition: 'all 0.2s ease',
                boxShadow: '4px 4px 0px #000'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                e.currentTarget.style.boxShadow = '6px 6px 0px #000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow = '4px 4px 0px #000';
              }}
            >
              View Full Day Theme
            </a>
          </div>

          {/* Day Theme Preview */}
          <iframe
            src={`#${currentTheme.dayPath}`}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              pointerEvents: 'none'
            }}
            title={`Day Theme ${selectedTheme} Preview`}
          />
        </div>

        {/* Night Theme */}
        <div style={{
          position: 'relative',
          background: '#000'
        }}>
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: '#FF69B4',
            color: 'white',
            padding: '0.5rem 1rem',
            border: '3px solid #EBF998',
            fontFamily: 'var(--font-display)',
            fontWeight: '800',
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            zIndex: 10,
            boxShadow: '4px 4px 0px #EBF998'
          }}>
            🌙 Night Theme {selectedTheme}
          </div>
          
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            right: '1rem'
          }}>
            <a
              href={`#${currentTheme.nightPath}`}
              style={{
                background: '#EBF998',
                color: '#000',
                padding: '0.75rem 1rem',
                border: '3px solid #FF69B4',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'block',
                textAlign: 'center',
                transition: 'all 0.2s ease',
                boxShadow: '4px 4px 0px #FF69B4'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                e.currentTarget.style.boxShadow = '6px 6px 0px #FF69B4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow = '4px 4px 0px #FF69B4';
              }}
            >
              View Full Night Theme
            </a>
          </div>

          {/* Night Theme Preview */}
          <iframe
            src={`#${currentTheme.nightPath}`}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              pointerEvents: 'none'
            }}
            title={`Night Theme ${selectedTheme} Preview`}
          />
        </div>
      </div>

      {/* Navigation Footer */}
      <div style={{
        background: '#222',
        color: 'white',
        padding: '2rem',
        textAlign: 'center',
        borderTop: '4px solid #000'
      }}>
        <p style={{
          fontSize: '1rem',
          margin: '0 0 1rem 0'
        }}>
          Use the theme selector above to compare different variations, or navigate directly to individual themes.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a
            href="#/"
            style={{
              background: '#38B6FF',
              color: 'white',
              padding: '0.75rem 1rem',
              border: '3px solid #EBF998',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '4px 4px 0px #EBF998'
            }}
          >
            ← Back to Homepage
          </a>
          
          <a
            href="#/themes"
            style={{
              background: '#FF69B4',
              color: 'white',
              padding: '0.75rem 1rem',
              border: '3px solid #EBF998',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '4px 4px 0px #EBF998'
            }}
          >
            Theme Gallery →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThemeComparison;