import React from 'react';

export default function DevHomeEscape() {
  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      zIndex: 1000,
      background: 'black',
      color: '#EBF998',
      padding: '8px 12px',
      borderRadius: '4px',
      fontSize: '12px',
      fontFamily: 'monospace',
      border: '2px solid #FF69B4'
    }}>
      <a 
        href="#/" 
        style={{ 
          color: '#EBF998', 
          textDecoration: 'none' 
        }}
        title="Return to Homepage"
      >
        ← HOME
      </a>
    </div>
  );
}