// AI DISCOVERY START
// Enhanced draft navigation component with theme preview submenu
import React, { useState, useRef, useEffect } from 'react';

interface DraftNavProps {
  className?: string;
}

const draftNavLinks = [
  { href: '#/inspirations', label: 'Inspirations' },
  { href: '#/', label: 'Home' },
  { href: '#/restaurant-biz', label: 'Restaurant' },
  { href: '#/public-relations', label: 'PR' },
  { href: '#/creative-campaigns', label: 'Creative' },
  { href: '#/influencer-ugc', label: 'Influencer' },
  { href: '#/ai-discovery', label: 'AI' },
  { href: '#/newsletters', label: 'Newsletter' },
  { href: '#/branding-toolkit', label: 'Branding' },
  { href: '#/youth-curator', label: 'Youth' },
  { href: '#/outbox', label: 'Outbox' }
];

const dayThemes = [
  { href: '#/daytest/1', label: 'Sunrise Trio' },
  { href: '#/daytest/2', label: 'Universal Canvas' },
  { href: '#/daytest/3', label: 'Brutalist Trio' },
  { href: '#/daytest/4', label: 'Soft Trio' },
  { href: '#/daytest/5', label: 'Playful Trio' }
];

const nightThemes = [
  { href: '#/nighttest/1', label: 'Neon Trio' },
  { href: '#/nighttest/2', label: 'Cyberpunk' },
  { href: '#/nighttest/3', label: 'Aurora' },
  { href: '#/nighttest/4', label: 'Holographic' },
  { href: '#/nighttest/5', label: 'Laser Symphony' }
];

export default function DraftNav({ className = '' }: DraftNavProps) {
  const [showDayMenu, setShowDayMenu] = useState(false);
  const [showNightMenu, setShowNightMenu] = useState(false);
  const dayMenuRef = useRef<HTMLDivElement>(null);
  const nightMenuRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dayMenuRef.current && !dayMenuRef.current.contains(event.target as Node)) {
        setShowDayMenu(false);
      }
      if (nightMenuRef.current && !nightMenuRef.current.contains(event.target as Node)) {
        setShowNightMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`draft-nav ${className}`} aria-label="Draft navigation">
      <div className="draft-nav-inner">
        <div className="draft-nav-indicator">🚧 DEV MODE 🚧</div>
        
        <div className="draft-nav-links">
          {/* Main navigation links */}
          {draftNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="draft-link"
            >
              {link.label}
            </a>
          ))}
          
          {/* Day Theme Menu */}
          <div className="draft-dropdown" ref={dayMenuRef}>
            <button
              className="draft-dropdown-trigger"
              onClick={() => {
                setShowDayMenu(!showDayMenu);
                setShowNightMenu(false);
              }}
              aria-expanded={showDayMenu}
            >
              🌅 Day Themes ▼
            </button>
            {showDayMenu && (
              <div className="draft-dropdown-menu">
                {dayThemes.map((theme) => (
                  <a
                    key={theme.href}
                    href={theme.href}
                    className="draft-dropdown-link"
                    onClick={() => setShowDayMenu(false)}
                  >
                    {theme.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          {/* Night Theme Menu */}
          <div className="draft-dropdown" ref={nightMenuRef}>
            <button
              className="draft-dropdown-trigger"
              onClick={() => {
                setShowNightMenu(!showNightMenu);
                setShowDayMenu(false);
              }}
              aria-expanded={showNightMenu}
            >
              🌙 Night Themes ▼
            </button>
            {showNightMenu && (
              <div className="draft-dropdown-menu">
                {nightThemes.map((theme) => (
                  <a
                    key={theme.href}
                    href={theme.href}
                    className="draft-dropdown-link"
                    onClick={() => setShowNightMenu(false)}
                  >
                    {theme.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
// AI DISCOVERY END