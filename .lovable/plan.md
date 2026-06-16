## Goal
Host the frontend on Netlify (free subdomain) as a static SPA. Keep Lovable Cloud (Supabase under the hood) as the backend for any auth/database/storage.

## Important caveats before we proceed

1. **This project is TanStack Start (SSR-first), not a plain SPA.**
   A "static/SPA" build means we'll lose any server-only behavior:
   - `createServerFn` handlers will not run on Netlify (no Node/Worker runtime in a static deploy).
   - Server routes under `src/routes/api/*` will not exist.
   - SSR-rendered meta tags / OG tags become whatever is in the prerendered HTML only.
   Today the project looks mostly presentational (Hero, Nav, Ziyarah pages), so this is probably fine — but if later you add things like webhooks, server-side Supabase admin work, or signed-in server fns, they won't work on Netlify static. They'd need to move to Supabase Edge Functions or you'd need to switch to Netlify's SSR adapter.

2. **Lovable Cloud backend keeps working from the browser.**
   The browser Supabase client (`@/integrations/supabase/client`) uses the publishable key + `VITE_SUPABASE_URL`. As long as those `VITE_*` env vars are set in Netlify's build environment, auth/db/storage calls from the frontend will continue to work against your existing Cloud project.

3. **Google/Apple sign-in via Lovable broker** is tied to the `*.lovable.app` origin. If you use social login, the redirect flow may need adjustment for a non-lovable origin. Email/password works fine.

4. **Lovable itself does not auto-deploy to Netlify.** You'll connect your own GitHub repo (via Lovable's GitHub integration) to Netlify, and Netlify will build from there.

## Plan

### Step 1 — Add Netlify config files to the repo
- `netlify.toml` at project root:
  - `command = "bun run build"`
  - `publish = "dist"` (TanStack Start's static output dir; we'll verify after first build)
  - Node/Bun version pin
- `public/_redirects` with `/*  /index.html  200` so client-side routes (e.g. `/ziyarah`, `/hajj`) work on refresh.

### Step 2 — Force a static/SPA build
TanStack Start defaults to an SSR build targeting Cloudflare. We need to either:
- (a) Configure the build to emit a static SPA (prerender all routes, no server output), or
- (b) Keep SSR off by ensuring no route uses server fns / loaders that require a server.

I'll inspect `vite.config.ts` + `src/router.tsx` + `src/start.ts` and add the minimal config to produce a static `dist/` suitable for Netlify static hosting. If full prerender of every route isn't viable, fall back to a SPA shell + `_redirects`.

### Step 3 — Document the env vars to set in Netlify
In Netlify → Site settings → Environment variables, add:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID` (if used)

(These come from your current Lovable Cloud project; I'll pull the exact values for you.)

### Step 4 — Connect repo to Netlify (you do this once, in Netlify UI)
1. In Lovable: GitHub → Connect to GitHub → push the project to a repo.
2. In Netlify: "Add new site → Import from Git" → pick the repo.
3. Netlify auto-detects `netlify.toml`. Paste the env vars from Step 3.
4. Deploy. You get a free `*.netlify.app` subdomain.

### Step 5 — Verify
- Visit the Netlify URL, hard-refresh `/ziyarah`, `/hajj`, `/umrah` to confirm `_redirects` works.
- Confirm background images and assets load.
- Confirm any Supabase calls succeed from the browser.

## What I need from you to proceed
- Confirm you're OK losing any server-side behavior (point 1 above). The current site looks static enough that this should be a non-issue, but flagging it.
- Confirm you're using email/password auth (not Google/Apple) — or that you're OK adjusting redirect URLs later if you do use social.

Once you approve, switch me to build mode and I'll add `netlify.toml`, `public/_redirects`, adjust the build config, and give you the exact env-var values to paste into Netlify.