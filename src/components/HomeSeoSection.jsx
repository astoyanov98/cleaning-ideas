import { ChevronDown } from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    title: "Стеснява пътя на въздуха",
    text: "Подобно на запушена артерия, замърсената аспирация изисква повече мощност, за да изтегли същото количество въздух.",
  },
  {
    title: "Натоварва лагерите",
    text: "Когато турбината е облепена с грес, тя губи баланс, започва да вибрира и рискът от повреда се увеличава.",
  },
  {
    title: "Създава риск от замърсяване",
    text: "При високи температури мазнината в аспирационния чадър може да се втечни и да попадне върху работни повърхности или продукция.",
  },
];

const steps = [
  "Активно накисване с професионални обезмаслители, които разграждат загорялото масло.",
  "Дълбока обработка на чадърите, улеите за мазнини и вътрешните стени на смукателя.",
  "Контрол след почистването, за да се уверим, че системата работи с по-добър въздушен поток.",
];

const faqs = [
  {
    question: "Може ли почистването на кухненската аспирация да подобри сметките ми за ток?",
    answer:
      "Да. Когато аспирацията е чиста, въздушният поток преминава с по-малко съпротивление. Моторът работи по-ефективно и не е необходимо системата да се държи постоянно на максимална степен, за да постигне същия ефект.",
  },
  {
    question: "Каква е разликата между почистване на филтри и пълно почистване на аспирацията?",
    answer:
      "Филтрите са само първата зона на системата. Пълното почистване включва вътрешния обем на чадъра, мазниноуловителните канали и връзката към въздуховодите. Ако се почистват само филтрите, мазнината зад тях остава и продължава да създава риск.",
  },
  {
    question: "Колко време отнема процедурата по почистване?",
    answer:
      "В зависимост от броя на аспирационните чадъри и тяхното състояние, стандартното почистване обикновено отнема между 3 и 6 часа. Работим организирано и използваме предпазни фолиа, за да ограничим престоя на кухнята и да защитим оборудването.",
  },
];

export default function HomeSeoSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = "home-seo-expanded-content";

  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-3 py-12 md:py-16">
        <div className="grid gap-8 rounded-3xl border border-emerald-100 bg-[linear-gradient(135deg,#f7fdf9_0%,#ffffff_58%,#eef9f1_100%)] p-5 shadow-sm md:grid-cols-[1.35fr_0.65fr] md:p-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Професионална поддръжка
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
              Почистване на кухненска аспирация: чист въздух и максимална тяга
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-700">
              Ако в залата на вашия ресторант започне да мирише на пържено, а готвачите ви работят
              сред пара и изпарения, проблемът е ясен: имате нужда от дълбоко почистване на
              кухненската аспирация. Аспирацията е първата линия на защита срещу задимяването, но
              когато филтрите и вътрешните кухини се запълнят с карбонизирана мазнина, системата
              спира да диша ефективно.
            </p>

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

          <div className="grid content-start gap-3 text-sm">
            {["По-добра тяга", "По-малко миризми", "По-нисък пожарен риск"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white/85 px-4 py-3 text-neutral-800 shadow-sm"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {isExpanded && (
          <div id={contentId} className="mt-8 space-y-8">
            <div className="grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-start">
              <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm md:p-6">
                <h3 className="text-xl font-bold tracking-tight text-neutral-950">
                  Защо аспирацията губи своята мощност?
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-700">
                  Много собственици на заведения почистват само външните повърхности. Истинският
                  проблем обаче често е вътре в системата, където мазният конденз създава лепкав
                  слой и ограничава нормалната работа на аспирацията.
                </p>
              </div>

              <div className="grid gap-3">
                {benefits.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4"
                  >
                    <h4 className="text-sm font-bold text-neutral-950">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-neutral-700">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-secondary p-5 text-white shadow-[0_24px_50px_-36px_rgba(0,95,113,0.9)] md:p-7">
              <div className="max-w-3xl">
                <h3 className="text-xl font-bold tracking-tight">
                  Нашето решение: пълно обезмасляване без компромиси
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/85">
                  Професионалното почистване на кухненска аспирация изисква повече от стандартно
                  измиване. Прилагаме контролирана методология за отстраняване на органичните
                  наслоявания и възстановяване на ефективността на системата.
                </p>
              </div>
              <ol className="mt-6 grid gap-3 md:grid-cols-3">
                {steps.map((step, index) => (
                  <li key={step} className="rounded-2xl bg-white/10 p-4 text-sm leading-6 text-white ring-1 ring-inset ring-white/15">
                    <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-secondary">
                      {index + 1}
                    </span>
                    <span className="block">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm md:p-6">
                <h3 className="text-xl font-bold tracking-tight text-neutral-950">
                  Инвестиция в здраве и безопасност
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-700">
                  Чистата аспирация не е само въпрос на естетика. Тя осигурява по-здравословна
                  среда за екипа и намалява риска от пожар в аспирационната система. С
                  професионална поддръжка удължавате живота на оборудването и осигурявате по-приятна
                  атмосфера за клиентите си.
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm md:p-6">
                <h3 className="text-xl font-bold tracking-tight text-neutral-950">Често задавани въпроси</h3>
                <div className="mt-5 space-y-3">
                  {faqs.map((faq) => (
                    <article key={faq.question} className="rounded-2xl bg-neutral-50 p-4">
                      <h4 className="text-sm font-bold leading-6 text-neutral-950">{faq.question}</h4>
                      <p className="mt-2 text-sm leading-6 text-neutral-700">{faq.answer}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
