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
5. For the feedback form, set `FEEDBACK_FORM_ENDPOINT` to a webhook/API endpoint
   that should receive submissions (falls back to `CONTACT_FORM_ENDPOINT`). We use
   FormSubmit.co: `FEEDBACK_FORM_ENDPOINT=https://formsubmit.co/you@example.com`
   (URL-encode the `@` as `%40`). If unset, the API returns `503` instead of
   pretending the message was sent. Note: the first submission triggers a
   FormSubmit activation email — no messages are forwarded until it is confirmed.

GitHub Actions CI (`.github/workflows/ci.yml`) runs lint, typecheck, and build on
every push and pull request.

## Feedback form

The client posts `{ name, email, subject, message }` to `/api/feedback`, which
validates, sanitizes, and forwards the payload to `FEEDBACK_FORM_ENDPOINT`
(previously `CONTACT_FORM_ENDPOINT` when set). A hidden honeypot field
(`_honey`) is included to deflect bots without a captcha.

`/api/feedback` is a Next.js route handler, so it only runs on a Node/Vercel
runtime. If the site is deployed as static files only (e.g. the Helmet `start`
path), this route will not execute; the form would then need to post directly to
FormSubmit from the browser, which also requires relaxing the `connect-src` and
`form-action` entries in `next.config.ts` to allow `https://formsubmit.co`.