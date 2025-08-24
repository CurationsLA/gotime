import React from 'react';

const DayThemeOne = () => {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        .hero-trio-gradient {
          background: linear-gradient(135deg, 
            #8b5fbf 0%, 
            #ff69b4 33%, 
            #38b6ff 66%, 
            #ebf998 100%
          );
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .trio-accent-card {
          background: #fafbfc;
          border: 3px solid #ebf998;
          box-shadow: 
            6px 6px 0px #38b6ff,
            12px 12px 0px #ff69b4,
            0 0 30px rgba(235, 249, 152, 0.2);
          transition: all 0.3s ease;
          display: inline-block;
          padding: 2rem 4rem;
          margin: 2rem;
          font-size: 2rem;
          font-weight: 800;
          text-transform: uppercase;
        }
        
        .trio-accent-card:hover {
          transform: translateY(-5px) rotate(-1deg);
          box-shadow: 
            8px 8px 0px #38b6ff,
            16px 16px 0px #ff69b4,
            0 0 40px rgba(56, 182, 255, 0.3);
        }

        .hero-title {
          font-size: 6rem;
          font-weight: 800;
          text-transform: uppercase;
          color: white;
          text-shadow: 3px 3px 0px black;
          margin: 2rem 0;
          line-height: 1;
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div className="hero-trio-gradient text-center text-white" style={{ padding: '6rem 2rem' }}>
        <h1 className="hero-title">CURATIONS</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Sunrise Trio - Enhanced hero section with trio gradient integration
        </p>
        <div className="trio-accent-card">
          <span style={{ color: '#38b6ff' }}>WE</span>
          <span style={{ color: '#ebf998', margin: '0 0.5rem' }}>CURATE</span>
          <span style={{ color: '#ff69b4' }}>CULTURE</span>
        </div>
      </div>

      {/* Theme Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <div className="flex space-x-2">
          <button
            onClick={() => window.location.hash = '/themes'}
            className="px-3 py-2 bg-black text-white text-xs font-bold uppercase border border-white hover:bg-white hover:text-black transition-colors"
          >
            Gallery
          </button>
          <button
            onClick={() => window.location.hash = '/daytest/2'}
            className="px-3 py-2 bg-[#38b6ff] text-white text-xs font-bold uppercase hover:bg-white hover:text-[#38b6ff] transition-colors"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Day Theme Preview 1</h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            Sunrise Trio theme featuring dynamic gradient backgrounds and layered shadow effects
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 border border-gray-200">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ebf998' }}>ACTION</h3>
              <p>Primary CTAs and success states using lime-green energy</p>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-200">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#38b6ff' }}>TRUST</h3>
              <p>Navigation and reliable interactions with cyan-blue</p>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-200">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ff69b4' }}>ACCENT</h3>
              <p>Special highlights and creative touches with hot pink</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayThemeOne;