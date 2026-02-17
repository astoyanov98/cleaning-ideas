import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ShieldIcon } from "../components/icons";
import { plans } from "../data/subscriptionPlans";

const ColorIcon = ({ src, alt, size, color }) => (
  <span
    role="img"
    aria-label={alt}
    className="block"
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      WebkitMaskSize: "contain",
      maskImage: `url(${src})`,
      maskRepeat: "no-repeat",
      maskPosition: "center",
      maskSize: "contain",
    }}
  />
);

export default function SubscriptionPage() {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-sky-300/40">
      <section className="mx-auto max-w-6xl px-3 py-8">
        <div 
          className={`mb-10 max-w-3xl transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="md:text-3xl text-2xl font-bold tracking-tight sm:text-4xl">Choose your plan</h2>
          <p className="mt-2 text-neutral-600">
            Switch plans anytime. Every subscription includes a satisfaction guarantee.
          </p>
        </div>

        <div className="mx-auto flex sm:h-[590px] items-center flex-col gap-5 py-4 sm:flex-row justify-center">
          {plans.map((plan, planIndex) => {
            const isPro = plan.name === "Expert";
            const planColor = plan.color || "#5354ae";
            const hoverIcons = plan.hoverIcons || { flames: 0, shields: 0 };
            const hasOverlay = hoverIcons.flames > 0 || hoverIcons.shields > 0;
            const riskPercent = plan.riskPercent;
            const riskLabel =
              typeof plan.riskLabel === "string"
                ? plan.riskLabel
                : typeof riskPercent === "number"
                  ? `${riskPercent}% риск от пожар`
                  : null;
            const riskColor = plan.riskColor || "text-red-600";
            const isHoverActive = hoveredPlan === plan.name;

            return (
            <div
              key={plan.name}
              className={[
                "relative flex h-full w-[290px] flex-col overflow-hidden rounded-[28px] border-4 text-white",
                "transition-all duration-500 ease-out",
                isHoverActive ? "scale-[1.01]" : "",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
              ].join(" ")}
              style={{ 
                borderColor: planColor, 
                backgroundColor: planColor,
                transitionDelay: `${150 + planIndex * 150}ms`,
              }}
            >
              <div
                className={[
                  "flex h-full flex-col transition-[filter] duration-200",
                  isHoverActive ? "blur-md" : "",
                ].join(" ")}
              >
                <div
                  className="bg-white px-5 pb-3 pt-5 text-center min-h-[113px]"
                  style={{ color: planColor }}
                >
                  <div className="text-2xl font-extrabold uppercase tracking-[0.16em]">
                    {plan.name}
                  </div>
                  <div
                    className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em]"
                    style={{ color: planColor }}
                  >
                    {plan.subtitle}
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-4">
                  {plan.offers.map((offer) => {
                    const itemCount = offer.items.length;
                    const itemsWrapperClass = [
                      itemCount === 4
                        ? "grid grid-cols-2 auto-rows-fr"
                        : "flex items-stretch",
                      itemCount === 3
                        ? isPro
                          ? "gap-0 justify-center"
                          : "justify-center"
                        : itemCount === 2
                          ? ""
                          : "justify-center",
                      itemCount >= 3 ? (isPro ? "mx-auto max-w-[220px]" : "mx-auto max-w-[240px]") : "",
                    ].join(" ");

                    return (
                      <div
                        key={offer.price}
                        className={`rounded-[20px] bg-white px-3 py-3 text-center ${itemCount === 4 ? "min-h-[362px]" : "min-h-[176px]"}`}
                        style={{ color: planColor }}
                      >
                        <div className={itemsWrapperClass}>
                          {offer.items.map((item) => (
                            <div
                              key={item.label}
                              className={[
                                "flex h-full w-full flex-1 flex-col items-center justify-center rounded-xl text-center",
                                isPro ? "gap-1.5 p-2" : " p-3",
                              ].join(" ")}
                            >
                              <ColorIcon
                                src={item.icon}
                                alt={item.alt}
                                size={isPro ? 48 : 56}
                                color={planColor}
                              />
                              <div
                                className={[
                                  "min-h-[24px] font-semibold uppercase tracking-[0.2em] leading-snug text-center",
                                  isPro ? "text-[9px]" : "text-[10px]",
                                ].join(" ")}
                              >
                                {item.label}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 inline-flex overflow-hidden rounded-full border-2 border-orange-500 bg-white text-[11px] font-bold uppercase">
                          <span className="px-3 py-1.5" style={{ color: planColor }}>
                            {offer.price}
                          </span>
                          <Link
                            href="/kontakti"
                            className="bg-orange-500 px-4 py-1.5 text-white cursor-pointer"
                            onMouseEnter={() => setHoveredPlan(plan.name)}
                            onMouseLeave={() => setHoveredPlan(null)}
                            onFocus={() => setHoveredPlan(plan.name)}
                            onBlur={() => setHoveredPlan(null)}
                          >
                            Купи
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {plan.footer && (
                  <div className="px-5 pb-4 text-center text-[10px] font-semibold leading-snug text-white/90">
                    <div>{plan.footer[0]}</div>
                    <div>{plan.footer[1]}</div>
                  </div>
                )}
              </div>
              {hasOverlay && (
                <div
                  className={[
                    "pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 transition-opacity duration-200",
                    isHoverActive ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                >
                  {riskLabel && (
                    <div
                      className={[
                        "rounded-full bg-white/90 px-4 py-1 text-base font-extrabold uppercase tracking-[0.2em] shadow-sm whitespace-nowrap",
                        riskColor,
                      ].join(" ")}
                    >
                      {riskLabel}
                    </div>
                  )}
                  <div className="flex items-center justify-center gap-4">
                    {Array.from({ length: hoverIcons.flames }).map((_, index) => (
                      <Image
                        key={`flame-${index}`}
                        src="/flame.png"
                        alt="Flame"
                        width={48}
                        height={48}
                        className="h-12 w-12"
                      />
                    ))}
                    {Array.from({ length: hoverIcons.shields }).map((_, index) => (
                      <ShieldIcon
                        key={`shield-${index}`}
                        className="h-10 w-10 text-emerald-500"
                        fill="currentColor"
                        stroke="currentColor"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
          })}
        </div>
      </section>
    </main>
  );
}
