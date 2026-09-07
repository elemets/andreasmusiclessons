// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AREAS } from '../data/areas';
import { BUSINESS } from '../data/site';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Every neighbourhood page linked from every page: this is how the
            area pages get discovered and how link equity reaches them. */}
        <nav className="footer-areas" aria-label="Lesson areas">
          <h2 className="footer-heading">In-home lessons by area</h2>
          <ul className="footer-area-links">
            {AREAS.map((area) => (
              <li key={area.slug}>
                <Link to={`/piano-lessons/${area.slug}`}>
                  Piano lessons in {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-inner">
          <div className="footer-meta">
            <span className="footer-brand">
              © {new Date().getFullYear()} {BUSINESS.name}
            </span>
            <span className="footer-note">
              Inspiring confident musicians, one lesson at a time.
            </span>
          </div>

          <div className="footer-links">
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
            <a href={`mailto:${BUSINESS.email}`} className="footer-link">
              {BUSINESS.email}
            </a>
            <a href={`tel:${BUSINESS.telephone}`} className="footer-link">
              {BUSINESS.telephoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
