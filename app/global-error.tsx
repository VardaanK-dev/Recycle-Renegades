"use client";

import { useEffect } from "react";
import { getDictionary, defaultLocale } from "@/lib/i18n";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const dict = getDictionary(defaultLocale);

  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang={defaultLocale} dir="ltr">
      <body className="bg-background text-foreground">
        <div className="flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center">
          <p className="text-7xl font-bold text-primary sm:text-8xl">
            {dict.errorPage.code}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight">
            {dict.errorPage.title}
          </h1>
          <p className="mt-3 max-w-md text-muted-foreground">
            {dict.errorPage.text}
          </p>
          {error.digest && (
            <p className="mt-2 text-xs text-muted-foreground">
              Digest: {error.digest}
            </p>
          )}
          <button
            type="button"
            onClick={reset}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {dict.errorPage.cta}
          </button>
        </div>
      </body>
    </html>
  );
}