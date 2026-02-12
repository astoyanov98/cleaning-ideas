import Link from "next/link";

const SectionIcon = ({ children }) => (
  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100">
    {children}
  </span>
);

const FacebookIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.57 9.88v-6.99H7.9V12h2.53V9.84c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
  </svg>
);

const InstagramIcon = ({ className = "h-4 w-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const GoogleGIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.31h6.44a5.5 5.5 0 0 1-2.39 3.61v3h3.87c2.26-2.08 3.57-5.15 3.57-8.65z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.87-3c-1.07.72-2.44 1.16-4.06 1.16-3.12 0-5.76-2.11-6.7-4.95H1.3v3.11A12 12 0 0 0 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.3 14.3A7.2 7.2 0 0 1 4.93 12c0-.8.14-1.57.37-2.3V6.59H1.3A12 12 0 0 0 0 12c0 1.94.46 3.78 1.3 5.41l4-3.11z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.76 0 3.35.61 4.6 1.81l3.45-3.45C17.94 1.14 15.23 0 12 0A12 12 0 0 0 1.3 6.59l4 3.11c.94-2.84 3.58-4.95 6.7-4.95z"
    />
  </svg>
);

export default function SiteFooter({ maxWidth = "max-w-7xl" }) {
  const footerLinkClass =
    "decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-secondary hover:underline hover:decoration-secondary";

  return (
    <footer className="border-t border-emerald-100 bg-[linear-gradient(180deg,#ffffff_0%,#f6fbf7_100%)]">
      <div className={`mx-auto grid ${maxWidth} gap-10 px-3 py-12 md:grid-cols-4`}>
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-400 to-sky-600 font-bold text-white">
              CI
            </span>
            <span className={`text-lg font-semibold tracking-tight ${footerLinkClass}`}>Cleaning Ideas</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-neutral-600">
            Професионално почистване за кухни, вентилации и бизнес обекти.
          </p>

          <div className="mt-4 flex items-center gap-2">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1877F2,#0D5FDB)] text-white shadow-[0_10px_20px_-12px_rgba(24,119,242,0.9)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_16px_28px_-12px_rgba(24,119,242,0.95)]"
            >
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F58529,#DD2A7B,#8134AF,#515BD4)] text-white shadow-[0_10px_20px_-12px_rgba(221,42,123,0.9)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_16px_28px_-12px_rgba(221,42,123,0.95)]"
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:office@cleaningideas.bg"
              aria-label="Google Mail"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_10px_20px_-12px_rgba(0,0,0,0.28)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_16px_28px_-12px_rgba(66,133,244,0.5)]"
            >
              <GoogleGIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="flex items-center gap-2 font-semibold text-secondary">
            <SectionIcon>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <path d="M4 7h16M4 12h16M4 17h10" />
              </svg>
            </SectionIcon>
            Услуги
          </h4>
          <ul className="mt-5 space-y-2 text-sm text-neutral-600">
            <li>
              <Link href="/pochistene-na-vuzduhovodi" className={footerLinkClass}>
                Почистване на въздуховоди
              </Link>
            </li>
            <li>
              <Link href="/pochistene-na-kuhnenski-chadari" className={footerLinkClass}>
                Почистване на кухненски чадъри
              </Link>
            </li>
            <li>
              <Link href="/pochistene-na-filtri-s-ultrazvuk" className={footerLinkClass}>
                Почистване на филтри
              </Link>
            </li>
            <li>
              <Link href="/pochistene-na-motori" className={footerLinkClass}>
                Почистване на мотори
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="flex items-center gap-2 font-semibold text-secondary">
            <SectionIcon>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
                <path d="M4 20a8 8 0 0 1 16 0" />
              </svg>
            </SectionIcon>
            Компания
          </h4>
          <ul className="mt-5 space-y-2 text-sm text-neutral-600">
            <li>
              <Link href="/za-nas" className={footerLinkClass}>
                За нас
              </Link>
            </li>
            <li>
              <Link href="/za-nas" className={footerLinkClass}>
                Безопасност и съответствие
              </Link>
            </li>
            <li>
              <Link href="/kontakti" className={footerLinkClass}>
                Сертификати и документация
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="flex items-center gap-2 font-semibold text-secondary">
            <SectionIcon>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
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
              <Link href="mailto:office@cleaningideas.bg" className={footerLinkClass}>
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
              <Link href="tel:+359884918067" className={footerLinkClass}>
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
              <Link href="/kontakti" className={footerLinkClass}>
                Обслужваме търговски обекти в цялата страна
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Cleaning Ideas. Всички права запазени.
      </div>
    </footer>
  );
}
