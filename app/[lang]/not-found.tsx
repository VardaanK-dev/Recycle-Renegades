"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary, isLocale, defaultLocale } from "@/lib/i18n";

export default function LangNotFound() {
  const pathname = usePathname();
  const first = pathname.split("/").filter(Boolean)[0] ?? "";
  const locale = isLocale(first) ? first : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-7xl font-bold text-primary sm:text-8xl">
        {dict.notFound.code}
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">
        {dict.notFound.title}
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        {dict.notFound.text}
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/${locale}`}
          className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {dict.notFound.cta}
        </Link>
        <Link
          href={`/${defaultLocale}`}
          className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-card px-7 text-sm font-semibold text-card-foreground transition-colors hover:bg-secondary"
        >
          English
        </Link>
      </div>
    </div>
  );
}