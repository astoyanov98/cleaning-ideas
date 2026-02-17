import Link from "next/link";

const SectionIcon = ({ children }) => (
  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100">
    {children}
  </span>
);

export default function ContactInfoSection({ className = "" }) {
  const linkClass =
    "decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-secondary hover:underline hover:decoration-secondary";

  return (
    <div className={className}>
      <h4 className="flex items-center gap-2 font-semibold text-secondary">
        <SectionIcon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.9.36 1.77.68 2.6a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.57-1.23a2 2 0 0 1 2.11-.45c.83.32 1.7.55 2.6.68A2 2 0 0 1 22 16.92z" />
          </svg>
        </SectionIcon>
        Контакти
      </h4>
      <ul className="mt-5 space-y-2 text-sm text-neutral-600">
        <li className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4 text-emerald-700"
          >
            <path d="M4 6h16v12H4z" />
            <path d="m4 7 8 6 8-6" />
          </svg>
          <Link href="mailto:office@cleaningideas.bg" className={linkClass}>
            office@cleaningideas.bg
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4 text-emerald-700"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.9.36 1.77.68 2.6a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.57-1.23a2 2 0 0 1 2.11-.45c.83.32 1.7.55 2.6.68A2 2 0 0 1 22 16.92z" />
          </svg>
          <Link href="tel:+359884918067" className={linkClass}>
            0884918067
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4 text-emerald-700"
          >
            <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          <Link href="/kontakti" className={linkClass}>
            Обслужваме търговски обекти в София
          </Link>
        </li>
      </ul>
    </div>
  );
}
