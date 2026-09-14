// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import andreaHero from '../assets/hero-other-2.jpg';
import Seo from '../components/Seo';
import {
  GuitarIcon,
  MicrophoneIcon,
  PianoIcon,
  SongwritingIcon,
  TheoryIcon,
} from '../components/ServiceIcons';
import { AREAS } from '../data/areas';
import { FAQS } from '../data/faqs';
import { VISIBLE_TESTIMONIALS } from '../data/testimonials';
import { faqSchema, personSchema } from '../data/schema';
import { HOME_META } from '../data/routes';

const services = [
  { title: 'Voice Lessons', Icon: MicrophoneIcon, blurb: 'Breath support and tone, with range built up patiently at whatever level you sing now.' },
  { title: 'Piano Lessons', Icon: PianoIcon, blurb: 'Technique, reading and repertoire, on the piano you already practice on.' },
  { title: 'Guitar Lessons', Icon: GuitarIcon, blurb: 'Chords and accompaniment, worked out on songs you actually want to play.' },
  { title: 'Music Theory', Icon: TheoryIcon, blurb: 'The grammar behind the music, taught so you can use it while you play.' },
  { title: 'Songwriting', Icon: SongwritingIcon, blurb: 'Melody, lyrics and structure, with a Berklee composition graduate.' },
];

const credentials = [
  { value: 'Berklee', label: 'College of Music' },
  { value: '20 years', label: 'Playing & singing' },
  { value: 'Ages 7+', label: 'Children, teens, adults' },
  { value: 'In-home', label: 'Across the Westside' },
];

const process = [
  {
    step: '01',
    title: 'A consultation call',
    body: 'A short call about the student, what they want out of lessons, and what a weekly slot would realistically look like. You are not committing to anything by having it.',
  },
  {
    step: '02',
    title: 'A first lesson at home',
    body: 'Andrea comes to you, works out where the student actually is, and starts them on something they want to play.',
  },
  {
    step: '03',
    title: 'A standing weekly slot',
    body: 'Your time is held each week through the term, and you get a straight account of how practice and progress are going.',
  },
];

const typedHeading = 'Private music coaching';

const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);

  const testimonialCount = VISIBLE_TESTIMONIALS.length;

  const showPrev = () =>
    setActiveTestimonial((prev) => (prev - 1 + testimonialCount) % testimonialCount);
  const showNext = () =>
    setActiveTestimonial((prev) => (prev + 1) % testimonialCount);

  useEffect(() => {
    if (carouselPaused || testimonialCount < 2) return;
    const interval = window.setInterval(
      () => setActiveTestimonial((prev) => (prev + 1) % testimonialCount),
      7000,
    );
    return () => window.clearInterval(interval);
  }, [carouselPaused, testimonialCount]);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal');
    if (!targets.length) return;

    // Without this, anyone who prefers reduced motion sees content that never
    // animates in — and therefore stays invisible.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((target) => target.classList.add('reveal-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const current = VISIBLE_TESTIMONIALS[activeTestimonial];

  return (
    <>
      <Seo
        title={HOME_META.title}
        description={HOME_META.description}
        path={HOME_META.path}
        jsonLd={[personSchema(), faqSchema(FAQS)]}
      />

      <section className="landing-hero">
        <div className="landing-hero-background" aria-hidden="true">
          <img
            src={andreaHero}
            alt=""
            className="landing-hero-image"
            fetchPriority="high"
            decoding="async"
          />
          <div className="landing-hero-gradient" />
        </div>

        <div className="landing-hero-overlay">
          <div className="container">
            <div className="landing-hero-content">
              <p className="landing-hero-kicker hero-fade">
                Andrea Coutinho &middot; Voice &middot; Piano &middot; Guitar &middot; Music Theory &middot; Songwriting
              </p>

              {/* The heading text is always present in the DOM and revealed
                  with a CSS clip animation. It used to be typed in character
                  by character from an empty string, which meant the h1 was
                  empty in the initial render — invisible to anything that
                  snapshots the page before the animation finishes. */}
              <h1 className="landing-hero-heading">
                <span className="hero-typed">{typedHeading}</span>
                <em className="hero-fade hero-fade-delay-1">
                  taught in your own home
                </em>
              </h1>

              <p className="landing-hero-subtitle hero-fade hero-fade-delay-2">
                One-to-one lessons for families and adults in Beverly Hills,
                Hidden Hills, Calabasas, Brentwood and the surrounding Westside.
                Andrea teaches at your house, so nobody has to drive to a studio.
              </p>

              <div className="landing-hero-actions hero-fade hero-fade-delay-3">
                <Link to="/contact" className="btn btn-primary-second">
                  Book a private consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility strip — Berklee training was previously buried on the
          About page, well below the point where most visitors decide. */}
      <section className="credentials-band">
        <div className="container">
          <ul className="credentials-list">
            {credentials.map((item) => (
              <li key={item.label} className="credential">
                <span className="credential-value">{item.value}</span>
                <span className="credential-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section services-section" id="lessons">
        <div className="container">
          <div className="section-header reveal">
            <p className="eyebrow">Lessons</p>
            <h2 className="section-title">What Andrea teaches</h2>
            <p className="section-subtitle">
              Every lesson is one-to-one and built around the student, whatever
              they arrive knowing.
            </p>
          </div>

          <div className="services-grid reveal-stagger">
            {services.map(({ title, Icon, blurb }) => (
              <div className="service-item reveal" key={title}>
                <span className="service-icon-frame">
                  <Icon className="service-icon-svg" />
                </span>
                <h3 className="service-title">{title}</h3>
                <p className="service-blurb">{blurb}</p>
              </div>
            ))}
          </div>

          <p className="services-note reveal">
            Lessons for ages 7 and up: children, teens and adults, at any level.
          </p>
        </div>
      </section>

      <section className="section process-section" id="how-it-works">
        <div className="container">
          <div className="section-header reveal">
            <p className="eyebrow">How it works</p>
            <h2 className="section-title">From first call to first lesson</h2>
          </div>

          <ol className="process-list reveal-stagger">
            {process.map((item) => (
              <li className="process-item reveal" key={item.step}>
                <span className="process-step">{item.step}</span>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-body">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {testimonialCount > 0 && current && (
        <section className="section testimonials-section" id="testimonials">
          <div className="container">
            <div className="section-header reveal">
              <p className="eyebrow">Testimonials</p>
              <h2 className="section-title">
                {testimonialCount > 1 ? 'What students say' : 'What a student says'}
              </h2>
            </div>

            <div
              className="testimonial-carousel reveal"
              onMouseEnter={() => setCarouselPaused(true)}
              onMouseLeave={() => setCarouselPaused(false)}
            >
              {testimonialCount > 1 && (
                <button
                  type="button"
                  className="carousel-arrow carousel-arrow-prev"
                  aria-label="Previous testimonial"
                  onClick={showPrev}
                >
                  &#8249;
                </button>
              )}

              <figure className="testimonial-slide" key={activeTestimonial}>
                <blockquote className="testimonial-quote">{current.quote}</blockquote>
                <figcaption className="testimonial-meta">
                  <span className="testimonial-name">{current.name}</span>
                  <span className="testimonial-role">{current.role}</span>
                </figcaption>
              </figure>

              {testimonialCount > 1 && (
                <button
                  type="button"
                  className="carousel-arrow carousel-arrow-next"
                  aria-label="Next testimonial"
                  onClick={showNext}
                >
                  &#8250;
                </button>
              )}

              {testimonialCount > 1 && (
                <div className="testimonial-dots" role="tablist" aria-label="Choose testimonial">
                  {VISIBLE_TESTIMONIALS.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      role="tab"
                      aria-selected={index === activeTestimonial}
                      aria-label={`Show testimonial ${index + 1}`}
                      className={
                        'testimonial-dot' + (index === activeTestimonial ? ' is-active' : '')
                      }
                      onClick={() => setActiveTestimonial(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="section areas-section" id="areas">
        <div className="container">
          <div className="section-header reveal">
            <p className="eyebrow">Where Andrea teaches</p>
            <h2 className="section-title">In-home lessons across the Westside</h2>
            <p className="section-subtitle">
              Andrea drives to you and teaches on your own instrument. There are
              only so many weekly slots in each area.
            </p>
          </div>

          <ul className="areas-list reveal">
            {AREAS.map((area) => (
              <li key={area.slug} className="areas-list-item">
                <Link to={`/piano-lessons/${area.slug}`}>{area.name}</Link>
              </li>
            ))}
          </ul>

          <div className="areas-cta reveal">
            <Link to="/contact" className="btn btn-ghost">
              Check availability in your area
            </Link>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container">
          <div className="section-header reveal">
            <p className="eyebrow">Questions</p>
            <h2 className="section-title">Before you book</h2>
            <p className="section-subtitle">
              The things parents and students most often want to know first.
            </p>
          </div>

          <div className="faq-list reveal">
            {FAQS.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary className="faq-question">
                  <span>{faq.question}</span>
                  <span className="faq-marker" aria-hidden="true" />
                </summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
