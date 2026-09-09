"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { useMounted } from "@/lib/use-mounted";
import type { Dict, Locale } from "@/lib/i18n";

interface NavItem {
  href: string;
  label: string;
}

export function Navbar({ dict, locale }: { dict: Dict; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const mounted = useMounted();

  const nav: NavItem[] = [
    { href: `/${locale}/projects`, label: dict.nav.research },
    { href: `/${locale}/feedback`, label: dict.nav.feedback },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/credits`, label: dict.nav.credits },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href || pathname === `/${locale}/`;
    }
    return pathname === href;
  };

  const linkClass = (href: string) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive(href)
        ? "bg-secondary text-secondary-foreground"
        : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav
        aria-label={dict.nav.mainNav}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 font-semibold text-foreground"
        >
          <Image
            src="/recycle-renegades-logo.png"
            alt="Recycle Renegades logo"
            width={31}
            height={28}
            className="h-8 w-auto"
          />
          Recycle Renegades
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={linkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher currentLocale={locale} />
          <ThemeToggle />
        </div>

        {mounted && (
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-card-foreground md:hidden"
          >
            {open ? (
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        )}

        {mounted && open && (
          <div
            id="mobile-menu"
            className="absolute left-0 right-0 top-16 border-b border-border bg-background px-4 py-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={linkClass(item.href)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
                <LanguageSwitcher currentLocale={locale} />
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}