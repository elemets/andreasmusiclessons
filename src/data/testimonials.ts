// src/data/testimonials.ts
//
// ACTION NEEDED FROM ANDREA.
//
// The original testimonial list was marked in the code as placeholder text.
// Publishing invented endorsements on a commercial site is both a trust problem
// and, in the US, an FTC issue: testimonials must reflect the honest experience
// of a real customer. So only entries with `verified: true` are rendered.
//
// To put one back on the site: confirm the quote is a real, verbatim thing that
// person said, that you have their permission to publish it, and set
// verified: true. Real names and specifics — a piece learned, a recital, how
// long they studied — are also what make a testimonial persuasive to a parent
// comparing teachers.

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Only verified testimonials are shown on the site. */
  verified: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Andrea has helped me so much with singing and generally in my life. She has the best energy and facilitates a safe environment to take risks, push yourself and learn. Andrea has an extreme wealth of knowledge in voice, piano, guitar, music theory and psychology making her a very versatile and well rounded teacher. If you are interested in working with someone to pursue music, working with Andrea can really get you to the next level.',
    name: 'Austin',
    role: 'Adult voice student',
    verified: true,
  },
  {
    quote:
      'Andrea made lessons feel calm and inspiring. I can finally play with confidence instead of nerves.',
    name: 'Marisa',
    role: 'Adult piano student',
    verified: false,
  },
  {
    quote:
      'I love how practical the theory work is. It changed how I listen and how I play.',
    name: 'Priya',
    role: 'Returning student',
    verified: false,
  },
  {
    quote:
      'Andrea has been wonderful with our daughter. She makes lessons feel both serious and joyful, and we’ve watched her confidence at the piano grow enormously over the past year.',
    name: 'Sarah & Michael R.',
    role: 'Parents of a 9-year-old student',
    verified: false,
  },
];

export const VISIBLE_TESTIMONIALS = TESTIMONIALS.filter((item) => item.verified);
