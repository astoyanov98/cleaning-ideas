;
import React from 'react';
import SmartImage from './SmartImage';
import {
  SparklesIcon,
  ShieldIcon,
  ClipboardIcon,
  LeafIcon,
  ClockIcon,
} from './icons';

export default function ProfessionalCareSection() {
  return (
    <section className="border-y border-neutral-200 bg-gradient-to-b from-sky-50/60 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-3 py-16 md:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white">
            <SmartImage
              alt="Чиста професионална кухня"
              className="h-72 w-full md:h-96"
              src="/kitchen.jpg"
            />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-700 shadow-sm backdrop-blur">
              <SparklesIcon className="h-3.5 w-3.5 text-sky-600" />
              Професионална технология
            </div>
          </div>
        </div>
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
            <ShieldIcon className="h-3.5 w-3.5 text-sky-600" />
            Сертифицирано почистване
          </div>
          <h2 className="md:text-3xl text-2xl font-bold tracking-tight sm:text-4xl">
            Професионална грижа за чиста и безопасна кухня
          </h2>
          <p className="mt-4 max-w-prose text-neutral-600">
            С помощта на професионални машини и специализирани препарати
            постигаме пълна и трайна чистота на Вашата система.
          </p>
          <p className="mt-3 max-w-prose text-neutral-600">
            Всеки клиент също така получава сертификат, гарантиращ, че
            почистването отговаря на всички нормативни стандарти.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-neutral-700 sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-xl border border-sky-100 bg-white/80 px-3 py-2 shadow-sm">
              <SparklesIcon className="h-4 w-4 text-sky-600" />
              Дълготраен ефект
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-sky-100 bg-white/80 px-3 py-2 shadow-sm">
              <ClipboardIcon className="h-4 w-4 text-sky-600" />
              Сертификат и протокол
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-sky-100 bg-white/80 px-3 py-2 shadow-sm">
              <LeafIcon className="h-4 w-4 text-sky-600" />
              Безопасни препарати
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-sky-100 bg-white/80 px-3 py-2 shadow-sm">
              <ClockIcon className="h-4 w-4 text-sky-600" />
              Бързо изпълнение
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
