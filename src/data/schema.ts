// src/data/schema.ts
// Builders for the JSON-LD blocks attached to individual routes.
//
// Deliberately NOT included: AggregateRating / Review markup on the business.
// Google's structured data policy disallows self-serving review markup — a
// business marking up testimonials collected on its own site — and using it
// risks a manual action rather than a rich result. Star ratings for a local
// business come from Google Business Profile reviews instead.

import { BUSINESS, SITE_URL, type ServedArea } from './site';
import type { Faq } from './faqs';

const BUSINESS_ID = `${SITE_URL}/#business`;
const PERSON_ID = `${SITE_URL}/#andrea`;

/** Andrea herself — supports the experience/expertise signals Google looks for. */
export const personSchema = (): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: BUSINESS.personName,
  jobTitle: 'Piano and Voice Teacher',
  description:
    'Berklee College of Music composition graduate teaching piano, voice, music theory and songwriting in students’ homes across the Los Angeles Westside.',
  url: `${SITE_URL}/about`,
  email: BUSINESS.email,
  telephone: BUSINESS.telephone,
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Berklee College of Music',
  },
  knowsAbout: ['Piano', 'Voice', 'Music Theory', 'Songwriting', 'Composition'],
  worksFor: { '@id': BUSINESS_ID },
});

export const faqSchema = (faqs: Faq[]): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
});

/** Per-neighbourhood service page: a Service tied to the business and place. */
export const areaServiceSchema = (area: ServedArea): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/piano-lessons/${area.slug}#service`,
  name: `Private piano and voice lessons in ${area.name}`,
  serviceType: 'Music lessons',
  description: area.description,
  url: `${SITE_URL}/piano-lessons/${area.slug}`,
  provider: {
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: BUSINESS.name,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    url: SITE_URL,
  },
  areaServed: { '@type': 'Place', name: area.placeName },
  audience: { '@type': 'Audience', audienceType: 'Children, teenagers and adults' },
});

export const breadcrumbSchema = (
  trail: { name: string; path: string }[],
): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: `${SITE_URL}${crumb.path}`,
  })),
});
