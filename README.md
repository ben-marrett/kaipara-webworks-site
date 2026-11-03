# Kaipara Webworks

Marketing site for Kaipara Webworks — web design for small businesses in Dargaville / Northland, NZ.

**Live:** https://kaiparawebworks.co.nz
**Hosting:** Netlify (deploys automatically from `main`)

## Stack

A hand-written static site. No framework, no bundler, no JS build step.

- Plain HTML — one file per page, at the repo root
- [Tailwind CSS](https://tailwindcss.com) v3, compiled via the Tailwind CLI
- Vanilla JS inline in `index.html` (nav toggle, smooth scroll, etc.)
- Netlify Forms for the contact and feedback forms
- Google Analytics 4 (`G-RQ1K9C19GL`), loaded after `window.onload` to protect PageSpeed

## Layout

```
index.html            Homepage — hero, services, portfolio, contact form
feedback.html         Review/feedback form (noindex, linked directly for clients)
success.html          Post-submit thank-you page
src/input.css         Tailwind source: directives + custom component styles
dist/styles.css       Compiled CSS — committed, since Netlify runs no build
tailwind.config.js    Custom `kw-*` colour palette, Inter/Lora fonts
public/               Favicons, webmanifest, portfolio images (PNG + WebP)
_headers              Netlify security headers
_redirects            Netlify redirect rules
robots.txt            Allows /, disallows /feedback and /success
sitemap.xml           Single-URL sitemap
Kaipara_Webworks_PRD.md   Original product brief
```

## Local development

Install dependencies once:

```bash
npm install
```

Rebuild the stylesheet while editing:

```bash
npx tailwindcss -i ./src/input.css -o ./dist/styles.css --watch
```

Then open `index.html` directly in a browser, or serve the folder:

```bash
npx serve .
```

Note that `_headers` and `_redirects` are Netlify features and have no effect locally.

## Deploying

Netlify builds from `main` — push and it ships. There is no `netlify.toml`, so the
publish directory, domain, and form settings all live in the Netlify UI rather than
in this repo.

**Before pushing any HTML change, rebuild the CSS:**

```bash
npx tailwindcss -i ./src/input.css -o ./dist/styles.css --minify
```

Tailwind scans `./*.html` and tree-shakes unused classes. Because `dist/styles.css`
is committed and Netlify runs no build command, a new class in the HTML will have no
styles in production unless the compiled file is rebuilt and committed alongside it.

## Forms

Both forms are Netlify Forms — marked with `data-netlify="true"`, a hidden
`form-name` input, and a `bot-field` honeypot. Submissions appear under **Forms**
in the Netlify dashboard; there is no server-side code in this repo.

- `index.html` — `contact`, posts to `/success`
- `feedback.html` — `feedback`, posts to `/feedback-success`

## Conventions

- Colours come from the `kw-*` palette in `tailwind.config.js` (e.g. `kw-deep-blue`,
  `kw-orange`, `kw-teal`). Prefer these over raw hex or stock Tailwind colours.
- Headings use Lora (`font-serif`), body copy uses Inter (`font-sans`). All headings
  get `font-serif` automatically from `src/input.css`.
- Images are served as WebP with a PNG fallback, and carry explicit `width`/`height`
  attributes to avoid layout shift.
- Google Fonts are preloaded asynchronously with a `<noscript>` fallback.
