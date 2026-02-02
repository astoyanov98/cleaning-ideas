;
import React, {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function LangSwitch(){
  const router = useRouter();
  const {asPath, pathname, locale = 'en'} = router;

  // Prefetch both locale variants of the current route for instant switching
  useEffect(() => {
    const href = pathname || '/';
    try {
      router.prefetch?.(href, href, {locale: 'en'});
      router.prefetch?.(href, href, {locale: 'bg'});
    } catch (_) {}
  }, [pathname]);

  const switchTo = (l) => { if (l !== locale) router.push(asPath, asPath, {locale: l}); };

  return (
    <div className="relative inline-grid grid-cols-2 items-center rounded-xl border border-neutral-200 p-0.5 min-w-[96px] bg-white overflow-hidden">
      {/* Sliding indicator – pure CSS */}
      <span
        className={`absolute inset-y-0 left-0 w-1/2 rounded-[10px] bg-sky-500 transform transition-transform duration-400 ease-out will-change-transform ${locale==='bg' ? 'translate-x-full' : 'translate-x-0'}`}
      />
      {/* Buttons */}
      <button
        onClick={()=>switchTo('en')}
        aria-pressed={locale==='en'}
        className={`relative cursor-pointer z-10 px-3 py-1 text-xs font-medium transition-colors ${locale==='en' ? 'text-white' : 'text-neutral-700 hover:text-neutral-900'}`}
      >EN</button>
      <button
        onClick={()=>switchTo('bg')}
        aria-pressed={locale==='bg'}
        className={`relative cursor-pointer z-10 px-3 py-1 text-xs font-medium transition-colors ${locale==='bg' ? 'text-white' : 'text-neutral-700 hover:text-neutral-900'}`}
      >BG</button>
    </div>
  );
}