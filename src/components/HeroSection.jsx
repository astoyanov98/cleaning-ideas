import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SmartImage from './SmartImage';
import { ShieldIcon, ClockIcon, SparklesIcon } from './icons';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const badges = [
    { icon: ShieldIcon, text: "Съответствие с NFPA" },
    { icon: ClockIcon, text: "Гъвкав график" },
    { icon: SparklesIcon, text: "Екологични продукти" },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center md:gap-10 gap-3 px-3 md:py-15 py-5 md:grid-cols-2">
        {/* Text content - slides in from left */}
        <div className="order-2 md:order-1">
          <h1 
            className={`md:text-4xl text-2xl font-bold leading-tight tracking-tight sm:text-[43px] transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            Професионално почистване на кухненско вентилация
          </h1>
          <p 
            className={`mt-3 max-w-xl text-sm text-neutral-500 transition-all duration-700 ease-out delay-150 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            Екипът на Cleaning Ideas представя в България най-съвременната
            технология за машинно почистване на кухненски вентилационни
            системи - доказано решение, използвано в САЩ, Канада, Австралия и
            Европа.
          </p>
          <p 
            className={`mt-2 max-w-xl text-sm text-neutral-500 transition-all duration-700 ease-out delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            Всеки клиент получава <span className="font-semibold text-emerald-600">сертификат</span>, гарантиращ, че почистването отговаря на всички нормативни стандарти.
          </p>

          <div 
            className={`mt-6 flex flex-wrap gap-3 transition-all duration-700 ease-out delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <Link
              href="/kontakti"
              className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 transition-transform duration-300 hover:scale-105 hover:bg-sky-400"
            >
              Безплатна оферта
            </Link>
            <Link
              href="#uslugi"
              className="rounded-xl border border-neutral-200 px-5 py-3 font-semibold text-neutral-900 transition-transform duration-300 hover:scale-105 hover:bg-neutral-50"
            >
              Виж услугите
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-6 text-xs text-neutral-500">
            {badges.map((badge, index) => (
              <div 
                key={badge.text}
                className={`flex items-center gap-2 transition-all duration-500 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${450 + index * 100}ms` }}
              >
                <badge.icon className="h-4 w-4 text-sky-600" />
                {badge.text}
              </div>
            ))}
          </div>
        </div>

        {/* Image - slides in from right */}
        <div 
          className={`relative order-1 md:order-2 transition-all duration-1000 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <div className="absolute -inset-1 rounded-3xl" />
          <div className="relative overflow-hidden rounded-3xl bg-white">
            <SmartImage
              alt="Оборудване за професионално почистване в действие"
              className="h-80 w-full md:h-[28rem]"
              src="/image.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
