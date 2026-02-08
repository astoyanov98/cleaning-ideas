import React from 'react';
import SmartImage from './SmartImage';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="uslugi" className="scroll-mt-24 border-y border-neutral-200 bg-white md:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-3 py-16">
        <div className="mb-8">
          <h2 className="md:text-3xl text-2xl font-bold tracking-tight sm:text-4xl">
            Услуги
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-600">
            Изберете услуга. Останалите карти са примерни и могат да се заменят.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => {
            const isAccent = idx === 3;
            const cardBorder = isAccent
              ? 'border-[rgba(246,132,38,0.3)] shadow-[0_16px_30px_-24px_rgba(246,132,38,0.7)]'
              : 'border-emerald-100 shadow-[0_16px_30px_-24px_rgba(16,185,129,0.7)]';
            const headerBg = isAccent ? 'bg-[rgba(246,132,38,0.12)]' : 'bg-emerald-50';
            const blobLarge = isAccent ? 'bg-[rgba(246,132,38,0.2)]' : 'bg-emerald-100/80';
            const blobSmall = isAccent ? 'bg-[rgba(246,132,38,0.18)]' : 'bg-emerald-100/70';
            const imgBorder = isAccent ? 'border-[rgba(246,132,38,0.35)]' : 'border-emerald-200';
            const titleColor = isAccent ? 'text-[#f68426]' : 'text-emerald-700';
            const buttonBorder = isAccent ? 'border-[#f68426] text-[#f68426]' : 'border-emerald-400 text-emerald-700';
            const buttonFill = isAccent ? 'bg-[#f68426]' : 'bg-emerald-500';

            return (
              <article
                key={service.title}
                className={`flex h-full flex-col overflow-hidden rounded-3xl border bg-white text-center transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] ${cardBorder}`}
              >
                <div className={`relative flex h-44 items-center justify-center py-2 ${headerBg}`}>
                  <div
                    className={`absolute h-28 w-40 -rotate-12 rounded-[48%] ${blobLarge}`}
                    aria-hidden="true"
                  />
                  <div
                    className={`absolute right-10 top-6 h-6 w-10 rounded-full ${blobSmall}`}
                    aria-hidden="true"
                  />
                  <div
                    className={`absolute bottom-6 left-10 h-4 w-4 rounded-full ${blobSmall}`}
                    aria-hidden="true"
                  />
                  <SmartImage
                    src={service.image}
                    alt={service.alt}
                    className={`relative h-34 w-34 overflow-hidden rounded-full border-2 bg-white shadow-sm ${imgBorder}`}
                  />
                </div>
                <div className="flex h-full flex-col px-3 pb-6 pt-4">
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold ${titleColor}`}>
                      {service.title}
                    </h3>
                  </div>
                  <a
                    href={service.href}
                    className={`group relative mt-4 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-300 hover:text-white ${buttonBorder}`}
                  >
                    <span
                      className={`absolute inset-0 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 ${buttonFill}`}
                      aria-hidden="true"
                    />
                    <span className="relative z-10">{service.cta}</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
