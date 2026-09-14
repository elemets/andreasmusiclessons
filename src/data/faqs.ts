// src/data/faqs.ts
// Shown on the home page and emitted as FAQPage structured data.
//
// REVIEW THESE BEFORE LAUNCH. Google requires that FAQ markup matches
// visible page content, and every answer here must be literally true of how
// Andrea actually teaches. Two answers in particular need her sign-off:
// the pricing answer and the travel-radius answer.

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: 'What instruments do you teach?',
    answer:
      'Piano, voice and guitar, along with music theory and songwriting. Most students come to Andrea for piano or voice, which is where the bulk of her own training sits, and guitar is taught alongside them. Theory and songwriting are built into a student’s lessons, so there is nothing extra to book.',
  },
  {
    question: 'What ages do you teach?',
    answer:
      'Andrea teaches students from age seven upwards, including teenagers and adults. Seven is roughly the age at which a child can hold focus for a full lesson and do some practice in between.',
  },
  {
    question: 'Do lessons take place at our home?',
    answer:
      'Yes. All lessons are taught in the student’s own home across Beverly Hills, Bel Air, Hidden Hills, Calabasas, Brentwood, Pacific Palisades and Santa Monica. Learning and practicing on the same instrument makes a noticeable difference, and it takes a round trip out of your week.',
  },
  {
    question: 'How much do lessons cost?',
    answer:
      'Rates depend on lesson length, location and how far Andrea travels. She will give you a clear, all-in figure during the initial consultation call, before you commit to anything.',
  },
  {
    question: 'Do we need an instrument at home?',
    answer:
      'For piano lessons you need something to practice on. An acoustic piano is ideal, but a full-size weighted digital keyboard is a perfectly good starting point. For guitar, any acoustic or electric that holds its tuning is enough to begin with. Andrea is happy to advise on what to buy before you spend anything.',
  },
  {
    question: 'How long is a lesson, and how often?',
    answer:
      'Lessons are weekly, at a standing time reserved for you. Thirty minutes suits most younger beginners; forty-five or sixty minutes works better for teenagers and adults, and for anyone preparing for an audition or recital.',
  },
  {
    question: 'My child has never played before. Is that a problem?',
    answer:
      'Not at all. Complete beginners are a large part of Andrea’s teaching. The first few lessons are built to get a student comfortable and playing something they enjoy early on.',
  },
  {
    question: 'What are your qualifications?',
    answer:
      'Andrea holds a Bachelor of Music in Composition from Berklee College of Music. She has been playing piano and singing for twenty years, and has taught privately for the last four.',
  },
  {
    question: 'What happens if we need to cancel a lesson?',
    answer:
      'Andrea will share a short written lesson policy covering cancellations, rescheduling and holidays after your first enquiry, so the arrangement is clear on both sides from the start.',
  },
];
