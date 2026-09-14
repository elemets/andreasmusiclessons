// src/pages/About.tsx
import React, { useEffect, useRef, useState } from 'react';
import andreaOnWater from '../assets/AndreaOnWater.jpeg';
import andreaAtPiano from '../assets/AndreaAtPiano.jpeg';
import Seo from '../components/Seo';
import { personSchema, breadcrumbSchema } from '../data/schema';
import { ABOUT_META } from '../data/routes';

const teacherName = 'Andrea';

const portraitSlides = [
  { src: andreaOnWater, alt: 'Andrea Coutinho by the water' },
  { src: andreaAtPiano, alt: 'Andrea Coutinho at the piano' },
];

const SWIPE_THRESHOLD = 40;

const About: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef(0);

  // Auto-advance — restarts whenever the slide changes (so a manual swipe / dot
  // click gives you a fresh 5 seconds before the next auto change).
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % portraitSlides.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [activeSlide]);

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    const dx = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    if (dx < 0) {
      setActiveSlide((prev) => (prev + 1) % portraitSlides.length);
    } else {
      setActiveSlide((prev) => (prev - 1 + portraitSlides.length) % portraitSlides.length);
    }
  };

  return (
    <section className="section section-narrow">
      <Seo
        title={ABOUT_META.title}
        description={ABOUT_META.description}
        path={ABOUT_META.path}
        jsonLd={[
          personSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About Andrea', path: '/about' },
          ]),
        ]}
      />
      <div className="container">
        <div className="about-layout">
          <div className="about-main-column">
            <header className="section-header">
              <p className="eyebrow">About</p>
              <h1 className="section-title">Meet {teacherName}</h1>
              <p className="section-subtitle">
               Andrea is a music teacher and coach in Los Angeles. She works with children and adults who want some structure in how they learn. Piano, voice and songwriting are her main subjects, and she teaches guitar too.
              </p>
            </header>

            <article className="about-main">
            <p className="muted">
              Andrea holds a Bachelor of Music in Composition from Berklee College of Music. She has been playing piano and singing for 20 years, and teaching privately for the last 4.
            </p>

            <h2 className="about-subtitle">About the lessons</h2>
            <p>
              Andrea teaches piano, voice and guitar in students&apos; homes across Beverly Hills, Hidden Hills, Calabasas, Brentwood and the rest of LA&apos;s Westside. Technique, repertoire and ear training are worked on together, and the balance shifts with the student: a child at the very beginning needs something different from an adult picking the instrument back up after a long break. The pace follows you, the standard does not drop, and lessons go best for students who are willing to practice between them.
            </p>

            <h2 className="about-subtitle">Teaching approach</h2>
            <ul className="checklist">
              <li>A calm room to work in</li>
              <li>Honest feedback, given without pressure or judgment</li>
              <li>Lesson plans written for the individual student</li>
              <li>Your goals, taste and schedule taken seriously</li>
            </ul>

            <h2 className="about-subtitle">Who lessons are for</h2>
            <p>Lessons tend to suit:</p>
            <ul className="checklist">
              <li>Students who are serious about piano as a main activity</li>
              <li>Children who want help finding their own musical voice</li>
              <li>Singers at any level, from amateur to advanced</li>
              <li>Adult beginners who want structure and a high standard</li>
              <li>Anyone who wants help with music theory or songwriting</li>
              <li>Guitarists starting out, from a first chord to playing a song through</li>
              <li>Pianists coming back after a break who want to sharpen up</li>
              <li>Anyone willing to practice consistently over a long stretch</li>
            </ul>
            </article>
          </div>

          <div className="about-side-carousel">
            <figure
              className="about-portrait"
              aria-roledescription="carousel"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="about-portrait-track">
                {portraitSlides.map((slide, index) => (
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    className={
                      'about-portrait-image' +
                      (index === activeSlide ? ' is-active' : '')
                    }
                    aria-hidden={index !== activeSlide}
                    draggable={false}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                ))}
              </div>
              <div className="about-portrait-dots" role="tablist" aria-label="Choose photo">
                {portraitSlides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    role="tab"
                    aria-selected={index === activeSlide}
                    aria-label={`Show photo ${index + 1}`}
                    className={
                      'about-portrait-dot' +
                      (index === activeSlide ? ' is-active' : '')
                    }
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
            </figure>
          </div>

          <aside className="about-side-cards">
            <div className="card">
              <h3 className="card-title">Lesson details</h3>
              <dl className="definition-list">
                <div className="definition-row">
                  <dt>Where</dt>
                  <dd>Students&apos; homes in Los Angeles</dd>
                </div>
                <div className="definition-row">
                  <dt>Formats</dt>
                  <dd>In-home</dd>
                </div>
                <div className="definition-row">
                  <dt>Students</dt>
                  <dd>Voice or piano students at any skill level</dd>
                </div>
                <div className="definition-row">
                  <dt>Focus</dt>
                  <dd>Careful, long-term study</dd>
                </div>
              </dl>
            </div>

            <div className="card">
              <h3 className="card-title">Lesson expectations</h3>
              <ul className="bullet-list">
                <li>Weekly lessons reserved at a regular time</li>
                <li>Commitment to home practice between lessons</li>
                <li>A quiet space for the lesson at home</li>
                <li>Clear communication around scheduling and travel</li>
              </ul>
              <p className="muted small-text">
                Andrea sends the full written policy after your first inquiry.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
