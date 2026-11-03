# omidfaryabi.ir

Personal website of Omid Faryabi, Frontend Developer & Technical Team Lead.
Built with Next.js 14 (App Router), Tailwind CSS and MDX.

## Languages

- **Persian (default, RTL)**: served at the root: `/`, `/about`, `/articles/...`
- **English**: served under `/en`: `/en`, `/en/about`, ...

`src/middleware.ts` rewrites root URLs to the `[lang]` segment. All page copy
lives in `src/i18n/dictionaries/fa.ts` and `en.ts`.

## Articles

Each article is a folder in `src/articles/<slug>/` with one MDX file per
language (`fa.mdx`, `en.mdx`). Each file exports an `article` object with
`title`, `description`, `author` and `date`.

## Font

The site uses **IRANSans DN** (`src/fonts/`). It is a commercial font from
fontiran.com; see `src/fonts/FontLicense.txt`.

## Development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL`. The
newsletter also needs `GMAIL_USER`, `GMAIL_APP_PASSWORD` and a Vercel Postgres
connection.
