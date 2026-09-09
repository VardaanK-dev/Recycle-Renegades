import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, isLocale } from "./lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathSegments = pathname.split("/").filter(Boolean);
  const firstSegment = pathSegments[0] ?? "";

  const response = NextResponse.next();
  response.headers.set("x-pathname", pathname);
  response.headers.set("x-vercel-pathname", pathname);

  if (PUBLIC_FILE.test(pathname)) {
    return response;
  }

  if (pathname === "/") {
    const acceptLanguage = request.headers.get("accept-language") ?? "";
    const preferred = pickLocale(acceptLanguage);
    const url = request.nextUrl.clone();
    url.pathname = `/${preferred}/`;
    return NextResponse.redirect(url);
  }

  if (pathname.startsWith("/api")) {
    return response;
  }

  if (!isLocale(firstSegment)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return response;
}

function pickLocale(acceptLanguage: string): string {
  if (!acceptLanguage) return defaultLocale;
  const requested = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase().slice(0, 2))
    .filter((code) => code.length === 2);

  if (!requested.length) return defaultLocale;
  const supported = (locales as readonly string[]).find((code) =>
    requested.includes(code),
  );
  return supported ?? defaultLocale;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};