// src/data/site.ts
// Single source of truth for business details used across pages, structured
// data and the build-time prerender/sitemap script.

export const SITE_URL = 'https://andreacoutinho.com';

export const BUSINESS = {
  name: 'Andrea Coutinho Music Coaching',
  personName: 'Andrea Coutinho',
  email: 'music@andreacoutinho.com',
  telephone: '+1-770-891-8775',
  telephoneDisplay: '+1 (770) 891-8775',
  priceRange: '$$$',
} as const;

export type ServedArea = {
  /** URL slug: /piano-lessons/<slug> */
  slug: string;
  /** Display name, e.g. "Beverly Hills" */
  name: string;
  /** Full place name used in structured data */
  placeName: string;
  /** <title> for the area page */
  title: string;
  /** Meta description for the area page */
  description: string;
  /** H1 for the area page */
  heading: string;
  /** Opening paragraph — must be genuinely unique per area. */
  intro: string;
  /** Second paragraph: what lessons look like in this specific area. */
  detail: string;
  /** Three short, area-specific points. */
  highlights: string[];
};
