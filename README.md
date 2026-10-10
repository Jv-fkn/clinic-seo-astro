# Clinic SEO Astro

An SEO-first healthcare website built with [Astro](https://astro.build). It shows how to take a static HTML clinic site and rebuild it on a modern, scalable architecture **without changing its look**, with technical SEO handled by the framework instead of by hand on every page.

The clinic in this demo (Lumen Neurodiagnostics) is fictional. All content is illustrative and is not medical advice.

## What this project demonstrates

| Area | Implementation |
| --- | --- |
| Rendering | 100% static output, zero client-side JavaScript except a 4-line inline script on the contact form |
| Metadata framework | One `<Seo />` component generates title, meta description, canonical URL, Open Graph and Twitter/X tags for every page |
| Structured data | JSON-LD `@graph` with `MedicalOrganization`, `MedicalClinic` (LocalBusiness), `WebSite`, `BreadcrumbList`, `Service` / `MedicalProcedure`, `Article` / `MedicalWebPage` and `FAQPage` |
| Local SEO | Name, address, phone, geo coordinates and opening hours come from a single file (`src/data/site.ts`), so NAP data is identical in the footer, schema and contact page |
| Crawlability | Auto-generated XML sitemap, dynamic `robots.txt`, semantic HTML, breadcrumbs, clean URLs without `.html` or trailing slashes |
| Internal linking | Services and articles link to each other automatically through a `related` field |
| Content model | Knowledge hub articles are Markdown files validated by a typed schema (title length, description length, dates, FAQ) so SEO mistakes fail the build |
| Migration | 301 redirect map from legacy `.html` URLs, plus a pre and post-launch SEO checklist in `docs/` |
| Accessibility | Skip link, visible focus states, labelled form fields, `aria-current` navigation, reduced-motion support, legible type (Atkinson Hyperlegible) |

## Getting started

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
npm run preview  # serves the production build
```

## Project structure

```
src/
  components/
    Seo.astro           # metadata framework + JSON-LD output
    Breadcrumbs.astro   # visible breadcrumbs (schema is generated alongside)
    Trace.astro         # build-time SVG of an EEG trace, the site's signature visual
    Header.astro, Footer.astro
  content/articles/     # knowledge hub, one Markdown file per article
  content.config.ts     # typed content schema with SEO validation
  data/
    site.ts             # business data: NAP, hours, social profiles, site URL
    services.ts         # service pages
  lib/schema.ts         # schema.org JSON-LD builders
  pages/                # routes (file-based)
    robots.txt.ts       # robots.txt pointing at the sitemap
public/
  _redirects            # 301 redirect map for Netlify / Cloudflare Pages
docs/
  redirect-plan.md
  seo-migration-checklist.md
```

## Adding an article

Create `src/content/articles/my-new-article.md`:

```md
---
title: Short, specific title under 70 characters
description: A 70 to 160 character summary that will appear in search results.
published: 2026-10-01
readingMinutes: 4
faq:
  - q: A question patients ask
    a: The answer.
---

Article content in Markdown.
```

The page at `/articles/my-new-article`, its metadata, Article and FAQ schema, breadcrumbs, sitemap entry and listing on the hub are all generated automatically.

## Validating the SEO output

- Structured data: paste any page URL into [Google's Rich Results Test](https://search.google.com/test/rich-results) or the [Schema Markup Validator](https://validator.schema.org).
- Performance and Core Web Vitals: run Lighthouse in Chrome DevTools against `npm run preview`.
- Sitemap: `dist/sitemap-index.xml` after a build.

## Deployment

The `dist/` folder is plain static files and can be hosted anywhere. Netlify and Cloudflare Pages read `public/_redirects` automatically. Before deploying, set `url` in `src/data/site.ts` to the production domain, and set `PUBLIC_FORM_ACTION` to your form endpoint.

## License

MIT
