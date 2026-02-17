import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function HeaderLink({ href, className, children, onClick }) {
  if (href.startsWith("#")) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/#uslugi", label: "Услуги" },
    { href: "/abonamenti", label: "Абонаменти" },
    { href: "/blog", label: "Блог" },
  ];

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="relative sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-2">
        <Link href="/" className="flex items-center gap-2 md:flex-1" onClick={closeMobileMenu}>
          <div className="flex flex-col items-start">
            <Image
              src="/logo.png"
              alt="Cleaning Ideas Logo"
              width={702}
              height={355}
              className="h-auto w-36 sm:w-44"
              sizes="(max-width: 640px) 9rem, 11rem"
            />
            <span className="hidden text-xs font-bold text-secondary sm:block">
              "Safe Kitchens, Secure Businesses"
            </span>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-end gap-3 text-sm md:flex">
          {navItems.map((item) => (
            <HeaderLink
              key={item.href}
              href={item.href}
              className="px-3 text-neutral-600 hover:text-secondary"
            >
              {item.label}
            </HeaderLink>
          ))}

          <HeaderLink
            href="/kontakti"
            className="ml-2 rounded-xl bg-sky-500 px-4 py-2 font-medium text-white hover:bg-sky-400"
          >
            Контакти
          </HeaderLink>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-neutral-200 p-2 text-neutral-700 transition hover:bg-neutral-100 md:hidden"
          aria-label={mobileMenuOpen ? "Затвори меню" : "Отвори меню"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`absolute inset-x-0 top-full z-40 border-t border-neutral-200 bg-white/95 px-3 shadow-lg transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 py-3 text-sm">
          {navItems.map((item) => (
            <HeaderLink
              key={`mobile-${item.href}`}
              href={item.href}
              onClick={closeMobileMenu}
              className="rounded-lg px-3 py-2 text-neutral-700 transition hover:bg-neutral-100"
            >
              {item.label}
            </HeaderLink>
          ))}

          <HeaderLink
            href="/kontakti"
            onClick={closeMobileMenu}
            className="mt-2 rounded-xl bg-sky-500 px-4 py-2 text-center font-medium text-white hover:bg-sky-400"
          >
            Контакти
          </HeaderLink>
        </nav>
      </div>
    </header>
  );
}
