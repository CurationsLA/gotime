import React from 'react';

const NightThemeOne = () => {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        .neon-dark-bg {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #000 100%);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }
        
        .neon-trio-title {
          font-size: 6rem;
          font-weight: 800;
          text-transform: uppercase;
          text-align: center;
          background: linear-gradient(45deg, #ebf998, #38b6ff, #ff69b4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 
            0 0 20px rgba(235, 249, 152, 0.5),
            0 0 40px rgba(56, 182, 255, 0.3),
            0 0 60px rgba(255, 105, 180, 0.2);
          margin: 4rem 0;
        }
        
        .neon-cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .neon-card {
          background: rgba(0, 0, 0, 0.8);
          border: 2px solid;
          padding: 2rem;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .neon-card.green {
          border-color: #ebf998;
          box-shadow: 
            0 0 20px rgba(235, 249, 152, 0.3),
            inset 0 0 20px rgba(235, 249, 152, 0.05);
        }
        
        .neon-card.blue {
          border-color: #38b6ff;
          box-shadow: 
            0 0 20px rgba(56, 182, 255, 0.3),
            inset 0 0 20px rgba(56, 182, 255, 0.05);
        }
        
        .neon-card.pink {
          border-color: #ff69b4;
          box-shadow: 
            0 0 20px rgba(255, 105, 180, 0.3),
            inset 0 0 20px rgba(255, 105, 180, 0.05);
        }
        
        .neon-card:hover {
          transform: translateY(-10px);
          box-shadow: 
            0 0 40px rgba(235, 249, 152, 0.5),
            0 0 60px rgba(56, 182, 255, 0.3),
            0 0 80px rgba(255, 105, 180, 0.2);
        }
        
        .neon-card-title {
          font-size: 1.5rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 1rem;
          color: white;
        }
        
        .neon-card.green .neon-card-title {
          text-shadow: 0 0 10px #ebf998;
        }
        
        .neon-card.blue .neon-card-title {
          text-shadow: 0 0 10px #38b6ff;
        }
        
        .neon-card.pink .neon-card-title {
          text-shadow: 0 0 10px #ff69b4;
        }
        
        .neon-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }
        
        .neon-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          animation: float-neon 15s linear infinite;
        }
        
        .particle:nth-child(1) { background: #ebf998; left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { background: #38b6ff; left: 20%; animation-delay: 3s; }
        .particle:nth-child(3) { background: #ff69b4; left: 30%; animation-delay: 6s; }
        .particle:nth-child(4) { background: #ebf998; left: 40%; animation-delay: 9s; }
        .particle:nth-child(5) { background: #38b6ff; left: 50%; animation-delay: 12s; }
        .particle:nth-child(6) { background: #ff69b4; left: 60%; animation-delay: 2s; }
        .particle:nth-child(7) { background: #ebf998; left: 70%; animation-delay: 5s; }
        .particle:nth-child(8) { background: #38b6ff; left: 80%; animation-delay: 8s; }
        .particle:nth-child(9) { background: #ff69b4; left: 90%; animation-delay: 11s; }
        
        @keyframes float-neon {
          0% { 
            bottom: -5%; 
            opacity: 0; 
            transform: translateX(-50px) scale(0);
            box-shadow: 0 0 0px currentColor;
          }
          10% { 
            opacity: 1; 
            transform: translateX(0) scale(1);
            box-shadow: 0 0 10px currentColor;
          }
          90% { 
            opacity: 1; 
            transform: translateX(50px) scale(1);
            box-shadow: 0 0 20px currentColor;
          }
          100% { 
            top: -5%; 
            opacity: 0; 
            transform: translateX(100px) scale(0);
            box-shadow: 0 0 0px currentColor;
          }
        }
      `}</style>

      <div className="neon-dark-bg">
        <div className="neon-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
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
              onClick={() => window.location.hash = '/daytest/5'}
              className="px-3 py-2 bg-[#ebf998] text-black text-xs font-bold uppercase hover:bg-white hover:text-[#ebf998] transition-colors"
            >
              Day Themes
            </button>
            <button
              onClick={() => window.location.hash = '/nighttest/2'}
              className="px-3 py-2 bg-[#38b6ff] text-white text-xs font-bold uppercase hover:bg-white hover:text-[#38b6ff] transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
        
        <div style={{ padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
          <h1 className="neon-trio-title">CURATIONS</h1>
          <p className="text-center text-white mb-8 text-xl">
            Neon Trio - Dark theme with glowing neon effects and floating particles
          </p>
          
          <div className="neon-cards-container">
            <div className="neon-card green">
              <h3 className="neon-card-title">ACTION</h3>
              <p className="neon-description">
                Primary actions and success states glow with energetic lime-green neon
              </p>
            </div>
            <div className="neon-card blue">
              <h3 className="neon-card-title">TRUST</h3>
              <p className="neon-description">
                Navigation and reliable elements shine with trustworthy cyan-blue light
              </p>
            </div>
            <div className="neon-card pink">
              <h3 className="neon-card-title">ACCENT</h3>
              <p className="neon-description">
                Special highlights and creative touches pulse with vibrant hot pink
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightThemeOne;