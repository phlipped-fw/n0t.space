# n0t.space

Monorepo for `n0t.space` (Astro) + `docs.n0t.space` (Starlight).

The blog (`n0t.space/blog/`) lives in a separate repo and is mounted via reverse proxy / subpath rewrite at deploy time.

## Layout

```
apps/
  site/   # n0t.space — landing, /about, /portfolio, /phlipped, /talks, /projects
  docs/   # docs.n0t.space — PHLIPPED documentation (Starlight)
```

## Develop

```bash
npm install
npm run dev:site   # http://localhost:4321
npm run dev:docs   # http://localhost:4322
```

## Build

```bash
npm run build
```

## Deploy

Each app builds to `apps/<name>/dist`. Wire to Cloudflare Pages / Vercel / Netlify per app.
