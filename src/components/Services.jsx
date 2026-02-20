import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import SmartImage from './SmartImage';
import { services } from '@/data/services';

export default function Services() {
  const router = useRouter();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    services.forEach((service) => {
      router.prefetch(service.href);
    });
  }, [router]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="uslugi" ref={sectionRef} className="scroll-mt-24 border-y border-neutral-200 bg-white md:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-3 py-16">
        <div 
          className={`mb-10 transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </span>
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Какво предлагаме</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
            Нашите услуги
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-600">
            Фирмата за професионално почистване на кухненски вентилационни системи{" "}
            <span className="font-semibold text-emerald-700">„Cleaning Ideas"</span>{" "}
            предлага специални технологии за почистването на всички елементи от Вашата кухненска аспирация:{" "}
            <span className="text-neutral-800">филтри</span>,{" "}
            <span className="text-neutral-800">чадъри</span>,{" "}
            <span className="text-neutral-800">мотори (двигатели)</span>,{" "}
            <span className="text-neutral-800">въздуховоди</span>{" "}
            <span className="text-neutral-500">/вътрешни и външни/</span>.
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
                className={`flex h-full flex-col overflow-hidden rounded-3xl border bg-white text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] ${cardBorder} ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={isVisible ? {} : { transitionDelay: `${200 + idx * 100}ms` }}
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
                  <Link
                    href={service.href}
                    className={`group relative mt-4 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-300 hover:text-white ${buttonBorder}`}
                  >
                    <span
                      className={`absolute inset-0 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 ${buttonFill}`}
                      aria-hidden="true"
                    />
                    <span className="relative z-10">{service.cta}</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
