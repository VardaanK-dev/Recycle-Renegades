import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary, isLocale, defaultLocale } from "@/lib/i18n";

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return {
    title: dict.aboutPage.metaTitle,
    description: dict.aboutPage.metaDescription,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        "en-US": "/en/about",
        ja: "/ja/about",
        "ur-PK": "/ur/about",
        "es-ES": "/es/about",
        fr: "/fr/about",
        ta: "/ta/about",
        hi: "/hi/about",
      },
    },
    openGraph: {
      title: dict.aboutPage.metaTitle,
      description: dict.aboutPage.metaDescription,
      locale: locale === "en" ? "en_US" : locale,
      url: `/${locale}/about`,
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="mb-12 flex flex-col items-center text-center">
        <Image
          src="/recycle-renegades-logo.png"
          alt="Recycle Renegades logo"
          width={120}
          height={110}
          className="mb-6 h-20 w-auto sm:h-24"
        />
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.about.title}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {dict.about.subtitle}
        </p>
      </header>

      <section className="mb-14">
        <p className="text-lg leading-8 text-card-foreground">
          {dict.about.intro}
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">
          {dict.about.headingApproach}
        </h2>
        <p className="max-w-3xl leading-8 text-muted-foreground">
          {dict.about.approach}
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          {dict.about.team.heading}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.about.team.items.map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-5"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-base font-bold text-primary">
                {member.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}