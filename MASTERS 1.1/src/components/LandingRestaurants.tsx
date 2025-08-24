import React, { useState } from 'react';
import Navigation from './Navigation';

const LandingRestaurants = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'services', label: 'SERVICES' },
    { id: 'process', label: 'PROCESS' },
    { id: 'results', label: 'RESULTS' },
    { id: 'investment', label: 'INVESTMENT' }
  ];

  const metrics = [
    {
      value: '350%',
      label: 'Average Revenue Increase',
      color: 'var(--master-success)'
    },
    {
      value: '89%',
      label: 'Customer Retention Rate',
      color: 'var(--master-primary)'
    },
    {
      value: '24hrs',
      label: 'Average Turnaround',
      color: 'var(--master-accent)'
    },
    {
      value: '150+',
      label: 'Restaurants Transformed',
      color: 'var(--master-success)'
    }
  ];

  const serviceFeatures = [
    {
      title: 'GRAND OPENING CAMPAIGNS',
      color: 'var(--master-primary)',
      textColor: 'var(--primary-foreground)',
      description: 'Turn your opening into a cultural moment that generates lines around the block.',
      points: [
        'Pre-launch buzz building',
        'Influencer partnership strategy',
        'Media relations and PR',
        'Community engagement tactics',
        'Social media amplification'
      ]
    },
    {
      title: 'DELIVERY OPTIMIZATION',
      color: 'var(--master-accent)',
      textColor: 'var(--secondary-foreground)',
      description: 'Maximize your delivery potential with strategic platform optimization.',
      points: [
        'Platform optimization (DoorDash, Uber Eats)',
        'Menu engineering for delivery',
        'Photography and listing optimization',
        'Review management strategy',
        'Promotional campaign design'
      ]
    },
    {
      title: 'COMMUNITY CORNERSTONE',
      color: 'var(--master-success)',
      textColor: 'var(--success-foreground)',
      description: 'Transform your restaurant into the heart of your community.',
      points: [
        'Local partnership development',
        'Event hosting and coordination',
        'Loyalty program creation',
        'Staff training and culture building',
        'Neighborhood integration strategy'
      ]
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <h3>Restaurant & Business Transformation</h3>
            <p>
              We don't just market restaurants—we architect dining experiences that become 
              cultural destinations. From concept to community cornerstone, we help restaurants 
              build loyal followings that drive sustainable growth.
            </p>
          </div>
        );
      case 'services':
        return (
          <div className="tab-content">
            <h3>Our Restaurant Services</h3>
            <ul>
              <li>Grand Opening Campaigns</li>
              <li>Delivery Platform Optimization</li>
              <li>Social Media Strategy</li>
              <li>Community Building</li>
              <li>Brand Positioning</li>
            </ul>
          </div>
        );
      case 'process':
        return (
          <div className="tab-content">
            <h3>Our Process</h3>
            <ol>
              <li>Discovery & Brand Audit</li>
              <li>Strategy Development</li>
              <li>Implementation & Launch</li>
              <li>Optimization & Growth</li>
            </ol>
          </div>
        );
      case 'results':
        return (
          <div className="tab-content">
            <h3>Proven Results</h3>
            <p>
              Our restaurant clients see an average 350% increase in revenue within 6 months, 
              with 89% achieving sustained growth beyond the first year.
            </p>
          </div>
        );
      case 'investment':
        return (
          <div className="tab-content">
            <h3>Investment Packages</h3>
            <p>
              Custom packages starting at $2,500/month, scaled to your restaurant's size 
              and growth objectives. ROI typically achieved within 90 days.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="restaurant-biz-root">
      <Navigation />
      
      {/* Hero Section */}
      <div className="ai-hero universal-hero">
        <div className="universal-container">
          <div className="hero-icon">
            <span className="plate-icon">🍽️</span>
          </div>
          
          <h1 className="service-title">RESTAURANT & BIZ</h1>
          
          <p className="service-description">
            From grand openings that become cultural moments to delivery 
            optimization that drives revenue, we turn restaurants into 
            community cornerstones and businesses into cultural forces.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="service-nav-tabs universal-section">
        <div className="universal-container">
          <div className="tabs-wrapper">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`brutal-tab curations-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? 'var(--master-primary)' : 'var(--card)',
                  color: activeTab === tab.id ? 'var(--primary-foreground)' : 'var(--foreground)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content-section universal-section">
        <div className="universal-container">
          {renderTabContent()}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="restaurant-metrics-section universal-section" style={{ 
        background: 'var(--gradient-restaurant)' 
      }}>
        <div className="universal-container">
          <h2 className="metrics-title" style={{ color: 'var(--primary-foreground)' }}>
            RESTAURANT PERFORMANCE METRICS
          </h2>
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-box curations-card" style={{
                backgroundColor: 'var(--card)',
                borderColor: metric.color
              }}>
                <div className="metric-value" style={{ color: metric.color }}>
                  {metric.value}
                </div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Features */}
      <div className="service-features-section universal-section">
        <div className="universal-container">
          <h2 className="section-title">RESTAURANT TRANSFORMATION SERVICES</h2>
          
          <div className="service-cards-grid">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="service-feature-card curations-card"
                style={{
                  backgroundColor: feature.color,
                  color: feature.textColor
                }}
              >
                <h3>{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul>
                  {feature.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="final-cta-section" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="curations-button">
              TRANSFORM YOUR RESTAURANT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingRestaurants;