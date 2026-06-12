// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-meta">
          <span className="footer-brand">© {new Date().getFullYear()} Andrea Coutinho Music Coaching</span>
          <span className="footer-note">
            Inspiring confident musicians, one lesson at a time.
          </span>
          <span className="footer-area">
            Serving Beverly Hills, Bel Air, Hidden Hills, Calabasas, Brentwood, Pacific Palisades, Santa Monica &amp; surrounding L.A. neighborhoods.
          </span>
        </div>
        <div className="footer-links">
          <a href="mailto:music@andreacoutinho.com" className="footer-link">
            music@andreacoutinho.com
          </a>
          <a href="tel:+17708918775" className="footer-link">
            +1 (770) 891-8775
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
