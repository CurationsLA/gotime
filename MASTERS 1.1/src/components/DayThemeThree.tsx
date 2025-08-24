import React from 'react';

const DayThemeThree = () => {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        .trio-brutalist-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 4rem 2rem;
          background: #fafbfc;
        }
        
        .brutal-trio-card {
          position: relative;
          padding: 3rem 2rem;
          background: white;
          border: 4px solid black;
          overflow: hidden;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .brutal-trio-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          opacity: 0.1;
          transition: all 0.5s ease;
        }
        
        .brutal-trio-card.green::before {
          background: radial-gradient(circle, #ebf998 0%, transparent 70%);
        }
        
        .brutal-trio-card.blue::before {
          background: radial-gradient(circle, #38b6ff 0%, transparent 70%);
        }
        
        .brutal-trio-card.pink::before {
          background: radial-gradient(circle, #ff69b4 0%, transparent 70%);
        }
        
        .brutal-trio-card:hover::before {
          opacity: 0.3;
          transform: rotate(45deg);
        }
        
        .brutal-trio-card:hover {
          transform: translateY(-5px);
          box-shadow: 
            8px 8px 0px var(--card-color),
            0 20px 40px rgba(0,0,0,0.1);
        }
        
        .brutal-trio-card.green { --card-color: #ebf998; }
        .brutal-trio-card.blue { --card-color: #38b6ff; }
        .brutal-trio-card.pink { --card-color: #ff69b4; }

        .card-title {
          font-size: 2rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 1rem;
          z-index: 2;
          position: relative;
        }

        .card-description {
          font-size: 1.1rem;
          z-index: 2;
          position: relative;
          color: #333;
        }

        .hero-section {
          background: white;
          border-bottom: 4px solid black;
          padding: 4rem 2rem;
          text-align: center;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #ebf998, #38b6ff, #ff69b4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="min-h-screen bg-gray-50">
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
              onClick={() => window.location.hash = '/daytest/2'}
              className="px-3 py-2 bg-[#ff69b4] text-white text-xs font-bold uppercase hover:bg-white hover:text-[#ff69b4] transition-colors"
            >
              ← Prev
            </button>
            <button
              onClick={() => window.location.hash = '/daytest/4'}
              className="px-3 py-2 bg-[#38b6ff] text-white text-xs font-bold uppercase hover:bg-white hover:text-[#38b6ff] transition-colors"
            >
              Next →
            </button>
          </div>
        </div>

        <div className="hero-section">
          <h1 className="hero-title">CURATIONS</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Brutalist Trio - Bold cards with radial gradient overlays on hover
          </p>
        </div>

        <div className="trio-brutalist-grid">
          <div className="brutal-trio-card green">
            <h3 className="card-title" style={{ color: '#ebf998' }}>ACTION</h3>
            <p className="card-description">Primary CTAs & Success States</p>
          </div>
          <div className="brutal-trio-card blue">
            <h3 className="card-title" style={{ color: '#38b6ff' }}>TRUST</h3>
            <p className="card-description">Navigation & Reliable Links</p>
          </div>
          <div className="brutal-trio-card pink">
            <h3 className="card-title" style={{ color: '#ff69b4' }}>ACCENT</h3>
            <p className="card-description">Special Highlights & Creative Touches</p>
          </div>
        </div>

        <div className="p-8 bg-white border-t-4 border-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Day Theme Preview 3</h2>
            <p className="text-lg text-gray-600">
              This theme emphasizes our brutalist aesthetic with sharp borders, bold shadows, and interactive hover effects that reveal subtle color gradients beneath the surface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayThemeThree;