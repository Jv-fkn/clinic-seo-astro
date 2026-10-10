# SEO migration checklist

## Before launch

- [ ] Crawl and save the current site (URLs, titles, descriptions, H1s, status codes)
- [ ] Record baseline metrics: Search Console clicks and impressions, top queries, Core Web Vitals
- [ ] Complete the redirect map (see `redirect-plan.md`) and test it on the preview deployment
- [ ] Confirm every page has a unique title and meta description (enforced for articles by the content schema)
- [ ] Confirm canonical URLs point to the clean production URLs
- [ ] Validate JSON-LD on one page of each type with the Rich Results Test
- [ ] Check `robots.txt` allows crawling on production and the preview is not indexable
- [ ] Run Lighthouse on home, a service page and an article (mobile)
- [ ] Verify forms submit and arrive at the right inbox
- [ ] Confirm Google Business Profile name, address and phone match `src/data/site.ts`

## Launch day

- [ ] Deploy and verify redirects on the live domain
- [ ] Submit `sitemap-index.xml` in Google Search Console and Bing Webmaster Tools
- [ ] Request indexing for the home page and key service pages
- [ ] Spot-check old URLs from backlinks and social posts

## First 4 weeks

- [ ] Monitor Search Console for 404s and crawl errors weekly; add redirects for anything missed
- [ ] Compare clicks and impressions with the baseline (a small dip in the first 1 to 2 weeks is normal)
- [ ] Watch the Core Web Vitals report as field data comes in
- [ ] Check that rich results (FAQ, breadcrumbs) start appearing for articles
