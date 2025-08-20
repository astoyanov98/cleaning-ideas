'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import LangSwitch from './LangSwitch';
import SmartImage from './SmartImage';
import {ShieldIcon, ClockIcon, SparklesIcon, LeafIcon, ClipboardIcon, CheckIcon} from './icons';

export default function Landing() {
  const t = useTranslations();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`${t('form.subject')} — Cleaning Ideas`);
    const body = encodeURIComponent(`${t('form.lblName')}: ${name}\n${t('form.lblEmail')}: ${email}\n${t('form.lblMsg')}: ${message}`);
    window.location.href = `mailto:hello@cleaningideas.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-sky-300/40">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:backdrop-blur isolate">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-400 to-blue-500 font-bold text-white shadow-lg shadow-sky-500/20">CI</span>
            <span className="text-lg font-semibold tracking-tight">{t('brand')}</span>
          </Link>
          <nav className="hidden items-center gap-3 text-sm md:flex">
            <a href="#services" className="px-2 text-neutral-600 hover:text-neutral-900">{t('nav.services')}</a>
            <a href="#process" className="px-2 text-neutral-600 hover:text-neutral-900">{t('nav.process')}</a>
            <a href="#industries" className="px-2 text-neutral-600 hover:text-neutral-900">{t('nav.industries')}</a>
            <a href="#faq" className="px-2 text-neutral-600 hover:text-neutral-900">{t('nav.faq')}</a>
            <LangSwitch/>
            <a href="#contact" className="ml-2 rounded-xl bg-sky-500 px-4 py-2 font-medium text-white hover:bg-sky-400">{t('nav.getQuote')}</a>
          </nav>
        </div>
      </header>

            {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <SmartImage eager alt={t('hero.altHero')} className="h-full w-full opacity-25" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.35),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-2 md:py-28 lg:py-36">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{t('hero.headline')}</h1>
            <p className="mt-4 max-w-xl text-neutral-600">{t('hero.sub')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400">{t('hero.primary')}</a>
              <a href="#services" className="rounded-xl border border-neutral-200 px-5 py-3 font-semibold text-neutral-900 hover:bg-neutral-50">{t('hero.secondary')}</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-neutral-500">
              <div className="flex items-center gap-2"><ShieldIcon className="h-4 w-4 text-sky-600" /> {t('hero.badges.nfpa')}</div>
              <div className="flex items-center gap-2"><ClockIcon className="h-4 w-4 text-sky-600" /> {t('hero.badges.schedule')}</div>
              <div className="flex items-center gap-2"><SparklesIcon className="h-4 w-4 text-sky-600" /> {t('hero.badges.eco')}</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-400/30 via-blue-500/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl">
              <SmartImage alt={t('hero.altTech')} className="h-80 w-full md:h-[26rem]" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80" />
              <div className="absolute bottom-0 left-0 right-0 grid gap-3 bg-gradient-to-t from-white to-transparent p-6">
                <p className="text-sm text-neutral-700">{t('hero.note')}</p>
                <div className="flex gap-2 text-[10px] text-neutral-600"><Badge>Bonded & Insured</Badge><Badge>Safety‑Trained</Badge><Badge>HEPA Equipment</Badge></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-6 px-6 py-10 opacity-80 sm:grid-cols-3 md:grid-cols-6">
          {['Hilton','Marriott','Five Guys','Whole Foods','Airbnb','Local Schools'].map((b) => (
            <div key={b} className="text-center text-xs tracking-wider text-neutral-500">{b}</div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('services.heading')}</h2>
            <p className="mt-2 max-w-2xl text-neutral-600">{t('services.sub')}</p>
          </div>
          <a href="#contact" className="hidden rounded-xl border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 md:block">{t('nav.getQuote')} →</a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard title={t('services.cards.hoods.title')} img="https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=1200&q=80" items={[t('services.cards.hoods.items.0'),t('services.cards.hoods.items.1'),t('services.cards.hoods.items.2')]} />
          <ServiceCard title={t('services.cards.hvac.title')} img="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa5?auto=format&fit=crop&w=1200&q=80" items={[t('services.cards.hvac.items.0'),t('services.cards.hvac.items.1'),t('services.cards.hvac.items.2')]} />
          <ServiceCard title={t('services.cards.makeup.title')} img="https://images.unsplash.com/photo-1529429612779-c8e40ef2f36e?auto=format&fit=crop&w=1200&q=80" items={[t('services.cards.makeup.items.0'),t('services.cards.makeup.items.1'),t('services.cards.makeup.items.2')]} />
          <ServiceCard title={t('services.cards.grease.title')} img="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80" items={[t('services.cards.grease.items.0'),t('services.cards.grease.items.1'),t('services.cards.grease.items.2')]} />
          <ServiceCard title={t('services.cards.inspect.title')} img="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80" items={[t('services.cards.inspect.items.0'),t('services.cards.inspect.items.1'),t('services.cards.inspect.items.2')]} />
          <ServiceCard title={t('services.cards.emergency.title')} img="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=1200&q=80" items={[t('services.cards.emergency.items.0'),t('services.cards.emergency.items.1'),t('services.cards.emergency.items.2')]} />
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
          <ValueProp icon={<ShieldIcon className="h-6 w-6 text-sky-600" />} title={t('value.v1.title')} desc={t('value.v1.desc')} />
          <ValueProp icon={<LeafIcon className="h-6 w-6 text-sky-600" />} title={t('value.v2.title')} desc={t('value.v2.desc')} />
          <ValueProp icon={<ClipboardIcon className="h-6 w-6 text-sky-600" />} title={t('value.v3.title')} desc={t('value.v3.desc')} />
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('process.heading')}</h2>
          <p className="mt-2 max-w-2xl text-neutral-600">{t('process.sub')}</p>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {[1,2,3,4,5].map((n) => (
            <li key={n} className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 font-bold text-white shadow-lg shadow-sky-500/30">{n}</div>
              <h3 className="text-lg font-semibold">{t(`process.steps.${n-1}.t`)}</h3>
              <p className="mt-2 text-sm text-neutral-600">{t(`process.steps.${n-1}.d`)}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('industries.heading')}</h2>
          <p className="mt-2 max-w-2xl text-neutral-600">{t('industries.sub')}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[0,1,2].map((idx) => (
              <article key={idx} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                <div className="overflow-hidden">
                  <SmartImage src={[
                    'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80'][idx]} alt={t(`industries.cards.${idx}`)} className="h-48 w-full" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{t(`industries.cards.${idx}`)}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{t('industries.note')}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('testimonials.heading')}</h2>
          <p className="mt-2 max-w-2xl text-neutral-600">{t('testimonials.sub')}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[0,1,2].map((i) => (
            <Testimonial key={i} quote={t(`testimonials.items.${i}.quote`)} name={t(`testimonials.items.${i}.name`)} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-y border-neutral-200 bg-gradient-to-br from-sky-100 via-blue-50 to-white">
        <div className="absolute inset-0 -z-10">
          <SmartImage eager src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80" alt={t('hero.altVent')} className="h-full w-full opacity-20" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('cta.heading')}</h2>
            <p className="mt-2 max-w-prose text-neutral-600">{t('cta.sub')}</p>
            <ul className="mt-6 grid gap-2 text-sm text-neutral-700">
              {[0,1,2].map((i) => (
                <li key={i} className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-sky-600" /> {t(`cta.bullets.${i}`)}</li>
              ))}
            </ul>
          </div>
          <form id="contact" onSubmit={handleSubmit} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl">
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-neutral-700">{t('form.name')}</label>
                <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-sky-400" placeholder={t('form.placeholderName')} />
              </div>
              <div>
                <label className="text-sm text-neutral-700">{t('form.email')}</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-sky-400" placeholder={t('form.placeholderEmail')} />
              </div>
              <div>
                <label className="text-sm text-neutral-700">{t('form.message')}</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-sky-400" placeholder={t('form.placeholderMsg')} />
              </div>
              <button type="submit" className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400">{t('form.submit')}</button>
              <p className="text-xs text-neutral-500">{t('form.disclaimer')}</p>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('faq.heading')}</h2>
          <p className="mt-2 max-w-2xl text-neutral-600">{t('faq.sub')}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[0,1,2,3].map((i) => (
            <FAQ key={i} q={t(`faq.items.${i}.q`)} a={t(`faq.items.${i}.a`)} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-400 to-blue-500 font-bold text-white">CI</span>
              <span className="text-lg font-semibold tracking-tight">{t('brand')}</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-neutral-600">{t('footer.blurb')}</p>
          </div>
          <div>
            <h4 className="font-semibold">{t('footer.services')}</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              {[0,1,2,3].map((i) => (<li key={i}>{t(`footer.listServices.${i}`)}</li>))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">{t('footer.company')}</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>About</li>
              <li>Safety & compliance</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">{t('footer.contact')}</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>{t('footer.contactEmail')}: hello@cleaningideas.com</li>
              <li>{t('footer.contactPhone')}: (555) 010‑DUCT</li>
              <li>{t('footer.contactArea')}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} {t('brand')}. {t('footer.rights')}</div>
      </footer>
    </main>
  );
}

function Badge({children}){return(<span className="inline-flex items-center rounded-full border border-neutral-200 bg-sky-50 px-2.5 py-1 text-[10px] font-medium text-sky-700">{children}</span>);} 
function ServiceCard({ title, img, items }) {return(<article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"><div className="relative h-44"><SmartImage src={img} alt={title} className="h-full w-full" /><div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" /></div><div className="p-5"><h3 className="font-semibold">{title}</h3><ul className="mt-2 space-y-1 text-sm text-neutral-600">{items.map((i) => (<li key={i} className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-sky-600" /> {i}</li>))}</ul></div></article>);} 
function ValueProp({ icon, title, desc }) {return(<div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"><div className="mb-3">{icon}</div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm text-neutral-600">{desc}</p></div>);} 
function Testimonial({ quote, name }) {return(<blockquote className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"><p className="text-sm text-neutral-800">“{quote}”</p><footer className="mt-3 text-xs text-neutral-500">— {name}</footer></blockquote>);} 
function FAQ({ q, a }) {return(<details className="group rounded-2xl border border-neutral-200 bg-white p-5 open:bg-white"><summary className="flex cursor-pointer list-none items-start justify-between gap-4"><span className="text-sm font-medium text-neutral-900">{q}</span><span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-xs text-neutral-500 transition group-open:rotate-45">+</span></summary><p className="mt-3 text-sm text-neutral-600">{a}</p></details>);} 
