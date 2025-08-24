import React from 'react';

const NightThemeTwo = () => {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        .cyber-trio-container {
          background: #000;
          position: relative;
          padding: 4rem 2rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        
        .cyber-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(235, 249, 152, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 182, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 10s linear infinite;
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .cyber-trio-text {
          font-size: 6rem;
          font-weight: 800;
          text-transform: uppercase;
          background: linear-gradient(45deg, 
            #ebf998 0%, 
            #38b6ff 50%, 
            #ff69b4 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 2;
          text-shadow: 0 0 40px rgba(235, 249, 152, 0.5);
          margin-bottom: 2rem;
        }
        
        .cyber-glitch {
          position: relative;
          display: inline-block;
        }
        
        .cyber-glitch::before,
        .cyber-glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .cyber-glitch::before {
          animation: glitch-1 2s infinite;
          color: #ebf998;
          z-index: -1;
        }
        
        .cyber-glitch::after {
          animation: glitch-2 2s infinite;
          color: #ff69b4;
          z-index: -2;
        }
        
        @keyframes glitch-1 {
          0%, 90%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          10% { clip-path: inset(40% 0 60% 0); transform: translate(-2px, 0); }
          20% { clip-path: inset(80% 0 10% 0); transform: translate(2px, 0); }
          30% { clip-path: inset(20% 0 30% 0); transform: translate(-2px, 0); }
        }
        
        @keyframes glitch-2 {
          0%, 90%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          15% { clip-path: inset(60% 0 40% 0); transform: translate(2px, 0); }
          25% { clip-path: inset(10% 0 60% 0); transform: translate(-2px, 0); }
          35% { clip-path: inset(30% 0 20% 0); transform: translate(2px, 0); }
        }
        
        .cyber-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 800px;
          margin: 2rem 0;
          position: relative;
          z-index: 2;
        }
        
        .cyber-feature {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid;
          padding: 1.5rem;
          text-align: center;
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
        }
        
        .cyber-feature.green {
          border-color: #ebf998;
          box-shadow: 0 0 20px rgba(235, 249, 152, 0.2);
        }
        
        .cyber-feature.blue {
          border-color: #38b6ff;
          box-shadow: 0 0 20px rgba(56, 182, 255, 0.2);
        }
        
        .cyber-feature.pink {
          border-color: #ff69b4;
          box-shadow: 0 0 20px rgba(255, 105, 180, 0.2);
        }
        
        .cyber-feature:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 40px currentColor;
        }
        
        .cyber-feature h3 {
          font-size: 1rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          color: white;
          letter-spacing: 2px;
        }
        
        .cyber-feature p {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          font-family: 'Courier New', monospace;
        }
        
        .cyber-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-family: 'Courier New', monospace;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
        }
      `}</style>

      <div className="cyber-trio-container">
        <div className="cyber-grid"></div>
        
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
              onClick={() => window.location.hash = '/nighttest/1'}
              className="px-3 py-2 bg-[#ff69b4] text-white text-xs font-bold uppercase hover:bg-white hover:text-[#ff69b4] transition-colors"
            >
              ← Prev
            </button>
            <button
              onClick={() => window.location.hash = '/nighttest/3'}
              className="px-3 py-2 bg-[#38b6ff] text-white text-xs font-bold uppercase hover:bg-white hover:text-[#38b6ff] transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
        
        <h1 className="cyber-trio-text">
          <span className="cyber-glitch" data-text="CURATIONS">CURATIONS</span>
        </h1>
        
        <p className="cyber-subtitle text-center">
          &gt; CYBERPUNK.EXE LOADED &lt;
        </p>
        
        <div className="cyber-features">
          <div className="cyber-feature green">
            <h3>ACTION.SYS</h3>
            <p>
              &gt; Primary actions<br/>
              &gt; Success states<br/>
              &gt; Core functions
            </p>
          </div>
          <div className="cyber-feature blue">
            <h3>TRUST.NET</h3>
            <p>
              &gt; Navigation mesh<br/>
              &gt; Reliable links<br/>
              &gt; System integrity
            </p>
          </div>
          <div className="cyber-feature pink">
            <h3>ACCENT.FX</h3>
            <p>
              &gt; Special effects<br/>
              &gt; Creative highlights<br/>
              &gt; Visual enhancement
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8 position-relative" style={{ zIndex: 2 }}>
          <p className="text-white text-sm font-mono opacity-70">
            [ CYBERPUNK THEME - GRID MATRIX WITH GLITCH EFFECTS ]
          </p>
        </div>
      </div>
    </div>
  );
};

export default NightThemeTwo;