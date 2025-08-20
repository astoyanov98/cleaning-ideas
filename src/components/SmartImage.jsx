'use client';
import React from 'react';
export default function SmartImage({ src, alt, className }) {
  const [failed, setFailed] = React.useState(false);
  return (
    <div className={`relative ${className ?? ''}`}>
      {!failed ? (
        <img src={src} alt={alt} loading="lazy" referrerPolicy="no-referrer" className="absolute inset-0 h-full w-full object-cover" onError={() => setFailed(true)} />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_20%_20%,#e0f2fe,transparent_40%),radial-gradient(circle_at_80%_0%,#bfdbfe,transparent_35%),linear-gradient(180deg,white,white)]">
          <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white/80 px-3 py-2 text-sm text-neutral-500 shadow-sm">
            <span>Image unavailable</span>
          </div>
        </div>
      )}
    </div>
  );
}