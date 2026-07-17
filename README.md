# Raman Sapezhka — Performance Engineer

Personal landing page: free 30-minute diagnostic call for SaaS / e-commerce performance work.

## Stack

- [Astro](https://astro.build/) + Tailwind CSS v4
- Design system: **Production Clarity** (teal accent, JetBrains Mono metrics)

## Develop

```bash
npm install
npm run dev
```

## Configure

Edit [`src/data/site.ts`](src/data/site.ts):

- `bookingUrl` — Cal.com / Calendly link
- `email`, social links
- cases / copy as needed

Add a real photo later in `Hero` / `About` (replace the RS monogram).

## Theme

Defaults to **system** (`prefers-color-scheme`). Header toggle cycles: system → light → dark. Preference stored in `localStorage` (`pc-theme`).

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `master` build and publish via GitHub Actions → GitHub Pages.

- Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- Site URL (after Pages is live): https://shmidtelson.github.io/performance-engineer/
- Canonical domain (configured in Astro): https://sapezhko.com
