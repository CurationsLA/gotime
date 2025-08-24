import React from 'react';

const NightThemeThree = () => {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        .aurora-container {
          background: #000;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        
        .aurora-trio {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
        }
        
        .aurora-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.4;
          filter: blur(100px);
          mix-blend-mode: screen;
        }
        
        .aurora-green {
          background: radial-gradient(ellipse at center, 
            #ebf998 0%, 
            transparent 40%
          );
          animation: aurora-dance 20s ease-in-out infinite;
        }
        
        .aurora-blue {
          background: radial-gradient(ellipse at center, 
            #38b6ff 0%, 
            transparent 40%
          );
          animation: aurora-dance 20s ease-in-out infinite;
          animation-delay: -7s;
        }
        
        .aurora-pink {
          background: radial-gradient(ellipse at center, 
            #ff69b4 0%, 
            transparent 40%
          );
          animation: aurora-dance 20s ease-in-out infinite;
          animation-delay: -14s;
        }
        
        @keyframes aurora-dance {
          0%, 100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
          25% { transform: translate(-30%, -30%) rotate(45deg) scale(1.2); }
          50% { transform: translate(30%, -30%) rotate(90deg) scale(0.8); }
          75% { transform: translate(0%, 30%) rotate(180deg) scale(1.1); }
        }
        
        .aurora-content {
          position: relative;
          z-index: 10;
          padding: 4rem;
          text-align: center;
        }
        
        .aurora-title {
          font-size: 5rem;
          font-weight: 800;
          color: white;
          text-shadow: 
            0 0 20px rgba(235, 249, 152, 0.5),
            0 0 40px rgba(56, 182, 255, 0.3),
            0 0 60px rgba(255, 105, 180, 0.2);
          margin-bottom: 2rem;
          text-transform: uppercase;
        }
        
        .aurora-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.25rem;
          margin-bottom: 3rem;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }
        
        .aurora-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .aurora-feature {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .aurora-feature:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-10px);
        }
        
        .aurora-feature.green:hover {
          box-shadow: 0 20px 40px rgba(235, 249, 152, 0.2);
          border-color: rgba(235, 249, 152, 0.3);
        }
        
        .aurora-feature.blue:hover {
          box-shadow: 0 20px 40px rgba(56, 182, 255, 0.2);
          border-color: rgba(56, 182, 255, 0.3);
        }
        
        .aurora-feature.pink:hover {
          box-shadow: 0 20px 40px rgba(255, 105, 180, 0.2);
          border-color: rgba(255, 105, 180, 0.3);
        }
        
        .aurora-feature h3 {
          font-size: 1.25rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 1rem;
          color: white;
        }
        
        .aurora-feature.green h3 {
          text-shadow: 0 0 15px #ebf998;
        }
        
        .aurora-feature.blue h3 {
          text-shadow: 0 0 15px #38b6ff;
        }
        
        .aurora-feature.pink h3 {
          text-shadow: 0 0 15px #ff69b4;
        }
        
        .aurora-feature p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          font-size: 0.9rem;
        }
        
        .stars {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, white, transparent),
            radial-gradient(2px 2px at 40px 70px, white, transparent),
            radial-gradient(1px 1px at 90px 40px, white, transparent),
            radial-gradient(1px 1px at 130px 80px, white, transparent),
            radial-gradient(2px 2px at 160px 30px, white, transparent);
          background-size: 200px 100px;
          animation: stars-twinkle 10s ease-in-out infinite;
          opacity: 0.5;
        }
        
        @keyframes stars-twinkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
      `}</style>

      <div className="aurora-container">
        <div className="stars"></div>
        <div className="aurora-trio">
          <div className="aurora-layer aurora-green"></div>
          <div className="aurora-layer aurora-blue"></div>
          <div className="aurora-layer aurora-pink"></div>
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
              onClick={() => window.location.hash = '/nighttest/2'}
              className="px-3 py-2 bg-[#ff69b4] text-white text-xs font-bold uppercase hover:bg-white hover:text-[#ff69b4] transition-colors"
            >
              ← Prev
            </button>
            <button
              onClick={() => window.location.hash = '/nighttest/4'}
              className="px-3 py-2 bg-[#38b6ff] text-white text-xs font-bold uppercase hover:bg-white hover:text-[#38b6ff] transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
        
        <div className="aurora-content">
          <h1 className="aurora-title">CURATIONS</h1>
          <p className="aurora-subtitle">
            Aurora Borealis - Dancing lights in the digital sky
          </p>
          
          <div className="aurora-features">
            <div className="aurora-feature green">
              <h3>ACTION</h3>
              <p>
                Primary actions flow like aurora streams across the interface
              </p>
            </div>
            <div className="aurora-feature blue">
              <h3>TRUST</h3>
              <p>
                Navigation elements shine with reliable, steady light
              </p>
            </div>
            <div className="aurora-feature pink">
              <h3>ACCENT</h3>
              <p>
                Creative highlights dance and shimmer like northern lights
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightThemeThree;