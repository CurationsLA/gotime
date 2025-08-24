import React from 'react';
import CurationsLogo, { AtomIcon } from './CurationsLogo';

export default function LogoShowcase() {
  return (
    <div className="universal-section" style={{ background: 'var(--background)' }}>
      <div className="universal-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black uppercase mb-4">
            OUR <span style={{ color: 'var(--master-primary)' }}>VISUAL</span> IDENTITY
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            The atom symbol represents our commitment to breaking down complex challenges into fundamental elements, then rebuilding them into something powerful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Primary Logo */}
          <div className="stepped-brutal bg-white p-6 text-center">
            <h3 className="font-black uppercase text-sm mb-4" style={{ color: 'var(--master-primary)' }}>
              Primary Logo
            </h3>
            <CurationsLogo variant="gradient" size="lg" animate={true} />
            <p className="text-sm mt-4 text-gray-600">
              Full logo with gradient atom icon for digital applications
            </p>
          </div>

          {/* Logo Variations */}
          <div className="stepped-brutal bg-black p-6 text-center">
            <h3 className="font-black uppercase text-sm mb-4 text-white">
              White Version
            </h3>
            <CurationsLogo variant="white" size="lg" />
            <p className="text-sm mt-4 text-gray-300">
              For dark backgrounds and premium applications
            </p>
          </div>

          <div className="stepped-brutal p-6 text-center" style={{ background: 'var(--master-success)' }}>
            <h3 className="font-black uppercase text-sm mb-4">
              Black Version
            </h3>
            <CurationsLogo variant="black" size="lg" />
            <p className="text-sm mt-4 text-black opacity-70">
              For light backgrounds and print materials
            </p>
          </div>

          {/* Atom Icons Only */}
          <div className="stepped-brutal bg-white p-6 text-center border-l-8" style={{ borderLeftColor: 'var(--master-primary)' }}>
            <h3 className="font-black uppercase text-sm mb-4" style={{ color: 'var(--master-primary)' }}>
              Icon System
            </h3>
            <div className="flex justify-center gap-4 mb-4">
              <AtomIcon variant="gradient" size="md" animate={true} />
              <AtomIcon variant="black" size="md" />
              <AtomIcon variant="white" size="md" className="bg-black p-1 rounded" />
            </div>
            <p className="text-sm text-gray-600">
              Flexible atom icons for badges, favicons, and micro-interactions
            </p>
          </div>

          {/* Brand Elements */}
          <div className="stepped-brutal p-6 text-center" style={{ 
            background: 'linear-gradient(135deg, var(--master-primary) 0%, var(--master-accent) 50%, var(--master-success) 100%)' 
          }}>
            <h3 className="font-black uppercase text-sm mb-4 text-white">
              Brand Elements
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <AtomIcon variant="white" size="sm" />
                <span className="text-white font-bold">Atomic Structure</span>
              </div>
              <div className="text-white text-xs opacity-80">
                Science + Creativity + Culture
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="stepped-brutal bg-white p-6">
            <h3 className="font-black uppercase text-sm mb-4" style={{ color: 'var(--master-accent)' }}>
              Usage Guidelines
            </h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <AtomIcon variant="gradient" size="sm" />
                <span>Minimum size: 24px</span>
              </li>
              <li className="flex items-center gap-2">
                <AtomIcon variant="black" size="sm" />
                <span>Clear space: 1x atom width</span>
              </li>
              <li className="flex items-center gap-2">
                <AtomIcon variant="gradient" size="sm" />
                <span>Always maintain proportions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Creative Applications */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-center mb-8 uppercase">
            <span style={{ color: 'var(--master-accent)' }}>Creative</span> Applications
          </h3>
          
          <div className="grid md:grid-cols-4 gap-4">
            {/* Business Cards */}
            <div className="stepped-brutal bg-black p-4 text-center">
              <AtomIcon variant="white" size="md" className="mb-2" />
              <div className="text-white text-xs font-bold">BUSINESS CARDS</div>
            </div>

            {/* Letterhead */}
            <div className="stepped-brutal bg-white p-4 text-center border-t-4" style={{ borderTopColor: 'var(--master-primary)' }}>
              <AtomIcon variant="gradient" size="md" className="mb-2" />
              <div className="text-black text-xs font-bold">LETTERHEAD</div>
            </div>

            {/* Social Media */}
            <div className="stepped-brutal p-4 text-center" style={{ background: 'var(--master-success)' }}>
              <AtomIcon variant="black" size="md" className="mb-2" />
              <div className="text-black text-xs font-bold">SOCIAL MEDIA</div>
            </div>

            {/* Web Favicon */}
            <div className="stepped-brutal p-4 text-center" style={{ background: 'var(--master-accent)' }}>
              <AtomIcon variant="white" size="md" className="mb-2" />
              <div className="text-white text-xs font-bold">WEB FAVICON</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}