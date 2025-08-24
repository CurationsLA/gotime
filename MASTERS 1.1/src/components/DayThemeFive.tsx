import React from 'react';

const DayThemeFive = () => {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        .trio-playground {
          background: #fafbfc;
          padding: 4rem 2rem;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        
        .trio-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: linear-gradient(90deg, 
            #ebf998 0%, 
            #38b6ff 33%, 
            #ff69b4 66%, 
            #ebf998 100%
          );
          background-size: 200% 100%;
          animation: wave-flow 4s linear infinite;
          clip-path: polygon(
            0 50%, 
            10% 20%, 20% 50%, 30% 20%, 
            40% 50%, 50% 20%, 60% 50%, 
            70% 20%, 80% 50%, 90% 20%, 
            100% 50%, 100% 100%, 0 100%
          );
        }
        
        @keyframes wave-flow {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        
        .trio-cards-stack {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0;
          margin: 3rem 0;
          position: relative;
          z-index: 10;
        }
        
        .stack-card {
          width: 200px;
          height: 300px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-transform: uppercase;
          color: white;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .stack-card:nth-child(1) {
          background: linear-gradient(135deg, #ebf998 0%, #d4e641 100%);
          z-index: 3;
          transform: rotate(-5deg);
        }
        
        .stack-card:nth-child(2) {
          background: linear-gradient(135deg, #38b6ff 0%, #0099ff 100%);
          z-index: 2;
          margin-left: -50px;
        }
        
        .stack-card:nth-child(3) {
          background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
          z-index: 1;
          transform: rotate(5deg);
          margin-left: -50px;
        }
        
        .stack-card:hover {
          transform: translateY(-20px) rotate(0deg) scale(1.05);
          z-index: 10;
          margin-left: 0;
          margin-right: 0;
        }

        .main-title {
          font-size: 5rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 2rem;
          color: #333;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .subtitle {
          font-size: 1.25rem;
          color: #666;
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
          z-index: 10;
        }
      `}</style>

      <div className="trio-playground">
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
              onClick={() => window.location.hash = '/daytest/4'}
              className="px-3 py-2 bg-[#ff69b4] text-white text-xs font-bold uppercase hover:bg-white hover:text-[#ff69b4] transition-colors"
            >
              ← Prev
            </button>
            <button
              onClick={() => window.location.hash = '/nighttest/1'}
              className="px-3 py-2 bg-[#000] text-white text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors"
            >
              Night Themes →
            </button>
          </div>
        </div>
        
        <h1 className="main-title">CURATIONS</h1>
        <p className="subtitle">Playful Trio - Interactive stacked cards with flowing wave animation</p>
        
        <div className="trio-cards-stack">
          <div className="stack-card">ACTION</div>
          <div className="stack-card">TRUST</div>
          <div className="stack-card">ACCENT</div>
        </div>
        
        <div className="text-center text-gray-600 max-w-2xl mx-auto">
          <p className="text-lg mb-4">
            This playful approach showcases our trio colors in an interactive, engaging way. 
            Hover over each card to see them come alive!
          </p>
          <p>
            The flowing wave at the bottom represents the continuous movement and energy of our brand.
          </p>
        </div>
        
        <div className="trio-wave"></div>
      </div>
    </div>
  );
};

export default DayThemeFive;