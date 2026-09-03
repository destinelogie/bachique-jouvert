'use client';

export default function SmokeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#08070D]">
      {/* Primary Deep Neon Purple Smoke Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#8B3AEE]/25 blur-[120px] animate-smoke-slow" />

      {/* Secondary Vibrant Pink/Magenta Smoke Accent */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#FF2A85]/20 blur-[150px] animate-smoke-reverse" />

      {/* Center Drifting Smoke Accent */}
      <div className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#8B3AEE]/15 blur-[140px] animate-smoke-drift" />
    </div>
  );
}
