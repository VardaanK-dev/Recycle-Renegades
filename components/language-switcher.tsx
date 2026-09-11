"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/lib/i18n";

function switchLocalePathname(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  const rest =
    segments.length > 0 && (locales as readonly string[]).includes(segments[0])
      ? segments.slice(1)
      : segments;
  return `/${locale}${rest.length > 0 ? `/${rest.join("/")}` : ""}`;
}

export function LanguageSwitcher({
  currentLocale,
  openAbove = false,
}: {
  currentLocale: Locale;
  openAbove?: boolean;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-card px-3 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary"
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{localeNames[currentLocale].label}</span>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Choose language"
          className={`absolute z-50 max-h-72 w-44 overflow-auto rounded-lg border border-border bg-card p-1 shadow-lg ${
            openAbove ? "bottom-full left-0 mb-2" : "top-full right-0 mt-2"
          }`}
        >
          {locales.map((locale) => (
            <li key={locale} role="option" aria-selected={locale === currentLocale}>
              <a
                href={switchLocalePathname(pathname, locale)}
                className={`flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:bg-secondary ${
                  locale === currentLocale
                    ? "font-semibold text-primary"
                    : "text-card-foreground"
                }`}
                onClick={() => setOpen(false)}
                lang={locale}
              >
                {localeNames[locale].name}
                {locale === currentLocale && (
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}