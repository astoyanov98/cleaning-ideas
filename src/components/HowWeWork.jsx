import React from 'react';
import SmartImage from './SmartImage';
import { CheckIcon } from './icons';

const steps = [
  {
    title: 'Първоначална консултация',
    desc: 'Оценяваме вашите нужди и изисквания.',
    image: '/konsultaciq.png',
    alt: 'Илюстрация за първоначална консултация',
  },
  {
    title: 'Оглед на място и планиране на услугата',
    desc: 'Оглед на място и проверка за безопасност. Подготвяме индивидуален план за почистване.',
    image: '/planirane.png',
    alt: 'Илюстрация за планиране на услугата',
  },
  {
    title: 'Професионално почистване и отчет',
    desc: 'Сертифицирани техници изпълняват услугата. Получавате документация и препоръки.',
    image: '/image.png',
    alt: 'Ilustraciya za profesionalno pochistvane i otchet',
    icon: <CheckIcon className="h-7 w-7 text-emerald-500" />,
  },
];

export default function HowWeWork() {
  return (
    <section id="kak-rabotim" className="scroll-mt-24 border-y border-neutral-200 bg-white md:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-3 py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">
            <span className="h-px w-10 border-t border-dashed border-emerald-400" />
            Как се работи с нас
            <span className="h-px w-10 border-t border-dashed border-emerald-400" />
          </div>
          <h2 className="mt-4 md:text-3xl text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Как "Cleaning Ideas" работи
          </h2>
        </div>

        <div className="mt-10">
          <div className="grid gap-6 md:hidden">
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="grid h-28 w-28 place-items-center rounded-full border-2 border-emerald-400 bg-white shadow-[0_10px_20px_-16px_rgba(16,185,129,0.7)]">
                  {step.image ? (
                    <SmartImage
                      src={step.image}
                      alt={step.alt}
                      className="h-full w-full overflow-hidden rounded-full"
                    />
                  ) : (
                    step.icon
                  )}
                </div>
                <h3 className="mt-5 text-base font-semibold text-emerald-700">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm text-neutral-500">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
            {steps.map((step, idx) => (
              <React.Fragment key={step.title}>
                <div className="flex items-center justify-center">
                  <div className="grid h-28 w-28 place-items-center rounded-full border-2 border-emerald-400 bg-white shadow-[0_10px_20px_-16px_rgba(16,185,129,0.7)]">
                    {step.image ? (
                      <SmartImage
                        src={step.image}
                        alt={step.alt}
                        className="h-full w-full overflow-hidden rounded-full"
                      />
                    ) : (
                      step.icon
                    )}
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex h-full items-center justify-center text-emerald-500">
                    <span className="h-px w-12 border-t border-dashed border-emerald-400" />
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-6 hidden md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-start">
            {steps.map((step, idx) => (
              <React.Fragment key={`${step.title}-text`}>
                <div className="text-center">
                  <h3 className="text-base font-semibold text-emerald-700">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    {step.desc}
                  </p>
                </div>
                {idx < steps.length - 1 && <div aria-hidden="true" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
