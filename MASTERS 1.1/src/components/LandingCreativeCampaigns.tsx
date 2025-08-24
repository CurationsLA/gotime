import React, { useState } from 'react';
import Navigation from './Navigation';
import GrowWithGoogleBox from './GrowWithGoogleBox';

const LandingCreativeCampaigns = () => {
  const [activeTab, setActiveTab] = useState('social');
  
  const tabs = [
    { 
      id: 'social', 
      label: 'SOCIAL STRATEGY',
      icon: '📱',
      color: 'var(--master-accent)'
    },
    { 
      id: 'ugc', 
      label: 'UGC THAT CONVERTS',
      icon: '📸',
      color: 'var(--master-primary)'
    },
    { 
      id: 'content', 
      label: 'CONTENT GAPS',
      icon: '🎯',
      color: 'var(--master-success)'
    },
    { 
      id: 'experiential', 
      label: 'EXPERIENTIAL CAMPAIGNS',
      icon: '🎪',
      color: 'var(--master-accent)'
    }
  ];

  const metrics = [
    {
      value: '10M+',
      label: 'Total Impressions',
      color: 'var(--master-success)'
    },
    {
      value: '850%',
      label: 'Engagement Increase',
      color: 'var(--master-primary)'
    },
    {
      value: '47',
      label: 'Viral Campaigns',
      color: 'var(--master-accent)'
    },
    {
      value: '92%',
      label: 'Brand Recall Rate',
      color: 'var(--master-success)'
    }
  ];

  const serviceCards = [
    {
      title: 'BRAND VOICE ARCHITECTURE',
      color: 'var(--master-primary)',
      textColor: 'var(--primary-foreground)',
      points: [
        'Personality framework development',
        'Tone-of-voice guidelines',
        'Cultural voice establishment',
        'Reader persona deep-dives',
        'Competitive differentiation strategy'
      ]
    },
    {
      title: 'EDITORIAL POSITIONING',
      color: 'var(--master-accent)',
      textColor: 'var(--secondary-foreground)',
      points: [
        'Market gap analysis',
        'Editorial calendar strategy',
        'Content series planning',
        'Reader journey mapping',
        'Engagement optimization'
      ]
    },
    {
      title: 'GROWTH FRAMEWORKS',
      color: 'var(--master-success)',
      textColor: 'var(--success-foreground)',
      points: [
        'Referral program design',
        'Social amplification strategy',
        'Cross-platform integration',
        'Community building tactics',
        'Retention optimization'
      ]
    }
  ];

  return (
    <div className="creative-campaigns-root">
      <Navigation />
      
      {/* Header GrowWithGoogle Component */}
      <div className="flex justify-center py-4 bg-gradient-to-r from-neutral-0 to-neutral-10">
        <GrowWithGoogleBox variant="header" />
      </div>
      
      {/* Hero Section */}
      <div className="ai-hero universal-hero">
        <div className="universal-container">
          <div className="hero-icon">
            <span className="art-icon">🎨</span>
          </div>
          
          <h1 className="creative-title">CREATIVE CAMPAIGNS</h1>
          
          <p className="creative-description">
            Where strategy meets creativity, where data meets intuition, where brands become 
            movements. We don't just create campaigns—we create cultural moments that 
            people want to be part of.
          </p>
          
          <button className="campaign-cta curations-button curations-button-accent">
            LAUNCH YOUR CAMPAIGN
          </button>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="impact-metrics-section universal-section">
        <div className="universal-container">
          <h2 className="metrics-title">CREATIVE IMPACT METRICS</h2>
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className="metric-box curations-card"
                style={{
                  borderColor: metric.color
                }}
              >
                <div 
                  className="metric-value"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campaign Tabs */}
      <div className="campaign-tabs-container universal-section">
        <div className="universal-container">
          <div className="campaign-tabs-wrapper">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`campaign-tab curations-card ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  backgroundColor: activeTab === tab.id ? tab.color : 'var(--card)',
                  color: activeTab === tab.id ? 'var(--primary-foreground)' : 'var(--foreground)'
                }}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Content Section */}
      <div className="strategic-content-section universal-section">
        <div className="universal-container">
          <h2 className="section-title">CAMPAIGN EXCELLENCE FRAMEWORK</h2>
          
          {/* Case Study Box */}
          <div className="case-study-box curations-card" style={{
            background: 'var(--gradient-creative)',
            color: 'var(--primary-foreground)'
          }}>
            <h3 className="case-study-title">CREATIVE CAMPAIGNS: CASE STUDY IN EXCELLENCE</h3>
            
            <div className="case-study-grid">
              <div className="case-study-column">
                <h4>THE CHALLENGE</h4>
                <p>
                  Create campaigns that cut through digital noise while building 
                  authentic brand connections and driving measurable results.
                </p>
              </div>
              
              <div className="case-study-column">
                <h4>OUR APPROACH</h4>
                <p>
                  Data-driven creativity meets cultural intuition. Every campaign 
                  is designed to be both shareworthy and strategically sound.
                </p>
              </div>
              
              <div className="case-study-column">
                <h4>THE RESULTS</h4>
                <p>
                  850% engagement increases, 47 viral campaigns, and brands that 
                  become the conversation, not just part of it.
                </p>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="service-cards-grid">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className="service-card curations-card"
                style={{
                  backgroundColor: card.color,
                  color: card.textColor
                }}
              >
                <h3>{card.title}</h3>
                <ul>
                  {card.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="final-cta-section" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="curations-button">
              START YOUR CREATIVE CAMPAIGN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCreativeCampaigns;