import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ServiceSeoSection({ eyebrow, title, intro, sections, closing, faqs }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = `seo-content-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-3 py-12 md:py-16">
        <div className="rounded-3xl border border-emerald-100 bg-[linear-gradient(135deg,#f7fdf9_0%,#ffffff_62%,#eef9f1_100%)] p-5 shadow-sm md:p-8">
          <div className="max-w-3xl">
            {eyebrow && (
              <span className="inline-flex rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                {eyebrow}
              </span>
            )}
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-700">{intro}</p>

            <button
              type="button"
              aria-expanded={isExpanded}
              aria-controls={contentId}
              onClick={() => setIsExpanded((expanded) => !expanded)}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
            >
              {isExpanded ? "Покажи по-малко" : "Прочети повече"}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <div
          id={contentId}
          className={`mt-8 space-y-8 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
            isExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
            {sections.map((section, index) => (
              <article
                key={section.title}
                className={
                  index % 2 === 0
                    ? "rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm md:p-7"
                    : "rounded-3xl bg-secondary p-5 text-white shadow-[0_24px_50px_-36px_rgba(0,95,113,0.9)] md:p-7"
                }
              >
                <div className="max-w-3xl">
                  <h3 className="text-xl font-bold tracking-tight">{section.title}</h3>
                  {section.text && (
                    <p className={`mt-3 text-sm leading-6 ${index % 2 === 0 ? "text-neutral-700" : "text-white/85"}`}>
                      {section.text}
                    </p>
                  )}
                </div>

                {section.items?.length > 0 && (
                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {section.items.map((item) => (
                      <div
                        key={item.title}
                        className={
                          index % 2 === 0
                            ? "rounded-2xl bg-emerald-50 p-4"
                            : "rounded-2xl bg-white/10 p-4 ring-1 ring-inset ring-white/15"
                        }
                      >
                        <h4 className="text-sm font-bold">{item.title}</h4>
                        <p className={`mt-2 text-sm leading-6 ${index % 2 === 0 ? "text-neutral-700" : "text-white/85"}`}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}

            {closing && (
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-5 md:p-6">
                <p className="text-sm leading-6 text-neutral-800">{closing}</p>
              </div>
            )}

            {faqs?.length > 0 && (
              <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm md:p-7">
                <h3 className="text-xl font-bold tracking-tight text-neutral-950">
                  Често задавани въпроси
                </h3>
                <div className="mt-5 grid gap-3">
                  {faqs.map((faq) => (
                    <article key={faq.question} className="rounded-2xl bg-neutral-50 p-4">
                      <h4 className="text-sm font-bold leading-6 text-neutral-950">{faq.question}</h4>
                      <p className="mt-2 text-sm leading-6 text-neutral-700">{faq.answer}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
      </div>
    </section>
  );
}
