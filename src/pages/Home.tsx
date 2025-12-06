// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import andreaHero from '../assets/andrea-hero.jpg'; // <-- your image of Andrea playing

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

  return (
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
              Los Angeles • Voice • Piano • Music Theory 
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
              refined, musical approach — without fighting LA traffic to get to a studio.
            </p>

            <div className="landing-hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Book trial lesson
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
