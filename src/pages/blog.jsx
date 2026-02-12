import Image from "next/image";
import Link from "next/link";

const FIRE_FACTORS = [
  { id: "o2", label: "O2", description: "Кислород" },
  { id: "hot", label: "Hot", description: "Температура /310°C - 360°C/" },
  { id: "fuel", label: "Fuel", description: "Кухненска мазнина" },
];

const GREASE_TYPES = [
  {
    id: "4.1",
    title: "Течна мазнина /Liquid grease/",
    image: "/blog/technamaznina.png",
    alt: "Течна мазнина",
  },
  {
    id: "4.2",
    title: "Пастообразна (гъста) мазнина /Pasty grease/",
    image: "/blog/gustamaznina.png",
    alt: "Пастообразна мазнина",
  },
  {
    id: "4.3",
    title: "Суха мазнина /Dry grease/",
    image: "/blog/suhamaznina.png",
    alt: "Суха мазнина",
  },
  {
    id: "4.4",
    title: "Карбонизирана мазнина /Carbonised grease/",
    image: "/blog/karboniziranamaznina.png",
    alt: "Карбонизирана мазнина",
  },
];

const WORK_PILLARS = [
  "Механична обработка",
  "Температура /40°C - 60°C/ - спомага за смесването на вода с химическия препарат",
  "Химическа обработка",
  "Време - благодарение на адхезията успяваме успешно да почистим омазнените повърхности",
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="relative overflow-hidden border-b border-emerald-100 bg-[radial-gradient(circle_at_top_right,#d2f1df_0%,#ecfaf2_32%,#ffffff_70%)]">
        <div className="pointer-events-none absolute inset-0 opacity-65" aria-hidden="true">
          <div className="absolute -left-16 top-8 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-3 py-14 md:py-20">
          <span className="inline-flex rounded-full border border-emerald-200 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Blog
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Практично ръководство за безопасна кухненска вентилация
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-neutral-700 sm:text-base">
            Най-важното за риска от пожар, видовете мазнина и ефективното почистване на
            вентилационните системи.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-8 px-3 py-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-16">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              2. Колко често трябва да се почиства кухненската вентилация?
            </h2>
            <p className="mt-4 text-sm text-neutral-700 sm:text-base">
              Отговорът е различен за всеки обект.
            </p>
            <p className="mt-3 rounded-2xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-sm font-semibold text-emerald-900 sm:text-base">
              В момента, в който се получи натрупване на мазнина с дебелина на слой над 200 µm
              (0.2 mm), е необходимо почистване.
            </p>
            <p className="mt-4 text-sm text-neutral-700 sm:text-base">
              Екипът на Cleaning Ideas предлага както еднократно, така и регулярно /абонаментно/
              почистване.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <Image
              src="/kitchen.png"
              alt="Кухненска вентилация"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-emerald-500 text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-8 px-3 py-12 md:grid-cols-[1fr_1fr] md:items-stretch md:py-16">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              3. Как възниква пожарът в кухненската вентилация?
            </h2>
            <p className="mt-3 text-sm text-emerald-50 sm:text-base">
              Когато трите елемента съвпаднат едновременно, рискът от запалване става критичен.
            </p>
            <ul className="mt-5 space-y-2">
              {FIRE_FACTORS.map((factor) => (
                <li key={factor.id} className="rounded-xl border border-white/25 bg-white/10 px-4 py-3">
                  <span className="block text-sm font-bold uppercase tracking-[0.18em]">{factor.label}</span>
                  <span className="block text-sm text-emerald-50">{factor.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/30 bg-black/10">
            <Image
              src="/blog/piramida.png"
              alt="Пирамида на пожарния риск"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f6fbf8_0%,#ffffff_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />

        <div className="mx-auto max-w-7xl px-3 py-12 md:py-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            4. Какви видове мазнина съществуват?
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {GREASE_TYPES.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 48vw"
                  />
                  <span className="absolute left-3 top-3 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-bold tracking-[0.14em] text-emerald-700">
                    {item.id}
                  </span>
                </div>
                <div className="px-4 py-4">
                  <h3 className="text-sm font-semibold text-neutral-900 sm:text-base">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ecfaf2_0%,#ffffff_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-8 px-3 py-12 md:grid-cols-[1fr_1fr] md:items-center md:py-16">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <Image
              src="/blog/shemanakraq.png"
              alt="Схема на процеса на почистване"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 46vw"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              5. Как работим ние от Cleaning Ideas и защо сме толкова ефективни?
            </h2>
            <ul className="mt-5 space-y-2 text-sm text-neutral-700 sm:text-base">
              {WORK_PILLARS.map((item) => (
                <li key={item} className="rounded-xl border border-emerald-100 bg-white px-4 py-3 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f4faff_0%,#ffffff_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-8 px-3 pb-14 pt-12 md:grid-cols-[1fr_1fr] md:items-center md:pb-16 md:pt-16">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              6. Какво е адхезията и как ни помага?
            </h2>
            <p className="mt-4 text-sm text-neutral-700 sm:text-base">
              Най-общо казано адхезията е процес на прилепване между две различни повърхности,
              благодарение на който молекулите на химическия препарат взаимодействат с молекулите
              на омазнения слой и по този начин се получава изцяло чиста повърхност.
            </p>
            <p className="mt-4 rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-medium text-sky-900 sm:text-base">
              Когато комбинираме правилната химия, механика и време за реакция, постигаме стабилен
              и дълготраен резултат.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <Image
              src="/blog/kakrabotim.png"
              alt="Как работи адхезията при почистване"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 46vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
