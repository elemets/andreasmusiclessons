// src/pages/Contact.tsx
import React, { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    // Placeholder "submission" – integrate with your email or backend as needed
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <section className="section section-narrow">
      <div className="container contact-layout">
        <div className="contact-card">
          <header className="section-header">
            <p className="eyebrow">Contact</p>
            <h1 className="section-title">Request a trial lesson</h1>
            <p className="section-subtitle">
              Share a bit about yourself, and Andrea will follow up
              with availability and next steps for in-home lessons.
            </p>
          </header>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="field field-half">
                <label htmlFor="lessontype">Type of Lesson</label>
                <select id="lessontype" name="lessontype" defaultValue="">
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="voice">Voice</option>
                  <option value="piano">Piano</option>
                </select>
              </div>
              <div className="field field-half">
                <label htmlFor="experience">Experience level</label>
                <select id="experience" name="experience" defaultValue="">
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="beginner">Complete beginner</option>
                  <option value="some">Some previous lessons</option>
                  <option value="intermediate">Intermediate / advanced</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="location">
                Neighborhood or area in Los Angeles (for in-home lessons)
              </label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="e.g. West LA, Silver Lake, Beverly Hills"
              />
            </div>

            <div className="field">
              <label htmlFor="message">Goals &amp; availability</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="What are you hoping to work on? Which days and times are best?"
                required
              />
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </button>
              <p className="muted small-text">
                Andrea typically replies within 1-2 business days.
              </p>
            </div>

            {status === 'success' && (
              <p className="status-message status-success">
                Thank you for your message. Andrea will be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="status-message status-error">
                Something went wrong. Please try again or email Andrea directly at{' '}
                <a href="mailto:andreamusiclessons@gmail.com">
                  andreamusiclessons@gmail.com
                </a>
                .
              </p>
            )}
          </form>
        </div>

        <aside className="contact-details">
          <div className="card">
            <h2 className="card-title">Direct contact</h2>
            <ul className="bullet-list">
              <li>
                <span className="detail-label">Email</span>
                <a
                  href="mailto:andreamusiclessons@gmail.com"
                  className="detail-link"
                >
                  andreamusiclessons@gmail.com
                </a>
              </li>
              <li>
                <span className="detail-label">Location</span>
                <span className="detail-value">Los Angeles, CA</span>
              </li>
            </ul>
            <p className="muted small-text">
              In-home lessons are available in selected areas of Los Angeles; exact
              availability can be discussed by email.
            </p>
          </div>

          <div className="card">
            <h2 className="card-title">Lesson times</h2>
            <ul className="bullet-list">
              <li>Weekday mornings</li>
              <li>Tuesday all day</li>
              <li>Limited weekend availability</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
