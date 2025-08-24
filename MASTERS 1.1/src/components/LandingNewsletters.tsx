import React, { useState } from 'react';
import Navigation from './Navigation';

const LandingNewsletters = () => {
  const [activeTab, setActiveTab] = useState('strategic');
  
  const tabs = [
    { id: 'strategic', label: 'STRATEGIC BRANDING', active: true },
    { id: 'visual', label: 'VISUAL DESIGN' },
    { id: 'content', label: 'CONTENT CREATION' },
    { id: 'ghostwriting', label: 'GHOSTWRITING' }
  ];

  const performanceMetrics = [
    {
      percentage: '67%',
      label: 'Average Open Rate',
      sublabel: 'industry 21%',
      color: 'var(--master-primary)'
    },
    {
      percentage: '23%',
      label: 'Click-Through Rate',
      sublabel: 'industry 2.6%',
      color: 'var(--master-primary)'
    },
    {
      percentage: '89%',
      label: 'Subscriber Retention',
      sublabel: 'industry 68%',
      color: 'var(--master-primary)'
    },
    {
      percentage: '$42',
      label: 'ROI Per $1 Spent',
      sublabel: 'industry $36',
      color: 'var(--master-primary)'
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
    <div className="newsletter-services-root">
      <Navigation />
      
      {/* Hero Section */}
      <div className="ai-hero universal-hero">
        <div className="universal-container">
          <h1 className="newsletter-title">NEWSLETTER MASTERY</h1>
          
          <p className="newsletter-description">
            From strategic branding to compelling copy, from visual design to growth/retention 
            excellence—we create newsletters that don't just reach inboxes, they create 
            communities. This is where brands become voices people actually want to hear 
            from.
          </p>
          
          <div 
            className="newsletter-superpower-box curations-card"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              borderColor: 'var(--neutral-0)',
              color: 'var(--neutral-0)'
            }}
          >
            <h2>OUR NEWSLETTER SUPERPOWER</h2>
            <p>
              We don't just write newsletters—we architect communication 
              ecosystems that turn subscribers into evangelists, readers into 
              customers, and brands into cultural touchstones.
            </p>
          </div>
        </div>
      </div>

      {/* Performance Section */}
      <div 
        className="performance-section universal-section"
        style={{
          background: 'var(--neutral-90)',
          color: 'var(--neutral-0)'
        }}
      >
        <div className="universal-container">
          <h2 className="performance-title">NEWSLETTER PERFORMANCE EXCELLENCE</h2>
          <div className="metrics-grid">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="metric-card curations-card" style={{
                borderColor: metric.color,
                background: `rgba(${metric.color === 'var(--master-primary)' ? '255, 105, 180' : '56, 182, 255'}, 0.1)`
              }}>
                <div className="metric-value" style={{color: metric.color}}>
                  {metric.percentage}
                </div>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-sublabel">({metric.sublabel})</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Service Tabs */}
      <div className="newsletter-tabs-container universal-section">
        <div className="universal-container">
          <div className="tabs-wrapper">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`newsletter-tab curations-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  backgroundColor: activeTab === tab.id ? 'var(--master-primary)' : 'var(--card)',
                  color: activeTab === tab.id ? 'var(--primary-foreground)' : 'var(--foreground)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Newsletter Branding */}
      <div className="strategic-branding-section universal-section">
        <div className="universal-container">
          <h2 className="section-title">STRATEGIC NEWSLETTER BRANDING</h2>
          
          {/* CurationsLA Case Study */}
          <div 
            className="case-study-box curations-card"
            style={{
              background: 'var(--gradient-newsletter)',
              color: 'var(--foreground)'
            }}
          >
            <h3 className="case-study-title">CURATIONSLA: CASE STUDY IN EXCELLENCE</h3>
            
            <div className="case-study-grid">
              <div className="case-study-column">
                <h4>THE CHALLENGE</h4>
                <p>
                  Create a newsletter that captures the pulse of Los 
                  Angeles culture while building authentic community 
                  connections.
                </p>
              </div>
              
              <div className="case-study-column">
                <h4>OUR APPROACH</h4>
                <p>
                  Brand design aesthetic meets hyper-local curation. 
                  Every issue feels like insider knowledge from 
                  cultural architects.
                </p>
              </div>
              
              <div className="case-study-column">
                <h4>THE RESULTS</h4>
                <p>
                  10,000+ engaged subscribers, 67% open rate, and 
                  businesses reaching out to BE featured, not just to 
                  be featured.
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

          {/* Final CTA */}
          <div className="final-cta-section" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="curations-button">
              MASTER YOUR NEWSLETTER STRATEGY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingNewsletters;