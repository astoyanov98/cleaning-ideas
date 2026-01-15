'use client';
import React, { useState } from 'react';
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
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent('Cleaning Ideas — Contact Request');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    window.location.href = `mailto:a.stoyanov98@abv.bg?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-sky-300/40">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <SmartImage
            eager
            alt="Professional commercial kitchen cleaning"
            className="h-full w-full opacity-25"
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80"
          />
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.35),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-2 md:py-28 lg:py-36">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Professional Commercial Cleaning Services
            </h1>
            <p className="mt-4 max-w-xl text-neutral-600">
              Reliable, safety-focused cleaning for restaurants, kitchens, and
              commercial facilities.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400"
              >
                Get a Free Quote
              </a>
              <a
                href="#services"
                className="rounded-xl border border-neutral-200 px-5 py-3 font-semibold text-neutral-900 hover:bg-neutral-50"
              >
                View Services
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <ShieldIcon className="h-4 w-4 text-sky-600" />
                NFPA Compliant
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-sky-600" />
                Flexible Scheduling
              </div>
              <div className="flex items-center gap-2">
                <SparklesIcon className="h-4 w-4 text-sky-600" />
                Eco-Friendly Products
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-400/30 via-sky-500/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl">
              <SmartImage
                alt="Commercial cleaning equipment in use"
                className="h-80 w-full md:h-[26rem]"
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80"
              />
              <div className="absolute bottom-0 left-0 right-0 grid gap-3 bg-gradient-to-t from-white to-transparent p-6">
                <p className="text-sm text-neutral-700">
                  Trusted by businesses that demand the highest standards of
                  cleanliness.
                </p>
                <div className="flex gap-2 text-[10px] text-neutral-600">
                  <Badge>Bonded & Insured</Badge>
                  <Badge>Safety-Trained</Badge>
                  <Badge>HEPA Equipment</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-6 px-6 py-10 opacity-80 sm:grid-cols-3 md:grid-cols-6">
          {[
            'Hilton',
            'Marriott',
            'Five Guys',
            'Whole Foods',
            'Airbnb',
            'Local Schools',
          ].map((b) => (
            <div
              key={b}
              className="text-center text-xs tracking-wider text-neutral-500"
            >
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-2 max-w-2xl text-neutral-600">
              Comprehensive commercial cleaning solutions tailored to your
              business.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-xl border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 md:block"
          >
            Get a Quote →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Kitchen Hood Cleaning"
            img="https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=1200&q=80"
            items={[
              'Grease removal',
              'Fire hazard reduction',
              'Code compliance',
            ]}
          />
          <ServiceCard
            title="HVAC & Vent Cleaning"
            img="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa5?auto=format&fit=crop&w=1200&q=80"
            items={[
              'Improved air quality',
              'Dust and debris removal',
              'Energy efficiency',
            ]}
          />
          <ServiceCard
            title="Make-Up Air Systems"
            img="https://images.unsplash.com/photo-1529429612779-c8e40ef2f36e?auto=format&fit=crop&w=1200&q=80"
            items={[
              'System balancing',
              'Airflow optimization',
              'Operational safety',
            ]}
          />
          <ServiceCard
            title="Grease Trap Cleaning"
            img="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
            items={[
              'Odor control',
              'Blockage prevention',
              'Regulatory compliance',
            ]}
          />
          <ServiceCard
            title="Inspections & Reports"
            img="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"
            items={[
              'Before & after photos',
              'Detailed documentation',
              'Insurance-ready reports',
            ]}
          />
          <ServiceCard
            title="Emergency Cleaning"
            img="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=1200&q=80"
            items={[
              'Rapid response',
              'After-hours service',
              'Critical issue resolution',
            ]}
          />
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
          <ValueProp
            icon={<ShieldIcon className="h-6 w-6 text-sky-600" />}
            title="Safety First"
            desc="All work is performed according to strict safety and fire-prevention standards."
          />
          <ValueProp
            icon={<LeafIcon className="h-6 w-6 text-sky-600" />}
            title="Eco-Friendly"
            desc="We use environmentally responsible products whenever possible."
          />
          <ValueProp
            icon={<ClipboardIcon className="h-6 w-6 text-sky-600" />}
            title="Full Documentation"
            desc="Clear reports and records provided after every service."
          />
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-2 max-w-2xl text-neutral-600">
            A simple, transparent workflow from start to finish.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: 'Initial Consultation',
              d: 'We assess your needs and requirements.',
            },
            {
              t: 'Site Evaluation',
              d: 'On-site inspection and safety checks.',
            },
            {
              t: 'Service Planning',
              d: 'Customized cleaning plan is prepared.',
            },
            {
              t: 'Professional Cleaning',
              d: 'Certified technicians complete the job.',
            },
            {
              t: 'Final Report',
              d: 'You receive documentation and recommendations.',
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

      {/* CTA */}
      <section className="relative border-y border-neutral-200 bg-gradient-to-br from-sky-100 via-sky-50 to-white">
        <div className="absolute inset-0 -z-10">
          <SmartImage
            eager
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
            alt="Commercial ventilation system"
            className="h-full w-full opacity-20"
          />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-2 max-w-prose text-neutral-600">
              Contact us today for a fast, no-obligation quote.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-sky-600" />
                Fast response times
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-sky-600" />
                Certified professionals
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-sky-600" />
                Transparent pricing
              </li>
            </ul>
          </div>

          <form
            id="contact"
            onSubmit={handleSubmit}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-neutral-700">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-neutral-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm text-neutral-700">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Tell us about your needs"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400"
              >
                Send Message
              </button>
              <p className="text-xs text-neutral-500">
                We’ll only use your information to respond to your request.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-sky-50 px-2.5 py-1 text-[10px] font-medium text-sky-700">
      {children}
    </span>
  );
}

function ServiceCard({ title, img, items }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="relative h-44">
        <SmartImage src={img} alt={title} className="h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold">{title}</h3>
        <ul className="mt-2 space-y-1 text-sm text-neutral-600">
          {items.map((i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-sky-600" /> {i}
            </li>
          ))}
        </ul>
      </div>
    </article>
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
