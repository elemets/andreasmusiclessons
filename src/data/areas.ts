// src/data/areas.ts
// Content for the per-neighborhood landing pages.
//
// IMPORTANT: each entry must stay substantively different from the others.
// Near-duplicate pages that only swap a city name are treated by Google as
// "doorway pages" and can suppress the whole site. If you add an area, write
// real copy for it rather than copying a neighbour and find-replacing.
//
// These pages will perform far better once Andrea adds genuinely local detail:
// a school her students attend, a recital venue, a nearby landmark she drives
// past. Placeholders are deliberately factual and modest so nothing here
// claims experience she does not have.

import type { ServedArea } from './site';

export const AREAS: ServedArea[] = [
  {
    slug: 'beverly-hills',
    name: 'Beverly Hills',
    placeName: 'Beverly Hills, CA',
    title: 'Piano & Voice Lessons in Beverly Hills | Andrea Coutinho',
    description:
      'Private in-home piano and voice lessons in Beverly Hills with Berklee-trained teacher Andrea Coutinho. Lessons for children, teens and adults, taught at your home.',
    heading: 'Private piano & voice lessons in Beverly Hills',
    intro:
      'Andrea teaches piano, voice, music theory and songwriting in students’ homes throughout Beverly Hills — from the flats south of Sunset to the canyon streets above it. Lessons are one-to-one, booked at a standing weekly time, and taught on your own instrument, so a child practises all week on exactly the piano they learn on.',
    detail:
      'Families in Beverly Hills are often balancing school, sport and a full afternoon calendar. A teacher who comes to you removes a round trip from the week, which is usually the difference between a student practising consistently and quietly drifting away from the instrument. Andrea holds a Bachelor of Music in Composition from Berklee College of Music and teaches beginners through advanced students from age seven upwards.',
    highlights: [
      'Weekday afternoon and evening slots for students at nearby schools',
      'Taught on your own piano, so practice and lessons never diverge',
      'Beginners through advanced, ages seven and up',
    ],
  },
  {
    slug: 'brentwood',
    name: 'Brentwood',
    placeName: 'Brentwood, Los Angeles, CA',
    title: 'Piano & Voice Lessons in Brentwood, Los Angeles | Andrea Coutinho',
    description:
      'In-home piano and voice lessons in Brentwood with Berklee graduate Andrea Coutinho. Weekly one-to-one lessons for children, teens and adults, taught at your home.',
    heading: 'Private piano & voice lessons in Brentwood',
    intro:
      'Brentwood sits between San Vicente and the hills north of Sunset, and it is one of the areas Andrea travels to most regularly. She teaches piano and voice at home, one student at a time, with lessons built around what that particular student is trying to do — whether that is a first scale, a school audition, or finishing an original song.',
    detail:
      'Brentwood has a high concentration of school-age musicians, and the pressure that comes with that is real. Andrea’s approach is deliberately unhurried: clear technical foundations, repertoire the student actually wants to play, and honest feedback given without the anxiety that makes children quit. Parents are welcome to sit in, and are given a straight account of how practice is going rather than a reassuring one.',
    highlights: [
      'A regular weekly slot held for your family through the school year',
      'Repertoire chosen with the student, not assigned from a fixed syllabus',
      'Direct feedback to parents on practice and progress',
    ],
  },
  {
    slug: 'hidden-hills',
    name: 'Hidden Hills',
    placeName: 'Hidden Hills, CA',
    title: 'Piano & Voice Lessons in Hidden Hills | Andrea Coutinho',
    description:
      'Private in-home piano, voice and songwriting lessons in Hidden Hills. Berklee-trained teacher Andrea Coutinho travels to you for weekly one-to-one lessons.',
    heading: 'Private piano & voice lessons in Hidden Hills',
    intro:
      'Hidden Hills is gated and residential, and getting a child to an outside studio means a drive down to the valley floor and back for every single lesson. Andrea comes to the house instead. Lessons cover piano, voice, music theory and songwriting, and she is happy to be added to a gate list or arranged through a house manager.',
    detail:
      'Because Hidden Hills homes tend to have the space for a proper instrument, students here often have an excellent piano and no consistent teaching to go with it. Andrea builds a structured long-term plan around the instrument you already own — technique, ear training and repertoire developing together rather than a student learning one piece by rote at a time.',
    highlights: [
      'No drive off the property for a weekly lesson',
      'Gate access arranged in advance with the family or house manager',
      'Long-term plans built around the instrument already in your home',
    ],
  },
  {
    slug: 'calabasas',
    name: 'Calabasas',
    placeName: 'Calabasas, CA',
    title: 'Piano & Voice Lessons in Calabasas | Andrea Coutinho',
    description:
      'In-home piano and voice lessons in Calabasas with Berklee graduate Andrea Coutinho. One-to-one weekly lessons for children, teens and adults at your home.',
    heading: 'Private piano & voice lessons in Calabasas',
    intro:
      'Andrea teaches across Calabasas, from the neighbourhoods off Las Virgenes to the streets around Old Town. Lessons are private, weekly, and taught at home — piano, voice, music theory and songwriting, for children from age seven as well as teenagers and adults.',
    detail:
      'A lot of Calabasas students come to Andrea somewhere in the middle: a few years of lessons behind them, some real ability, and a sense that things have stalled. That is usually a foundations problem rather than a talent one. Andrea rebuilds technique and reading deliberately, and students generally find that pieces which felt out of reach stop being difficult once the underlying mechanics are sound.',
    highlights: [
      'Strong fit for students who have plateaued after a few years of lessons',
      'Technique and sight-reading rebuilt properly, not patched over',
      'Songwriting and theory available alongside piano or voice',
    ],
  },
  {
    slug: 'bel-air',
    name: 'Bel Air',
    placeName: 'Bel Air, Los Angeles, CA',
    title: 'Piano & Voice Lessons in Bel Air | Andrea Coutinho',
    description:
      'Private in-home piano and voice lessons in Bel Air, Los Angeles. Berklee-trained teacher Andrea Coutinho travels to your home for weekly one-to-one lessons.',
    heading: 'Private piano & voice lessons in Bel Air',
    intro:
      'The roads above Sunset are slow, and that turns a thirty-minute lesson at an outside studio into most of an afternoon. Andrea teaches in Bel Air homes instead, covering piano, voice, music theory and songwriting in weekly one-to-one lessons.',
    detail:
      'Andrea works with complete beginners and with students preparing something specific — a school audition, a recital, a piece they have wanted to play for years. She holds a Bachelor of Music in Composition from Berklee College of Music, and teaches voice and piano with the same emphasis: sound technical habits first, so that the repertoire a student cares about becomes reachable rather than forced.',
    highlights: [
      'No canyon drive for a thirty-minute lesson',
      'Audition, recital and exam preparation when a student wants it',
      'Berklee-trained in composition, voice and piano',
    ],
  },
  {
    slug: 'pacific-palisades',
    name: 'Pacific Palisades',
    placeName: 'Pacific Palisades, Los Angeles, CA',
    title: 'Piano & Voice Lessons in Pacific Palisades | Andrea Coutinho',
    description:
      'In-home piano and voice lessons in Pacific Palisades with Berklee graduate Andrea Coutinho. Weekly one-to-one lessons for children, teens and adults.',
    heading: 'Private piano & voice lessons in Pacific Palisades',
    intro:
      'Andrea teaches piano, voice, music theory and songwriting in Pacific Palisades homes. Lessons are private and weekly, taught at a standing time, and shaped around the individual student rather than a fixed curriculum.',
    detail:
      'Music is a steadying thing to have in a household, and a weekly lesson that simply arrives — same day, same time, on the family’s own instrument — is a large part of what makes a student stick with it. Andrea teaches children from age seven, teenagers, and adults returning to an instrument after a long gap, and is glad to talk through what would suit your family before anything is booked.',
    highlights: [
      'A consistent weekly time held for your family',
      'Children from age seven, teens, and returning adult students',
      'An unhurried conversation first, before any commitment',
    ],
  },
  {
    slug: 'santa-monica',
    name: 'Santa Monica',
    placeName: 'Santa Monica, CA',
    title: 'Piano & Voice Lessons in Santa Monica | Andrea Coutinho',
    description:
      'Private in-home piano, voice and songwriting lessons in Santa Monica. Berklee-trained teacher Andrea Coutinho comes to you for weekly one-to-one lessons.',
    heading: 'Private piano & voice lessons in Santa Monica',
    intro:
      'Andrea travels to students across Santa Monica, including the streets north of Montana and the neighbourhoods around Ocean Park. She teaches piano, voice, music theory and songwriting privately at home, for children from age seven through to adults.',
    detail:
      'Santa Monica brings her a particularly wide mix — young beginners, teenagers writing their own material, and adults who played seriously once and want to get back to it. Andrea’s composition training from Berklee means a student who wants to write, not just perform, can do that properly: chord movement, song structure, lyric and melody worked on as real craft rather than as an afterthought.',
    highlights: [
      'Songwriting taught as craft, from a Berklee composition graduate',
      'Adults returning to an instrument are genuinely welcome',
      'Piano, voice and theory available in the same lesson track',
    ],
  },
  {
    slug: 'malibu',
    name: 'Malibu',
    placeName: 'Malibu, CA',
    title: 'Piano & Voice Lessons in Malibu | Andrea Coutinho',
    description:
      'In-home piano and voice lessons in Malibu with Berklee graduate Andrea Coutinho. Private weekly lessons for children, teens and adults, taught at your home.',
    heading: 'Private piano & voice lessons in Malibu',
    intro:
      'Malibu is spread thin along the coast, and for most families here the nearest music studio is a serious drive in traffic. Andrea teaches at home instead — piano, voice, music theory and songwriting, one student at a time, at a regular weekly slot.',
    detail:
      'Because of the distance, Malibu lessons are best arranged as a consistent standing appointment, and Andrea keeps only a limited number of slots out this way. Longer lesson lengths often work better here than a short weekly visit, and that is worth discussing when you get in touch so the arrangement genuinely suits both the student and the drive.',
    highlights: [
      'A limited number of standing Malibu slots each week',
      'Longer lesson formats available and often a better fit',
      'Taught at home, with no drive down the coast',
    ],
  },
];

export const AREA_BY_SLUG = new Map(AREAS.map((area) => [area.slug, area]));
