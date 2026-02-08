;
import Link from "next/link";
import SmartImage from "../components/SmartImage";
import { CheckIcon, ShieldIcon, SparklesIcon, ClockIcon } from "../components/icons";

const HERO_STATS = [
  { value: "10+ Years", label: "Experience in commercial cleaning" },
  { value: "500+", label: "Jobs completed" },
  { value: "24/7", label: "Support for urgent requests" },
  { value: "100%", label: "Safety-first approach" },
];

const PILLARS = [
  {
    title: "Safety & Compliance",
    desc: "We follow strict safety standards and provide clear documentation after every job.",
  },
  {
    title: "Quality You Can See",
    desc: "We focus on deep cleaning and results you can verify with before/after checks.",
  },
  {
    title: "Reliable Scheduling",
    desc: "Flexible time slots that work with your business—on time, every time.",
  },
];

const STORY_PARAGRAPHS = [
  "We started with a simple goal: make commercial spaces cleaner, safer, and easier to maintain.",
  "Over time, we built a process that combines professional equipment, trained technicians, and consistent reporting.",
  "Today, we help restaurants and facilities stay compliant and operate with confidence.",
];

const STORY_HIGHLIGHTS = [
  "Trained, professional technicians",
  "Commercial-grade equipment",
  "Clear reports and recommendations",
  "Consistent, repeatable process",
];

const PROMISE_ITEMS = [
  "Transparent pricing and clear scope",
  "Respect for your time and your space",
  "High standards on every visit",
  "Documentation you can share with inspectors or insurers",
];

const TEAM = {
  heading: "Meet the Team",
  lead: {
    name: "Cleaning Ideas Team",
    role: "Commercial Cleaning Specialists",
    bio: "We’re a small, dedicated crew focused on commercial kitchens, ventilation, and high-standard cleaning. Our work is built around safety, reliability, and visible results.",
  },
  quote: "Clean spaces help businesses run better—our job is to make that easy.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-sky-300/40">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <SmartImage
            eager
            alt="Commercial ventilation system"
            className="h-full w-full opacity-25"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-3 pb-20 pt-16 md:grid-cols-2 md:pt-24">
          <div className="space-y-6">
            <span className="inline-flex w-fit rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-inset ring-sky-200">
              About Us
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Built for Clean, Safe, Compliant Commercial Spaces
            </h1>

            <p className="max-w-xl text-neutral-600">
              We help restaurants and commercial facilities maintain high hygiene standards with
              reliable scheduling, safety-first practices, and clear reporting.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/kontakti"
                className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/"
                className="rounded-xl border border-neutral-200 px-5 py-3 font-semibold text-neutral-900 hover:bg-neutral-50"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <p className="md:text-3xl text-2xl font-bold text-sky-600">{stat.value}</p>
                <p className="mt-1 text-sm text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-3 py-16">
          <div className="mb-10 max-w-3xl">
            <h2 className="md:text-3xl text-2xl font-bold tracking-tight sm:text-4xl">
              Our Pillars
            </h2>
            <p className="mt-2 text-neutral-600">
              The principles that guide every job we do.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {PILLARS.map((item, idx) => (
              <article
                key={idx}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-200">
                  {[
                    <ShieldIcon key="s" className="h-5 w-5" />,
                    <SparklesIcon key="sp" className="h-5 w-5" />,
                    <ClockIcon key="c" className="h-5 w-5" />,
                  ][idx]}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-3 py-16">
        <div className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-start">
          <div>
            <h2 className="md:text-3xl text-2xl font-bold tracking-tight sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-3 text-neutral-600">
              Practical, professional cleaning—done the right way.
            </p>
            <div className="mt-5 space-y-3 text-sm text-neutral-700">
              {STORY_PARAGRAPHS.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl">
            <SmartImage
              alt="Commercial cleaning in progress"
              className="h-80 w-full object-cover"
              src="https://images.unsplash.com/photo-1529429612779-c8e40ef2f36e?auto=format&fit=crop&w=1400&q=80"
            />
            <div className="space-y-2 p-5 text-sm text-neutral-700">
              {STORY_HIGHLIGHTS.map((h) => (
                <div key={h} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-sky-600" /> {h}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-gradient-to-br from-sky-50 via-white to-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-3 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:md:text-3xl text-2xl">
              Our Promise
            </h3>
            <p className="mt-3 text-neutral-600">
              We keep it simple: show up prepared, do the job thoroughly, and document the work.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              {PROMISE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 text-sky-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl">
            <p className="text-sm font-semibold text-sky-700">{TEAM.heading}</p>
            <p className="mt-3 text-2xl font-bold text-neutral-900">{TEAM.lead.name}</p>
            <p className="text-sm text-neutral-600">{TEAM.lead.role}</p>
            <p className="mt-4 text-sm text-neutral-700">{TEAM.lead.bio}</p>
            <p className="mt-4 rounded-2xl bg-sky-50 p-4 text-sm text-sky-900 ring-1 ring-inset ring-sky-200">
              “{TEAM.quote}”
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-3 py-16 text-center">
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-inset ring-sky-200">
            Let’s Talk
          </p>
          <h3 className="md:text-3xl text-2xl font-bold tracking-tight sm:text-4xl">
            Get a Quote for Your Business
          </h3>
          <p className="text-neutral-600">
            Tell us what you need cleaned and how often—we’ll reply with a clear plan and price.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/kontakti"
            className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400"
          >
            Contact Us
          </Link>
          <Link
            href="mailto:office@cleaningideas.bg"
            className="rounded-xl border border-neutral-200 px-5 py-3 font-semibold text-neutral-900 hover:bg-neutral-50"
          >
            Email Us
          </Link>
        </div>
      </section>
    </main>
  );
}
