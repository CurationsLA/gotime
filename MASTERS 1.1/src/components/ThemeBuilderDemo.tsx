import React, { useState } from 'react';

interface DemoStep {
  id: string;
  title: string;
  description: string;
  action: string;
  preview?: string;
}

const demoSteps: DemoStep[] = [
  {
    id: 'step1',
    title: 'Choose Your Base Theme',
    description: 'Start by selecting from 4 professionally designed themes - each with unique color palettes, animations, and layout styles.',
    action: 'Click on any theme card to see instant preview',
    preview: 'Day themes: Sunrise Trio, Universal Canvas, etc. / Night themes: Neon Symphony, Cyberpunk, etc.'
  },
  {
    id: 'step2', 
    title: 'Customize Colors & Style',
    description: 'Fine-tune your theme with live color pickers, border styles (brutal/rounded/minimal), animation levels, and layout options.',
    action: 'Adjust settings and see real-time preview',
    preview: 'Live preview updates as you change colors, borders, animations'
  },
  {
    id: 'step3',
    title: 'Configure Site Settings',
    description: 'Enter your business name, tagline, services, and contact information to personalize your website.',
    action: 'Fill out the site information form',
    preview: 'Your content gets integrated into the chosen theme'
  },
  {
    id: 'step4',
    title: 'Preview Your Website',
    description: 'See exactly how your finished website will look with your content and custom styling applied.',
    action: 'Review and make final adjustments',
    preview: 'Full website preview with your branding and content'
  },
  {
    id: 'step5',
    title: 'Generate & Download',
    description: 'Get a complete, responsive HTML file ready to host anywhere. Includes all CSS, animations, and mobile optimization.',
    action: 'Download your custom website',
    preview: 'Production-ready HTML file with embedded styles'
  }
];

const ThemeBuilderDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('step1');
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #FF69B4 0%, #38B6FF 50%, #EBF998 100%)',
      padding: '2rem 1rem',
      paddingTop: '4rem'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'white',
        borderBottom: '4px solid black',
        zIndex: 100,
        padding: '1rem 2rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <a href="#/" style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            textDecoration: 'none',
            color: 'black'
          }}>
            [THEME BUILDER DEMO]
          </a>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#/theme-builder" style={{
              background: '#EBF998',
              color: 'black',
              padding: '0.5rem 1rem',
              textDecoration: 'none',
              fontWeight: 700,
              textTransform: 'uppercase',
              border: '2px solid black'
            }}>
              Try Theme Builder →
            </a>
            <a href="#/" style={{
              color: 'black',
              fontWeight: 700,
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}>
              ← Back to Main
            </a>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: '1400px', margin: '0 auto', color: 'white' }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            marginBottom: '1rem',
            textShadow: '3px 3px 0 rgba(0, 0, 0, 0.3)'
          }}>
            THEME BUILDER
          </h1>
          <p style={{
            fontSize: '1.25rem',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            lineHeight: 1.6
          }}>
            Create professional websites in minutes. Choose a theme, customize colors and styles, 
            add your content, and generate a complete HTML file ready to host anywhere.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowDemo(!showDemo)}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: '2px solid white',
                color: 'white',
                padding: '1rem 2rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              {showDemo ? 'Hide Demo' : 'View Demo Guide'} 📖
            </button>
            
            <a href="#/theme-builder" style={{
              background: '#EBF998',
              border: '3px solid black',
              color: 'black',
              padding: '1rem 2rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontSize: '1rem'
            }}>
              Start Building Now 🚀
            </a>
          </div>
        </div>

        {/* Demo Steps */}
        {showDemo && (
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '3rem',
              textTransform: 'uppercase'
            }}>
              How It Works
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {demoSteps.map((step, index) => (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  style={{
                    background: activeStep === step.id ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid white',
                    padding: '2rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: activeStep === step.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                >
                  <div style={{
                    background: '#EBF998',
                    color: 'black',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '1.25rem',
                    marginBottom: '1rem'
                  }}>
                    {index + 1}
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    marginBottom: '1rem',
                    color: '#EBF998'
                  }}>
                    {step.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    marginBottom: '1rem'
                  }}>
                    {step.description}
                  </p>
                  
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    padding: '0.75rem',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    marginBottom: '1rem'
                  }}>
                    <strong>Action:</strong> {step.action}
                  </div>
                  
                  {step.preview && (
                    <div style={{
                      background: 'rgba(235, 249, 152, 0.2)',
                      padding: '0.75rem',
                      border: '1px solid #EBF998',
                      fontSize: '0.875rem',
                      fontStyle: 'italic'
                    }}>
                      <strong>Preview:</strong> {step.preview}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Highlight */}
        <div style={{ 
          background: 'rgba(0, 0, 0, 0.3)',
          padding: '3rem 2rem',
          border: '2px solid white',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: '2rem',
            textTransform: 'uppercase'
          }}>
            What You Get
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: '🎨', title: 'Professional Themes', desc: '4 base themes with day/night variants' },
              { icon: '🎯', title: 'Full Customization', desc: 'Colors, borders, animations, and layouts' },
              { icon: '📱', title: 'Mobile Ready', desc: 'Fully responsive design that works everywhere' },
              { icon: '⚡', title: 'Fast Loading', desc: 'Optimized CSS with no external dependencies' },
              { icon: '💾', title: 'Download Ready', desc: 'Complete HTML file ready to host anywhere' },
              { icon: '🔧', title: 'Easy to Modify', desc: 'Clean code structure for future updates' }
            ].map((feature) => (
              <div key={feature.title} style={{
                textAlign: 'center',
                padding: '1rem'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  marginBottom: '0.5rem',
                  color: '#EBF998'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.5,
                  opacity: 0.9
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '3rem 2rem',
          border: '2px solid white'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}>
            Ready to Build Your Website?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Start creating your professional website now. No coding required - 
            just choose, customize, and download.
          </p>
          
          <a href="#/theme-builder" style={{
            background: '#EBF998',
            border: '4px solid black',
            color: 'black',
            padding: '1.5rem 3rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontSize: '1.25rem',
            display: 'inline-block',
            boxShadow: '8px 8px 0px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '12px 12px 0px rgba(0, 0, 0, 0.3)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '8px 8px 0px rgba(0, 0, 0, 0.3)';
          }}>
            🎨 Launch Theme Builder
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThemeBuilderDemo;