import React from 'react';

const DayThemeTwo = () => {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        .universal-enhanced {
          background: linear-gradient(135deg, 
            #fafbfc 0%, 
            rgba(235, 249, 152, 0.02) 33%,
            rgba(56, 182, 255, 0.01) 66%, 
            rgba(255, 105, 180, 0.01) 100%
          );
        }
        
        .floating-trio-orbs {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: float-gentle 20s infinite;
        }
        
        .orb-green { 
          background: #ebf998; 
          width: 300px; 
          height: 300px;
          top: 10%; 
          left: 5%;
        }
        
        .orb-blue { 
          background: #38b6ff; 
          width: 250px; 
          height: 250px;
          top: 50%; 
          right: 10%;
          animation-delay: -5s;
        }
        
        .orb-pink { 
          background: #ff69b4; 
          width: 200px; 
          height: 200px;
          bottom: 20%; 
          left: 30%;
          animation-delay: -10s;
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .content-section {
          position: relative;
          z-index: 10;
          padding: 4rem 2rem;
          text-align: center;
        }

        .main-title {
          font-size: 5rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #222;
          margin: 2rem 0;
          line-height: 1;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 3rem;
          border-radius: 20px;
          margin: 2rem auto;
          max-width: 600px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <div className="universal-enhanced min-h-screen" style={{ position: 'relative' }}>
        <div className="floating-trio-orbs">
          <div className="orb orb-green"></div>
          <div className="orb orb-blue"></div>
          <div className="orb orb-pink"></div>
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
              onClick={() => window.location.hash = '/daytest/1'}
              className="px-3 py-2 bg-[#ff69b4] text-white text-xs font-bold uppercase hover:bg-white hover:text-[#ff69b4] transition-colors"
            >
              ← Prev
            </button>
            <button
              onClick={() => window.location.hash = '/daytest/3'}
              className="px-3 py-2 bg-[#38b6ff] text-white text-xs font-bold uppercase hover:bg-white hover:text-[#38b6ff] transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
        
        <div className="content-section">
          <h1 className="main-title">CURATIONS</h1>
          <div className="glass-card">
            <h2 className="text-2xl font-bold mb-4">Universal Canvas</h2>
            <p className="text-lg mb-6">
              Subtle trio colors floating gently in the background while maintaining our clean universal canvas aesthetic
            </p>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-white rounded-lg shadow">
                <div className="w-4 h-4 rounded-full mx-auto mb-2" style={{ backgroundColor: '#ebf998' }}></div>
                <strong>Action</strong>
              </div>
              <div className="p-3 bg-white rounded-lg shadow">
                <div className="w-4 h-4 rounded-full mx-auto mb-2" style={{ backgroundColor: '#38b6ff' }}></div>
                <strong>Trust</strong>
              </div>
              <div className="p-3 bg-white rounded-lg shadow">
                <div className="w-4 h-4 rounded-full mx-auto mb-2" style={{ backgroundColor: '#ff69b4' }}></div>
                <strong>Accent</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayThemeTwo;