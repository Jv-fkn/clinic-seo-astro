# Redirect plan

Goal: every URL that exists today keeps its traffic and link equity after the rebuild.

## Process

1. **Inventory.** Export every indexed URL from Google Search Console (Pages report), the current sitemap and a crawl of the live site (Screaming Frog or similar). Merge and de-duplicate.
2. **Map.** Pair each old URL with its new clean URL in a spreadsheet. Pages that are merged point to the closest equivalent, never to the home page by default.
3. **Implement.** Add one `301` rule per row in `public/_redirects` (Netlify, Cloudflare Pages) or in `vercel.json` (Vercel):

```json
{
  "redirects": [
    { "source": "/eeg-routine.html", "destination": "/services/routine-eeg", "permanent": true }
  ]
}
```

4. **Avoid chains.** Every rule must point directly to the final URL. No old URL should pass through more than one redirect.
5. **Test.** Before launch, request every old URL on the preview deployment and confirm a single 301 to a page returning 200.

## Example map used in this demo

| Old URL | New URL |
| --- | --- |
| `/services.html` | `/services` |
| `/eeg-routine.html` | `/services/routine-eeg` |
| `/eeg-sleep.html` | `/services/sleep-deprived-eeg` |
| `/eeg-ambulatory.html` | `/services/ambulatory-eeg` |
| `/knowledge-hub.html` | `/articles` |
| `/knowledge-hub/what-is-eeg.html` | `/articles/what-is-an-eeg` |
| `/contact.html`, `/referral.html` | `/contact` |
