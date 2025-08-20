'use client';
import React from 'react';
import {useRouter} from 'next/router';

export default function LangSwitch(){
  const router = useRouter();
  const {asPath, locale} = router;
  const switchTo = (l) => { if (l !== locale) router.push(asPath, asPath, {locale: l}); };
  return (
    <div className="inline-flex items-center overflow-hidden rounded-xl border border-neutral-200">
      {['en','bg'].map((l) => (
        <button key={l} onClick={() => switchTo(l)} aria-pressed={locale===l} className={`px-2.5 py-1 text-xs font-medium ${locale===l ? 'bg-sky-500 text-white' : 'bg-white text-neutral-700 hover:bg-neutral-50'}`}>{l.toUpperCase()}</button>
      ))}
    </div>
  );
}
