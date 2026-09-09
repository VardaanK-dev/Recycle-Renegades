import Image from "next/image";
import Link from "next/link";
import type { Dict, Locale } from "@/lib/i18n";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/recycle.renegades/",
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
];

export function Footer({
  dict,
  locale,
}: {
  dict: Dict;
  locale: Locale;
}) {
  const navItems = [
    { href: `/${locale}/projects`, label: dict.nav.research },
    { href: `/${locale}/feedback`, label: dict.nav.feedback },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/credits`, label: dict.nav.credits },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="flex flex-col gap-3">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 font-semibold text-card-foreground"
          >
            <Image
              src="/recycle-renegades-logo.png"
              alt="Recycle Renegades logo"
              width={24}
              height={22}
              className="h-6 w-auto"
            />
            {dict.meta.siteName}
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            {dict.footer.tagline}
          </p>
        </div>

        <nav aria-label={dict.footer.navigation}>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-card-foreground">
            {dict.footer.navigation}
          </h2>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-card-foreground">
            {dict.footer.social}
          </h2>
          <ul className="flex gap-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Recycle Renegades. {dict.footer.rights}
          </p>
          <p>{dict.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}