import React from "react";
import Navigation from "./Navigation";

export default function LandingBrandingToolkit() {
  return (
    <>
      <Navigation currentPage="/branding-toolkit" />
      <main style={{ background: "#FDFDFC", color: "black", minHeight: "100vh" }}>
        {/* Hero Section */}
        <section className="ai-hero">
          <div className="universal-container">
            <div className="ai-hero-icon" style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎨</div>
            <h1 className="ai-hero-title">BRANDING & DESIGN</h1>
            <p className="ai-hero-desc">
              Brutal aesthetics that cut through digital noise. Visual identity design that commands attention 
              and builds cultural authority in the attention economy.
            </p>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="design-philosophy-section">
          <div className="design-philosophy-content">
            <h2 className="philosophy-title">DESIGN PHILOSOPHY: BRUTAL CLARITY</h2>
            <p className="philosophy-description">
              In a world oversaturated with polished perfection, we embrace the raw power of brutalist design. 
              Bold borders, unapologetic colors, and typography that demands attention.
            </p>
            <div className="philosophy-grid">
              <div className="philosophy-card">
                <h3>ANTI-MINIMALISM</h3>
                <p>Maximum impact through bold visual hierarchy</p>
              </div>
              <div className="philosophy-card">
                <h3>DIGITAL BRUTALISM</h3>
                <p>Raw edges and unpolished authenticity</p>
              </div>
              <div className="philosophy-card">
                <h3>CULTURAL DISRUPTION</h3>
                <p>Design that stops the scroll and starts conversations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Color System */}
        <section style={{ padding: "4rem 2rem", background: "#FDFDFC" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 900, textAlign: "center", marginBottom: "3rem", textTransform: "uppercase" }}>
              OUR COLOR SYSTEM
            </h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              <div style={{ 
                background: "white", 
                border: "4px solid black", 
                padding: "2rem",
                boxShadow: "8px 8px 0px black",
                transition: "all 0.3s ease"
              }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1rem", textTransform: "uppercase", color: "#FF69B4" }}>
                  PRIMARY PALETTE
                </h3>
                <div style={{ marginBottom: "1rem" }}>
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    background: "#FF69B4", 
                    border: "4px solid black", 
                    display: "inline-block", 
                    margin: "0.25rem" 
                  }}></div>
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    background: "#38B6FF", 
                    border: "4px solid black", 
                    display: "inline-block", 
                    margin: "0.25rem" 
                  }}></div>
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    background: "#EBF998", 
                    border: "4px solid black", 
                    display: "inline-block", 
                    margin: "0.25rem" 
                  }}></div>
                </div>
                <p style={{ lineHeight: "1.8" }}>
                  Our core trio: Hot Pink (#FF69B4), Electric Blue (#38B6FF), and Energetic Lime (#EBF998). 
                  Colors that vibrate with digital energy.
                </p>
              </div>

              <div style={{ 
                background: "white", 
                border: "4px solid black", 
                padding: "2rem",
                boxShadow: "8px 8px 0px black"
              }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1rem", textTransform: "uppercase", color: "#222222" }}>
                  NEUTRAL FOUNDATION
                </h3>
                <div style={{ marginBottom: "1rem" }}>
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    background: "#FDFDFC", 
                    border: "4px solid black", 
                    display: "inline-block", 
                    margin: "0.25rem" 
                  }}></div>
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    background: "#222222", 
                    border: "4px solid black", 
                    display: "inline-block", 
                    margin: "0.25rem" 
                  }}></div>
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    background: "#000000", 
                    border: "4px solid black", 
                    display: "inline-block", 
                    margin: "0.25rem" 
                  }}></div>
                </div>
                <p style={{ lineHeight: "1.8" }}>
                  Clean whites, professional grays, and stark blacks create the foundation 
                  that makes our vibrant colors pop with maximum contrast.
                </p>
              </div>

              <div style={{ 
                background: "white", 
                border: "4px solid black", 
                padding: "2rem",
                boxShadow: "8px 8px 0px black"
              }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1rem", textTransform: "uppercase", color: "#FF69B4" }}>
                  COLOR PSYCHOLOGY
                </h3>
                <ul style={{ lineHeight: "1.8", listStyle: "none", paddingLeft: "0" }}>
                  <li style={{ marginBottom: "0.5rem" }}>🔴 Pink: Innovation, creativity, disruption</li>
                  <li style={{ marginBottom: "0.5rem" }}>🔵 Blue: Trust, authority, digital mastery</li>
                  <li style={{ marginBottom: "0.5rem" }}>🟢 Lime: Growth, success, viral energy</li>
                  <li>⚫ Black: Premium quality, serious business</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Typography System */}
        <section style={{ padding: "4rem 2rem", background: "black" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 900, textAlign: "center", marginBottom: "3rem", textTransform: "uppercase", color: "white" }}>
              TYPOGRAPHY THAT COMMANDS
            </h2>
            
            <div style={{ 
              background: "black",
              color: "white",
              padding: "2rem",
              margin: "1rem 0",
              border: "4px solid #FF69B4",
              position: "relative"
            }}>
              <h1 style={{ fontSize: "4rem", fontWeight: 900, textTransform: "uppercase", marginBottom: "1rem" }}>HEADLINES</h1>
              <p style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#EBF998" }}>
                Poppins creates the perfect balance of technical precision and creative rebellion.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                Our primary font foundation ensures perfect readability across all digital platforms while 
                maintaining the bold, impactful aesthetic that defines our brutal approach to design.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
              <div style={{ background: "white", color: "black", padding: "2rem", border: "4px solid #38B6FF" }}>
                <h3 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "1rem" }}>DISPLAY TYPE</h3>
                <p style={{ fontSize: "0.875rem" }}>900 weight, ALL CAPS, maximum impact</p>
              </div>
              <div style={{ background: "white", color: "black", padding: "2rem", border: "4px solid #FF69B4" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>Heading Type</h3>
                <p style={{ fontSize: "0.875rem" }}>800 weight, sentence case, strong hierarchy</p>
              </div>
              <div style={{ background: "white", color: "black", padding: "2rem", border: "4px solid #EBF998" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1rem" }}>Body Type</h3>
                <p style={{ fontSize: "0.875rem" }}>400-700 weight, readable, functional</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ background: "black", padding: "4rem 2rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "white", marginBottom: "2rem", textTransform: "uppercase" }}>
            READY TO DISRUPT WITH DESIGN?
          </h2>
          <p style={{ fontSize: "1.25rem", color: "white", marginBottom: "2rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
            Let's create a visual identity that commands attention and builds cultural authority.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a 
              href="mailto:hello@curations.cc" 
              style={{ 
                background: "#FF69B4", 
                color: "white", 
                padding: "1rem 2rem", 
                fontWeight: 900, 
                textTransform: "uppercase", 
                border: "4px solid #FF69B4", 
                textDecoration: "none", 
                display: "inline-block",
                boxShadow: "8px 8px 0px black"
              }}
            >
              START DESIGN PROJECT
            </a>
            <a 
              href="#outbox" 
              style={{ 
                background: "white", 
                color: "black", 
                padding: "1rem 2rem", 
                fontWeight: 900, 
                textTransform: "uppercase", 
                border: "4px solid white", 
                textDecoration: "none", 
                display: "inline-block",
                boxShadow: "8px 8px 0px black"
              }}
            >
              VIEW PORTFOLIO
            </a>
          </div>
        </section>

        <style jsx>{`
          @keyframes design-flow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>
      </main>
    </>
  );
}