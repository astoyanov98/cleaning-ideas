import Image from "next/image";

const PROCESS_STEPS = [
  {
    image: "/FilterCleaningExp1.png",
    title: "Излъчване на UV-вълни (над 20kHz)",
    description:
      "UV-вълните създават редуване на ниско и високо налягане в разтвора.",
  },
  {
    image: "/FilterCleaningExp2.png",
    title: "Образуване на малки балончета",
    description:
      "Поради ниското налягане се образуват малки балончета в течността.",
  },
  {
    image: "/FilterCleaningExp3.png",
    title: "Балончета се спукват (експлодират)",
    description:
      "При по-високото налягане балончетата се спукват и така почистват в дълбочина омазнените предмети (филтри).",
  },
];
const BEFORE_AFTER_ITEMS = [
  { id: "set-1", label: "Комплект 1", image: "/razlikafiltri.png" },
  { id: "set-2", label: "Комплект 2", image: "/razlikafiltri2.png" },
  { id: "set-3", label: "Комплект 3", image: "/razlikafiltri3.png" },
];

export default function ChisteneNaFiltriSUltrazvukPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/Filtri_Tritle_Foto.png"
          alt="Почистване на филтри с ултразвук"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10" />

        <div className="mx-auto max-w-6xl px-3 py-20 text-center text-white md:py-28">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Почистване на филтри
            <span className="block">с ултразвук</span>
          </h1>
        </div>
      </section>

      <section className="relative w-full overflow-hidden mt-4 bg-[linear-gradient(180deg,#ffffff_0%,#dff4e5_34%,#9dd7af_100%)] py-10 md:py-14">
        <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.85),transparent_40%),radial-gradient(circle_at_88%_4%,rgba(16,185,129,0.38),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/90 to-transparent" />

        <div className="mx-auto max-w-6xl px-3">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-white/82 p-6 shadow-[0_24px_50px_-36px_rgba(16,65,45,0.45)] backdrop-blur-[1px] md:p-8">
            <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(transparent_19px,rgba(16,65,45,0.05)_20px,transparent_21px),linear-gradient(90deg,transparent_19px,rgba(16,65,45,0.05)_20px,transparent_21px)] [background-size:28px_28px]" />

            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                Защо да почистваме филтрите с ултразвук вместо да ги почистваме с химически препарати като сода каустик (NAOH) например?
              </h2>
              <div className="mt-3 space-y-2 text-sm text-neutral-700 sm:text-base">
                <p>- Заради кавитацията.</p>
                <p>- Какво е кавитация?</p>
                <p>
                  - Кавитацията е процес, при който в течност се образуват малки балончета
                  (мехурчета) от пара/газ, които буквално „експлодират“ в повърхността на
                  омазнения предмет (филтър). По този начин се почиства в дълбочина и се стига до
                  най-недостъпните зони.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="mx-auto max-w-6xl px-3 py-12 md:py-16">
          <div className="space-y-8 md:hidden">
            {PROCESS_STEPS.map((step, index) => (
              <article
                key={`mobile-${step.title}`}
                className="rounded-2xl border border-neutral-200 bg-white/90 p-2 shadow-sm"
              >
                <div className="overflow-hidden rounded-xl bg-white">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={720}
                    height={550}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                </div>
                <div className="px-1 pb-2 pt-4">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">{step.description}</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-emerald-700">
                    Стъпка {index + 1}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="hidden items-center gap-8 md:mx-auto md:w-fit md:flex md:flex-row md:items-center md:justify-center md:gap-12">
            <div className="mx-auto w-full max-w-[340px] space-y-6 md:space-y-8 md:pr-20">
              {PROCESS_STEPS.map((step, index) => (
                <div key={`${step.title}-image`} className="relative">
                  <div className="overflow-hidden rounded-2xl bg-white p-2">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={720}
                      height={550}
                      className="h-auto w-full rounded-xl object-cover"
                      sizes="(max-width: 1024px) 45vw, 340px"
                    />
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <Image
                      src="/Arrow.png"
                      alt=""
                      width={720}
                      height={550}
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-[50px] top-[calc(100%-35px)] hidden h-auto w-40 object-contain [filter:brightness(0)] md:block lg:-right-40 lg:w-48"
                      sizes="(max-width: 1024px) 10rem, 12rem"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="w-full max-w-[460px] space-y-10 md:self-center md:space-y-28">
              {PROCESS_STEPS.map((step, index) => (
                <article
                  key={`${step.title}-text`}
                  className={index === 0 ? "pt-0" : "border-t border-neutral-900/25 pt-4"}
                >
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">{step.description}</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-emerald-700">
                    Стъпка {index + 1}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-secondary" aria-hidden="true" />

      <section className="mx-auto max-w-6xl px-3 py-12 md:py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Филтри преди и след почистване
          </h2>
        </div>

        <div className="relative mt-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent md:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent md:w-16" />

          <div className="overflow-hidden">
            <div className="before-after-carousel-track flex w-max gap-4 md:gap-5">
              {[...BEFORE_AFTER_ITEMS, ...BEFORE_AFTER_ITEMS].map((item, index) => (
                <figure
                  key={`${item.id}-${index}`}
                  className="w-[300px] shrink-0 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm md:w-[360px]"
                >
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={`Разлика във филтри преди и след почистване - ${item.label}`}
                      width={1536}
                      height={1024}
                      className="aspect-[4/3] w-full object-cover"
                      sizes="(max-width: 768px) 300px, 360px"
                    />
                    <div className="pointer-events-none absolute inset-y-3 left-1/2 w-px -translate-x-1/2 bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                    <div className="pointer-events-none absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-emerald-700 shadow-md">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 7 6 5-6 5" />
                      </svg>
                    </div>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes beforeAfterCarouselMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .before-after-carousel-track {
          animation: beforeAfterCarouselMove 28s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .before-after-carousel-track {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
