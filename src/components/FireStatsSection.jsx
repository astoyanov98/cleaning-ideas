import React, { useEffect, useRef, useState } from "react";

const FlameIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <path d="M12 2c1.6 3 4 4.6 4 8.2a4 4 0 0 1-8 0c0-2.2 1.1-3.9 2.4-5.6C8.2 6 6 8.8 6 12a6 6 0 0 0 12 0c0-4.8-2.7-7.2-6-10z" />
  </svg>
);

const AlertIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <path d="M12 3l10 18H2L12 3z" />
    <path d="M12 9v5" />
    <path d="M12 17h.01" />
  </svg>
);

const DollarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <path d="M12 2v20" />
    <path d="M17 7a4 4 0 0 0-4-3H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H11a4 4 0 0 1-4-3" />
  </svg>
);

const EuroIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <path d="M19 6a7 7 0 1 0 0 12" />
    <path d="M4 10h9" />
    <path d="M4 14h9" />
  </svg>
);

const BuildingIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <path d="M3 21h18" />
    <path d="M5 21V5a2 2 0 0 1 2-2h6v18" />
    <path d="M15 21V9h4a2 2 0 0 1 2 2v10" />
    <path d="M9 7h.01M9 11h.01M9 15h.01M17 13h.01M17 17h.01" />
  </svg>
);

const STATS = [
  {
    icon: FlameIcon,
    value: 260,
    suffix: "",
    title: "Пожара годишно",
    description: "в заведения в България",
  },
  {
    icon: AlertIcon,
    value: 85,
    suffix: "%",
    title: "Причинени от мазнини",
    description: "въздуховоди и филтри",
  },
  {
    icon: EuroIcon,
    value: 60000,
    suffix: " евро",
    title: "Средна щета",
    description: "без да се включват загубени приходи",
    format: "compact",
  },
  {
    icon: BuildingIcon,
    value: 40,
    suffix: "%",
    title: "Не отварят отново",
    description: "след пожар в обекта",
  },
];

const formatValue = (value, format) => {
  const rounded = Math.round(value);
  if (format === "compact") {
    return new Intl.NumberFormat("bg-BG").format(rounded);
  }
  return rounded.toString();
};

const CountUp = ({ value, prefix = "", suffix = "", format, animate }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!animate) return;
    let rafId;
    const duration = 2000;
    const start = performance.now();
    const startValue = 0;

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (value - startValue) * eased;
      setDisplayValue(current);
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [animate, value]);

  return (
    <span>
      {prefix}
      {formatValue(displayValue, format)}
      {suffix}
    </span>
  );
};

export default function FireStatsSection({ variant = "standalone" }) {
  const isEmbedded = variant === "embedded";
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const sectionClassName = isEmbedded
    ? "relative overflow-hidden text-neutral-900"
    : "relative overflow-hidden bg-emerald-500 text-white";
  const containerClassName = isEmbedded
    ? "relative mx-auto max-w-7xl px-3 py-12"
    : "relative mx-auto max-w-7xl px-3 py-16";
  const pillClassName = isEmbedded
    ? "bg-sky-50 text-sky-700 ring-sky-200"
    : "bg-secondary/15 text-white ring-secondary/40";
  const subTextClassName = isEmbedded ? "text-neutral-600" : "text-white/80";
  const cardClassName = isEmbedded
    ? "rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition-transform duration-300 hover:scale-[1.02] hover:shadow-md"
    : "rounded-3xl border border-white/15 bg-white/10 p-6 text-center shadow-[0_24px_50px_-30px_rgba(8,56,44,0.7)] backdrop-blur transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_30px_70px_-35px_rgba(8,56,44,0.8)]";
  const iconClassName = isEmbedded
    ? "mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-200"
    : "mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-inset ring-white/35";
  const descriptionClassName = isEmbedded ? "text-neutral-600" : "text-white/70";

  return (
    <section ref={sectionRef} className={sectionClassName}>
      {!isEmbedded && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_55%)]" />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),linear-gradient(90deg,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px)] [background-size:32px_32px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/75 via-emerald-500/35 to-emerald-700/70" />
        </div>
      )}

      <div className={containerClassName}>
        <div className="mx-auto max-w-3xl text-center">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ring-1 ring-inset ${pillClassName}`}
          >
            Реалната опасност
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Защо превенцията от пожар е важна
          </h2>
          <p className={`mt-3 text-sm ${subTextClassName}`}>
            Тези цифри показват защо регулярната поддръжка на кухненската вентилация не е
            пожелателна, а задължителна.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.title} className={cardClassName}>
                <div className={iconClassName}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-5 text-3xl font-semibold">
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    format={stat.format}
                    animate={animate}
                  />
                </div>
                <div
                  className={`mt-2 text-sm font-semibold ${isEmbedded ? "text-neutral-900" : "text-white"}`}
                >
                  {stat.title}
                </div>
                <div className={`mt-2 text-xs ${descriptionClassName}`}>{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
