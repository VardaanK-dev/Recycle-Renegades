import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary, isLocale, defaultLocale } from "@/lib/i18n";
import { ResourceCard } from "@/components/resource-card";

interface ProjectsPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return {
    title: dict.workPage.metaTitle,
    description: dict.workPage.metaDescription,
    alternates: {
      canonical: `/${locale}/projects`,
      languages: {
        "en-US": "/en/projects",
        ja: "/ja/projects",
        "ur-PK": "/ur/projects",
        "es-ES": "/es/projects",
        fr: "/fr/projects",
        ta: "/ta/projects",
        hi: "/hi/projects",
      },
    },
    openGraph: {
      title: dict.workPage.metaTitle,
      description: dict.workPage.metaDescription,
      locale: locale === "en" ? "en_US" : locale,
      url: `/${locale}/projects`,
    },
  };
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  const resources = [
    {
      title: dict.work.resources.survey.title,
      href: "https://forms.gle/j2nZY2MRUpp3n8hY8",
      image: "/research/survey.svg",
    },
    {
      title: dict.work.resources.researchDocument.title,
      href: "https://docs.google.com/document/d/13L6x2-XOBlPjyAp8RI3rOipCYGY-_UvUWshGjaP0LB4/edit?usp=sharing",
      image: "/research/research-document.svg",
    },
    {
      title: dict.work.resources.successStory.title,
      href: "https://www.unep.org/topics/ocean-seas-and-coasts/blue-ecosystems/coral-reefs",
      image: "/research/unep-coral-reefs.svg",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="mb-14">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            {dict.work.gameBanner.title}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            {dict.work.gameBanner.subtitle}
          </p>
        </div>
        <a
          href="https://game-recycle-renegades.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-opacity hover:opacity-90"
        >
          <Image
            src="/Webgame-banner.png"
            alt={dict.work.gameBanner.alt}
            width={1920}
            height={600}
            className="h-auto w-full rounded-xl border border-border shadow-sm"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </a>
      </section>

      <section aria-label={dict.work.resourcesTitle}>
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-primary">
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
              <circle cx="12" cy="12" r="10" />
              <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12Z" />
            </svg>
          </span>
          <h1 className="text-2xl font-semibold tracking-tight">
            {dict.work.resourcesTitle}
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} item={resource} />
          ))}
        </div>
      </section>
    </div>
  );
}