import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { ALL_ROUTES, type RouteMeta } from './src/data/routes';
import { AREAS } from './src/data/areas';
import { FAQS } from './src/data/faqs';
import { SITE_URL } from './src/data/site';
import {
  areaServiceSchema,
  breadcrumbSchema,
  faqSchema,
  personSchema,
} from './src/data/schema';

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** JSON-LD blocks baked into each route's static HTML. */
const schemaFor = (route: RouteMeta): Record<string, unknown>[] => {
  if (route.path === '/') return [personSchema(), faqSchema(FAQS)];
  if (route.path === '/about') {
    return [
      personSchema(),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'About Andrea', path: '/about' },
      ]),
    ];
  }
  if (route.path === '/contact') return [faqSchema(FAQS)];

  const area = AREAS.find((item) => `/piano-lessons/${item.slug}` === route.path);
  if (!area) return [];
  return [
    areaServiceSchema(area),
    faqSchema(FAQS.slice(0, 5)),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: `Piano lessons in ${area.name}`, path: route.path },
    ]),
  ];
};

/**
 * Writes one static HTML file per route.
 *
 * Why this exists: the site is a client-rendered SPA, so before this every URL
 * was served the SAME index.html — meaning /about and /contact and every
 * neighbourhood page shipped the home page's title, description and canonical
 * URL. Google can execute JavaScript and eventually sees the corrected tags,
 * but social scrapers (Facebook, LinkedIn, WhatsApp, iMessage, Slack) never run
 * JavaScript at all, so every shared link previewed as the home page.
 *
 * Page COPY is left to React and mirrored into <noscript>; it is the per-URL
 * head tags and structured data that have to be correct before JS runs.
 */
const prerender = (): Plugin => ({
  name: 'prerender-routes',
  apply: 'build',
  enforce: 'post',
  async closeBundle() {
    const outDir = path.resolve('dist');
    const template = await readFile(path.join(outDir, 'index.html'), 'utf8');

    for (const route of ALL_ROUTES) {
      const url = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
      const title = escapeHtml(route.title);
      const description = escapeHtml(route.description);

      let html = template
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
        .replace(
          /(<meta\s+name="description"\s+content=")[\s\S]*?(")/,
          `$1${description}$2`,
        )
        .replace(
          /(<meta\s+property="og:title"\s+content=")[\s\S]*?(")/,
          `$1${title}$2`,
        )
        .replace(
          /(<meta\s+property="og:description"\s+content=")[\s\S]*?(")/,
          `$1${description}$2`,
        )
        .replace(/(<meta\s+property="og:url"\s+content=")[\s\S]*?(")/, `$1${url}$2`)
        .replace(
          /(<meta\s+name="twitter:title"\s+content=")[\s\S]*?(")/,
          `$1${title}$2`,
        )
        .replace(
          /(<meta\s+name="twitter:description"\s+content=")[\s\S]*?(")/,
          `$1${description}$2`,
        )
        .replace(/(<link\s+rel="canonical"\s+href=")[\s\S]*?(")/, `$1${url}$2`);

      const jsonLd = schemaFor(route)
        .map(
          (block) =>
            `<script type="application/ld+json">${JSON.stringify(block)}</script>`,
        )
        .join('\n    ');

      if (jsonLd) html = html.replace('</head>', `  ${jsonLd}\n  </head>`);

      // Content mirror for anything that cannot run JavaScript at all.
      const fallback =
        `<noscript><h1>${escapeHtml(route.staticHeading)}</h1>` +
        `<p>${escapeHtml(route.staticBody)}</p>` +
        `<p>Contact Andrea Coutinho: ` +
        `<a href="mailto:music@andreacoutinho.com">music@andreacoutinho.com</a> · ` +
        `<a href="tel:+17708918775">+1 (770) 891-8775</a></p></noscript>`;
      html = html.replace('<div id="root"></div>', `${fallback}<div id="root"></div>`);

      const dir =
        route.path === '/' ? outDir : path.join(outDir, ...route.path.split('/').filter(Boolean));
      await mkdir(dir, { recursive: true });
      await writeFile(path.join(dir, 'index.html'), html, 'utf8');
    }

    // Sitemap, regenerated so lastmod never goes stale by hand.
    const today = new Date().toISOString().slice(0, 10);
    const sitemap =
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      ALL_ROUTES.map(
        (route) =>
          `  <url>\n` +
          `    <loc>${SITE_URL}${route.path === '/' ? '/' : route.path}</loc>\n` +
          `    <lastmod>${today}</lastmod>\n` +
          `    <changefreq>monthly</changefreq>\n` +
          `    <priority>${route.priority.toFixed(1)}</priority>\n` +
          `  </url>`,
      ).join('\n') +
      `\n</urlset>\n`;

    await writeFile(path.join(outDir, 'sitemap.xml'), sitemap, 'utf8');

    console.log(
      `\nprerender: wrote ${ALL_ROUTES.length} static routes + sitemap.xml`,
    );
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    prerender(),
  ],
});
