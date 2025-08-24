import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'day' | 'night'>('day');
  const [mounted, setMounted] = useState(false);

  // Hydrate theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('curations-theme') as 'day' | 'night' || 'day';
    setTheme(savedTheme);
    setMounted(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('curations-theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'day' ? 'night' : 'day');
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'day' ? 'night' : 'day'} mode`}
      data-tooltip={theme === 'day' ? 'Night Mode' : 'Day Mode'}
      title={`Current: ${theme === 'day' ? 'Day' : 'Night'} Mode - Click to toggle`}
    >
      🪩
    </button>
  );
};

export default ThemeToggle;