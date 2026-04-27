import React from 'react';
import Image from 'next/image';

const shimmer = `
<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f0f9ff;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#e0f2fe;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f0f9ff;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const blurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer)}`;

export default function SmartImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  fetchPriority,
}) {
  const [failed, setFailed] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const isExternal = typeof src === 'string' && src.startsWith('http');
  
  return (
    <div className={`relative ${className ?? ''}`}>
      {/* Background placeholder */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-sky-50 via-slate-50 to-sky-50 transition-opacity duration-500 ${
          loaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          fetchPriority={fetchPriority}
          placeholder={isExternal ? undefined : "blur"}
          blurDataURL={isExternal ? undefined : blurDataURL}
          unoptimized={isExternal}
          referrerPolicy="no-referrer"
          className={`h-full w-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName ?? 'object-cover'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-sky-50 via-slate-50 to-sky-50">
          <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white/80 px-3 py-2 text-sm text-neutral-500 shadow-sm">
            <span>Снимката не е налична</span>
          </div>
        </div>
      )}
    </div>
  );
}
