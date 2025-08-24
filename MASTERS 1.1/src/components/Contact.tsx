import React from 'react';
import Navigation from './Navigation';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Navigation currentPage="/contact" />
      <div className="pt-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-black uppercase mb-8">Let's Curate Culture Together</h1>
          <div className="curations-card p-8">
            <p className="text-xl mb-8">Ready to transform your brand into a cultural force?</p>
            <div className="space-y-6">
              <div>
                <strong>Email:</strong> hello@curations.agency
              </div>
              <div>
                <strong>Phone:</strong> (555) 123-CURE
              </div>
              <div>
                <strong>Address:</strong> Cultural District, Creative City, USA
              </div>
            </div>
            <div className="mt-8">
              <a href="#/" className="curations-button">← BACK TO HOME</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}