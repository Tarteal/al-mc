# Prepare Static Build for Bluehost

Goal: produce a folder of static files you can upload to Bluehost's `public_html` via cPanel File Manager or FTP, with SPA routing working on refresh/deep links.

## Important caveats (please confirm you accept)

- Bluehost shared hosting runs Apache/PHP — it does **not** run Node.js.
- Server-side features will **not** run on Bluehost:
  - `createServerFn` server functions
  - `src/routes/api/*` server routes (webhooks, etc.)
  - SSR-rendered meta tags (crawlers see the static fallback HTML)
- The frontend + Lovable Cloud (auth, database, storage) still work because the browser calls Lovable Cloud directly.
- If the app currently uses any server function, those calls will fail on Bluehost. (I'll scan and flag them before building.)

## Steps

1. **Audit server-side usage**
   - Search the project for `createServerFn` and `src/routes/api/*`.
   - List anything that won't work on Bluehost so you can decide: accept the limitation, or move that logic to a Lovable Cloud function.

2. **Add Apache SPA fallback**
   - Create `public/.htaccess` with:
     - `RewriteEngine On`
     - Pass-through for existing files/dirs
     - Fallback all other requests to `/index.html`
     - Basic cache headers for `/assets/*` (long cache) and `index.html` (no-cache)

3. **Produce the static build**
   - Run the project's client build (Vite output goes to `dist/client`).
   - Verify `dist/client/index.html`, `dist/client/assets/`, and `.htaccess` are present.
   - Zip `dist/client/` contents into `bluehost-upload.zip` for easy upload.

4. **Provide upload instructions**
   - cPanel → File Manager → `public_html` (or a subfolder/subdomain).
   - Upload + extract the zip so `index.html` sits at the web root.
   - Make sure "Show Hidden Files" is on so `.htaccess` is uploaded.
   - Confirm site loads and `/ziyarah`, `/hajj`, `/umrah` work on refresh.

## Technical details

- `.htaccess` contents:
  ```
  Options -MultiViews
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  RewriteRule . /index.html [L]
  ```
- Lovable Cloud env vars (`VITE_SUPABASE_*`) are inlined at build time, so the deployed bundle continues to talk to your Lovable Cloud project from Bluehost.
- If you host under a subfolder (e.g. `example.com/app/`), the build needs a base path adjustment — tell me the target URL before I build.

## Confirm before I proceed

- Target location on Bluehost: **root domain** (`public_html`) or a **subfolder/subdomain**?
- OK to ignore SSR meta tags / server functions for this deploy?
