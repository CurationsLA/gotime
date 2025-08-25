import React from 'react';
import DraftNav from './DraftNav';

export default function DevDraftNavGate() {
  // Check if we're in development environment
  const isDevelopment = import.meta.env.DEV;
  
  // Check if we should show draft navigation (from environment variable)
  const showDraftNav = import.meta.env.VITE_SHOW_DRAFT_NAV;
  
  // Don't show on production domains
  const isProductionDomain = typeof window !== 'undefined' && 
    (window.location.hostname === 'curations.cc' || 
     window.location.hostname === 'www.curations.cc');
  
  // Only show draft navigation in development and not on production domains
  const shouldShowNav = isDevelopment && showDraftNav && !isProductionDomain;
  
  return shouldShowNav ? <DraftNav /> : null;
}