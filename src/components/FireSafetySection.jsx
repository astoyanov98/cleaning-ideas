'use client';
import React from 'react';
import SmartImage from './SmartImage';

export default function FireSafetySection() {
  return (
    <section className="relative overflow-hidden border-t border-neutral-200 bg-gradient-to-b from-white via-amber-50/60 to-white">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-200/50 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-start gap-6 px-6 py-14 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100/70 px-3 py-1 text-xs font-semibold text-amber-800">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Пожарна безопасност
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#f68426] sm:text-4xl">
            Редовното почистване на кухненската вентилация предотвратява риска от пожар!
          </h2>
        </div>

        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-amber-200/50 blur-2xl" />
            <div className="relative aspect-[16/9] w-80 overflow-hidden rounded-3xl border-4 border-amber-200 bg-neutral-900 shadow-xl sm:w-[480px]">
              <SmartImage
                alt="Горяща кухня в ресторант"
                className="h-full w-full object-contain"
                src="/fire.JPG"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
