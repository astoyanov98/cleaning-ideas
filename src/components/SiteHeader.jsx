import Link from "next/link";

function HeaderLink({ href, className, children }) {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function SiteHeader() {
  const navItems = [
    { href: "#services", label: "Услуги" },
    { href: "/subscription", label: "Абонаменти" },
    { href: "/blog", label: "Блог" },
    { href: "/contact", label: "Контакти" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-3 pb-2">
        <Link href="/" className="flex items-center gap-2 md:flex-1">
          <div className="flex flex-col items-start">
            <img src="/logo.png" alt="Cleaning Ideas Logo" className="w-44" />
            <span className="text-secondary font-bold">"Safe Kitchens, Secure Businesses"</span>
          </div>
        </Link>

        {/* Navigation */}
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

          {/* CTA */}
          <HeaderLink
            href="/#contact"
            className="ml-2 rounded-xl bg-sky-500 px-4 py-2 font-medium text-white hover:bg-sky-400"
          >
            Безплатна оферта
          </HeaderLink>
        </nav>
      </div>
    </header>
  );
}
