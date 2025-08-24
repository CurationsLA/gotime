import React from 'react';

const NightThemeFive = () => {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        .laser-stage {
          background: radial-gradient(ellipse at center, #1a1a2e 0%, #000 100%);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        
        .laser-beams {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .laser {
          position: absolute;
          height: 2px;
          transform-origin: left center;
          animation: laser-sweep 8s ease-in-out infinite;
        }
        
        .laser-green {
          background: linear-gradient(90deg, transparent 0%, #ebf998 20%, #ebf998 80%, transparent 100%);
          width: 150%;
          top: 20%;
          left: -25%;
          box-shadow: 0 0 10px #ebf998, 0 0 20px #ebf998;
          animation-delay: 0s;
        }
        
        .laser-blue {
          background: linear-gradient(90deg, transparent 0%, #38b6ff 20%, #38b6ff 80%, transparent 100%);
          width: 120%;
          top: 50%;
          left: -10%;
          box-shadow: 0 0 10px #38b6ff, 0 0 20px #38b6ff;
          animation-delay: 2s;
        }
        
        .laser-pink {
          background: linear-gradient(90deg, transparent 0%, #ff69b4 20%, #ff69b4 80%, transparent 100%);
          width: 140%;
          top: 80%;
          left: -20%;
          box-shadow: 0 0 10px #ff69b4, 0 0 20px #ff69b4;
          animation-delay: 4s;
        }
        
        @keyframes laser-sweep {
          0%, 100% { transform: rotate(-30deg) scaleX(0); opacity: 0; }
          10% { transform: rotate(-30deg) scaleX(1); opacity: 1; }
          50% { transform: rotate(30deg) scaleX(1); opacity: 1; }
          90% { transform: rotate(30deg) scaleX(0); opacity: 0; }
        }
        
        .laser-content {
          position: relative;
          z-index: 10;
          padding: 4rem;
          text-align: center;
        }
        
        .laser-title {
          font-size: 6rem;
          font-weight: 800;
          text-transform: uppercase;
          position: relative;
          color: white;
          margin-bottom: 2rem;
        }
        
        .laser-title span {
          display: inline-block;
          animation: laser-pulse 2s ease-in-out infinite;
          margin: 0 0.25rem;
        }
        
        .laser-title span:nth-child(1) { 
          color: #ebf998; 
          animation-delay: 0s;
          text-shadow: 0 0 20px currentColor;
        }
        .laser-title span:nth-child(2) { 
          color: #38b6ff; 
          animation-delay: 0.2s;
          text-shadow: 0 0 20px currentColor;
        }
        .laser-title span:nth-child(3) { 
          color: #ff69b4; 
          animation-delay: 0.4s;
          text-shadow: 0 0 20px currentColor;
        }
        
        @keyframes laser-pulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.1); filter: brightness(1.5); }
        }
        
        .laser-floor {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 200px;
          background: linear-gradient(0deg, 
            rgba(235, 249, 152, 0.1) 0%, 
            transparent 100%
          );
          transform: perspective(400px) rotateX(60deg);
          transform-origin: bottom;
        }
        
        .laser-grid-floor {
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(56, 182, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 105, 180, 0.2) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-scroll 5s linear infinite;
        }
        
        @keyframes grid-scroll {
          0% { transform: translateZ(0); }
          100% { transform: translateZ(50px); }
        }
        
        .laser-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.25rem;
          margin-bottom: 3rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .laser-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .laser-feature {
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .laser-feature::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: all 0.5s ease;
        }
        
        .laser-feature:hover::before {
          left: 100%;
        }
        
        .laser-feature:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        
        .laser-feature h3 {
          font-size: 1.25rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 1rem;
          color: white;
          position: relative;
          z-index: 1;
        }
        
        .laser-feature.green h3 {
          text-shadow: 0 0 15px #ebf998;
        }
        
        .laser-feature.blue h3 {
          text-shadow: 0 0 15px #38b6ff;
        }
        
        .laser-feature.pink h3 {
          text-shadow: 0 0 15px #ff69b4;
        }
        
        .laser-feature p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          font-size: 0.9rem;
          position: relative;
          z-index: 1;
        }
      `}</style>

      <div className="laser-stage">
        <div className="laser-beams">
          <div className="laser laser-green"></div>
          <div className="laser laser-blue"></div>
          <div className="laser laser-pink"></div>
        </div>
        <div className="laser-floor">
          <div className="laser-grid-floor"></div>
        </div>
        
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
              onClick={() => window.location.hash = '/nighttest/4'}
              className="px-3 py-2 bg-[#ff69b4] text-white text-xs font-bold uppercase hover:bg-white hover:text-[#ff69b4] transition-colors"
            >
              ← Prev
            </button>
            <button
              onClick={() => window.location.hash = '/daytest/1'}
              className="px-3 py-2 bg-[#ebf998] text-black text-xs font-bold uppercase hover:bg-white hover:text-[#ebf998] transition-colors"
            >
              Day Themes →
            </button>
          </div>
        </div>
        
        <div className="laser-content">
          <h1 className="laser-title">
            <span>CUR</span>
            <span>ATI</span>
            <span>ONS</span>
          </h1>
          <p className="laser-subtitle">
            Laser Symphony - Dynamic beams with grid floor projection
          </p>
          
          <div className="laser-features">
            <div className="laser-feature green">
              <h3>ACTION</h3>
              <p>
                Energetic lime lasers sweep across primary action zones
              </p>
            </div>
            <div className="laser-feature blue">
              <h3>TRUST</h3>
              <p>
                Steady cyan beams illuminate navigation pathways
              </p>
            </div>
            <div className="laser-feature pink">
              <h3>ACCENT</h3>
              <p>
                Vibrant pink lasers highlight creative elements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightThemeFive;