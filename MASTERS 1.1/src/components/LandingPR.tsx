import React, { useState } from 'react';
import Navigation from './Navigation';

const LandingPR = () => {
  const [activeTab, setActiveTab] = useState('corporate');
  
  const tabs = [
    { id: 'corporate', label: 'CORPORATE COMMUNICATIONS' },
    { id: 'executive', label: 'EXECUTIVE BRANDING' },
    { id: 'crisis', label: 'CRISIS MANAGEMENT' },
    { id: 'media', label: 'MEDIA RELATIONS' },
    { id: 'thought', label: 'THOUGHT LEADERSHIP' }
  ];

  const metrics = [
    {
      value: '10M+',
      label: 'Media Impressions Generated',
      color: 'var(--master-primary)',
      textColor: 'var(--primary-foreground)'
    },
    {
      value: '95%',
      label: 'Positive Sentiment Score',
      color: 'var(--master-accent)',
      textColor: 'var(--secondary-foreground)'
    },
    {
      value: '200+',
      label: 'Media Placements Secured',
      color: 'var(--master-success)',
      textColor: 'var(--success-foreground)'
    },
    {
      value: '48hrs',
      label: 'Average Response Time',
      color: 'var(--master-primary)',
      textColor: 'var(--primary-foreground)'
    }
  ];

  const services = [
    {
      title: 'STRATEGIC MESSAGING',
      color: 'var(--master-primary)',
      textColor: 'var(--primary-foreground)',
      description: 'Develop core messaging frameworks that resonate across all stakeholder groups',
      points: [
        'Create compelling brand narratives',
        'Brand voice development',
        'Key message architecture',
        'Stakeholder messaging matrices',
        'Internal communications programs'
      ]
    },
    {
      title: 'THOUGHT LEADERSHIP',
      color: 'var(--master-accent)',
      textColor: 'var(--secondary-foreground)',
      description: 'Position your company and executives as industry authorities through strategic content and speaking opportunities',
      points: [
        'Executive ghostwriting',
        'Industry report creation',
        'Speaking engagement strategy',
        'Op-ed placements',
        'Panel participation and positioning'
      ]
    },
    {
      title: 'INVESTOR RELATIONS',
      color: 'var(--master-success)',
      textColor: 'var(--success-foreground)',
      description: 'Transparent, compelling communications that build investor confidence and support funding milestones',
      points: [
        'Earnings call preparation',
        'Investor deck development',
        'Annual report creation',
        'Shareholder communications'
      ]
    }
  ];

  const auditServices = [
    'Message Consistency',
    'Channel Effectiveness',
    'Stakeholder Feedback',
    'Competitive Positioning'
  ];

  return (
    <div className="pr-root">
      <Navigation />
      
      {/* Hero Section */}
      <div className="ai-hero universal-hero">
        <div className="universal-container">
          <div className="hero-icon">
            <span className="tv-icon">📺</span>
          </div>
          
          <h1 className="pr-title">PUBLIC RELATIONS</h1>
          
          <p className="pr-description">
            Strategic communications that build reputations, manage crises, and position
            leaders as industry voices. We don't just manage your story—we help you become
            the story worth telling.
          </p>
        </div>
      </div>

      {/* PR Performance Metrics */}
      <div className="pr-metrics-section universal-section" style={{
        background: 'var(--neutral-90)',
        color: 'var(--neutral-0)'
      }}>
        <div className="universal-container">
          <h2 className="metrics-title">PR PERFORMANCE METRICS</h2>
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="metric-box curations-card"
                style={{
                  backgroundColor: metric.color,
                  color: metric.textColor
                }}
              >
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories Tabs */}
      <div className="service-tabs-container universal-section">
        <div className="universal-container">
          <div className="tabs-wrapper">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`service-tab curations-button ${activeTab === tab.id ? 'active' : ''}`}
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

      {/* Corporate Communications Section */}
      <div className="corporate-communications universal-section">
        <div className="universal-container">
          <h2 className="section-title">CORPORATE COMMUNICATIONS</h2>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card curations-card"
                style={{
                  backgroundColor: service.color,
                  color: service.textColor
                }}
              >
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-points">
                  {service.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Corporate Communication Audit */}
          <div 
            className="audit-section curations-card brutal-box" 
            style={{
              background: 'var(--gradient-pr)',
              color: 'var(--primary-foreground)'
            }}
          >
            <h2 className="section-title">CORPORATE COMMUNICATION AUDIT</h2>
            <p className="universal-description">
              Complete analysis of your current communication ecosystem with actionable recommendations for improvement
            </p>
            <div className="audit-services">
              {auditServices.map((service, index) => (
                <a key={index} className="wyatt-btn wyatt-btn-accent wyatt-btn-medium" href="#">
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="final-cta-section" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="curations-button">
              ELEVATE YOUR PR STRATEGY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPR;