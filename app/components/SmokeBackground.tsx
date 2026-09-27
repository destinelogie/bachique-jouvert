
'use client';

export default function SmokeBackground() {
  return (
    <div
      className="smoke-background"
      aria-hidden="true"
    >
      {/* Deep atmospheric haze */}
      <div className="smoke-haze smoke-haze-1" />
      <div className="smoke-haze smoke-haze-2" />

      {/* Main billowing smoke */}
      <div className="smoke-cloud smoke-cloud-1">
        <div className="smoke-puff puff-1" />
        <div className="smoke-puff puff-2" />
        <div className="smoke-puff puff-3" />
      </div>

      <div className="smoke-cloud smoke-cloud-2">
        <div className="smoke-puff puff-4" />
        <div className="smoke-puff puff-5" />
        <div className="smoke-puff puff-6" />
      </div>

      <div className="smoke-cloud smoke-cloud-3">
        <div className="smoke-puff puff-7" />
        <div className="smoke-puff puff-8" />
      </div>

      {/* Fine atmospheric mist */}
      <div className="smoke-mist" />
    </div>
  );
}
