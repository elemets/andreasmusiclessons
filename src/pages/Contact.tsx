// src/pages/Contact.tsx
//
// FORM DELIVERY — READ THIS BEFORE CHANGING ANYTHING HERE.
//
// This form previously faked its submission: it waited 800ms and showed a
// success message without sending anything anywhere. Every enquiry made
// through it was silently discarded.
//
// It now posts to Netlify Forms, which requires TWO things to work:
//   1. The hidden static form in index.html (name="contact"). Netlify scans
//      the built HTML at deploy time and only creates a form handler if it
//      finds it. Do not delete it.
//   2. This POST, url-encoded, including the `form-name` field.
//
// Submissions then appear under Forms in the Netlify dashboard. Turn on
// notifications there (Forms > Settings > Form notifications) so Andrea gets
// an email for each one — otherwise they sit in the dashboard unread.
//
// If the site is NOT hosted on Netlify, the POST will fail and the visitor is
// shown a real error with Andrea's email address, so a lead is never lost
// silently again. To switch providers, change FORM_ENDPOINT and the encoding
// to match (Formspree, Basin and Getform all accept a similar POST).
import React, { useState } from 'react';
import Seo from '../components/Seo';
import { BUSINESS } from '../data/site';
import { FAQS } from '../data/faqs';
import { faqSchema } from '../data/schema';
import { CONTACT_META } from '../data/routes';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const FORM_NAME = 'contact';
const FORM_ENDPOINT = '/';

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('submitting');

    const entries = Object.fromEntries(new FormData(form)) as Record<string, string>;

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': FORM_NAME, ...entries }),
      });

      if (!response.ok) throw new Error(`Form endpoint returned ${response.status}`);

      setStatus('success');
      form.reset();
    } catch (error) {
      // Surface the failure rather than pretending it worked — a visitor who
      // sees an error will email instead, and that lead survives.
      console.error('Contact form submission failed:', error);
      setStatus('error');
    }
  };

  return (
    <section className="section section-narrow">
      <Seo
        title={CONTACT_META.title}
        description={CONTACT_META.description}
        path={CONTACT_META.path}
        jsonLd={[faqSchema(FAQS)]}
      />
      <div className="container contact-layout">
        <div className="contact-card">
          <header className="section-header">
            <p className="eyebrow">Contact</p>
            <h1 className="section-title">Request a consultation call</h1>
            <p className="section-subtitle">
              Share a bit about yourself, and Andrea will follow up
              with availability and next steps for in-home lessons.
            </p>
          </header>

          <form
            className="contact-form"
            name={FORM_NAME}
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Required by Netlify Forms to match this submission to the form. */}
            <input type="hidden" name="form-name" value={FORM_NAME} />
            {/* Spam trap: hidden from people, tempting to bots. */}
            <p className="hidden-field" aria-hidden="true">
              <label>
                Do not fill this in: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

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
                <label htmlFor="phone">Phone <span className="optional">(optional)</span></label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(310) 555-0134"
                />
              </div>

              <div className="field field-half">
                <label htmlFor="student">Who are lessons for?</label>
                <select id="student" name="student" defaultValue="">
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="child">My child</option>
                  <option value="teen">My teenager</option>
                  <option value="self">Myself</option>
                  <option value="other">Someone else</option>
                </select>
              </div>

              <div className="field field-half">
                <label htmlFor="lessontype">Type of lesson</label>
                <select id="lessontype" name="lessontype" defaultValue="">
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="piano">Piano</option>
                  <option value="voice">Voice</option>
                  <option value="both">Piano and voice</option>
                  <option value="theory">Music theory</option>
                  <option value="songwriting">Songwriting</option>
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
                placeholder="e.g. Calabasas, Beverly Hills, Brentwood"
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

            <div aria-live="polite">
              {status === 'success' && (
                <p className="status-message status-success">
                  Thank you for your message. Andrea will be in touch soon.
                </p>
              )}
              {status === 'error' && (
                <p className="status-message status-error">
                  Something went wrong and your message was not sent. Please email
                  Andrea directly at{' '}
                  <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or call{' '}
                  <a href={`tel:${BUSINESS.telephone}`}>{BUSINESS.telephoneDisplay}</a>.
                </p>
              )}
            </div>
          </form>
        </div>

        <aside className="contact-details">
          <div className="card">
            <h2 className="card-title">Direct contact</h2>
            <ul className="bullet-list">
              <li>
                <span className="detail-label">Email</span>
                <a href={`mailto:${BUSINESS.email}`} className="detail-link">
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <span className="detail-label">Phone</span>
                <a href={`tel:${BUSINESS.telephone}`} className="detail-link">
                  {BUSINESS.telephoneDisplay}
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
              <li>All day throughout the working week</li>
              <li>Request a call for detailed availability</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
