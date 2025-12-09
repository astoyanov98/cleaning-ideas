'use client';
import Link from "next/link";
import {useTranslations} from "next-intl";
import SmartImage from "../components/SmartImage";
import LangSwitch from "../components/LangSwitch";
import {CheckIcon, ShieldIcon, SparklesIcon, ClockIcon} from "../components/icons";

export default function AboutPage() {
  const t = useTranslations("about");
  const nav = useTranslations("nav");
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-sky-300/40">
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:backdrop-blur isolate">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-400 to-blue-500 font-bold text-white shadow-lg shadow-sky-500/20">CI</span>
            <span className="text-lg font-semibold tracking-tight">Cleaning Ideas</span>
          </Link>
          <nav className="hidden items-center gap-3 text-sm md:flex">
            <Link href="/#services" className="px-2 text-neutral-600 hover:text-neutral-900">{nav("services")}</Link>
            <Link href="/about" className="px-2 text-neutral-900 font-semibold">{nav("about")}</Link>
            <Link href="/#process" className="px-2 text-neutral-600 hover:text-neutral-900">{nav("process")}</Link>
            <Link href="/#industries" className="px-2 text-neutral-600 hover:text-neutral-900">{nav("industries")}</Link>
            <Link href="/#faq" className="px-2 text-neutral-600 hover:text-neutral-900">{nav("faq")}</Link>
            <LangSwitch />
            <Link href="/#contact" className="ml-2 rounded-xl bg-sky-500 px-4 py-2 font-medium text-white hover:bg-sky-400">{nav("getQuote")}</Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <SmartImage
            eager
            alt={t("hero.alt")}
            className="h-full w-full opacity-25"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-16 md:grid-cols-2 md:pt-24">
          <div className="space-y-6">
            <span className="inline-flex w-fit rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-inset ring-sky-200">{t("hero.tag")}</span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{t("hero.title")}</h1>
            <p className="max-w-xl text-neutral-600">{t("hero.subtitle")}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/#contact" className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400">{t("hero.primary")}</Link>
              <Link href="/" className="rounded-xl border border-neutral-200 px-5 py-3 font-semibold text-neutral-900 hover:bg-neutral-50">{t("hero.secondary")}</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.raw("hero.stats").map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                <p className="text-3xl font-bold text-sky-600">{stat.value}</p>
                <p className="mt-1 text-sm text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("pillars.heading")}</h2>
            <p className="mt-2 text-neutral-600">{t("pillars.sub")}</p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {t.raw("pillars.items").map((item, idx) => (
              <article key={idx} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-200">
                  {[<ShieldIcon key="s" className="h-5 w-5" />, <SparklesIcon key="sp" className="h-5 w-5" />, <ClockIcon key="c" className="h-5 w-5" />][idx]}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("story.heading")}</h2>
            <p className="mt-3 text-neutral-600">{t("story.intro")}</p>
            <div className="mt-5 space-y-3 text-sm text-neutral-700">
              {t.raw("story.paragraphs").map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl">
            <SmartImage
              alt={t("story.alt")}
              className="h-80 w-full object-cover"
              src="https://images.unsplash.com/photo-1529429612779-c8e40ef2f36e?auto=format&fit=crop&w=1400&q=80"
            />
            <div className="space-y-2 p-5 text-sm text-neutral-700">
              {t.raw("story.highlights").map((h) => (
                <div key={h} className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-sky-600" /> {h}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-gradient-to-br from-sky-50 via-white to-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{t("promise.heading")}</h3>
            <p className="mt-3 text-neutral-600">{t("promise.sub")}</p>
            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              {t.raw("promise.items").map((item) => (
                <li key={item} className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-sky-600" /> <span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl">
            <p className="text-sm font-semibold text-sky-700">{t("team.heading")}</p>
            <p className="mt-3 text-2xl font-bold text-neutral-900">{t("team.lead.name")}</p>
            <p className="text-sm text-neutral-600">{t("team.lead.role")}</p>
            <p className="mt-4 text-sm text-neutral-700">{t("team.lead.bio")}</p>
            <p className="mt-4 rounded-2xl bg-sky-50 p-4 text-sm text-sky-900 ring-1 ring-inset ring-sky-200">“{t("team.quote") }”</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-inset ring-sky-200">{t("cta.tag")}</p>
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("cta.heading")}</h3>
          <p className="text-neutral-600">{t("cta.sub")}</p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/#contact" className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400">{t("cta.primary")}</Link>
          <Link href="mailto:hello@cleaningideas.com" className="rounded-xl border border-neutral-200 px-5 py-3 font-semibold text-neutral-900 hover:bg-neutral-50">{t("cta.secondary")}</Link>
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      locale,
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
