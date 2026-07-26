# Portfolio site

Nuxt 4 application behind [travisnickels.github.io/portfolio](https://travisnickels.github.io/portfolio/).
Statically generated and published to GitHub Pages.

## Requirements

Node 20 and npm. There is one lockfile, `package-lock.json`, and the deploy
workflow installs with `npm ci`.

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server on http://localhost:3000
npm run generate   # static build into .output/public
npm run preview    # serve the production build locally
npm run lint       # eslint
npm run typecheck  # vue-tsc
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml` at the repository
root, which runs `npm ci` and `npm run generate`, then publishes
`frontend/.output/public`.

The site is served from a subpath, so `app.baseURL` in `nuxt.config.ts` is
`/portfolio/` in production. GitHub Pages paths are case sensitive: if that
value stops matching the repository name exactly, every asset on the deployed
site 404s, not just internal links.

## Structure

| Path | Purpose |
| --- | --- |
| `app/pages/` | Routes |
| `app/components/` | Shared components |
| `app/content/projects/` | Project case studies as JSON, one file per slug |
| `app/assets/css/main.css` | Design tokens and the Nuxt UI bridge |
| `public/` | Copied verbatim into the build output |

Project pages are data driven. `app/pages/projects/[slug].vue` imports
`app/content/projects/<slug>.json`, so the filename must match the slug.
Anything placed in `public/` is published, including files nothing links to.
