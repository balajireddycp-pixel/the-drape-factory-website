# The Drape Factory Public Website — Build 6.1 SEO Static Route Fix

Replace only:
- `vite.config.js`

This fixes the current production problem where `/robots.txt` and `/sitemap.xml`
fall through to the React SPA and return `index.html`.

Build 6.1 writes both SEO files directly into the final `dist/` folder during
every Vite production build, so Wrangler uploads them as real static assets.

After deployment verify:

1. `https://thedrapefactory.in/robots.txt`
   Cloudflare may prepend its Managed Content Signals. That is okay.
   Below that, you should see:
   - `User-agent: *`
   - `Allow: /`
   - `Sitemap: https://thedrapefactory.in/sitemap.xml`

   You should NOT see the website HTML.

2. `https://thedrapefactory.in/sitemap.xml`
   It should show XML containing:
   `<loc>https://thedrapefactory.in/</loc>`

   You should NOT see the homepage.

Build 6.0 SEO metadata stays in place.
Build 5.9 approved visuals and behavior remain unchanged.
ERP and Cloudflare configuration are untouched.

Recommended commit:
`Public Website Build 6.1 - SEO Static Route Fix`
