'use client';

import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import GrowWithGoogleBox from './GrowWithGoogleBox';
import ThemeToggle from './ThemeToggle';
import Footer from './Footer'; // Import Footer component

// Import RSS testing utilities for development
import { testRSSIntegration } from '../utils/rssTest';



export default function Homepage() {
  const [activePage, setActivePage] = useState('home');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const currentPage = '/'; // Define the current page for Navigation
  const showPage = (pageId: string) => {
    const section = document.getElementById(pageId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActivePage(pageId);
    }
    // For direct page navigation (e.g., from external link or manual URL change)
    if (!section) {
 window.location.hash = pageId;
    }
    setMenuOpen(false);
  };

  // Function to handle direct hash links for navigation
  const handleHashChange = () => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
      setActivePage(hash);
    } else if (!hash && activePage !== 'home') {
      setActivePage('home'); // Default to home if no hash
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActivePage(id);
          break;
        }
      }
    };
    
    // Initial check on mount
    handleHashChange();

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    return () => { window.removeEventListener('scroll', handleScroll); window.removeEventListener('hashchange', handleHashChange); };
  }, []);

  // Development RSS testing
  useEffect(() => {
    // Run RSS test in development
    console.log('🚀 Homepage loaded - RSS integration active');
    
    // Test RSS after component mounts
    setTimeout(() => {
      testRSSIntegration().then(result => {
        console.log('📡 RSS Integration Test Result:', result);
      }).catch(error => {
        console.error('📡 RSS Test Error:', error);
      });
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ 
      background: 'linear-gradient(135deg, var(--background) 0%, var(--neutral-20) 25%, var(--background) 50%, var(--neutral-10) 75%, var(--background) 100%)',
      backgroundSize: '400% 400%',
      animation: 'background-shift 12s ease-in-out infinite',
      color: '#222222' 
    }}>
      <style jsx global>{`
        @keyframes background-shift {
          0%, 100% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }

        @keyframes atom-glow {
          0%, 100% { 
            filter: brightness(1) drop-shadow(0 0 5px rgba(255, 105, 180, 0.3));
          }
          50% { 
            filter: brightness(1.2) drop-shadow(0 0 15px rgba(56, 182, 255, 0.5));
          }
        }

        .atom-enhanced {
          animation: atom-glow 4s ease-in-out infinite;
        }

        .text-lime-400 {
          color: #a3e635;
        }

        .text-cyan-400 {
          color: #22d3ee;
        }

        .bg-gray-800 {
          background-color: #1f2937;
        }

        .border-lime-400 {
          border-color: #a3e635;
        }
        
        .brutal-box {
          border: 4px solid black;
          box-shadow: 8px 8px 0px black;
        }
        
        .stepped-brutal {
          border: 4px solid black;
          box-shadow: 
            8px 8px 0px black,
            12px 12px 0px #333333,
            16px 16px 0px #666666;
          transition: all 0.3s ease;
        }
        
        .stepped-brutal:hover {
          transform: translateY(-3px);
          box-shadow: 
            12px 12px 0px black,
            16px 16px 0px #333333,
            20px 20px 0px #666666,
            24px 24px 0px #999999;
        }
        
        .service-card {
          transition: all 0.3s ease;
          cursor: pointer;
          display: block;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: all 0.5s ease;
        }
        
        .service-card:hover::before {
          left: 100%;
        }
        
        .service-card:hover {
          transform: translateY(-6px) rotate(1deg);
          box-shadow: 
            12px 12px 0px black,
            16px 16px 0px #333333,
            20px 20px 0px #666666;
        }
        
        
        /* Fix header bleeding issues */
        .homepage-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          max-width: 100vw;
          background: white;
          z-index: 100;
          border-bottom: 4px solid black;
          box-sizing: border-box;
          overflow: hidden;
        }
        
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
          width: 100%;
          overflow: hidden;
        }

        
        /* Enhanced logo styling to prevent bleeding */
        .logo-link {
          text-decoration: none;
          color: black;
          cursor: pointer;
          transition: all 0.3s;
          white-space: nowrap;
          overflow: hidden;
        }

        .logo-link:hover {
          color: #FF69B4;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        
        .nav-links a {
          color: black;
          text-decoration: none;
          font-weight: 700;
          text-transform: uppercase;
          transition: all 0.3s;
          cursor: pointer;
        }
        
        .nav-links a:hover, .nav-links a.active {
          color: #FF69B4;
        }
        
        .menu-toggle {
          display: none;
          background: #EBF998;
          color: black;
          border: none;
          padding: 0.5rem 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .nav-container {
            padding: 0.75rem 1rem;
          }
          
          .menu-toggle {
            display: block;
          }

          .menu-toggle:hover {
            background: #FF69B4;
            color: white;
          }
          
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            padding: 2rem;
            border-top: 4px solid black;
            display: none;
            box-sizing: border-box;
            max-width: 100vw;
          }
          
          .nav-links.open {
            display: flex;
          }
          
          .logo-link {
            font-size: 1rem;
          }
        }

        @media (max-width: 600px) {
          .wyatt-likes-services .universal-container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          .wyatt-services-grid {
            grid-template-columns: 1fr;
            gap: 1rem; /* Adjust gap for single column */
          }
        }
        
        .corner-badge {
          position: fixed;
          top: 100px;
          right: 15px;
          z-index: 50;
          background: #FF69B4;
          color: white;
          padding: 0.25rem 0.5rem;
          transform: rotate(12deg);
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease-in-out;
        }

        .corner-badge span {
          font-size: 0.75rem;
          font-weight: 700;
        }
        
        @media (min-width: 768px) {
          .corner-badge {
            top: 105px;
            right: 30px;
            padding: 0.5rem 1rem;
          }
          .corner-badge span {
            font-size: 1rem;
          }
        }

        .corner-badge:hover {
          transform: rotate(12deg) scale(1.1);
          background: white;
          color: #FF69B4;
        }
        
        .campaign-showcase {
          background: #FF69B4;
          color: white;
          padding: 3rem;
          position: relative;
          overflow: hidden;
        }
        
        .campaign-showcase::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
          background-size: 200% 200%;
          animation: shimmer 4s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
        }

        /* Atom Icon Animations */
        @keyframes atom-pulse {
          0%, 100% { 
            transform: scale(1);
            filter: brightness(1);
          }
          50% { 
            transform: scale(1.05);
            filter: brightness(1.2);
          }
        }

        @keyframes atom-orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .atom-pulse {
          animation: atom-pulse 3s ease-in-out infinite;
        }

        .atom-orbit {
          animation: atom-orbit 8s linear infinite;
        }

        /* Enhanced Logo Styling */
        .logo-enhanced {
          position: relative;
          overflow: hidden;
        }

        .logo-enhanced::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, var(--master-primary), var(--master-accent), var(--master-success), var(--master-primary));
          background-size: 400% 400%;
          animation: shimmer 3s ease-in-out infinite;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .logo-enhanced:hover::before {
          opacity: 0.3;
        }

        /* RSS Feed Styles */
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }

        .bg-gray-200 {
          background-color: #E5E7EB;
        }

        .text-gray-500 {
          color: #6B7280;
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8,0,1,1);
          }
          50% {
            transform: none;
            animation-timing-function: cubic-bezier(0,0,0.2,1);
          }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .text-gray-400 {
          color: #9CA3AF;
        }

        .border-gray-700 {
          border-color: #374151;
        }

        .rounded {
          border-radius: 0.25rem;
        }

        .w-3\/4 {
          width: 75%;
        }

        .w-1\/2 {
          width: 50%;
        }

        .w-full {
          width: 100%;
        }

        .h-4 {
          height: 1rem;
        }

        .space-y-3 > :not([hidden]) ~ :not([hidden]) {
          margin-top: 0.75rem;
        }

        .border-l-4 {
          border-left-width: 4px;
        }

        .border-t {
          border-top-width: 1px;
        }

        .pl-3 {
          padding-left: 0.75rem;
        }

        .py-1 {
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }

        .pt-3 {
          padding-top: 0.75rem;
        }

        /* Adjust main content for fixed nav */
        main {
          padding-top: 80px;
        }
        
        /* Enhanced mobile anti-bleeding for CURATIONS title */
        @media (max-width: 768px) {
          main {
            padding-top: 70px;
          }
          
          .universal-hero {
            padding: 3rem 1rem 2rem;
          }
          
          .universal-container {
            padding-left: 1rem;
            padding-right: 1rem;
            max-width: calc(100vw - 2rem);
          }
        }
        
        @media (max-width: 480px) {
          .universal-hero {
            padding: 2rem 0.75rem 1.5rem;
          }
          
          .universal-container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            max-width: calc(100vw - 1.5rem);
          }
        }
      `}</style>

      <Navigation currentPage={currentPage} />

      <a href="#contact" onClick={() => showPage('contact')} className="corner-badge brutal-box">
        <span>EMAIL US!</span>
      </a>

      {/* Hero Section - Universal Padding System */}
      <main id="home" className="universal-hero" data-aos="fade-up"> {/* Added fade-up animation */}
        <section className="universal-container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="wyatt-section-title wyatt-highlight mb-8" style={{
                textAlign: 'center'
              }}>
                <span className="block mb-2" style={{ 
                  background: 'linear-gradient(135deg, var(--master-primary), var(--master-accent))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>CURATIONS</span>
              </h1>
              
              {/* Enhanced Motto Section */}
              <div className="mt-8">
                <div className="stepped-brutal bg-white text-black p-6" data-aos="slide-up" data-aos-delay="100"> {/* Added slide-up animation */}
                  <h2 className="wyatt-motto text-2xl md:text-3xl font-black uppercase text-center leading-tight">
                    WE CURATE THE <span style={{ color: 'var(--master-primary)' }}>HEART</span><br />
                    AND <span style={{ color: 'var(--master-accent)' }}>HEADLINES</span><br />
                    OF <span style={{ color: 'var(--master-success)' }}>BRANDS</span>
                  </h2>
                </div>
              </div>
            </div>
            
            <div className="mt-8 md:mt-0">
              {/* This space available for future content */}
            </div>
          </div>
          
          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="200"> {/* Added fade-up animation */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 font-bold text-sm">
                <span>🏆</span> GOOGLE PARTNER
              </div>
              <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 font-bold text-sm">
                <span>📈</span> 500% AVG GROWTH
              </div>
              <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 font-bold text-sm">
                <span>🌟</span> LA BASED
              </div>
              <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 font-bold text-sm">
                <span>🤖</span> AI POWERED
              </div>
              <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 font-bold text-sm">
                <span>📰</span> NEWS + AGENCY
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* About Section - Universal Padding System */}
      <div id="about" className="universal-section brutal-section"> {/* Removed animation here, added to inner content */}
        {/* The inner div now uses brutalist border and shadow */}
        <div className="brutal-box py-16 px-8 brutal-gradient-primary-accent" > {/* Removed inline style, assuming a class for gradient */}
          <div className="universal-container text-center" data-aos="fade-up"> {/* Added fade-up animation */}
            {/* Updated typography classes and colors - Assumed section-title and accent classes are defined */}
            <h2 className="section-title inverted" data-aos="slide-up"> {/* Added slide-up animation */}
              ABOUT <span className="accent">[CURATIONS]</span>
            </h2>
            {/* Updated typography classes and colors */}
            <p className="section-description inverted mt-4 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100"> {/* Added fade-up animation */}
              We curate the
              <span className="brutal-badge primary ml-2 mr-2">HEART</span> and
              <span className="brutal-badge accent ml-2 mr-2">HEADLINES</span> of
              <span className="brutal-badge success ml-2 mr-2">BRANDS</span>
            </p>
          </div>
        </div>
        
        {/* Logo Showcase - Removed */}
      </div>

      {/* Services Section - Wyatt Likes Style */}
      <div id="services" className="universal-section wyatt-likes-services"> {/* Removed animation here, added to inner content */}
        <div className="brutal-gradient-primary-accent text-white py-16 px-8"> {/* Removed inline style, added brutalist gradient class */}
          <div className="universal-container text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">
              OUR <span className="text-master-success">CURATIONS</span> {/* Used color class */}
            </h2>
            <p className="text-xl max-w-4xl mx-auto">
              Full-spectrum creative solutions that transform brands into cultural forces
            </p>
          </div>
        </div>
        
        <div className="py-16 px-8 bg-background"> {/* Used color variable/class */}
          <div className="universal-container">
            {/* Enhanced Service Grid - Wyatt Likes */}
            <div className="wyatt-services-grid">
              {[
                {
                  icon: '🍽️',
                  title: 'Restaurant & Biz',
                  description: 'Grand openings that become cultural moments. Delivery optimization that drives revenue. Transform restaurants into community cornerstones.',
                  link: '#/restaurant-biz',
 palette: 'primary',
                  index: 0
                },
                {
                  icon: '🤖',
                  title: 'AI Discovery',
                  description: 'Prompt engineering excellence. SEO optimization for the AI age. Tech stack discovery that future-proofs your brand.',
                  link: '#/ai-discovery',
 palette: 'accent',
                  index: 1
                },
                {
                  icon: '📺',
                  title: 'Public Relations',
                  description: 'Strategic public relations that build reputations. Media coverage that matters. Narrative management that protects and elevates.',
                  link: '#/public-relations',
 palette: 'primary',
                  index: 2
                },
                {
                  icon: '🎨',
                  title: 'Creative Campaigns',
                  description: 'Campaigns that spark conversations. Creative strategies that build authentic community connections and drive real engagement.',
                  link: '#/creative-campaigns',
 palette: 'accent',
                  index: 3
                },
                {
                  icon: '🤝',
                  title: 'Influencer & UGC',
                  description: 'Strategic partnerships that build trust. User-generated content programs that turn customers into evangelists.',
                  link: '#/influencer-ugc',
 palette: 'highlight',
                  index: 4
                },
                {
                  icon: '📧',
                  title: 'Newsletter Services',
                  description: 'Newsletters that create communities, not just reach inboxes. Content strategies that build lasting relationships.',
                  link: '#/newsletters',
 palette: 'primary',
                  index: 5
                },
                {
                  icon: '🛠️',
                  title: 'Branding Toolkit',
                  description: 'Complete brand identity systems. Logos and visual systems that command attention and build recognition.',
                  link: '#/branding-toolkit',
 palette: 'accent',
                  index: 6
                }
              ].map((service, index) => (
                <a 
                  key={service.link}
                  href={service.link}
                  className="wyatt-service-link"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`wyatt-service-card wyatt-card-${(index % 3) + 1} brutal-box`} data-aos="fade-up" data-aos-delay={`${index * 50}`}> {/* Added brutal-box and animation */}
                  >
                    {/* Card Sparkle Effect */}
                    <div className="wyatt-card-sparkle"></div>
                    
                    {/* Enhanced Icon Section */}
                    <div className="wyatt-card-icon-section">
                      <div className="wyatt-icon-container">
                        <span className="wyatt-service-icon">{service.icon}</span>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="wyatt-card-content">
                      <h3 className="wyatt-service-title">{service.title}</h3>
                      <p className="wyatt-service-description">{service.description}</p>
                      
                      {/* Enhanced CTA */}
                      <div className="wyatt-cta-container">
                        <div className={`wyatt-service-cta brutal-button ${service.palette}`}> {/* Added brutal-button and palette class */}
                          }}
                        >
                          <span className="wyatt-cta-text">EXPLORE</span>
                          <span className="wyatt-cta-arrow">→</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner Badge */}
                    <div className="wyatt-corner-badge">
                      <span className="wyatt-badge-text">HOT</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Enhanced Bottom CTA - Matching Grow with Google style */}
            <div className="wyatt-services-bottom-cta">
              <div className="wyatt-bottom-cta-box brutal-box" data-aos="slide-up"> {/* Added brutal-box and animation */}
                <h3 className="wyatt-bottom-title" data-aos="fade-up">READY TO TRANSFORM YOUR BRAND?</h3> {/* Added animation */}
                <p className="wyatt-bottom-description">
                  Join 200+ brands who chose culture over algorithms, authenticity over automation
                </p>
                <div className="wyatt-bottom-buttons">
                  <a href="#contact" onClick={() => showPage('contact')} className="wyatt-bottom-btn primary">
                    <span>START YOUR CURATION</span>
                  </a>
                  <a href="https://la.curations.org" target="_blank" rel="noopener noreferrer" className="wyatt-bottom-btn secondary">
                    <span>SEE CURATIONSLA</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Grow with Google Box - Scaled down */}
            <div className="mt-16 flex justify-center">
              <div style={{ textAlign: 'center', transform: 'scale(0.8)' }}>
                <GrowWithGoogleBox />
                <div className="mt-2">
                  <a
                    href="#/grow-with-google" 
                    className="inline-block px-4 py-2 font-bold uppercase text-xs border-2 border-black transition-all brutal-button success" // Removed hover classes if already in brutal-button
                    style={{ textDecoration: 'none' }} // Keep text-decoration none if needed
                  >
                    VIEW DETAILS →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section - Universal Padding System */}
      <div id="contact" className="universal-section brutal-gradient-primary-accent"> {/* Removed animation here, added to inner content */}
        <div className="universal-container text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase" data-aos="fade-up"> {/* Added fade-up animation */}
            READY TO CURATE YOUR SUCCESS?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100"> {/* Added fade-up animation */}
            Join 100+ brands that chose culture over algorithms, authenticity over automation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap" data-aos="slide-up" data-aos-delay="200"> {/* Added slide-up animation */}
            <a href="#contact" onClick={() => showPage('contact')} className="stepped-brutal px-8 py-4 font-black uppercase border-4 border-black cursor-pointer no-underline brutal-button primary" > {/* Added brutal-button and primary classes */}
              START YOUR CURATION
            </a>
            <a href="https://la.curations.org" target="_blank" rel="noopener noreferrer" className="stepped-brutal text-black px-8 py-4 font-black uppercase border-4 border-black cursor-pointer no-underline" style={{ background: 'var(--master-success)' }}>
              SEE CURATIONSLA
            </a>
          </div>
        </div>
      </div>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}