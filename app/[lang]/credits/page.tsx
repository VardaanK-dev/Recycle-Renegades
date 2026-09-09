import type { Metadata } from "next";
import { getDictionary, isLocale, defaultLocale } from "@/lib/i18n";

interface CreditsPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: CreditsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return {
    title: dict.creditsPage.metaTitle,
    description: dict.creditsPage.metaDescription,
    alternates: {
      canonical: `/${locale}/credits`,
      languages: {
        "en-US": "/en/credits",
        ja: "/ja/credits",
        "ur-PK": "/ur/credits",
        "es-ES": "/es/credits",
        fr: "/fr/credits",
        ta: "/ta/credits",
        hi: "/hi/credits",
      },
    },
    openGraph: {
      title: dict.creditsPage.metaTitle,
      description: dict.creditsPage.metaDescription,
      locale: locale === "en" ? "en_US" : locale,
      url: `/${locale}/credits`,
    },
  };
}

export default async function CreditsPage({ params }: CreditsPageProps) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  type CreditItem = { name: string; role?: string; url?: string };

  const sections: Array<{ title: string; items: CreditItem[] }> = [
    {
      title: dict.credits.tools.heading,
      items: dict.credits.tools.items,
    },
    {
      title: dict.credits.sources.heading,
      items: dict.credits.sources.items,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.credits.title}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {dict.credits.subtitle}
        </p>
      </header>

      {sections.map((section) => (
        <section key={section.title} className="mb-14">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col justify-between gap-2 rounded-lg border border-border bg-card p-5"
              >
                <p className="font-medium text-card-foreground">{item.name}</p>
                {item.role && (
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                )}
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    {item.url}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}