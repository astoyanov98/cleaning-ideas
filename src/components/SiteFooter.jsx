import Link from "next/link";
import { Mail } from "lucide-react";
import { useRouter } from "next/router";
import ContactInfoSection from "./ContactInfoSection";

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

export default function SiteFooter({ maxWidth = "max-w-7xl" }) {
  const router = useRouter();
  const hideContactSection = router.pathname === "/kontakti";
  const footerLinkClass =
    "decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-secondary hover:underline hover:decoration-secondary";
  const gridCols = hideContactSection ? "md:grid-cols-3" : "md:grid-cols-4";

  return (
    <footer className="border-t border-emerald-100 bg-[linear-gradient(180deg,#ffffff_0%,#f6fbf7_100%)]">
      <div className={`mx-auto grid ${maxWidth} gap-10 px-3 py-12 ${gridCols}`}>
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-400 to-sky-600 font-bold text-white">
              CI
            </span>
            <span className={`text-lg font-semibold tracking-tight text-black ${footerLinkClass}`}>
              Cleaning Ideas
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-neutral-600">
            Професионално почистване на кухни, вентилации и бизнес обекти.
          </p>

          <div className="mt-4 flex items-center gap-2">
            <Link
              href="https://www.facebook.com/people/Cleaning-Ideas/61587934194877/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1877F2,#0D5FDB)] text-white shadow-[0_10px_20px_-12px_rgba(24,119,242,0.9)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_16px_28px_-12px_rgba(24,119,242,0.95)]"
            >
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/cleaningideas25"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F58529,#DD2A7B,#8134AF,#515BD4)] text-white shadow-[0_10px_20px_-12px_rgba(221,42,123,0.9)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_16px_28px_-12px_rgba(221,42,123,0.95)]"
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:office@cleaningideas.bg"
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-secondary shadow-[0_10px_20px_-12px_rgba(0,95,113,0.45)] ring-1 ring-inset ring-emerald-100 transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-[0_16px_28px_-12px_rgba(16,185,129,0.55)]"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
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
              <Link href="/pochistvane-na-vuzduhovodi" className={footerLinkClass}>
                Почистване на въздуховоди
              </Link>
            </li>
            <li>
              <Link href="/pochistvane-na-kuhnenski-chadari" className={footerLinkClass}>
                Почистване на кухненски чадъри
              </Link>
            </li>
            <li>
              <Link href="/pochistvane-na-filtri-s-ultrazvuk" className={footerLinkClass}>
                Почистване на филтри
              </Link>
            </li>
            <li>
              <Link href="/pochistvane-na-motori" className={footerLinkClass}>
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
              <Link href="/kontakti" className={footerLinkClass}>
                Контакти
              </Link>
            </li>
            <li>
              <Link href="/politika-za-poveritelnost" className={footerLinkClass}>
                Политика за поверителност
              </Link>
            </li>
          </ul>
        </div>

        {!hideContactSection && <ContactInfoSection />}
      </div>

      <div className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} Cleaning Ideas. Всички права запазени.</p>
      </div>
    </footer>
  );
}
