import type { Metadata, Viewport } from "next";
import { Montserrat, Roboto } from "next/font/google";
import { lang } from "next/root-params";
import Script from "next/script";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  locales,
  getDictionary,
  isLocale,
  defaultLocale,
  langDirections,
  htmlLangs,
} from "@/lib/i18n";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://recycle-renegades.vercel.app";

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme')||'system';var m=window.matchMedia('(prefers-color-scheme: dark)');var r=t==='system'?(m.matches?'dark':'light'):t;var d=document.documentElement;d.classList.remove('light','dark');d.classList.add(r);d.style.colorScheme=r;}catch(e){}})()`;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const currentLang = await lang();
  const locale = isLocale(currentLang) ? currentLang : defaultLocale;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Recycle Renegades — Environmental Awareness Project",
      template: "%s | Recycle Renegades",
    },
    description:
      "Recycle Renegades raises awareness about plastic waste and its silent impact on the ocean and marine life. Discover how we research, educate, and inspire action.",
    keywords: [
      "recycle",
      "recycling",
      "plastic waste",
      "marine pollution",
      "marine life",
      "ocean",
      "sustainability",
      "environment",
    ],
    authors: [{ name: "Recycle Renegades" }],
    creator: "Recycle Renegades",
    formatDetection: { email: false, address: false, telephone: false },
    openGraph: {
      type: "website",
      url: `/${locale}/`,
      siteName: "Recycle Renegades",
      title: "Recycle Renegades — Environmental Awareness Project",
      description:
        "Recycle Renegades raises awareness about plastic waste and its silent impact on the ocean and marine life. Discover how we research, educate, and inspire action.",
      locale: locale === "en" ? "en_US" : locale,
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: "Recycle Renegades",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Recycle Renegades — Environmental Awareness Project",
      description:
        "Recycle Renegades raises awareness about plastic waste and its silent impact on the ocean and marine life. Discover how we research, educate, and inspire action.",
      images: ["/og-image.svg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
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
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

interface LangLayoutProps {
  children: React.ReactNode;
}

export default async function LangLayout({ children }: LangLayoutProps) {
  const currentLang = await lang();
  const locale = isLocale(currentLang) ? currentLang : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <html
      lang={htmlLangs[locale]}
      dir={langDirections[locale]}
      suppressHydrationWarning
    >
      <body
        className={`${montserrat.variable} ${roboto.variable} antialiased`}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <div className="flex min-h-screen flex-col">
            <Navbar dict={dict} locale={locale} />
            <main id="main">{children}</main>
            <Footer dict={dict} locale={locale} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}