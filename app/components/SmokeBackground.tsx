'use client';

import React from 'react';

export default function SmokeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#08070D]">
      {/* Deep Vibrant Purple Smoke Cloud - Top Left */}
      <div 
        className="absolute -top-20 -left-20 w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] rounded-full bg-[#8B3AEE]/40 blur-[120px] animate-pulse"
        style={{ animationDuration: '6s' }}
      />

      {/* Hot Magenta/Pink Smoke Accent - Bottom Right */}
      <div 
        className="absolute -bottom-20 -right-20 w-[85vw] h-[85vw] max-w-[750px] max-h-[750px] rounded-full bg-[#FF2A85]/35 blur-[140px] animate-pulse"
        style={{ animationDuration: '8s' }}
      />

      {/* Electric Purple Center Drift */}
      <div 
        className="absolute top-1/3 left-1/4 w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full bg-[#8B3AEE]/25 blur-[100px] animate-ping"
        style={{ animationDuration: '12s' }}
      />
    </div>
  );
}
