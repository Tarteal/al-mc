Plan:

1. Fix the build error
   - Update `vite.config.ts` to use the package export that exists in this installed version: `@tanstack/react-start/plugin/vite` instead of `@tanstack/react-start/vite`.
   - Keep the existing TanStack Start setup intact so the current site continues working.

2. Verify the build path
   - Run the project build after the import fix and address any next error that appears.
   - Keep the Netlify build command as `npm install && npm run build` unless the verified output requires a different static publish directory.

3. Create a Netlify-ready HTML/static package
   - After the app builds, collect the generated static output into a zip under `/mnt/documents/` so you can download it.
   - Include the existing Netlify routing files (`netlify.toml` / `_redirects`) if they are still needed by the generated output.

4. If static export is not possible from the current app
   - Fall back to generating a simple plain HTML/CSS/JS copy of the visible pages: Home, Hajj, Umrah, Ziyarah, Testimonials, and Contact.
   - Package those files as a zip for direct Netlify drag-and-drop deployment.