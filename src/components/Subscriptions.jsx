// app/components/PlanCard.tsx
'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';


export default function PlanCard({ cta, href = '#contact' }) {
  const t = useTranslations();

  const tiers = [
    {
      key: 'basic',
      tag: t('plans.tiers.basic.tag'),
      name: t('plans.tiers.basic.name'),
      highlight: false,
      features: [
        t('plans.features.ducts'),
        t('plans.features.grills'),
        t('plans.features.report'),
        t('plans.features.certificate'),
      ],
    },
    {
      key: 'premium',
      tag: t('plans.tiers.premium.tag'),
      name: t('plans.tiers.premium.name'),
      highlight: true, // highlighted card
      features: [
        t('plans.features.ducts'),
        t('plans.features.grills'),
        t('plans.features.hoods'),
        t('plans.features.coils'),
        t('plans.features.report'),
        t('plans.features.certificate'),
        t('plans.features.priority'),
      ],
    },
    {
      key: 'ultra',
      tag: t('plans.tiers.ultra.tag'),
      name: t('plans.tiers.ultra.name'),
      highlight: false,
      features: [
        t('plans.features.ducts'),
        t('plans.features.grills'),
        t('plans.features.hoods'),
        t('plans.features.coils'),
        t('plans.features.grease'),
        t('plans.features.emergency'),
        t('plans.features.inspection'),
      ],
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((tier) => (
        <article
          key={tier.key}
          className={[
            'relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm border',
            tier.highlight ? 'border-sky-300 ring-2 ring-sky-400/60' : 'border-neutral-200',
          ].join(' ')}
        >
          {/* Accent gradient for highlighted */}
          {tier.highlight && (
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(56,189,248,0.18),transparent_70%)]" />
          )}

          {/* Tier tag */}
          <div
            className={
              tier.highlight
                ? 'absolute -top-3 right-4 inline-flex items-center rounded-full bg-sky-500 px-2 py-1 text-[10px] font-semibold text-white shadow-sm'
                : 'absolute -top-3 right-4 inline-flex items-center rounded-full border border-neutral-200 bg-white px-2 py-1 text-[10px] font-medium text-neutral-600'
            }
          >
            {tier.tag}
          </div>

          {/* Header */}
          <div className="relative mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold tracking-tight">{tier.name}</h3>
            <div className="text-right">
              <div className="text-xl font-bold text-neutral-900">Custom</div>
              <div className="text-[11px] text-neutral-500">per site</div>
            </div>
          </div>

          {/* Features */}
          <ul className="relative mt-3 space-y-2 text-sm text-neutral-700">
            {tier.features.map((f, idx) => (
              <li key={`${tier.key}-${idx}`} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-sky-600" aria-hidden />
                {f}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={href}
            className={[
              'relative mt-5 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm',
              tier.highlight
                ? 'bg-sky-500 text-white hover:bg-sky-400'
                : 'border border-neutral-200 text-neutral-900 hover:bg-neutral-50',
            ].join(' ')}
          >
            {cta}
          </a>
        </article>
      ))}
    </div>
  );
}
