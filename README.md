# Recycle Renegades

School IDP (Individual Development Project) website for the Recycle Renegades group,
working to turn mismanaged plastic into solutions.

- Motto: **Turning Mismanaged Plastic into Solutions**
- Pages: Research / Our Work, Your Feedback, About Us
- Multilingual: English, Japanese, Urdu (RTL), Spanish, French, Tamil, Hindi
- Features: light/dark theme, SEO + sitemap, accessibility (ARIA, semantic markup),
  security headers (Next.js config) + Helmet custom server, ESLint with security plugin

## Tech stack

- Next.js (App Router, static export-ready) + React + TypeScript
- Tailwind CSS v4 (CSS variables / dark mode class)
- ESLint (eslint-config-next + eslint-plugin-security)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Production

Run the static builder with the Helmet (Express) custom server:

```bash
npm run build
npm run start:helmet
```

## Localization

Copy lives in `lib/i18n.ts` (one dictionary per locale, typed via `typeof`).
Add entries for all 7 locales. Routing uses `app/[lang]/...` with locale-based
redirect from `/` (see `proxy.ts`). Urdu is RTL and handled via `htmlLangs`.

## Project data

`lib/projects.ts` holds the group's work (sorting station prototype, waste tracking
log, awareness campaign). Add `demo`/`source` URLs when a live artifact exists;
cards hide those links when empty.

## Deployment (Vercel + GitHub)

1. Push this repository to GitHub.
2. Import the repo at https://vercel.com/new and choose the **Next.js** framework.
3. Vercel auto-detects the Next.js build (`npm run build`, output `/.next`).
4. Optional: set the `NEXT_PUBLIC_SITE_URL` environment variable (e.g.
   `https://recycle-renegades.vercel.app`) so the generated sitemap uses the
   production domain.
5. The feedback form posts directly to FormSubmit from the browser — no server
   route or environment variable is required. The recipient endpoint is defined
   in `components/feedback-form.tsx`
   (`https://formsubmit.co/recycle.renegades@proton.me`, with the `@` encoded
   as `%40`). Note: the first submission triggers a FormSubmit activation
   email — no messages are forwarded until you click that link (check spam/Junk
   folders if it does not appear).

GitHub Actions CI (`.github/workflows/ci.yml`) runs lint, typecheck, and build on
every push and pull request.

## Feedback form

The form is a standard browser POST to FormSubmit directly — there is no API
route. The recipient endpoint lives in `components/feedback-form.tsx`.
Client-side validation runs first; a hidden honeypot field (`_honey`) deflects
bots, and FormSubmit's own spam controls apply on their side (their reCAPTCHA is
disabled with `_captcha=false`). The `_subject` and `_template` hidden fields
shape the delivered email.

Because the browser posts cross-origin, the `form-action` CSP directive in
`next.config.ts` allows `https://formsubmit.co`. This approach works on any
hosting — including static-only deployments — and never exposes server config.