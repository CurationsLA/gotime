import React from 'react';

const NightThemeFour = () => {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        .holo-container {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
          padding: 2rem;
        }
        
        .holo-card {
          width: 400px;
          height: 600px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s;
          cursor: pointer;
        }
        
        .holo-card:hover {
          transform: rotateY(10deg) rotateX(-10deg);
        }
        
        .holo-face {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg,
            rgba(235, 249, 152, 0.1) 0%,
            rgba(56, 182, 255, 0.1) 33%,
            rgba(255, 105, 180, 0.1) 66%,
            rgba(235, 249, 152, 0.1) 100%
          );
          background-size: 400% 400%;
          animation: holo-shift 4s ease infinite;
          border: 2px solid;
          border-image: linear-gradient(45deg, #ebf998, #38b6ff, #ff69b4) 1;
          backdrop-filter: blur(10px);
          box-shadow: 
            0 0 30px rgba(235, 249, 152, 0.3),
            0 0 60px rgba(56, 182, 255, 0.2),
            0 0 90px rgba(255, 105, 180, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2rem;
        }
        
        @keyframes holo-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .holo-content {
          color: white;
          text-align: center;
        }
        
        .holo-title {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(90deg, #ebf998, #38b6ff, #ff69b4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }
        
        .holo-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          animation: float-up 10s linear infinite;
        }
        
        .particle:nth-child(1) { background: #ebf998; left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { background: #38b6ff; left: 30%; animation-delay: 2s; }
        .particle:nth-child(3) { background: #ff69b4; left: 50%; animation-delay: 4s; }
        .particle:nth-child(4) { background: #ebf998; left: 70%; animation-delay: 6s; }
        .particle:nth-child(5) { background: #38b6ff; left: 90%; animation-delay: 8s; }
        
        @keyframes float-up {
          0% { bottom: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { bottom: 110%; opacity: 0; }
        }
        
        .holo-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .holo-feature {
          padding: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
        }
        
        .holo-feature:hover {
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }
        
        .holo-feature h3 {
          font-size: 1rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }
        
        .holo-feature.green h3 { color: #ebf998; }
        .holo-feature.blue h3 { color: #38b6ff; }
        .holo-feature.pink h3 { color: #ff69b4; }
        
        .holo-feature p {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.4;
          margin: 0;
        }
        
        .holo-subtitle {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
          margin-bottom: 2rem;
        }
      `}</style>

      <div className="holo-container">
        {/* Theme Navigation */}
        <div className="fixed top-4 left-4 z-50">
          <div className="flex space-x-2">
            <button
              onClick={() => window.location.hash = '/'}
              className="px-3 py-2 bg-black text-white text-xs font-bold uppercase border border-white hover:bg-white hover:text-black transition-colors"
            >
              ← Home
            </button>
            <button
              onClick={() => window.location.hash = '/nighttest/3'}
              className="px-3 py-2 bg-[#ff69b4] text-white text-xs font-bold uppercase hover:bg-white hover:text-[#ff69b4] transition-colors"
            >
              ← Prev
            </button>
            <button
              onClick={() => window.location.hash = '/nighttest/5'}
              className="px-3 py-2 bg-[#38b6ff] text-white text-xs font-bold uppercase hover:bg-white hover:text-[#38b6ff] transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
        
        <div className="holo-card">
          <div className="holo-face">
            <div className="holo-particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
            <div className="holo-content">
              <h2 className="holo-title">CURATIONS</h2>
              <p className="holo-subtitle">Holographic Interface System</p>
              
              <div className="holo-features">
                <div className="holo-feature green">
                  <h3>Action-Driven Design</h3>
                  <p>Primary interactions with holographic feedback</p>
                </div>
                <div className="holo-feature blue">
                  <h3>Trust-Building Interface</h3>
                  <p>Reliable navigation with dimensional depth</p>
                </div>
                <div className="holo-feature pink">
                  <h3>Creative Accents</h3>
                  <p>Enhanced visual elements with particle effects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-8 text-white text-sm opacity-50">
          <p>[ HOLOGRAPHIC TRIO - 3D PERSPECTIVE INTERFACE ]</p>
        </div>
      </div>
    </div>
  );
};

export default NightThemeFour;