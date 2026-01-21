// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import andreaHero from '../assets/hero-other-2.jpg'; // <-- your image of Andrea playing
import microphoneIcon from '../assets/microphone.png';
import pianoIcon from '../assets/piano.png';
import musicNoteIcon from '../assets/music-note.png';

const fullText = 'Andrea Coutinho: Premium music coaching for adults of all abilities';

const Home: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setDisplayedText(fullText.slice(0, index));

      if (index >= fullText.length) {
        setIsTyping(false);
        window.clearInterval(interval);
      }
    }, 40); // typing speed (ms per character)

    return () => window.clearInterval(interval);
  }, []);

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

  return (
    <>
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
              <p className="landing-hero-kicker">
                Los Angeles | Voice | Piano | Music Theory
              </p>

              <h1 className="landing-hero-heading">
                <span>{displayedText}</span>
                <span
                  className={
                    'type-cursor' + (isTyping ? ' type-cursor-active' : '')
                  }
                >
                  |
                </span>
              </h1>

              <p className="landing-hero-subtitle">
                Dedicated coaching for motivated students who want a
                refined, musical approach - without fighting LA traffic to get to a studio.
              </p>

              <div className="landing-hero-actions">
                <Link to="/contact" className="btn btn-primary-second">
                  Book a free consultation call
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
            <h2 className="section-title">Build new skills in a supportive environent</h2>
            <p className="section-subtitle">
              Focused lessons that balance technique, artistry, and confidence.
            </p>
          </div>

          <div className="services-grid reveal-stagger">
            <div className="service-item reveal">
              <img src={microphoneIcon} alt="Voice lessons" className="service-icon" />
              <h3 className="service-title">Voice Lessons</h3>
            </div>

            <div className="service-item reveal">
              <img src={pianoIcon} alt="Piano lessons" className="service-icon" />
              <h3 className="service-title">Piano Lessons</h3>
            </div>

            <div className="service-item reveal">
              <img src={musicNoteIcon} alt="Music theory lessons" className="service-icon" />
              <h3 className="service-title">Music Theory</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header reveal">
            <p className="eyebrow">Testimonials</p>
            <h2 className="section-title">What students are saying</h2>
            <p className="section-subtitle">
              Kind words from adults who rediscovered music in a supportive space.
            </p>
          </div>

          <div className="testimonials-grid reveal-stagger">
            <figure className="testimonial-card reveal">
              <blockquote className="testimonial-quote">
                Andrea made lessons feel calm and inspiring. I can finally play with
                confidence instead of nerves.
              </blockquote>
              <figcaption className="testimonial-meta">
                <span className="testimonial-name">Marisa W.</span>
                <span className="testimonial-role">Beginner pianist</span>
              </figcaption>
            </figure>

            <figure className="testimonial-card reveal">
              <blockquote className="testimonial-quote">
                The balance of technique and musicality is perfect. Every week feels
                like a real step forward.
              </blockquote>
              <figcaption className="testimonial-meta">
                <span className="testimonial-name">James K.</span>
                <span className="testimonial-role">Adult vocalist</span>
              </figcaption>
            </figure>

            <figure className="testimonial-card reveal">
              <blockquote className="testimonial-quote">
                I love how practical the theory lessons are. It changed how I listen
                and how I play.
              </blockquote>
              <figcaption className="testimonial-meta">
                <span className="testimonial-name">Priya S.</span>
                <span className="testimonial-role">Returning student</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
