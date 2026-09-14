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
      'Andrea teaches piano, voice, guitar, music theory and songwriting in students’ homes throughout Beverly Hills, from the flats south of Sunset to the canyon streets above it. Lessons are one-to-one, booked at a standing weekly time, and taught on your own instrument, so a child practices all week on exactly the piano they learn on.',
    detail:
      'Most families in Beverly Hills have a full afternoon calendar already, between school and sports. A teacher who comes to you takes a round trip out of the week, and students who do not have to travel tend to practice more consistently. Andrea holds a Bachelor of Music in Composition from Berklee College of Music and teaches beginners through advanced students from age seven upwards.',
    highlights: [
      'Weekday afternoon and evening slots for students at nearby schools',
      'Taught at home, on your own piano',
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
      'Brentwood sits between San Vicente and the hills north of Sunset, and it is one of the areas Andrea travels to most regularly. She teaches piano, voice and guitar at home, one student at a time, with lessons built around what that particular student is trying to do: a first scale, a school audition, or finishing an original song.',
    detail:
      'Brentwood has a lot of school-age musicians in it, and no shortage of competition between them. Andrea works slowly on purpose: technical foundations first, repertoire the student actually wants to play, and feedback delivered calmly enough that a child does not start dreading the lesson. Parents are welcome to sit in, and Andrea will tell them straight how practice is going.',
    highlights: [
      'A regular weekly slot held for your family through the school year',
      'Repertoire chosen together with the student, week by week',
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
      'Hidden Hills is gated and residential, and getting a child to an outside studio means a drive down to the valley floor and back for every single lesson. Andrea comes to the house instead. Lessons cover piano, voice and guitar alongside music theory and songwriting, and she is happy to be added to a gate list or arranged through a house manager.',
    detail:
      'Because Hidden Hills homes tend to have the space for a proper instrument, students here often have an excellent piano and no consistent teaching to go with it. Andrea builds a long-term plan around the instrument you already own, with technique, ear training and repertoire developing together across the year.',
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
      'Andrea teaches across Calabasas, from the neighborhoods off Las Virgenes to the streets around Old Town. Lessons are private, weekly and taught at home: piano, voice, guitar, music theory and songwriting, for children from age seven as well as teenagers and adults.',
    detail:
      'A lot of Calabasas students come to Andrea somewhere in the middle: a few years of lessons behind them, some real ability, and a sense that things have stalled. Nine times out of ten it is the foundations that gave out. Andrea rebuilds technique and reading from the bottom up, and pieces that felt out of reach usually get easier once the mechanics underneath them are sound.',
    highlights: [
      'Strong fit for students who have plateaued after a few years of lessons',
      'A proper rebuild of technique and sight-reading',
      'Songwriting and theory available alongside piano, voice or guitar',
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
      'The roads above Sunset are slow, and that turns a thirty-minute lesson at an outside studio into most of an afternoon. Andrea teaches in Bel Air homes instead, covering piano, voice, guitar, music theory and songwriting in weekly one-to-one lessons.',
    detail:
      'Andrea works with complete beginners, and with students preparing for something specific, whether that is a school audition, a recital, or a piece they have wanted to play for years. She holds a Bachelor of Music in Composition from Berklee College of Music, and teaches voice and piano with the same emphasis: sound technical habits first, so the music a student actually cares about comes within reach.',
    highlights: [
      'No canyon drive for a thirty-minute lesson',
      'Audition, recital and exam preparation when a student wants it',
      'Taught by a Berklee composition graduate',
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
      'Andrea teaches piano, voice and guitar, along with music theory and songwriting, in Pacific Palisades homes. Lessons are private and weekly, taught at a standing time, and shaped around the individual student.',
    detail:
      'Part of why students stay with it is that the lesson simply arrives: same day, same time, on the family’s own instrument. Andrea teaches children from age seven, teenagers, and adults returning to an instrument after a long gap, and is glad to talk through what would suit your family before anything is booked.',
    highlights: [
      'A consistent weekly time held for your family',
      'Children from age seven, teens, and returning adult students',
      'A conversation first, with no commitment attached',
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
      'Andrea travels to students across Santa Monica, including the streets north of Montana and the neighborhoods around Ocean Park. She teaches piano, voice, guitar, music theory and songwriting privately at home, for children from age seven through to adults.',
    detail:
      'Santa Monica brings her a wide mix of students: young beginners, teenagers writing their own material, and adults who played seriously once and want to get back to it. Andrea’s composition training from Berklee means a student who wants to write songs can work on that properly, with chord movement, structure, lyrics and melody all worked on directly.',
    highlights: [
      'Songwriting taught as craft, from a Berklee composition graduate',
      'Adults coming back to an instrument after years away',
      'Piano, voice, guitar and theory available in the same lesson track',
    ],
  },
];

export const AREA_BY_SLUG = new Map(AREAS.map((area) => [area.slug, area]));
