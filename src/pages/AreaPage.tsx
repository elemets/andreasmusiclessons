// src/pages/AreaPage.tsx
// One reusable template rendering a landing page per neighbourhood, driven by
// src/data/areas.ts. Each page carries its own title, description, canonical,
// Service schema and breadcrumbs.
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import NotFound from './NotFound';
import { AREAS, AREA_BY_SLUG } from '../data/areas';
import { FAQS } from '../data/faqs';
import { areaServiceSchema, breadcrumbSchema, faqSchema } from '../data/schema';
import { BUSINESS } from '../data/site';

const AreaPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? AREA_BY_SLUG.get(slug) : undefined;

  if (!area) return <NotFound />;

  const others = AREAS.filter((item) => item.slug !== area.slug);
  const path = `/piano-lessons/${area.slug}`;

  return (
    <>
      <Seo
        title={area.title}
        description={area.description}
        path={path}
        jsonLd={[
          areaServiceSchema(area),
          faqSchema(FAQS.slice(0, 5)),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: `Piano lessons in ${area.name}`, path },
          ]),
        ]}
      />

      <section className="section area-page">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">·</span>
            <span aria-current="page">{area.name}</span>
          </nav>

          <header className="section-header area-page-header">
            <p className="eyebrow">In-home lessons · {area.name}</p>
            <h1 className="section-title">{area.heading}</h1>
          </header>

          <div className="area-page-body">
            <div className="area-page-main">
              <p className="lead-paragraph">{area.intro}</p>
              <p>{area.detail}</p>

              <ul className="checklist area-highlights">
                {area.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2 className="about-subtitle">What Andrea teaches</h2>
              <p>
                Piano, voice, music theory and songwriting, taught individually
                rather than in a fixed group syllabus. Students in {area.name}{' '}
                range from children starting at age seven to adults returning to
                an instrument after many years away.
              </p>

              <h2 className="about-subtitle">Booking a lesson in {area.name}</h2>
              <p>
                Get in touch and Andrea will arrange a short consultation call to
                talk through the student’s goals, current level and the times that
                would work each week. Weekly slots in {area.name} are limited, and
                are held for one family at a standing time once booked.
              </p>

              <div className="area-page-actions">
                <Link to="/contact" className="btn btn-primary">
                  Check availability in {area.name}
                </Link>
                <a href={`mailto:${BUSINESS.email}`} className="btn btn-ghost">
                  Email Andrea
                </a>
              </div>
            </div>

            <aside className="area-page-aside">
              <div className="card">
                <h2 className="card-title">At a glance</h2>
                <dl className="definition-list">
                  <div className="definition-row">
                    <dt>Area</dt>
                    <dd>{area.name}</dd>
                  </div>
                  <div className="definition-row">
                    <dt>Where</dt>
                    <dd>In your home</dd>
                  </div>
                  <div className="definition-row">
                    <dt>Subjects</dt>
                    <dd>Piano, voice, theory, songwriting</dd>
                  </div>
                  <div className="definition-row">
                    <dt>Ages</dt>
                    <dd>Seven and up</dd>
                  </div>
                  <div className="definition-row">
                    <dt>Trained at</dt>
                    <dd>Berklee College of Music</dd>
                  </div>
                </dl>
              </div>

              <div className="card">
                <h2 className="card-title">Other areas</h2>
                <ul className="area-links">
                  {others.map((item) => (
                    <li key={item.slug}>
                      <Link to={`/piano-lessons/${item.slug}`}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default AreaPage;
