# The Drape Factory — Public Website Build 1

Deployment-ready React + Vite package for the public website.

## Local preview

```bash
npm install
npm run dev
```

## Production build

```bash
npm install
npm run build
```

The compiled website is written to `dist/`.

## Cloudflare deployment

Create a **separate** Cloudflare project for the public website. Do not replace the existing ERP project.

Recommended settings:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Production domain: `thedrapefactory.in`
- `www.thedrapefactory.in`: redirect to `https://thedrapefactory.in`
- Keep ERP at `erp.thedrapefactory.in`

## Project structure

- `src/App.jsx` — website UI
- `src/main.jsx` — React entry point
- `index.html` — HTML shell and metadata
- `vite.config.js` — Vite configuration
- `package.json` — dependencies and scripts

## Important

Build 1 intentionally does not invent phone numbers, addresses, pricing, or service-area claims. Replace placeholders/content only with verified business information.
