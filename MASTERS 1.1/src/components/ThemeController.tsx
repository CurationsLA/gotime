import React from 'react';
import { useKV } from '@github/spark/hooks';

interface ThemeColors {
  primary: string;
  accent: string;
  success: string;
  name: string;
}

const themes: Record<string, ThemeColors> = {
  master: {
    name: 'Master Colors',
    primary: '#ff69b4',
    accent: '#38b6ff', 
    success: '#ebf998'
  },
  neon: {
    name: 'Neon Night',
    primary: '#ff00ff',
    accent: '#00ffff',
    success: '#39ff14'
  },
  sunset: {
    name: 'Sunset Vibes',
    primary: '#ff6b35',
    accent: '#f7931e',
    success: '#ffcd3c'
  },
  ocean: {
    name: 'Ocean Depth',
    primary: '#0077be',
    accent: '#00a8cc',
    success: '#40e0d0'
  },
  forest: {
    name: 'Forest Fresh',
    primary: '#228b22',
    accent: '#32cd32',
    success: '#9aff9a'
  }
};

export const ThemeController: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useKV('current-theme', 'master');

  const applyTheme = (themeKey: string) => {
    const theme = themes[themeKey];
    if (!theme) return;

    // Apply CSS custom properties to root
    const root = document.documentElement;
    root.style.setProperty('--master-primary', theme.primary);
    root.style.setProperty('--master-accent', theme.accent);
    root.style.setProperty('--master-success', theme.success);
    
    // Update related colors that depend on master colors
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--success', theme.success);
    root.style.setProperty('--secondary', theme.accent);

    setCurrentTheme(themeKey);
  };

  // Apply theme on component mount and when theme changes
  React.useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  return (
    <div className="theme-controller" style={{
      position: 'fixed',
      top: '100px',
      right: '20px',
      zIndex: 1000,
      background: 'white',
      border: '4px solid black',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '8px 8px 0px black'
    }}>
      <h4 style={{ margin: '0 0 1rem 0', fontWeight: '800', fontSize: '0.875rem', textTransform: 'uppercase' }}>
        Theme Explorer
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {Object.entries(themes).map(([key, theme]) => (
          <button
            key={key}
            onClick={() => applyTheme(key)}
            style={{
              background: currentTheme === key ? theme.primary : 'white',
              color: currentTheme === key ? 'white' : 'black',
              border: `2px solid ${theme.primary}`,
              padding: '0.5rem 0.75rem',
              fontSize: '0.75rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: `linear-gradient(45deg, ${theme.primary} 0%, ${theme.accent} 50%, ${theme.success} 100%)`
            }}></div>
            {theme.name}
          </button>
        ))}
      </div>
      <div style={{ marginTop: '1rem', fontSize: '0.625rem', color: '#666' }}>
        Current: {themes[currentTheme]?.name}
      </div>
    </div>
  );
};

export default ThemeController;