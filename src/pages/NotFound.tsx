// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { AREAS } from '../data/areas';

const NotFound: React.FC = () => (
  <section className="section section-narrow">
    <Seo
      title="Page not found | Andrea Coutinho Music Coaching"
      description="That page could not be found. Browse piano and voice lessons across the Los Angeles Westside."
      path="/404"
    />
    <div className="container">
      <header className="section-header">
        <p className="eyebrow">404</p>
        <h1 className="section-title">That page could not be found</h1>
        <p className="section-subtitle">
          The link may be out of date. You can head back to the home page, or
          jump straight to lessons in your neighbourhood.
        </p>
      </header>

      <ul className="area-links area-links-inline">
        {AREAS.map((area) => (
          <li key={area.slug}>
            <Link to={`/piano-lessons/${area.slug}`}>{area.name}</Link>
          </li>
        ))}
      </ul>

      <div className="areas-cta">
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </div>
  </section>
);

export default NotFound;
