import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://recycle-renegades.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "projects", "about", "feedback", "credits"] as const;

  return staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${route ? `/${route}` : ""}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((lang) => [lang, `${SITE_URL}/${lang}${route ? `/${route}` : ""}`]),
        ),
      },
    })),
  );
}