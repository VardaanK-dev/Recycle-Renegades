import Link from "next/link";
import { getDictionary, defaultLocale } from "@/lib/i18n";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  const dict = getDictionary(defaultLocale);
  const isRtl = defaultLocale === "ur";

  return (
    <html lang={defaultLocale} dir={isRtl ? "rtl" : "ltr"}>
      <body className="bg-background text-foreground antialiased">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="text-7xl font-bold text-primary sm:text-8xl">
            {dict.notFound.code}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight">
            {dict.notFound.title}
          </h1>
          <p className="mt-3 max-w-md text-muted-foreground">
            {dict.notFound.text}
          </p>
          <Link
            href={`/${defaultLocale}`}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {dict.notFound.cta}
          </Link>
        </div>
      </body>
    </html>
  );
}
