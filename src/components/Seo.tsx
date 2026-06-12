// src/components/Seo.tsx
// Lightweight per-route SEO: updates title, meta description, canonical and
// Open Graph tags on navigation (SPA routes otherwise share one set of tags).
import { useEffect } from 'react';

const SITE_URL = 'https://andreacoutinho.com';

type SeoProps = {
  title: string;
  description: string;
  path: string; // route path, e.g. '/about'
};

const setMetaContent = (selector: string, content: string) => {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute('content', content);
};

const Seo: React.FC<SeoProps> = ({ title, description, path }) => {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '/' : path}`;

    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', url);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', url);
  }, [title, description, path]);

  return null;
};

export default Seo;
