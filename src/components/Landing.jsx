'use client';
import React from 'react';
import ContactForm from './ContactForm';
import SmartImage from './SmartImage';
import {
  ShieldIcon,
  ClockIcon,
  SparklesIcon,
  LeafIcon,
  ClipboardIcon,
  CheckIcon,
} from './icons';
// import Subscriptions from './Subscriptions';

export default function Landing() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-sky-300/40">
      {/* ГЛАВНА СЕКЦИЯ */}
      <section className="relative overflow-hidden">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-[43px]">
              Професионално почистване на кухненско вентилация
            </h1>
            <p className="mt-3 max-w-xl text-sm text-neutral-500">
              Екипът на Cleaning Ideas представя в България най-съвременната
              технология за машинно почистване на кухненски вентилационни
              системи - доказано решение, използвано в САЩ, Канада, Австралия и
              Европа.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400"
              >
                Безплатна оферта
              </a>
              <a
                href="#services"
                className="rounded-xl border border-neutral-200 px-5 py-3 font-semibold text-neutral-900 hover:bg-neutral-50"
              >
                Виж услугите
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <ShieldIcon className="h-4 w-4 text-sky-600" />
                Съответствие с NFPA
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-sky-600" />
                Гъвкав график
              </div>
              <div className="flex items-center gap-2">
                <SparklesIcon className="h-4 w-4 text-sky-600" />
                Екологични продукти
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl" />
            <div className="relative overflow-hidden rounded-3xl bg-white ">
              <SmartImage
                alt="Оборудване за професионално почистване в действие"
                className="h-80 w-full md:h-[26rem]"
                src="/image.png"
              />
            </div>
          </div>
        </div>
      </section>

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

      {/* ПРЕДИМСТВА И ТЕХНОЛОГИЯ */}
      <section className="border-y border-neutral-200 bg-gradient-to-b from-sky-50/60 to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white">
              <SmartImage
                alt="Чиста професионална кухня"
                className="h-72 w-full md:h-96"
                src="/kitchen.png"
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
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

      {/* КЛЮЧОВИ ПОЛЗИ */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
          <ValueProp
            icon={<ShieldIcon className="h-6 w-6 text-sky-600" />}
            title="Безопасност на първо място"
            desc="Всички дейности се извършват по строги стандарти за безопасност и пожарна превенция."
          />
          <ValueProp
            icon={<LeafIcon className="h-6 w-6 text-sky-600" />}
            title="Екологичен подход"
            desc="Използваме екологично отговорни продукти, когато е възможно."
          />
          <ValueProp
            icon={<ClipboardIcon className="h-6 w-6 text-sky-600" />}
            title="Пълна документация"
            desc="След всяка услуга предоставяме ясни отчети и протоколи."
          />
        </div>
      </section>

      {/* ПРОЦЕС */}
      <section id="process" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Нашият процес
          </h2>
          <p className="mt-2 max-w-2xl text-neutral-600">
            Ясен и прозрачен процес от начало до край.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: 'Първоначална консултация',
              d: 'Оценяваме вашите нужди и изисквания.',
            },
            {
              t: 'Оглед на място',
              d: 'Оглед на място и проверки за безопасност.',
            },
            {
              t: 'Планиране на услугата',
              d: 'Подготвяме индивидуален план за почистване.',
            },
            {
              t: 'Професионално почистване',
              d: 'Сертифицирани техници изпълняват услугата.',
            },
            {
              t: 'Финален отчет',
              d: 'Получавате документация и препоръки.',
            },
          ].map((step, i) => (
            <li
              key={i}
              className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 font-bold text-white shadow-lg shadow-sky-500/30">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{step.t}</h3>
              <p className="mt-2 text-sm text-neutral-600">{step.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ПРИЗИВ ЗА ДЕЙСТВИЕ */}
      <section className="relative border-y border-neutral-200 bg-gradient-to-br from-sky-100 via-sky-50 to-white">
        <div className="absolute inset-0 -z-10">
          <SmartImage
            eager
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
            alt="Кухненска вентилационна система"
            className="h-full w-full opacity-20"
          />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Готови ли сте да започнем?
            </h2>
            <p className="mt-2 max-w-prose text-neutral-600">
              Свържете се с нас днес за бърза оферта без ангажимент.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-sky-600" />
                Бърз отговор
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-sky-600" />
                Сертифицирани професионалисти
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-sky-600" />
                Прозрачно ценообразуване
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}


function ValueProp({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="mb-3">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{desc}</p>
    </div>
  );
}
