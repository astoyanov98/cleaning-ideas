'use client';
import React from 'react';
import SmartImage from './SmartImage';

const services = [
  {
    title: 'почистване на филтри с ултразвук',
    desc: 'Премахваме натрупванията с ултразвук за по-дълъг живот на филтрите.',
    image: '/chistenenafiltri.png',
    alt: 'Почистване на филтри с ултразвук',
    cta: 'Прочети Повече',
    href: '/chistene-na-filtri-s-ultrazvuk',
  },
  {
    title: 'почистване на кухненски чадъри',
    desc: 'Почистваме кухненски чадъри и възстановяваме оптималната им работа.',
    image: '/chistenenachadur.png',
    alt: 'Почистване на чадър',
    cta: 'Прочети Повече',
    href: '/chistene-na-kuhnenski-chadari',
  },
  {
    title: 'почистване на мотори',
    desc: 'Професионално почистване на мотори за по-тиха и ефективна работа.',
    image: '/chistenenamotor.png',
    alt: 'Почистване на мотор',
    cta: 'Прочети Повече',
    href: '/chistene-na-motori',
  },
  {
    title: 'почистване на въздуховоди',
    desc: 'Премахваме мазнини и прах от въздуховоди за безопасна вентилация.',
    image: '/chistenenavuzduhovodi.jpg',
    alt: 'Почистване на въздуховоди',
    cta: 'Прочети Повече',
    href: '/chistene-na-vuzduhovodi',
  },
];

export default function Services() {
  return (
    <section id="services" className="border-y border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Услуги
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-600">
            Изберете услуга. Останалите карти са примерни и могат да се заменят.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-white text-center shadow-[0_16px_30px_-24px_rgba(16,185,129,0.7)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div className="relative flex h-40 items-center justify-center bg-emerald-50">
                <div
                  className="absolute h-28 w-40 -rotate-12 rounded-[48%] bg-emerald-100/80"
                  aria-hidden="true"
                />
                <div
                  className="absolute right-10 top-6 h-6 w-10 rounded-full bg-emerald-100/70"
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-6 left-10 h-4 w-4 rounded-full bg-emerald-100/70"
                  aria-hidden="true"
                />
                <SmartImage
                  src={service.image}
                  alt={service.alt}
                  className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-emerald-200 bg-white shadow-sm"
                />
              </div>
              <div className="flex h-full flex-col px-6 pb-6 pt-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-emerald-700">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    {service.desc}
                  </p>
                </div>
                <a
                  href={service.href}
                  className="group relative mt-4 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-700 transition-colors duration-300 hover:text-white"
                >
                  <span
                    className="absolute inset-0 -translate-x-full bg-emerald-500 transition-transform duration-300 ease-out group-hover:translate-x-0"
                    aria-hidden="true"
                  />
                  <span className="relative z-10">{service.cta}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
