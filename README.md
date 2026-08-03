# CoreDock website

Marketing landing page for CoreDock. Static single-page site built with Vite,
React and TypeScript. No backend, no runtime data, no analytics.

## Commands

```bash
npm install       # install dependencies
npm run dev       # dev server with HMR
npm run build     # typecheck + production build into dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

## Structure

```
index.html              document head: title, description, Open Graph, fonts
public/favicon.svg      CoreDock mark
src/index.css           design tokens, reset and every landing style
src/App.tsx             section order and the screenshot feature flag
src/productFacts.ts     verified metrics — the only place figures are defined
src/site.ts             shared public links
src/components/         Logo, WindowChrome, Terminal
src/sections/           one file per landing section
```

## Styling rules

Every colour used by the landing resolves to a custom property declared at the
top of `src/index.css`. Adding a raw colour literal to a rule is a regression —
add a token instead.

The landing is dark-only by design. It does not respond to
`prefers-color-scheme`, and it should not.

## Public figures

Every number the landing states lives in `src/productFacts.ts`, next to the
command that produced it. Both `EvidenceBar` and `IncludedModules` import from
there, so the two can never disagree.

Re-run all three commands before each release and update that one file:

```bash
docker compose exec -T backend pytest -q       # backend tests
cd frontend && npm run test -- --run           # frontend tests
cd frontend && npm run test:coverage -- --run  # frontend coverage
```

No combined backend+frontend coverage figure is published: `pytest-cov` is not
a product dependency, so backend coverage cannot be measured, and an
unverifiable number must never appear on the page.

## Open items before launch

These are tracked as `TODO` comments next to the code they affect:

- **`index.html`** — render `public/og_image.png` (1200x630) and add an
  absolute `og:url` once the domain is registered. Social platforms resolve
  `og:image` against the page URL, so the current relative path only works once
  the site is served from its real domain.
- **`src/sections/Pricing.tsx`** — set `PRICE` to the final amount and
  `CHECKOUT_URL` to the Polar checkout link. The live markup is already
  written; those two constants are the whole switch.
- **`src/App.tsx`** — capture the running application, save it as
  `public/screenshot_app.png`, and flip `SHOW_PRODUCT_SCREENSHOT` to `true`.
  The image must be a real capture, never a mockup: the section's entire claim
  is that it is not one.
