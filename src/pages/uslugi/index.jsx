import Link from "next/link";
import {
  SparklesIcon,
  ShieldIcon,
  ClipboardIcon,
} from "../../components/icons";

const SERVICES = [
  {
    title: "Почистване на пити",
    desc: "Дълбоко обезмасляване и измиване на филтърните пити за максимална ефективност и безопасност.",
    href: "/uslugi/chistene-na-piti",
    icon: SparklesIcon,
    accent: "bg-sky-50 text-sky-700 ring-sky-200",
    glow: "bg-sky-200/50",
  },
  {
    title: "Почистване на чадъри",
    desc: "Премахване на натрупванията по кухненските чадъри и корпуси с фокус върху пожарната безопасност.",
    href: "/uslugi/chistene-na-chadari",
    icon: ShieldIcon,
    accent: "bg-amber-50 text-amber-700 ring-amber-200",
    glow: "bg-amber-200/50",
  },
  {
    title: "Почистване на въздуховоди",
    desc: "Професионално машинно почистване на въздуховоди за чист въздух и съответствие със стандартите.",
    href: "/uslugi/chistene-na-vazduhovodi",
    icon: ClipboardIcon,
    accent: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    glow: "bg-emerald-200/50",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-sky-300/40">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-100 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-amber-100/60 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-3 py-16">
          <span className="inline-flex w-fit rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-inset ring-sky-200">
            Услуги
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Основни услуги за професионално почистване
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Три ключови услуги за чиста, безопасна и надеждна кухненска вентилация.
            Изберете услуга и научете повече.
          </p>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-3 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div
                    className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl ${service.glow}`}
                    aria-hidden="true"
                  />
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-inset ${service.accent}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{service.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
                    Виж повече <span aria-hidden="true">→</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
