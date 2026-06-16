# Static HTML Bundle Download

Goal: produce a single downloadable `.zip` containing plain HTML/CSS/JS versions of every page, ready to open locally or upload to any host (Bluehost, GitHub Pages, Netlify, etc.).

## What you'll get

A zip file at `/mnt/documents/almustafa-html-site.zip` with this layout:

```
index.html        (home)
hajj.html
umrah.html
ziyarah.html
testimonials.html
contact.html
assets/           (CSS + JS bundles)
favicon.ico
.htaccess         (SPA-style fallback for Apache/Bluehost)
```

Each `*.html` is a fully rendered snapshot of the page (so it displays correctly even with JS disabled), plus the React bundle that hydrates interactivity (language toggle, mobile menu, WhatsApp button, animations).

## Steps

1. **Build the client** with Vite to produce hashed `assets/*.css` and `assets/*.js` bundles in `dist/client/`.
2. **Prerender each route** by fetching it from the published site (`caravan-pathways.lovable.app`) and saving the HTML.
3. **Rewrite asset URLs** in each HTML file so they point to the local `assets/` folder (no dependency on the Lovable CDN for code/styles). Logo + hero images stay as absolute CDN URLs so they keep working.
4. **Strip Lovable-only scripts** (`flock.js`, `events.js`, error reporters) that don't exist outside the Lovable runtime.
5. **Add `.htaccess`** for clean URLs on Apache hosts (e.g. `/hajj` → `hajj.html`).
6. **Zip the folder** to `/mnt/documents/almustafa-html-site.zip` and present a download link.

## Caveats

- Server-only features (TanStack `createServerFn`, `src/routes/api/*`) won't run from a static host. The current site doesn't rely on any for visible features, so nothing breaks.
- Lovable Cloud (auth/DB/storage) would still work from the browser if you later add such features — the bundle talks to Lovable Cloud directly.
- After any future site change, the bundle needs to be regenerated (asset hashes change each build).

## Confirm

- Use the **published** site (`caravan-pathways.lovable.app`) as the prerender source? (recommended — matches what visitors see)
- Target filename `almustafa-html-site.zip` OK, or prefer another name?
