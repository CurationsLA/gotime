import React, { useState } from 'react';
import CurationsLogo from './CurationsLogo';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mainNavItems = [
    { href: "#/about", label: "About" },
    { 
      href: "#", 
      label: "Our Services",
      dropdown: [
        { href: "#/restaurant-biz", label: "🍽️ Restaurant & Biz" },
        { href: "#/ai-discovery", label: "🤖 AI Discovery" },
        { href: "#/public-relations", label: "📰 Public Relations" },
        { href: "#/creative-campaigns", label: "🎨 Creative Campaigns" },
        { href: "#/influencer-ugc", label: "🤝 Influencer & UGC" },
        { href: "#/newsletters", label: "🗞️ Newsletters" },
        { href: "#/branding-toolkit", label: "🛠️ Branding Toolkit" }
      ]
    },
    { href: "#/youth-curator", label: "Youth Curators" },
    { href: "#/grow-with-google", label: "🚀 Grow with Google" },
    { href: "#/outbox", label: "Outbox" },
  ];

  return (
    <nav className="curations-nav">
        <div className="max-w-screen-xl mx-auto px-8 py-4 flex justify-between items-center">
        <a 
          href="#/" 
          className="text-2xl font-black text-black no-underline"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          <CurationsLogo variant="enhanced" size="sm" />
        </a>
        
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8 list-none m-0 p-0 items-center">
          {mainNavItems.map((item, index) => (
            <li key={item.href} className="relative group">
              {item.dropdown ? (
                <div>
                  <button
                    className="font-bold uppercase text-sm text-black hover:text-primary transition-colors cursor-pointer"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {item.label} ▼
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border-4 border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" style={{ boxShadow: "8px 8px 0px black" }}>
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-4 py-3 font-bold uppercase text-sm text-black hover:bg-primary hover:text-white transition-colors no-underline border-b border-gray-200 last:border-b-0"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className={`font-bold uppercase text-sm no-underline transition-colors ${
                    currentPage === item.href 
                      ? 'text-primary' 
                      : 'text-black hover:text-primary'
                  }`}
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden font-black text-2xl text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t-4 border-black">
          <div className="px-8 py-4 space-y-4">
            {mainNavItems.map((item) => (
              <div key={item.href}>
                {item.dropdown ? (
                  <div>
                    <div className="font-bold uppercase text-sm text-black mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {item.label}
                    </div>
                    <div className="pl-4 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block font-bold uppercase text-xs text-black hover:text-primary transition-colors no-underline"
                          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`block font-bold uppercase text-sm no-underline transition-colors ${
                      currentPage === item.href 
                        ? 'text-primary' 
                        : 'text-black hover:text-primary'
                    }`}
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}