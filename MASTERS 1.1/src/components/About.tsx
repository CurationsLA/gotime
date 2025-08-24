import React from 'react';
import Navigation from './Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Navigation currentPage="/about" />
      <div className="pt-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-black uppercase mb-8">About Curations</h1>
          <div className="curations-card p-8 mb-8">
            <p className="text-lg leading-relaxed">
              We don't just market brands—we curate culture. At Curations, we believe every brand has the potential to become a cultural force, not just a business entity.
            </p>
          </div>
          <div className="curations-card p-8">
            <h2 className="text-2xl font-black uppercase mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To bridge the gap between brands and culture, creating authentic connections that drive both business results and positive cultural impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}