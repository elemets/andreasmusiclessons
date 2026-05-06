// src/pages/About.tsx
import React, { useEffect, useRef, useState } from 'react';
import andreaOnWater from '../assets/AndreaOnWater.jpeg';
import andreaAtPiano from '../assets/AndreaAtPiano.jpeg';

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
      <div className="container">
        <div className="about-layout">
          <div className="about-main-column">
            <header className="section-header">
              <p className="eyebrow">About</p>
              <h1 className="section-title">Meet {teacherName}</h1>
              <p className="section-subtitle">
               A dedicated music teacher and coach in Los Angeles, working with children and adults who want a thoughtful, structured approach to learning. Andrea's expertise lies in piano, voice, and songwriting.
              </p>
            </header>

            <article className="about-main">
            <p className="muted">
              Andrea holds a Bachelor of Music in Composition from Berklee College of Music. She has been playing piano and singing for 20 years and has been teaching privately and at music schools for the last 4 years.
            </p>

            <h2 className="about-subtitle">About the lessons</h2>
            <p>
              Andrea teaches piano and voice in students&apos; homes across Los Angeles, blending technique, repertoire, and ear training in lessons tailored to each student — from children just starting out to adults rediscovering their craft. The pace adjusts to you; the standard stays high, and lessons work best for students ready to commit to regular practice and long-term growth.
            </p>

            <h2 className="about-subtitle">Teaching approach</h2>
            <ul className="checklist">
              <li>Warm, calm, and supportive atmosphere</li>
              <li>Clear, honest feedback without pressure or judgment</li>
              <li>Intentional lesson plans catered to the individual student </li>
              <li>Respect for your goals, taste, and schedule</li>
            </ul>

            <h2 className="about-subtitle">Who lessons are for</h2>
            <p>Andrea&apos;s teaching is a strong fit if you are:</p>
            <ul className="checklist">
              <li>A student who is serious about piano as a main activity</li>
              <li>Any children who want support finding their unique musical expression</li>
              <li>A student who wants to learn to sing amatuer or advanced</li>
              <li>An adult beginner who values structure and quality</li>
              <li>Anyone who wants support with music theory or songwriting</li>
              <li>Returning to piano after a break and want to refine your playing</li>
              <li>Open to consistent practice and long-term work</li>
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
                  <dd>Thoughtful, high-quality study</dd>
                </div>
              </dl>
            </div>

            <div className="card">
              <h3 className="card-title">Lesson expectations</h3>
              <ul className="bullet-list">
                <li>Weekly lessons reserved at a regular time</li>
                <li>Commitment to home practice between lessons</li>
                <li>Respectful and quiet space for in‑home lessons</li>
                <li>Clear communication around scheduling and travel</li>
              </ul>
              <p className="muted small-text">
                A full policy document can be shared after your initial inquiry.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
