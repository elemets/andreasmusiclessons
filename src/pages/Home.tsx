// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import andreaHero from '../assets/hero-other-2.jpg';
import microphoneIcon from '../assets/microphone.png';
import pianoIcon from '../assets/piano.png';
import musicNoteIcon from '../assets/music-note.png';
import songwritingIcon from '../assets/songwriting-icon.png';
import Seo from '../components/Seo';

const teachingAreas = [
  'Beverly Hills',
  'Bel Air',
  'Hidden Hills',
  'Calabasas',
  'Brentwood',
  'Pacific Palisades',
  'Santa Monica',
  'Malibu',
];

// NOTE: placeholder testimonials. Replace each entry with a verbatim quote from
// a real student or parent as soon as you have permission to use it — real
// names, real specifics (a piece learned, a recital, months studied) are what
// make testimonials credible.
const testimonials = [
  {
    quote:
      'Andrea made lessons feel calm and inspiring. I can finally play with confidence instead of nerves.',
    name: 'Marisa',
    role: 'Adult piano student',
  },
  {
    quote:
      'Andrea has helped me so much with singing and generally in my life. She has the best energy and facilitates a safe environment to take risks, push yourself and learn. Andrea has an extreme wealth of knowledge in voice, piano, guitar, music theory and psychology making her a very versatile and well rounded teacher. If you are interested in working with someone to pursue music, working with Andrea can really get you to the next level.',
    name: 'Austin',
    role: 'Adult voice student',
  },
  {
    quote:
      'I love how practical the theory work is. It changed how I listen and how I play.',
    name: 'Priya',
    role: 'Returning student',
  },
  {
    quote:
      'Andrea has been wonderful with our daughter. She makes lessons feel both serious and joyful, and we’ve watched her confidence at the piano grow enormously over the past year.',
    name: 'Sarah & Michael R.',
    role: 'Parents of a 9-year-old student',
  },
];

const typedHeading = 'Private music coaching';

const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const [displayedHeading, setDisplayedHeading] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect for the first heading line; the italic line, subtitle
  // and CTA fade in afterwards (delays set in CSS).
  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setDisplayedHeading(typedHeading.slice(0, index));

      if (index >= typedHeading.length) {
        setIsTyping(false);
        window.clearInterval(interval);
      }
    }, 40);

    return () => window.clearInterval(interval);
  }, []);

  const showPrev = () =>
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const showNext = () =>
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);

  // Auto-rotate one testimonial at a time; restarts after manual navigation
  // and pauses while the reader hovers over the quote.
  useEffect(() => {
    if (carouselPaused) return;
    const interval = window.setInterval(showNext, 7000);
    return () => window.clearInterval(interval);
  }, [activeTestimonial, carouselPaused]);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal');

    if (!targets.length) {
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
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  const current = testimonials[activeTestimonial];

  return (
    <>
      <Seo
        title="Private Piano & Voice Lessons in Beverly Hills, Calabasas & West LA | Andrea Coutinho"
        description="Premium in-home piano, voice, music theory and songwriting lessons with Andrea Coutinho. Serving Beverly Hills, Hidden Hills, Calabasas, Brentwood, Bel Air, Pacific Palisades and the LA Westside."
        path="/"
      />

      <section className="landing-hero">
        {/* Background image + gradient overlay */}
        <div className="landing-hero-background" aria-hidden="true">
          <img
            src={andreaHero}
            alt=""
            className="landing-hero-image"
          />
          <div className="landing-hero-gradient" />
        </div>

        {/* Foreground content */}
        <div className="landing-hero-overlay">
          <div className="container">
            <div className="landing-hero-content">
              <p className="landing-hero-kicker hero-fade">
                Andrea Coutinho &mdash; Voice &middot; Piano &middot; Guitar &middot; Music Theory &middot; Songwriting
              </p>

              <h1 className="landing-hero-heading">
                <span>
                  {displayedHeading}
                  <span
                    className={
                      'type-cursor' + (isTyping ? ' type-cursor-active' : '')
                    }
                  >
                    |
                  </span>
                </span>
                <em className="hero-fade hero-fade-delay-1">
                  in the comfort of your home
                </em>
              </h1>

              <p className="landing-hero-subtitle hero-fade hero-fade-delay-2">
                Premium one-on-one music coaching for families and adults in
                Beverly Hills, Hidden Hills, Calabasas, Brentwood, and the
                surrounding Westside &mdash; a refined, musical approach,
                without the drive to a studio.
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

      <section className="section services-section">
        <div className="container">
          <div className="section-header reveal">
            <p className="eyebrow">Offerings</p>
            <h2 className="section-title">Build new skills in a supportive environment</h2>
            <p className="section-subtitle">
              Lessons that focus on building confidence and supporting students to learn.
            </p>
          </div>

          <div className="services-grid reveal-stagger">
            <div className="service-item reveal">
              <img src={microphoneIcon} alt="Private voice lessons in Los Angeles" className="service-icon" />
              <h3 className="service-title">Voice Lessons</h3>
            </div>

            <div className="service-item reveal">
              <img src={pianoIcon} alt="In-home piano lessons in Los Angeles" className="service-icon" />
              <h3 className="service-title">Piano Lessons</h3>
            </div>

            <div className="service-item reveal">
              <img src={musicNoteIcon} alt="Music theory lessons" className="service-icon" />
              <h3 className="service-title">Music Theory</h3>
            </div>
            <div className="service-item reveal">
              <img src={songwritingIcon} alt="Songwriting coaching" className="service-icon" />
              <h3 className="service-title">Songwriting</h3>
            </div>
          </div>

          <p className="services-note reveal">
            Lessons for ages 7 and up &mdash; children, teens, and adults of all levels.
          </p>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header reveal">
            <p className="eyebrow">Testimonials</p>
            <h2 className="section-title">What students are saying</h2>
          </div>

          <div
            className="testimonial-carousel reveal"
            onMouseEnter={() => setCarouselPaused(true)}
            onMouseLeave={() => setCarouselPaused(false)}
          >
            <button
              type="button"
              className="carousel-arrow carousel-arrow-prev"
              aria-label="Previous testimonial"
              onClick={showPrev}
            >
              &#8249;
            </button>

            <figure className="testimonial-slide" key={activeTestimonial}>
              <blockquote className="testimonial-quote">{current.quote}</blockquote>
              <figcaption className="testimonial-meta">
                <span className="testimonial-name">{current.name}</span>
                <span className="testimonial-role">{current.role}</span>
              </figcaption>
            </figure>

            <button
              type="button"
              className="carousel-arrow carousel-arrow-next"
              aria-label="Next testimonial"
              onClick={showNext}
            >
              &#8250;
            </button>

            <div className="testimonial-dots" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((item, index) => (
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
          </div>
        </div>
      </section>

      <section className="section areas-section">
        <div className="container">
          <div className="section-header reveal">
            <p className="eyebrow">Where Andrea teaches</p>
            <h2 className="section-title">In-home lessons across LA&rsquo;s finest neighborhoods</h2>
            <p className="section-subtitle">
              Andrea travels to you, bringing the studio to your living room.
              Weekly lesson times are limited in each area.
            </p>
          </div>

          <ul className="areas-list reveal">
            {teachingAreas.map((area) => (
              <li key={area} className="areas-list-item">
                {area}
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
    </>
  );
};

export default Home;
