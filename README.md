# newAng docs

NG-ZORRO / Angular Material-style documentation site for the
[`newang`](https://www.npmjs.com/package/newang) component library, hosted at
**newang.noecore.com**. Built with Angular 22 + NewAng itself — every page
dogfoods `na-*` components and follows the library's philosophies (dark-only,
flat static colors, inputs instead of CSS).

## Develop

```bash
npm ci
npm start        # http://localhost:4200
npm run build    # output in dist/newang-docs/browser
```

## Content model

- `src/app/data/nav.ts` — sidebar groups (Start, Actions, Forms, Layout, Type, Display, Navigation, Overlay, Feedback, Shell).
- `src/app/data/component-docs.ts` — per-component tutorial data: description, when-to-use,
  zero-CSS rule, code snippets, API rows, do/don't rules.
- `src/app/pages/component-doc-page.ts` — renders one isolated live demo per component
  from that data (`@switch` on slug, signals for interactivity).
- `src/app/pages/install.ts` — Sass and plain-CSS install paths.
- `src/app/shared/` — `demo-card`, `code-block` (copy button), `api-table` (backed by `na-table`).

The docs site itself keeps SCSS (`src/styles.scss`) so it can demo token overrides;
consumer apps can use either the Sass entry or the compiled `newang/styles.css`.

To add a component: extend `COMPONENT_DOCS` + `DOCS_GROUPS`, add its live demo branch
to `ComponentDocPage`, add the route automatically via `components/:slug`.

## Deploy (Coolify)

Coolify builds `compose.yaml` and routes `newang.noecore.com` → service `docs:80`
(TLS handled by Coolify). The image is a multi-stage build: Node compiles the
Angular SPA, nginx serves it with SPA fallback + immutable caching for hashed assets.

```bash
docker compose up --build -d
curl localhost/healthz   # ok
```
