import React, { useState, useEffect } from "react";
import Navigation from './Navigation';

import Footer from './Footer'; // Import the Footer component
const OutboxMeter = () => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('CONNECTING');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          // Update text based on progress
          if (prev < 25) setText('CONNECTING');
          else if (prev < 50) setText('PARTNERSHIPS');
          else if (prev < 75) setText('COLLABORATING');
          else if (prev < 95) setText('DELIVERING');
          else setText('100% CONNECTED');
          
          return prev + 2;
        }
        return 100;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ maxWidth: 700, margin: "0 auto 3rem" }}>
      <div style={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        border: "4px solid #000000",
        boxShadow: "8px 8px 0px #000000",
        padding: "2.5rem",
      }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h3 style={{
            fontFamily: "Oswald, Inter, system-ui, sans-serif",
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#222222",
            marginBottom: "0.5rem",
            textTransform: "uppercase",
          }}>
            Partnership Portal
          </h3>
          <p style={{
            color: "#475569",
            fontSize: "1rem",
            fontWeight: 500,
            margin: 0,
          }}>
            Building connections, one collaboration at a time
          </p>
        </div>
        
        <div>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.875rem",
            color: "#475569",
            marginBottom: "0.5rem",
            fontWeight: 600,
          }}>
            <span>Partnership Status</span>
            <span>{progress}%</span>
          </div>
          
          <div style={{
            width: "100%",
            background: "#E2E8F0",
            border: "2px solid #000000",
            height: "12px",
            marginBottom: "1.5rem",
            overflow: "hidden",
            position: "relative",
          }}>
            <div 
              style={{
                height: "100%",
                background: `linear-gradient(90deg, ${progress < 33 ? '#FF69B4' : progress < 66 ? '#38B6FF' : '#EBF998'} 0%, ${progress < 33 ? '#38B6FF' : progress < 66 ? '#EBF998' : '#FF69B4'} 100%)`,
                width: `${progress}%`,
                transition: "all 0.1s ease-out",
                position: "relative",
              }}
            >
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                animation: progress < 100 ? "pulse 2s ease-in-out infinite" : "none",
              }}></div>
            </div>
          </div>
          
          <div style={{ textAlign: "center" }}>
            <span style={{
              fontFamily: "Oswald, Inter, system-ui, sans-serif",
              fontSize: "1.125rem",
              fontWeight: 800,
              color: progress < 33 ? '#FF69B4' : progress < 66 ? '#38B6FF' : '#EBF998',
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}>
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Outbox() {
  return (
    <main style={{ 
      background: "#F8FAFC", 
      minHeight: "100vh", 
      color: "#222222", 
      fontFamily: 'Inter, system-ui, sans-serif' 
    }}>
      <Navigation currentPage="/outbox" />
      
      {/* Hero Section - AI Discovery Style */}
      <section className="ai-hero">
        <div className="universal-container">
          {/* Icon with brand colors */}
          <div className="ai-hero-icon">
            📤
          </div>
          
          <h1 className="ai-hero-title">
            OUTBOX
          </h1>
          
          <p className="ai-hero-desc">
            Your hub for collaboration, inquiries, and partnerships. Find 
            answers, submit proposals, and connect with the CURATIONS 
            ecosystem.
          </p>
        </div>
      </section>

      {/* Partnership Meter */}
      <section style={{ padding: "0 2rem" }}>
        <OutboxMeter />
      </section>

      {/* Content Section */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem 4rem",
        }}
      >
        <div style={{ 
          display: "grid", 
          gap: "3rem", 
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          marginBottom: "4rem"
        }}>
          {/* FAQ Section */}
          <div style={{
            background: "#FFFFFF",
            border: "4px solid #000000",
            boxShadow: "8px 8px 0px #000000",
            padding: "2.5rem",
          }}>
            <h3 style={{ 
              fontFamily: "Oswald, Inter, system-ui, sans-serif",
              fontWeight: 800, 
              fontSize: "1.5rem",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
              color: "#222222"
            }}>
              Frequently Asked Questions
            </h3>
            <ul style={{ 
              margin: 0, 
              padding: 0, 
              listStyle: "none", 
              fontWeight: 500,
              lineHeight: 1.8,
              color: "#475569"
            }}>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: "0", color: "#FF69B4", fontWeight: 800 }}>•</span>
                What are your service costs?
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: "0", color: "#38B6FF", fontWeight: 800 }}>•</span>
                How does the AI Discovery process work?
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: "0", color: "#EBF998", fontWeight: 800 }}>•</span>
                Can I partner or collaborate on a campaign?
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: "0", color: "#FF69B4", fontWeight: 800 }}>•</span>
                What is the Youth Curator Movement?
              </li>
            </ul>
          </div>

          {/* Partnership Form */}
          <div style={{
            background: "#FFFFFF",
            border: "4px solid #000000",
            boxShadow: "8px 8px 0px #000000",
            padding: "2.5rem",
          }}>
            <h3 style={{ 
              fontFamily: "Oswald, Inter, system-ui, sans-serif",
              fontWeight: 800, 
              fontSize: "1.5rem",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
              color: "#222222"
            }}>
              Partnership Pitch
            </h3>
            <form>
              <input
                placeholder="Your Name or Company"
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                  padding: "1rem",
                  border: "2px solid #E2E8F0",
                  fontSize: "1rem",
                  fontFamily: "Inter, system-ui, sans-serif",
                  backgroundColor: "#F8FAFC",
                  transition: "border-color 0.2s ease",
                  outline: "none",
                }}
                onFocus={(e) => e.target.style.borderColor = "#38B6FF"}
                onBlur={(e) => e.target.style.borderColor = "#E2E8F0"}
              />
              <input
                placeholder="Contact Email"
                type="email"
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                  padding: "1rem",
                  border: "2px solid #E2E8F0",
                  fontSize: "1rem",
                  fontFamily: "Inter, system-ui, sans-serif",
                  backgroundColor: "#F8FAFC",
                  transition: "border-color 0.2s ease",
                  outline: "none",
                }}
                onFocus={(e) => e.target.style.borderColor = "#38B6FF"}
                onBlur={(e) => e.target.style.borderColor = "#E2E8F0"}
              />
              <textarea
                placeholder="Tell us your idea…"
                rows={4}
                style={{
                  width: "100%",
                  marginBottom: "1.5rem",
                  padding: "1rem",
                  border: "2px solid #E2E8F0",
                  fontSize: "1rem",
                  fontFamily: "Inter, system-ui, sans-serif",
                  backgroundColor: "#F8FAFC",
                  transition: "border-color 0.2s ease",
                  outline: "none",
                  resize: "vertical",
                  minHeight: "120px",
                }}
                onFocus={(e) => e.target.style.borderColor = "#38B6FF"}
                onBlur={(e) => e.target.style.borderColor = "#E2E8F0"}
              />
              <button
                type="button"
                style={{
                  width: "100%",
                  background: "#FF69B4",
                  color: "#FFFFFF",
                  fontFamily: "Oswald, Inter, system-ui, sans-serif",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  border: "4px solid #000000",
                  padding: "1.25rem",
                  fontSize: "1rem",
                  letterSpacing: "0.5px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: "4px 4px 0px #000000",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translate(-2px, -2px)";
                  e.target.style.boxShadow = "6px 6px 0px #000000";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translate(0, 0)";
                  e.target.style.boxShadow = "4px 4px 0px #000000";
                }}
              >
                Submit Pitch
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div style={{
          textAlign: "center",
          padding: "3rem 0",
          borderTop: "1px solid #E2E8F0",
        }}>
          <p style={{
            fontSize: "1rem",
            color: "#475569",
            margin: "0 0 1rem 0",
            fontWeight: 500,
          }}>
            Ready to collaborate? Reach out directly:
          </p>
          <a 
            href="mailto:hello@curations.cc" 
            style={{
              color: "#FF69B4",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1.125rem",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => e.target.style.color = "#38B6FF"}
            onMouseLeave={(e) => e.target.style.color = "#FF69B4"}
          >
            hello@curations.cc
          </a>
        </div>
      </section>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        @media (max-width: 768px) {
          section:first-of-type {
            padding: 8rem 1rem 6rem !important;
          }
          
          section:nth-of-type(2) {
            padding: 0 1rem !important;
          }
          
          section:nth-of-type(3) {
            padding: 0 1rem 3rem !important;
          }
          
          section:nth-of-type(3) > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          h1 {
            font-size: clamp(2.5rem, 12vw, 4rem) !important;
          }
        }
      `}</style>
    </main>
      <Footer />
  );
}