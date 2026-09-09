import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDictionary, isLocale, defaultLocale } from "@/lib/i18n";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return {
    title: dict.home.metaTitle,
    description: dict.home.metaDescription,
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        "en-US": "/en/",
        ja: "/ja/",
        "ur-PK": "/ur/",
        "es-ES": "/es/",
        fr: "/fr/",
        ta: "/ta/",
        hi: "/hi/",
      },
    },
    openGraph: {
      title: dict.home.metaTitle,
      description: dict.home.metaDescription,
      locale: locale === "en" ? "en_US" : locale,
      url: `/${locale}/`,
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  const featureItems = [
    {
      title: dict.features.items.accessible.title,
      description: dict.features.items.accessible.description,
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      title: dict.features.items.secure.title,
      description: dict.features.items.secure.description,
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: dict.features.items.fast.title,
      description: dict.features.items.fast.description,
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full">
      <section className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <Image
            src="/recycle-renegades-logo.png"
            alt="Recycle Renegades logo"
            width={170}
            height={156}
            priority
            className="h-28 w-auto sm:h-32"
          />
          <p className="max-w-3xl text-lg font-medium uppercase tracking-widest text-primary sm:text-xl">
            {dict.hero.motto}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {dict.hero.title}
            <span className="text-primary">{dict.hero.titleAccent}</span>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            {dict.hero.subtitle}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/projects`}
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {dict.hero.ctaPrimary}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-card px-7 text-sm font-semibold text-card-foreground transition-colors hover:bg-secondary"
            >
              {dict.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            {dict.features.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            {dict.features.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featureItems.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent text-primary">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}