import React from "react";
import Navigation from "./Navigation";

export default function LandingInfluencerUGC() {
  return (
    <>
      <Navigation currentPage="/influencer-ugc" />
      <main style={{ background: "#FDFDFC", color: "black", minHeight: "100vh" }}>
        <section className="ai-hero"
        style={{
          background: "linear-gradient(135deg, #38B6FF 0%, #FF69B4 100%)",
          color: "white",
          padding: "4rem 2rem",
          textAlign: "center"
        }}
        >
          <div className="universal-container">
            <div className="hero-icon" style={{ fontSize: "4rem", marginBottom: "1rem" }}>🤝</div>
            <h1 className="ai-hero-title">Influencer & UGC</h1>
            <p className="ai-hero-desc">
              Real creators, real results. Community programs and influencer marketing that multiplies your audience and voice.
            </p>
          </div>
        </section>
        
        <section className="influencer-ugc-features">
          <div className="features-container">
            <div className="feature-card feature-strategy">
              <h3>Strategy & Planning</h3>
              <p>We match your brand with creators who feel—and live—your story.</p>
            </div>
            <div className="feature-card feature-ugc">
              <h3>UGC Programs</h3>
              <p>Fuel organic growth with campaigns built for authentic content.</p>
            </div>
            <div className="feature-card feature-growth">
              <h3>Growth & Tracking</h3>
              <p>We track, report, and optimize every partnership for lasting value.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}