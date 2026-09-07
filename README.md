# Andrea Coutinho — Music Coaching

Marketing site for private in-home piano, voice, music theory and songwriting
lessons across the Los Angeles Westside. React + TypeScript + Vite.

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check, bundle, prerender routes, generate sitemap
npm run lint
```

---

## Things that still need a human

These are the highest-value items left, roughly in order of impact.

### 1. Confirm the contact form is delivering

**The form used to be fake.** It waited 800ms and showed "Thank you" without
sending anything, so every enquiry submitted through the site was discarded.
It now posts to [Netlify Forms].

To finish the job:

1. Deploy, then open **Netlify → Forms**. A form named `contact` should appear.
2. Go to **Forms → Settings → Form notifications** and add an email
   notification to `music@andreacoutinho.com`. Without this, submissions sit in
   the dashboard and nobody is told about them.
3. Submit a real test enquiry through the live site and confirm the email
   arrives.

If the site is *not* hosted on Netlify, the POST will fail — and the visitor
now sees a genuine error with Andrea's email and phone number rather than a
false success. To switch providers (Formspree, Basin, Getform all work
similarly), change `FORM_ENDPOINT` in `src/pages/Contact.tsx`.

The hidden `<form name="contact">` in `index.html` is what makes Netlify create
the form handler — it scans built HTML and cannot see React-rendered markup.
**Do not delete it**, and keep its field names in sync with the real form.

### 2. Claim the Google Business Profile

For a local service business this outranks everything on this site. Searches
like "piano teacher near me" and the Google Maps pack are driven almost
entirely by the Business Profile, not by the website.

- Create/claim it as a **service-area business** (no public street address),
  listing Beverly Hills, Bel Air, Hidden Hills, Calabasas, Brentwood, Pacific
  Palisades, Santa Monica and Malibu.
- Category: *Music instructor* (add *Piano instructor*, *Singing teacher*).
- Then paste the profile URL, plus any Instagram / YouTube / LinkedIn, into the
  `sameAs` array in `index.html`. That array is currently empty on purpose:
  placeholder strings would make the structured data invalid.
- Ask happy families for Google reviews. Review count and recency are the
  strongest lever available, and review stars come from the Business Profile —
  which is why this site deliberately does **not** mark up its own
  testimonials with `AggregateRating` (Google disallows self-serving review
  markup and it risks a manual penalty).

### 3. Replace the placeholder testimonials

`src/data/testimonials.ts` gates every quote behind `verified: true`, and only
one is currently marked verified. The others were placeholder copy, and
publishing invented endorsements is both a credibility risk and, in the US, an
FTC problem.

For each one: confirm it is a real, verbatim quote, that you have permission to
publish it, then flip `verified` to `true`. Real names and specifics — a piece
learned, a recital, how long they studied — persuade parents far more than
generic praise.

### 4. Review the neighbourhood pages

`src/data/areas.ts` drives eight landing pages at `/piano-lessons/<area>`.
The copy is deliberately factual and modest so nothing claims experience Andrea
does not have, but it is written by someone who does not know her students.

Two things to do:

- **Read every page for accuracy** and rewrite anything that is not true of how
  she actually teaches. The Pacific Palisades page in particular is written in
  general terms and deserves a careful local read before it goes live.
- **Add real local detail** — a school her students attend, a recital venue, a
  landmark she drives past. Pages that differ only by city name are treated as
  "doorway pages" by Google and can drag down the whole domain. Genuine local
  specifics are what make them rank *and* convert.

### 5. Confirm the FAQ answers

`src/data/faqs.ts` is shown on the site and emitted as `FAQPage` structured
data, so every answer must be literally true. The pricing answer and the
lesson-length answer both need Andrea's sign-off.

### 6. Submit to Google

Once live: add the site to [Google Search Console], verify ownership, and
submit `https://andreacoutinho.com/sitemap.xml`. Then watch the Pages report
for indexing problems.

---

## How the SEO setup works

**The site is a client-rendered single-page app.** Before this, every URL served
the exact same `index.html`, so `/about`, `/contact` and every neighbourhood
page shipped the *home page's* title, description and canonical URL. Google
executes JavaScript and eventually saw the corrected tags, but social scrapers
(Facebook, LinkedIn, WhatsApp, iMessage, Slack) never run JavaScript at all —
so every shared link previewed as the home page.

`vite.config.ts` contains a `prerender` plugin that runs after the bundle is
written and, for each route in `src/data/routes.ts`:

- writes `dist/<route>/index.html` with that route's real title, description,
  canonical, Open Graph and Twitter tags baked into the static HTML;
- injects the route's JSON-LD structured data;
- mirrors the page's headline and summary into a `<noscript>` block;
- regenerates `dist/sitemap.xml` with today's date.

Static files take priority over the SPA fallback in `public/_redirects`, so
`/about` is served the prerendered file and React takes over from there.

### Adding a page

1. Add it to `src/data/routes.ts` (this is the single source of truth — the
   React pages *and* the prerender step both read from it).
2. Add the React route in `src/App.tsx`.

Adding a neighbourhood only requires an entry in `src/data/areas.ts`; the
route, page, sitemap entry, footer link and structured data are all generated
from it.

### Structured data

| Where | What |
|---|---|
| `index.html` | `LocalBusiness` — site-wide, service-area business |
| Home | `Person` (Andrea), `FAQPage` |
| About | `Person`, `BreadcrumbList` |
| Contact | `FAQPage` |
| Area pages | `Service`, `FAQPage`, `BreadcrumbList` |

Validate changes with the [Rich Results Test].

[Netlify Forms]: https://docs.netlify.com/manage/forms/setup/
[Google Search Console]: https://search.google.com/search-console
[Rich Results Test]: https://search.google.com/test/rich-results
