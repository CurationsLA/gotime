// AI DISCOVERY START
import React, { useEffect, useRef, useState } from 'react';
import Navigation from './Navigation';
import {
  
  aiDemoTabs,
  featureCards,
  workflowPhases,
  roiStats,
  pricingTiers,
  serviceSchemaJSON,
  DemoTab
} from '../data/aiDiscovery';
import Footer from './Footer'; // Import Footer component

interface TypingState {
  text: string;
  index: number;
  isComplete: boolean;
}

export default function LandingAI() {
  const [activeTab, setActiveTab] = useState(aiDemoTabs[0].id);
  const [typingState, setTypingState] = useState<TypingState>({
    text: '',
    index: 0,
    isComplete: false
  });
  const timerRef = useRef<number | null>(null);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  
  const currentTab = aiDemoTabs.find(tab => tab.id === activeTab) || aiDemoTabs[0];

  // Auto-scroll terminal to bottom when content updates
  useEffect(() => {
    if (terminalRef.current && !typingState.isComplete) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [typingState.text]);

  // Typing effect for AI output
  useEffect(() => {
    // Clear existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Reset typing state
    setTypingState({
      text: '',
      index: 0,
      isComplete: false
    });

    const typeOutput = () => {
      setTypingState(prev => {
        if (prev.index >= currentTab.output.length) {
          return { ...prev, isComplete: true };
        }
        
        const nextIndex = prev.index + 1;
        return {
          text: currentTab.output.slice(0, nextIndex),
          index: nextIndex,
          isComplete: nextIndex >= currentTab.output.length
        };
      });
      
      timerRef.current = window.setTimeout(typeOutput, 18);
    };

    // Start typing after a brief delay
    timerRef.current = window.setTimeout(typeOutput, 300);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentTab.output]);

  const handleTabClick = (tabId: string) => {
    if (tabId !== activeTab) {
      setActiveTab(tabId);
    }
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaJSON) }}
      />
      
      <div className="min-h-screen bg-background">
        <Navigation currentPage="/ai-discovery" />
        
        <main className="ai-discovery-root">
          {/* Hero Section */}
          <section className="ai-hero" aria-labelledby="ai-hero-heading">
            <div className="ai-hero-inner">
              <div className="ai-hero-icon" aria-hidden="true">🤖</div>
              <h1 id="ai-hero-heading" className="ai-hero-title">AI DISCOVERY</h1>
              <p className="ai-hero-desc">
                Position your brand at the forefront of the AI revolution. From prompt engineering that delivers
                results to SEO strategies that dominate AI-powered search, we make artificial intelligence work
                for authentic human connection.
              </p>
              <div className="innovation-meter brutal-box" role="img" aria-label="Innovation meter at 100%">
                <div className="innovation-fill">
                  <span className="innovation-text">100% INNOVATION</span>
                </div>
              </div>
            </div>
          </section>

          {/* Live AI Demonstration */}
          <section className="ai-demo" aria-labelledby="ai-demo-heading">
            <div className="ai-demo-container">
              <h2 id="ai-demo-heading" className="section-title accent brutal-text-shadow">LIVE AI DEMONSTRATION</h2>
              
              <div className="demo-tabs" role="tablist" aria-label="AI Demo Modes">
                {aiDemoTabs.map(tab => {
                  const isActive = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`panel-${tab.id}`}
                      id={`tab-${tab.id}`}
                      className={`demo-button ${isActive ? 'active' : ''}`}
                      onClick={() => handleTabClick(tab.id)}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              
              <div className="demo-panels">
                <div className="demo-panel">
                  <h3 className="mini-heading brutal-text-shadow">INPUT PROMPT:</h3>
                  <div className="ai-terminal brutal-box">
                    <div className="terminal-line terminal-prompt">$ curations-ai --execute</div>
                    <div className="terminal-line terminal-user-prompt">{currentTab.prompt}</div>
                  </div>
                </div>
                
                <div className="demo-panel">
                  <h3 className="mini-heading">AI OUTPUT:</h3>
                  <div className="ai-terminal" aria-live="polite" ref={terminalRef}>
                    <div className="terminal-line prompt">$ Processing...</div>
                    <div className="terminal-line output-text">
                      {typingState.text}
                      {!typingState.isComplete && <span className="cursor" aria-hidden="true">▌</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core AI Capabilities - With Gradient Background */}
          <section className="ai-features-gradient" aria-labelledby="ai-features-heading">
            <div className="ai-features-container">
              <h2 id="ai-features-heading" className="section-title inverted brutal-text-shadow">CORE AI CAPABILITIES</h2>
              <div className="feature-grid">
                {featureCards.map((card, index) => (
                  <div key={card.id} className={`ai-feature-card-enhanced brutal-box feature-card-${index + 1}`}>
                    <div className="feature-icon" aria-hidden="true">{card.icon}</div>
                    <h3 className="feature-title">{card.title}</h3>
                    <p className="feature-desc">{card.desc}</p>
                    <ul className="feature-bullets">
                      {card.points.map(point => <li key={point}>• {point}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Integration Process */}
          <section className="ai-workflow-section" aria-labelledby="ai-workflow-heading">
            <div className="ai-workflow-container">
              <h2 id="ai-workflow-heading" className="section-title inverted brutal-text-shadow">
                OUR AI INTEGRATION PROCESS
              </h2>
              <div className="workflow-grid">
                {workflowPhases.map((phase, index) => (
                  <div 
                    key={phase.id} 
                    className="ai-workflow brutal-box" 
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <h3 className="workflow-title">{phase.title}</h3>
                    <p className="workflow-desc">{phase.desc}</p>
                    <div className="badge-row">
                      {phase.badges.map(badge => 
                        <span key={badge} className="badge-chip">{badge}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI ROI Projections */}
          <section className="ai-roi" aria-labelledby="ai-roi-heading">
            <div className="ai-roi-container">
              <h2 id="ai-roi-heading" className="section-title brutal-text-shadow">AI ROI PROJECTIONS</h2>
              <div className="roi-visualization brutal-box">
                <h3 className="roi-title">TYPICAL 12-MONTH RESULTS</h3>
                <div className="roi-grid">
                  {roiStats.map(stat => (
                    <div key={stat.label} className="roi-item">
                      <div className="roi-value">{stat.value}</div>
                      <div className="roi-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* AI Discovery Packages */}
          <section className="ai-packages" aria-labelledby="ai-packages-heading">
            <div className="ai-packages-container">
              <h2 id="ai-packages-heading" className="section-title inverted brutal-text-shadow">
                AI DISCOVERY PACKAGES
              </h2>
              <div className="packages-grid">
                {pricingTiers.map(tier => (
                  <div key={tier.id} className={`package-card brutal-box ${tier.variant}`}>
                    <h3 className="package-title">{tier.title}</h3>
                    <div className="package-price">{tier.price}</div>
                    <div className="package-tagline">{tier.tagline}</div>
                    <ul className="package-points">
                      {tier.points.map(point => <li key={point}>{point}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="ai-final-cta" aria-labelledby="ai-final-cta-heading">
            <div className="ai-final-cta-container">
              <h2 id="ai-final-cta-heading" className="section-title accent brutal-text-shadow">
                READY TO HARNESS AI POWER?
              </h2>
              <p className="final-cta-desc brutal-text">
                Don't let your competitors get ahead in the AI race. Start your transformation today.
              </p>
              <div className="final-cta-buttons">
                <a href="mailto:hello@curations.cc" className="cta-btn primary">
                  START AI DISCOVERY
                </a>
                <a href="#" className="cta-btn secondary" onClick={(e) => e.preventDefault()}>
                  BOOK AI DEMO
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
 <Footer /> {/* Add the Footer component here */}
    </>
  );
}
// AI DISCOVERY END