'use client';
import React from 'react';
import Image from 'next/image';
import SmartImage from './SmartImage';
import { ShieldIcon } from './icons';

const AirflowIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 8c4 0 4-4 8-4 3 0 5 2 5 4s-2 4-5 4H7" />
    <path d="M3 16c4 0 4-3 7-3 2 0 4 1 4 3s-2 3-4 3H7" />
  </svg>
);

export default function FireSafetySection() {
  return (
    <section className="relative overflow-hidden border-y border-neutral-200 bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-amber-100/70 blur-3xl" />
        <div className="absolute -right-24 -top-10 h-96 w-96 rounded-full bg-amber-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 md:gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <Image src="/flame.png" alt="" width={16} height={16} className="h-4 w-4" aria-hidden="true" />
              Пожарна безопасност
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Редовното почистване на кухненската вентилация предотвратява{' '}
              <span className="text-[#f68426]">риска от пожар!</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm text-neutral-600">
              Натрупаните мазнини по чадъри, филтри и въздуховоди са една от
              най-честите причини за възпламеняване.
            </p>
            <p className="mt-2 max-w-xl text-sm text-neutral-600">
              Професионалното почистване намалява риска и подобрява работата на
              системата.
            </p>
          </div>

          <div className="relative h-90">
            <div className="relative overflow-hidden h-full w-full rounded-[28px] bg-white">
              <SmartImage
                alt="Горяща кухня в ресторант"
                className="h-full w-full"
                imgClassName="object-contain md:object-cover"
                src="/fire_anime.jpg"
              />
            </div>
            <div className="pointer-events-none absolute -right-4 -top-4 h-10 w-10 rounded-full bg-amber-200/70 blur-md" />
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white/90 p-4 shadow-sm">
            <div className="text-amber-600">
              <Image src="/flame.png" alt="" width={48} height={48} className="h-12 w-12" aria-hidden="true" />
            </div>
            <div className="text-amber-700">
              <div className="text-sm font-semibold">
                По-нисък риск
              </div>
              <div className="text-xs">
                Ниско ниво на мазнина
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white/90 p-4 shadow-sm">
            <div className="text-emerald-600">
              <ShieldIcon
                className="h-12 w-12 text-emerald-500"
                fill="currentColor"
                stroke="currentColor"
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900">
                Съответствие
              </div>
              <div className="text-xs text-neutral-500">
                Контрол на риска от запалване
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white/90 p-4 shadow-sm">
            <div className="text-sky-600">
              <AirflowIcon className="h-12 w-12" />
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900">
                По-добра тяга
              </div>
              <div className="text-xs text-neutral-500">
                По-чист въздушен поток
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
