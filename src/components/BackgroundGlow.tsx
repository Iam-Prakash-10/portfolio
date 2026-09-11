import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Top Center Glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent blur-[120px] rounded-full pointer-events-none"
      />

      {/* Side Glow Left */}
      <div
        className="absolute top-[40%] -left-48 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none"
      />

      {/* Side Glow Right */}
      <div
        className="absolute top-[70%] -right-48 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"
      />
    </div>
  );
};
