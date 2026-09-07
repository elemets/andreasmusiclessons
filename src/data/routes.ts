// src/data/routes.ts
// Single source of truth for every route's URL, title and meta description.
//
// Both the React pages and the build-time prerender step (see vite.config.ts)
// read from here, so the static HTML a crawler receives can never drift from
// what the app actually renders.

import { AREAS } from './areas';

export type RouteMeta = {
  path: string;
  title: string;
  description: string;
  /** Sitemap priority, 0-1. */
  priority: number;
  /** Short static copy injected into the pre-JS HTML for this route. */
  staticHeading: string;
  staticBody: string;
};

export const HOME_META: RouteMeta = {
  path: '/',
  title:
    'Private Piano & Voice Lessons in Beverly Hills, Calabasas & West LA | Andrea Coutinho',
  description:
    'Premium in-home piano, voice, music theory and songwriting lessons with Andrea Coutinho. Serving Beverly Hills, Hidden Hills, Calabasas, Brentwood, Bel Air, Pacific Palisades and the LA Westside.',
  priority: 1.0,
  staticHeading: 'Private music coaching in the comfort of your home',
  staticBody:
    'Premium one-on-one piano, voice, music theory and songwriting lessons with Andrea Coutinho, a Berklee College of Music graduate. Lessons are taught in your own home across Beverly Hills, Hidden Hills, Calabasas, Brentwood, Bel Air, Pacific Palisades, Santa Monica and Malibu, for children from age seven, teenagers and adults.',
};

export const ABOUT_META: RouteMeta = {
  path: '/about',
  title:
    'About Andrea Coutinho | Berklee-Trained Piano & Voice Teacher in Los Angeles',
  description:
    "Andrea Coutinho is a Berklee College of Music graduate teaching piano, voice, music theory and songwriting in students' homes across Beverly Hills, Calabasas, Brentwood and LA's Westside.",
  priority: 0.8,
  staticHeading: 'Meet Andrea',
  staticBody:
    'Andrea Coutinho holds a Bachelor of Music in Composition from Berklee College of Music. She has been playing piano and singing for 20 years and has taught privately for the last 4, working with children and adults who want a thoughtful, structured approach to learning music.',
};

export const CONTACT_META: RouteMeta = {
  path: '/contact',
  title:
    'Book Piano & Voice Lessons in Beverly Hills, Calabasas & West LA | Andrea Coutinho',
  description:
    'Request a free consultation for premium in-home piano and voice lessons with Andrea Coutinho — serving Beverly Hills, Hidden Hills, Calabasas, Brentwood and surrounding LA neighborhoods.',
  priority: 0.8,
  staticHeading: 'Request a consultation call',
  staticBody:
    'Share a bit about the student and Andrea will follow up with availability and next steps for in-home lessons. Email music@andreacoutinho.com or call +1 (770) 891-8775.',
};

export const areaMeta = (slug: string): RouteMeta => {
  const area = AREAS.find((item) => item.slug === slug);
  if (!area) throw new Error(`Unknown area slug: ${slug}`);
  return {
    path: `/piano-lessons/${area.slug}`,
    title: area.title,
    description: area.description,
    priority: 0.7,
    staticHeading: area.heading,
    staticBody: `${area.intro} ${area.detail}`,
  };
};

/** Every route that should be prerendered and listed in the sitemap. */
export const ALL_ROUTES: RouteMeta[] = [
  HOME_META,
  ABOUT_META,
  CONTACT_META,
  ...AREAS.map((area) => areaMeta(area.slug)),
];
