'use client';

export default function SmokeBackground() {
  return (
    <div className="smoke-background" aria-hidden="true">

      <video
        className="smoke-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/smoke.mp4" type="video/mp4" />
      </video>

      {/* Pink / purple / cyan color treatment */}
      <div className="smoke-tint" />

    </div>
  );
}