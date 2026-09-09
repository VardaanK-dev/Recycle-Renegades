import type { Metadata } from "next";
import { getDictionary, isLocale, defaultLocale } from "@/lib/i18n";
import { FeedbackForm } from "@/components/feedback-form";

interface FeedbackPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: FeedbackPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return {
    title: dict.feedbackPage.metaTitle,
    description: dict.feedbackPage.metaDescription,
    alternates: {
      canonical: `/${locale}/feedback`,
      languages: {
        "en-US": "/en/feedback",
        ja: "/ja/feedback",
        "ur-PK": "/ur/feedback",
        "es-ES": "/es/feedback",
        fr: "/fr/feedback",
        ta: "/ta/feedback",
        hi: "/hi/feedback",
      },
    },
    openGraph: {
      title: dict.feedbackPage.metaTitle,
      description: dict.feedbackPage.metaDescription,
      locale: locale === "en" ? "en_US" : locale,
      url: `/${locale}/feedback`,
    },
  };
}

export default async function FeedbackPage({ params }: FeedbackPageProps) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.feedback.title}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {dict.feedback.subtitle}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <FeedbackForm dict={dict} />
        </div>

        <aside className="space-y-6" aria-label={dict.feedback.details.title}>
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">
              {dict.feedback.details.title}
            </h2>
            <p className="text-sm leading-6 text-muted-foreground">
              {dict.feedback.details.response}
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">
              {dict.footer.social}
            </h2>
            <a
              href="https://www.instagram.com/recycle.renegades/"
              aria-label="Recycle Renegades on Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm font-medium text-primary hover:underline"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              @recycle.renegades
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}