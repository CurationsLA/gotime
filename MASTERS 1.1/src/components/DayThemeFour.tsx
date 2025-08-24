import React from 'react';

const DayThemeFour = () => {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        .trio-mesh-bg {
          background: #fafbfc;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        
        .mesh-gradient {
          position: absolute;
          width: 150%;
          height: 150%;
          top: -25%;
          left: -25%;
          background: 
            radial-gradient(40% 40% at 20% 30%, rgba(235, 249, 152, 0.2) 0%, transparent 50%),
            radial-gradient(40% 40% at 60% 60%, rgba(56, 182, 255, 0.15) 0%, transparent 50%),
            radial-gradient(40% 40% at 80% 20%, rgba(255, 105, 180, 0.15) 0%, transparent 50%);
          animation: mesh-morph 20s ease-in-out infinite;
        }
        
        @keyframes mesh-morph {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(90deg) scale(1.1); }
          50% { transform: rotate(180deg) scale(0.9); }
          75% { transform: rotate(270deg) scale(1.05); }
        }
        
        .glass-card-trio {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(235, 249, 152, 0.3);
          border-radius: 16px;
          padding: 3rem 2rem;
          box-shadow: 
            0 8px 32px rgba(56, 182, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }
        
        .trio-button-group {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .trio-btn {
          padding: 1rem 2rem;
          border: 2px solid;
          background: white;
          font-weight: 700;
          transition: all 0.3s ease;
          cursor: pointer;
          border-radius: 8px;
        }
        
        .trio-btn.primary {
          border-color: #ebf998;
          color: #333;
        }
        
        .trio-btn.primary:hover {
          background: #ebf998;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(235, 249, 152, 0.4);
        }

        .trio-btn.secondary {
          border-color: #38b6ff;
          color: #333;
        }
        
        .trio-btn.secondary:hover {
          background: #38b6ff;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(56, 182, 255, 0.4);
        }

        .trio-btn.accent {
          border-color: #ff69b4;
          color: #333;
        }
        
        .trio-btn.accent:hover {
          background: #ff69b4;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);
        }

        .main-title {
          font-size: 4rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #333, #666);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
          padding: 4rem 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
      `}</style>

      <div className="trio-mesh-bg">
        <div className="mesh-gradient"></div>
        
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
              onClick={() => window.location.hash = '/daytest/3'}
              className="px-3 py-2 bg-[#ff69b4] text-white text-xs font-bold uppercase hover:bg-white hover:text-[#ff69b4] transition-colors"
            >
              ← Prev
            </button>
            <button
              onClick={() => window.location.hash = '/daytest/5'}
              className="px-3 py-2 bg-[#38b6ff] text-white text-xs font-bold uppercase hover:bg-white hover:text-[#38b6ff] transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
        
        <div className="content-wrapper">
          <div className="glass-card-trio">
            <h1 className="main-title">CURATIONS</h1>
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Soft Trio Experience</h2>
            <p className="text-lg text-gray-600 mb-6">
              Gentle mesh gradients create a soft, sophisticated backdrop with glassmorphic elements
            </p>
            <div className="trio-button-group">
              <button className="trio-btn primary">Action Button</button>
              <button className="trio-btn secondary">Trust Button</button>
              <button className="trio-btn accent">Accent Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayThemeFour;