import React, { useState, useEffect } from 'react';
import { useKV } from '@github/spark/hooks';

interface ThemeConfig {
  id: string;
  name: string;
  type: 'day' | 'night';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  borderStyle: 'brutal' | 'rounded' | 'minimal';
  animation: 'minimal' | 'moderate' | 'heavy';
  layout: 'compact' | 'spacious' | 'magazine';
}

interface SiteSettings {
  siteName: string;
  tagline: string;
  services: string[];
  contactEmail: string;
  theme: ThemeConfig;
}

const defaultThemes: ThemeConfig[] = [
  {
    id: 'day-sunrise',
    name: 'Sunrise Trio',
    type: 'day',
    primaryColor: '#FF69B4',
    secondaryColor: '#38B6FF',
    accentColor: '#EBF998',
    backgroundColor: '#FAFBFC',
    textColor: '#222222',
    borderStyle: 'brutal',
    animation: 'moderate',
    layout: 'spacious'
  },
  {
    id: 'night-neon',
    name: 'Neon Symphony',
    type: 'night',
    primaryColor: '#EBF998',
    secondaryColor: '#38B6FF',
    accentColor: '#FF69B4',
    backgroundColor: '#000000',
    textColor: '#FFFFFF',
    borderStyle: 'brutal',
    animation: 'heavy',
    layout: 'compact'
  },
  {
    id: 'day-universal',
    name: 'Universal Canvas',
    type: 'day',
    primaryColor: '#8B5FBF',
    secondaryColor: '#FF69B4',
    accentColor: '#EBF998',
    backgroundColor: '#FAFBFC',
    textColor: '#222222',
    borderStyle: 'minimal',
    animation: 'minimal',
    layout: 'magazine'
  },
  {
    id: 'night-cyber',
    name: 'Cyberpunk',
    type: 'night',
    primaryColor: '#EBF998',
    secondaryColor: '#38B6FF',
    accentColor: '#FF69B4',
    backgroundColor: '#0A0A0A',
    textColor: '#FFFFFF',
    borderStyle: 'brutal',
    animation: 'heavy',
    layout: 'compact'
  }
];

const ThemeBuilder: React.FC = () => {
  const [activeStep, setActiveStep] = useState<'theme' | 'customize' | 'site' | 'preview' | 'generate'>('theme');
  const [selectedTheme, setSelectedTheme] = useState<ThemeConfig | null>(null);
  const [customTheme, setCustomTheme] = useState<ThemeConfig | null>(null);
  const [siteSettings, setSiteSettings] = useKV<SiteSettings | null>('theme-builder-settings', null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string>('');

  // Initialize with first theme if none selected
  useEffect(() => {
    if (!selectedTheme) {
      setSelectedTheme(defaultThemes[0]);
      setCustomTheme({ ...defaultThemes[0] });
    }
  }, [selectedTheme]);

  const handleThemeSelect = (theme: ThemeConfig) => {
    setSelectedTheme(theme);
    setCustomTheme({ ...theme });
    setActiveStep('customize');
  };

  const updateCustomTheme = (updates: Partial<ThemeConfig>) => {
    if (customTheme) {
      setCustomTheme({ ...customTheme, ...updates });
    }
  };

  const generateWebsite = async () => {
    if (!customTheme || !siteSettings) return;
    
    setIsGenerating(true);
    
    // Simulate generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const code = generateFullWebsiteCode(customTheme, siteSettings);
    setGeneratedCode(code);
    setIsGenerating(false);
    setActiveStep('generate');
  };

  const generateFullWebsiteCode = (theme: ThemeConfig, settings: SiteSettings): string => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${settings.siteName}</title>
    <style>
        :root {
            --primary: ${theme.primaryColor};
            --secondary: ${theme.secondaryColor};
            --accent: ${theme.accentColor};
            --background: ${theme.backgroundColor};
            --text: ${theme.textColor};
            --border-radius: ${theme.borderStyle === 'rounded' ? '8px' : theme.borderStyle === 'minimal' ? '4px' : '0px'};
            --border-width: ${theme.borderStyle === 'brutal' ? '4px' : '2px'};
            --animation-speed: ${theme.animation === 'heavy' ? '0.5s' : theme.animation === 'moderate' ? '0.3s' : '0.1s'};
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: var(--background);
            color: var(--text);
            line-height: 1.6;
        }
        
        .container {
            max-width: ${theme.layout === 'compact' ? '1000px' : theme.layout === 'spacious' ? '1400px' : '1200px'};
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        header {
            background: var(--primary);
            color: white;
            padding: 4rem 0;
            text-align: center;
            ${theme.animation !== 'minimal' ? `
            background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
            background-size: 400% 400%;
            animation: gradient-shift var(--animation-speed) ease infinite;
            ` : ''}
        }
        
        ${theme.animation !== 'minimal' ? `
        @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        ` : ''}
        
        h1 {
            font-size: clamp(3rem, 6vw, 5rem);
            font-weight: 900;
            text-transform: uppercase;
            margin-bottom: 1rem;
            ${theme.borderStyle === 'brutal' ? `
            -webkit-text-stroke: 3px black;
            -webkit-text-fill-color: white;
            ` : ''}
        }
        
        .tagline {
            font-size: 1.5rem;
            font-weight: 600;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .services {
            padding: 4rem 0;
            background: ${theme.type === 'night' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .service-card {
            background: ${theme.type === 'night' ? 'rgba(255, 255, 255, 0.1)' : 'white'};
            padding: 2rem;
            border: var(--border-width) solid ${theme.borderStyle === 'brutal' ? 'black' : theme.primaryColor};
            border-radius: var(--border-radius);
            ${theme.borderStyle === 'brutal' ? 'box-shadow: 8px 8px 0px black;' : 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);'}
            transition: transform var(--animation-speed) ease;
        }
        
        .service-card:hover {
            transform: ${theme.animation === 'heavy' ? 'translateY(-8px) rotate(2deg)' : theme.animation === 'moderate' ? 'translateY(-4px)' : 'translateY(-2px)'};
            ${theme.borderStyle === 'brutal' ? 'box-shadow: 12px 12px 0px black;' : ''}
        }
        
        .service-card h3 {
            color: var(--primary);
            font-size: 1.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            text-transform: uppercase;
        }
        
        .contact {
            background: var(--accent);
            color: ${theme.type === 'night' ? 'black' : theme.textColor};
            padding: 4rem 0;
            text-align: center;
        }
        
        .contact h2 {
            font-size: 2.5rem;
            font-weight: 900;
            margin-bottom: 2rem;
            text-transform: uppercase;
        }
        
        .contact-btn {
            background: var(--primary);
            color: white;
            border: var(--border-width) solid black;
            padding: 1rem 2rem;
            font-size: 1.1rem;
            font-weight: 800;
            text-transform: uppercase;
            text-decoration: none;
            border-radius: var(--border-radius);
            transition: all var(--animation-speed) ease;
            display: inline-block;
        }
        
        .contact-btn:hover {
            transform: translateY(-3px);
            ${theme.borderStyle === 'brutal' ? 'box-shadow: 6px 6px 0px black;' : 'box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);'}
        }
        
        footer {
            background: ${theme.backgroundColor === '#000000' ? '#111' : '#333'};
            color: white;
            padding: 2rem 0;
            text-align: center;
        }
        
        @media (max-width: 768px) {
            .services-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            
            .service-card {
                padding: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>${settings.siteName}</h1>
            <p class="tagline">${settings.tagline}</p>
        </div>
    </header>
    
    <section class="services">
        <div class="container">
            <h2 style="text-align: center; font-size: 2.5rem; font-weight: 900; text-transform: uppercase; margin-bottom: 1rem;">Our Services</h2>
            <div class="services-grid">
                ${settings.services.map(service => `
                <div class="service-card">
                    <h3>${service}</h3>
                    <p>Professional ${service.toLowerCase()} services tailored to your needs. We deliver exceptional results with cutting-edge approaches.</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    
    <section class="contact">
        <div class="container">
            <h2>Ready to Get Started?</h2>
            <p style="font-size: 1.25rem; margin-bottom: 2rem;">Let's bring your vision to life with our expertise.</p>
            <a href="mailto:${settings.contactEmail}" class="contact-btn">Get In Touch</a>
        </div>
    </section>
    
    <footer>
        <div class="container">
            <p>&copy; 2024 ${settings.siteName}. Built with CURATIONS Theme Builder.</p>
        </div>
    </footer>
</body>
</html>`;
  };

  const downloadCode = () => {
    const blob = new Blob([generatedCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${siteSettings?.siteName?.replace(/\s+/g, '-').toLowerCase() || 'website'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
      paddingTop: '3rem'
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
            [CURATIONS THEME BUILDER]
          </a>
          <div style={{ display: 'flex', gap: '1rem' }}>
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

      <div style={{ padding: '2rem', paddingTop: '6rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Progress Steps */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            {[
              { key: 'theme', label: '1. Choose Theme' },
              { key: 'customize', label: '2. Customize' },
              { key: 'site', label: '3. Site Settings' },
              { key: 'preview', label: '4. Preview' },
              { key: 'generate', label: '5. Generate' }
            ].map((step) => (
              <div key={step.key} style={{
                background: activeStep === step.key ? '#EBF998' : 'rgba(255, 255, 255, 0.1)',
                color: activeStep === step.key ? 'black' : 'white',
                padding: '0.75rem 1.5rem',
                border: '2px solid white',
                fontWeight: 800,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }} 
              className="step-indicator"
              onClick={() => step.key !== 'generate' && setActiveStep(step.key as any)}>
                {step.label}
              </div>
            ))}
          </div>

          {/* Step 1: Theme Selection */}
          {activeStep === 'theme' && (
            <div style={{ color: 'white' }}>
              <h2 style={{ 
                fontSize: '3rem', 
                fontWeight: 900, 
                textAlign: 'center', 
                marginBottom: '3rem',
                textTransform: 'uppercase'
              }}>
                Choose Your Base Theme
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                {defaultThemes.map((theme) => (
                  <div key={theme.id} style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid white',
                    padding: '2rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: selectedTheme?.id === theme.id ? 'scale(1.05)' : 'scale(1)',
                    borderColor: selectedTheme?.id === theme.id ? '#EBF998' : 'white'
                  }} 
                  className="theme-card"
                  onClick={() => handleThemeSelect(theme)}>
                    
                    {/* Theme Preview */}
                    <div style={{
                      height: '200px',
                      background: theme.backgroundColor,
                      border: '2px solid black',
                      marginBottom: '1rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }} className="preview-container">
                      <div style={{
                        background: theme.primaryColor,
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: theme.type === 'night' ? 'black' : 'white',
                        fontWeight: 800,
                        fontSize: '0.875rem'
                      }}>
                        HEADER
                      </div>
                      <div style={{ padding: '1rem' }}>
                        <div style={{
                          background: theme.accentColor,
                          height: '20px',
                          marginBottom: '0.5rem',
                          border: theme.borderStyle === 'brutal' ? '2px solid black' : 'none'
                        }}></div>
                        <div style={{
                          background: theme.secondaryColor,
                          height: '40px',
                          border: theme.borderStyle === 'brutal' ? '2px solid black' : 'none'
                        }}></div>
                      </div>
                    </div>
                    
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 800, 
                      marginBottom: '0.5rem',
                      color: theme.accentColor
                    }}>
                      {theme.name}
                    </h3>
                    <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                      {theme.type === 'day' ? '☀️ Day Theme' : '🌙 Night Theme'}
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '0.5rem',
                      marginTop: '1rem'
                    }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        background: theme.primaryColor,
                        border: '1px solid white'
                      }}></div>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        background: theme.secondaryColor,
                        border: '1px solid white'
                      }}></div>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        background: theme.accentColor,
                        border: '1px solid white'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Customize Theme */}
          {activeStep === 'customize' && customTheme && (
            <div style={{ color: 'white' }}>
              <h2 style={{ 
                fontSize: '3rem', 
                fontWeight: 900, 
                textAlign: 'center', 
                marginBottom: '3rem',
                textTransform: 'uppercase'
              }}>
                Customize Your Theme
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                {/* Controls */}
                <div>
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700 }}>
                      Primary Color
                    </label>
                    <input
                      type="color"
                      value={customTheme.primaryColor}
                      onChange={(e) => updateCustomTheme({ primaryColor: e.target.value })}
                      style={{ width: '100%', height: '50px', border: 'none', cursor: 'pointer' }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700 }}>
                      Secondary Color
                    </label>
                    <input
                      type="color"
                      value={customTheme.secondaryColor}
                      onChange={(e) => updateCustomTheme({ secondaryColor: e.target.value })}
                      style={{ width: '100%', height: '50px', border: 'none', cursor: 'pointer' }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700 }}>
                      Accent Color
                    </label>
                    <input
                      type="color"
                      value={customTheme.accentColor}
                      onChange={(e) => updateCustomTheme({ accentColor: e.target.value })}
                      style={{ width: '100%', height: '50px', border: 'none', cursor: 'pointer' }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700 }}>
                      Border Style
                    </label>
                    <select
                      value={customTheme.borderStyle}
                      onChange={(e) => updateCustomTheme({ borderStyle: e.target.value as any })}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid white',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        fontSize: '1rem'
                      }}
                    >
                      <option value="brutal" style={{ background: '#333', color: 'white' }}>Brutal (Sharp)</option>
                      <option value="rounded" style={{ background: '#333', color: 'white' }}>Rounded</option>
                      <option value="minimal" style={{ background: '#333', color: 'white' }}>Minimal</option>
                    </select>
                  </div>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700 }}>
                      Animation Level
                    </label>
                    <select
                      value={customTheme.animation}
                      onChange={(e) => updateCustomTheme({ animation: e.target.value as any })}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid white',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        fontSize: '1rem'
                      }}
                    >
                      <option value="minimal" style={{ background: '#333', color: 'white' }}>Minimal</option>
                      <option value="moderate" style={{ background: '#333', color: 'white' }}>Moderate</option>
                      <option value="heavy" style={{ background: '#333', color: 'white' }}>Heavy</option>
                    </select>
                  </div>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700 }}>
                      Layout Style
                    </label>
                    <select
                      value={customTheme.layout}
                      onChange={(e) => updateCustomTheme({ layout: e.target.value as any })}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid white',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        fontSize: '1rem'
                      }}
                    >
                      <option value="compact" style={{ background: '#333', color: 'white' }}>Compact</option>
                      <option value="spacious" style={{ background: '#333', color: 'white' }}>Spacious</option>
                      <option value="magazine" style={{ background: '#333', color: 'white' }}>Magazine</option>
                    </select>
                  </div>
                </div>
                
                {/* Live Preview */}
                <div>
                  <h3 style={{ marginBottom: '1rem', fontWeight: 800 }}>Live Preview</h3>
                  <div style={{
                    height: '400px',
                    background: customTheme.backgroundColor,
                    border: '2px solid white',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <div style={{
                      background: customTheme.primaryColor,
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: customTheme.type === 'night' ? 'black' : 'white',
                      fontWeight: 800,
                      animation: customTheme.animation === 'heavy' ? 'pulse 2s infinite' : 'none'
                    }}>
                      YOUR SITE NAME
                    </div>
                    <div style={{ padding: '2rem' }}>
                      <div style={{
                        background: customTheme.accentColor,
                        height: '30px',
                        marginBottom: '1rem',
                        border: customTheme.borderStyle === 'brutal' ? '3px solid black' : 'none',
                        borderRadius: customTheme.borderStyle === 'rounded' ? '8px' : '0'
                      }}></div>
                      <div style={{
                        background: customTheme.secondaryColor,
                        height: '60px',
                        marginBottom: '1rem',
                        border: customTheme.borderStyle === 'brutal' ? '3px solid black' : 'none',
                        borderRadius: customTheme.borderStyle === 'rounded' ? '8px' : '0'
                      }}></div>
                      <div style={{
                        background: customTheme.primaryColor,
                        height: '40px',
                        border: customTheme.borderStyle === 'brutal' ? '3px solid black' : 'none',
                        borderRadius: customTheme.borderStyle === 'rounded' ? '8px' : '0'
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <button
                  onClick={() => setActiveStep('site')}
                  style={{
                    background: '#EBF998',
                    color: 'black',
                    border: '3px solid black',
                    padding: '1rem 2rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    fontSize: '1.1rem'
                  }}
                >
                  Continue to Site Settings →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Site Settings */}
          {activeStep === 'site' && (
            <div style={{ color: 'white' }}>
              <h2 style={{ 
                fontSize: '3rem', 
                fontWeight: 900, 
                textAlign: 'center', 
                marginBottom: '3rem',
                textTransform: 'uppercase'
              }}>
                Site Settings
              </h2>
              
              <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700 }}>
                    Site Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Business Name"
                    value={siteSettings?.siteName || ''}
                    onChange={(e) => setSiteSettings({
                      ...siteSettings,
                      siteName: e.target.value,
                      theme: customTheme!
                    } as SiteSettings)}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid white',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700 }}>
                    Tagline
                  </label>
                  <input
                    type="text"
                    placeholder="Your business tagline or mission"
                    value={siteSettings?.tagline || ''}
                    onChange={(e) => setSiteSettings({
                      ...siteSettings,
                      tagline: e.target.value,
                      theme: customTheme!
                    } as SiteSettings)}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid white',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700 }}>
                    Contact Email
                  </label>
                  <input
                    type="email"
                    placeholder="hello@yourbusiness.com"
                    value={siteSettings?.contactEmail || ''}
                    onChange={(e) => setSiteSettings({
                      ...siteSettings,
                      contactEmail: e.target.value,
                      theme: customTheme!
                    } as SiteSettings)}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid white',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700 }}>
                    Services (one per line)
                  </label>
                  <textarea
                    placeholder="Web Design&#10;Branding&#10;Marketing&#10;Consulting"
                    value={siteSettings?.services?.join('\n') || ''}
                    onChange={(e) => setSiteSettings({
                      ...siteSettings,
                      services: e.target.value.split('\n').filter(s => s.trim()),
                      theme: customTheme!
                    } as SiteSettings)}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid white',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '1rem',
                      minHeight: '120px',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>
              </div>
              
              <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <button
                  onClick={() => setActiveStep('preview')}
                  disabled={!siteSettings?.siteName || !siteSettings?.tagline || !siteSettings?.contactEmail}
                  style={{
                    background: siteSettings?.siteName && siteSettings?.tagline && siteSettings?.contactEmail ? '#EBF998' : '#666',
                    color: 'black',
                    border: '3px solid black',
                    padding: '1rem 2rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    cursor: siteSettings?.siteName && siteSettings?.tagline && siteSettings?.contactEmail ? 'pointer' : 'not-allowed',
                    fontSize: '1.1rem'
                  }}
                >
                  Preview Site →
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Preview */}
          {activeStep === 'preview' && siteSettings && customTheme && (
            <div style={{ color: 'white' }}>
              <h2 style={{ 
                fontSize: '3rem', 
                fontWeight: 900, 
                textAlign: 'center', 
                marginBottom: '3rem',
                textTransform: 'uppercase'
              }}>
                Preview Your Site
              </h2>
              
              <div style={{
                background: 'white',
                border: '3px solid #EBF998',
                maxHeight: '70vh',
                overflowY: 'auto'
              }}>
                <div dangerouslySetInnerHTML={{ 
                  __html: generateFullWebsiteCode(customTheme, siteSettings) 
                }} />
              </div>
              
              <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button
                  onClick={() => setActiveStep('site')}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '2px solid white',
                    padding: '1rem 2rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                >
                  ← Edit Settings
                </button>
                <button
                  onClick={generateWebsite}
                  style={{
                    background: '#EBF998',
                    color: 'black',
                    border: '3px solid black',
                    padding: '1rem 2rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    fontSize: '1.1rem'
                  }}
                >
                  Generate Website →
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Generate */}
          {activeStep === 'generate' && (
            <div style={{ color: 'white' }}>
              <h2 style={{ 
                fontSize: '3rem', 
                fontWeight: 900, 
                textAlign: 'center', 
                marginBottom: '3rem',
                textTransform: 'uppercase'
              }}>
                {isGenerating ? 'Generating Your Website...' : 'Your Website is Ready!'}
              </h2>
              
              {isGenerating ? (
                <div style={{ textAlign: 'center', padding: '4rem' }}>
                  <div style={{
                    width: '100px',
                    height: '100px',
                    border: '4px solid #333',
                    borderTop: '4px solid #EBF998',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    margin: '0 auto 2rem'
                  }} />
                  <p style={{ fontSize: '1.25rem' }}>Building your custom website...</p>
                </div>
              ) : (
                <div>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid white',
                    padding: '2rem',
                    marginBottom: '2rem'
                  }}>
                    <h3 style={{ marginBottom: '1rem', color: '#EBF998' }}>Website Generated Successfully!</h3>
                    <p style={{ marginBottom: '1rem' }}>
                      Your custom website has been generated with your chosen theme and settings.
                      The code includes:
                    </p>
                    <ul style={{ paddingLeft: '2rem', lineHeight: 1.8 }}>
                      <li>Fully responsive design</li>
                      <li>Custom color scheme and styling</li>
                      <li>Your branding and content</li>
                      <li>Modern CSS animations</li>
                      <li>Mobile-optimized layout</li>
                    </ul>
                  </div>
                  
                  <div style={{ textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button
                      onClick={downloadCode}
                      style={{
                        background: '#EBF998',
                        color: 'black',
                        border: '3px solid black',
                        padding: '1rem 2rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        fontSize: '1.1rem'
                      }}
                    >
                      📥 Download HTML File
                    </button>
                    <button
                      onClick={() => {
                        setActiveStep('theme');
                        setSelectedTheme(null);
                        setCustomTheme(null);
                        setSiteSettings(null);
                        setGeneratedCode('');
                      }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: '2px solid white',
                        padding: '1rem 2rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        fontSize: '1rem'
                      }}
                    >
                      🔄 Create Another Site
                    </button>
                  </div>
                  
                  {/* Code Preview */}
                  <div style={{ marginTop: '3rem' }}>
                    <h3 style={{ marginBottom: '1rem', color: '#EBF998' }}>Generated Code Preview:</h3>
                    <div style={{
                      background: '#111',
                      border: '2px solid #333',
                      padding: '1rem',
                      maxHeight: '300px',
                      overflowY: 'auto',
                      fontSize: '0.875rem',
                      fontFamily: 'monospace',
                      lineHeight: 1.4
                    }}>
                      <pre style={{ margin: 0, color: '#ccc' }}>
                        {generatedCode.slice(0, 1000)}...
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes dropdown-fade-in {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes theme-preview-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(235, 249, 152, 0.3); }
          50% { box-shadow: 0 0 20px rgba(235, 249, 152, 0.6); }
        }
        
        .theme-card:hover {
          animation: theme-preview-glow 2s ease-in-out infinite;
        }
        
        .step-indicator {
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .step-indicator:hover {
          transform: translateY(-2px) scale(1.05);
        }
        
        .form-input {
          transition: all 0.3s ease;
        }
        
        .form-input:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(235, 249, 152, 0.2);
        }
        
        .cta-button {
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .cta-button:hover {
          transform: translateY(-5px) scale(1.05);
        }
        
        .preview-container {
          transition: all 0.5s ease;
        }
        
        .preview-container:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default ThemeBuilder;