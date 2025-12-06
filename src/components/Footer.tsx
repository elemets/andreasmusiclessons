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
        </div>
        <div className="footer-links">
          <a href="mailto:andreamusiclessons@gmail.com" className="footer-link">
            andreamusiclessons@gmail.com
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
