import React from 'react';

const GrowWithGoogleBox = () => {
  return (
    <div className="google-partner-section" style={{ 
      padding: '4rem 1.5rem 3rem', // Reduced from 8rem 2rem 6rem
      background: 'linear-gradient(135deg, var(--master-primary) 0%, var(--master-accent) 30%, var(--master-success) 70%, var(--master-primary) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Enhanced Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%),
          linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.03) 75%, transparent 75%)
        `,
        animation: 'float 6s ease-in-out infinite'
      }} />

      {/* Brand Integration Indicator */}
      <div style={{
        position: 'absolute',
        top: '2rem',
        right: '2rem',
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '0.5rem 1rem',
        border: '2px solid white',
        fontFamily: 'var(--font-display)',
        fontWeight: '800',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        CURATIONS × GOOGLE
      </div>

      {/* Expanded Hero Section */}
      <div className="google-hero-section" style={{ 
        textAlign: 'center', 
        marginBottom: '3rem', // Reduced from 5rem
        maxWidth: '800px', // Reduced from 1000px
        margin: '0 auto 3rem auto',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          fontSize: 'clamp(2rem, 6vw, 4rem)', // Reduced from clamp(4rem, 8vw, 8rem)
          marginBottom: '1rem', // Reduced from 2rem
          filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.3))',
          animation: 'bounce 2s ease-in-out infinite'
        }}>
          🚀
        </div>
        
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 6vw, 4rem)', // Reduced from clamp(3rem, 8vw, 7rem)
          fontWeight: '900',
          textTransform: 'uppercase',
          margin: '0 0 1rem 0', // Reduced from 2rem
          color: 'white',
          lineHeight: '0.9',
          textShadow: '4px 4px 0px black, 8px 8px 0px rgba(0,0,0,0.3)',
          letterSpacing: '-2px'
        }}>
          GROW WITH GOOGLE
        </h1>
        
        <div style={{
          display: 'inline-block',
          background: 'rgba(255,255,255,0.95)',
          color: 'var(--foreground)',
          padding: '0.75rem 1.5rem', // Reduced padding
          fontFamily: 'var(--font-display)',
          fontWeight: '900',
          fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', // Reduced font size
          textTransform: 'uppercase',
          border: '4px solid black',
          boxShadow: '8px 8px 0px black',
          transform: 'rotate(-2deg)',
          letterSpacing: '1px', // Reduced from 2px
          marginBottom: '2rem' // Reduced from 3rem
        }}>
          🏆 OFFICIAL PARTNER 🏆
        </div>
        
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', // Reduced font size
          color: 'white',
          margin: '0 0 2rem 0', // Reduced from 3rem
          fontWeight: '700',
          lineHeight: '1.3',
          textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          One deserving brand receives a full year of comprehensive digital marketing services — completely free
        </p>

        {/* Enhanced Key Benefits Banner with Master Colors */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          <div style={{
            background: 'rgba(0,0,0,0.9)',
            color: 'var(--master-success)',
            padding: '1rem 1.5rem',
            border: '3px solid white',
            fontFamily: 'var(--font-display)',
            fontWeight: '800',
            fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '4px 4px 0px rgba(0,0,0,0.3)'
          }}>
            $50K+ VALUE
          </div>
          <div style={{
            background: 'rgba(0,0,0,0.9)',
            color: 'var(--master-accent)',
            padding: '1rem 1.5rem',
            border: '3px solid white',
            fontFamily: 'var(--font-display)',
            fontWeight: '800',
            fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '4px 4px 0px rgba(0,0,0,0.3)'
          }}>
            12 MONTHS
          </div>
          <div style={{
            background: 'rgba(0,0,0,0.9)',
            color: 'var(--master-primary)',
            padding: '1rem 1.5rem',
            border: '3px solid white',
            fontFamily: 'var(--font-display)',
            fontWeight: '800',
            fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '4px 4px 0px rgba(0,0,0,0.3)'
          }}>
            FULL SERVICE
          </div>
        </div>

        {/* Hero CTA */}
        <button 
          className="hero-cta-button" 
          onClick={() => window.location.href = 'mailto:hello@curations.cc?subject=Grow%20with%20Google%20Partnership%20Application&body=Please%20include:%0A%0A1.%20Business%20name%20and%20description%0A2.%20Current%20marketing%20challenges%0A3.%20Growth%20goals%20and%20timeline%0A4.%20Community%20impact%20statement%0A5.%20Why%20you%20believe%20your%20business%20should%20be%20selected%0A%0AThank%20you%20for%20your%20interest!'}
          style={{
            background: 'white',
            color: 'var(--master-primary)',
            padding: '1.5rem 3rem',
            fontFamily: 'var(--font-display)',
            fontWeight: '900',
            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
            textTransform: 'uppercase',
            border: '5px solid black',
            boxShadow: '10px 10px 0px black',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            letterSpacing: '2px'
          }}
        >
          APPLY NOW → GET STARTED
        </button>
      </div>

      {/* Detailed Information Cards */}
      <div className="google-partner-container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}>
        <div className="info-cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {/* Services Card */}
          <div className="info-card services-card">
            <div className="card-header">
              <span className="card-icon">🎯</span>
              <h3 className="card-title">WHAT'S INCLUDED</h3>
            </div>
            <div className="card-content">
              <ul className="services-list">
                <li>✓ Complete Digital Marketing Strategy</li>
                <li>✓ Google Ads Setup & Management</li>
                <li>✓ Search Engine Optimization (SEO)</li>
                <li>✓ Analytics & Performance Tracking</li>
                <li>✓ Brand Development & Creative Assets</li>
                <li>✓ Monthly Strategy & Optimization</li>
                <li>✓ Case Study Development</li>
                <li>✓ Direct Access to Our Team</li>
              </ul>
            </div>
          </div>

          {/* Eligibility Card */}
          <div className="info-card eligibility-card">
            <div className="card-header">
              <span className="card-icon">🎪</span>
              <h3 className="card-title">WHO CAN APPLY</h3>
            </div>
            <div className="card-content">
              <ul className="eligibility-list">
                <li>• Small-medium business (under 50 employees)</li>
                <li>• Demonstrated community impact</li>
                <li>• Growth-ready with clear goals</li>
                <li>• Willing to participate in case study</li>
                <li>• Located in the US (preference for LA area)</li>
                <li>• Currently spending less than $5K/month on marketing</li>
                <li>• Ready to commit to 12-month program</li>
              </ul>
            </div>
          </div>

          {/* Process Card */}
          <div className="info-card process-card" style={{ gridColumn: '1 / -1' }}>
            <div className="card-header">
              <span className="card-icon">⚡</span>
              <h3 className="card-title">APPLICATION PROCESS</h3>
            </div>
            <div className="card-content">
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>APPLY</h4>
                    <p>Submit your application with business details and community impact statement</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>REVIEW</h4>
                    <p>Our team evaluates applications based on growth potential and community impact</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>INTERVIEW</h4>
                    <p>Finalists participate in a discovery call to align on goals and expectations</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>LAUNCH</h4>
                    <p>Selected partner begins comprehensive 12-month marketing transformation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="final-cta-section" style={{
          textAlign: 'center',
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '3rem 2rem',
          border: '5px solid white',
          boxShadow: '15px 15px 0px rgba(0,0,0,0.3)'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: '900',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            color: 'var(--master-success)'
          }}>
            Ready to Transform Your Business?
          </h3>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            marginBottom: '2rem',
            opacity: '0.9'
          }}>
            Applications reviewed quarterly. Next review: Q1 2024
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <button 
              className="secondary-cta-button"
              onClick={() => window.location.href = 'mailto:hello@curations.cc?subject=Grow%20with%20Google%20Partnership%20Application&body=Please%20include:%0A%0A1.%20Business%20name%20and%20description%0A2.%20Current%20marketing%20challenges%0A3.%20Growth%20goals%20and%20timeline%0A4.%20Community%20impact%20statement%0A5.%20Why%20you%20believe%20your%20business%20should%20be%20selected%0A%0AThank%20you%20for%20your%20interest!'}
              style={{
                background: 'var(--master-primary)',
                color: 'white',
                padding: '1.25rem 2.5rem',
                fontFamily: 'var(--font-display)',
                fontWeight: '800',
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                textTransform: 'uppercase',
                border: '4px solid white',
                boxShadow: '6px 6px 0px white',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                letterSpacing: '1px'
              }}
            >
              SUBMIT APPLICATION
            </button>
            <button 
              className="tertiary-cta-button"
              onClick={() => window.location.href = 'mailto:hello@curations.cc?subject=Grow%20with%20Google%20Program%20Questions'}
              style={{
                background: 'transparent',
                color: 'white',
                padding: '1.25rem 2.5rem',
                fontFamily: 'var(--font-display)',
                fontWeight: '800',
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                textTransform: 'uppercase',
                border: '4px solid white',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                letterSpacing: '1px'
              }}
            >
              ASK QUESTIONS
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        .hero-cta-button:hover {
          transform: translate(-3px, -3px);
          box-shadow: 13px 13px 0px black;
          background: var(--master-success) !important;
          color: black !important;
        }

        .hero-cta-button:active {
          transform: translate(2px, 2px);
          box-shadow: 7px 7px 0px black;
        }

        /* Info Cards Styling */
        .info-card {
          background: white;
          border: 5px solid black;
          box-shadow: 10px 10px 0px black;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .info-card:hover {
          transform: translate(-3px, -3px);
          box-shadow: 13px 13px 0px black;
        }

        .services-card .card-header {
          background: var(--master-success);
          color: black;
        }

        .eligibility-card .card-header {
          background: var(--master-accent);
          color: white;
        }

        .process-card .card-header {
          background: var(--master-primary);
          color: white;
        }

        .card-header {
          padding: 2rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          border-bottom: 4px solid black;
        }

        .card-icon {
          font-size: 2.5rem;
          filter: drop-shadow(2px 2px 0px rgba(0,0,0,0.3));
        }

        .card-title {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 1.25rem;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-shadow: 1px 1px 0px rgba(0,0,0,0.2);
        }

        .card-content {
          padding: 2rem 1.5rem;
          background: white;
        }

        .services-list,
        .eligibility-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .services-list li,
        .eligibility-list li {
          padding: 0.75rem 0;
          font-size: 1rem;
          color: var(--foreground);
          font-weight: 600;
          border-bottom: 2px solid var(--neutral-20);
          text-align: left;
        }

        .services-list li:last-child,
        .eligibility-list li:last-child {
          border-bottom: none;
        }

        /* Process Steps */
        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .step {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--neutral-10);
          border: 3px solid black;
          box-shadow: 5px 5px 0px rgba(0,0,0,0.1);
        }

        .step-number {
          background: var(--master-primary);
          color: white;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 1.25rem;
          border: 3px solid black;
          flex-shrink: 0;
        }

        .step-content h4 {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1rem;
          text-transform: uppercase;
          margin: 0 0 0.5rem 0;
          color: var(--foreground);
        }

        .step-content p {
          margin: 0;
          font-size: 0.9375rem;
          line-height: 1.5;
          color: var(--neutral-60);
          font-weight: 500;
        }

        /* CTA Button Styles */
        .secondary-cta-button:hover {
          transform: translate(-2px, -2px);
          box-shadow: 8px 8px 0px white;
          background: var(--master-success) !important;
          color: black !important;
        }

        .secondary-cta-button:active {
          transform: translate(1px, 1px);
          box-shadow: 4px 4px 0px white;
        }

        .tertiary-cta-button:hover {
          transform: translate(-2px, -2px);
          box-shadow: 8px 8px 0px white;
          background: white !important;
          color: var(--master-primary) !important;
        }

        .tertiary-cta-button:active {
          transform: translate(1px, 1px);
          box-shadow: 4px 4px 0px white;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .google-partner-section {
            padding: 5rem 1rem 4rem;
          }
          
          .info-cards-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .process-card {
            grid-column: 1 / -1 !important;
          }
          
          .process-steps {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .step {
            padding: 1.25rem;
          }
          
          .step-number {
            width: 2.5rem;
            height: 2.5rem;
            font-size: 1rem;
          }
          
          .final-cta-section {
            padding: 2rem 1rem;
          }

          .card-header {
            padding: 1.5rem;
            flex-direction: column;
            gap: 0.75rem;
          }

          .card-content {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .google-partner-section {
            padding: 4rem 0.75rem 3rem;
          }
          
          .card-header {
            padding: 1.25rem 1rem;
          }
          
          .card-icon {
            font-size: 2rem;
          }
          
          .card-title {
            font-size: 1rem;
          }

          .card-content {
            padding: 1.25rem;
          }

          .services-list li,
          .eligibility-list li {
            font-size: 0.9375rem;
            padding: 0.5rem 0;
          }

          .step {
            padding: 1rem;
            flex-direction: column;
            text-align: center;
          }

          .final-cta-section {
            padding: 1.5rem 1rem;
          }

          .final-cta-section div {
            flex-direction: column !important;
            align-items: stretch !important;
          }

          .secondary-cta-button,
          .tertiary-cta-button {
            width: 100%;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .info-card {
            border-width: 4px;
          }

          .step {
            border-width: 2px;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .info-card:hover,
          .hero-cta-button:hover,
          .secondary-cta-button:hover,
          .tertiary-cta-button:hover {
            transform: none;
          }

          @keyframes float,
          @keyframes bounce {
            0%, 100% { transform: none; }
          }
        }
      `}</style>
    </div>
  );
};

export default GrowWithGoogleBox;