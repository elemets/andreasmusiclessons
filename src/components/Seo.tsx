// src/components/Seo.tsx
// Per-route SEO for a client-rendered SPA: keeps title, description, canonical,
// Open Graph and Twitter tags in sync on navigation, and injects any page-level
// JSON-LD structured data.
//
// Note: the same values are ALSO baked into the static HTML for each route by
// scripts/prerender.mjs at build time. That static copy is what crawlers and
// social scrapers read before any JavaScript runs; this component keeps things
// correct for in-app navigation. If you change a page's title or description,
// change it in the page component — the prerender script imports the same data.
import { useEffect } from 'react';
import { SITE_URL } from '../data/site';

type SeoProps = {
  title: string;
  description: string;
  /** Route path, e.g. '/about' */
  path: string;
  /** Absolute or site-relative image for social cards. */
  image?: string;
  /** JSON-LD objects to add for this page. */
  jsonLd?: Record<string, unknown>[];
};

const setMeta = (selector: string, content: string) => {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute('content', content);
};

const Seo: React.FC<SeoProps> = ({ title, description, path, image, jsonLd }) => {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '/' : path}`;

    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

    if (image) {
      const absolute = image.startsWith('http') ? image : `${SITE_URL}${image}`;
      setMeta('meta[property="og:image"]', absolute);
      setMeta('meta[name="twitter:image"]', absolute);
    }

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', url);
  }, [title, description, path, image]);

  // Page-level structured data. Tagged with a data attribute so we only ever
  // remove the nodes this component added, never the site-wide block in
  // index.html or the static block written by the prerender script.
  //
  // Keyed on the serialised value, not the array identity: callers build the
  // array inline, so a reference dependency would re-run this on every render.
  const jsonLdKey = jsonLd?.length ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    if (!jsonLdKey) return;

    document.head
      .querySelectorAll('script[data-seo-jsonld="route"]')
      .forEach((node) => node.remove());

    const blocks = JSON.parse(jsonLdKey) as Record<string, unknown>[];
    const added = blocks.map((block) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoJsonld = 'route';
      script.textContent = JSON.stringify(block);
      document.head.appendChild(script);
      return script;
    });

    return () => added.forEach((node) => node.remove());
  }, [jsonLdKey]);

  return null;
};

export default Seo;
