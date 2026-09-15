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
//      finds it. Do not delete it, and keep its field names in step with the
//      fields below.
//   2. This POST, url-encoded, including the `form-name` field.
//
// Submissions then appear under Forms in the Netlify dashboard. Turn on
// notifications there (Forms > Settings > Form notifications) so Andrea gets
// an email for each one — otherwise they sit in the dashboard unread.
//
// If the site is NOT hosted on Netlify, the POST will fail and the visitor is
// shown a real error with Andrea's number, so a lead is never lost silently.
// To switch providers, change FORM_ENDPOINT and the encoding to match
// (Formspree, Basin and Getform all accept a similar POST).
//
//
// FORM LENGTH — WHY IT IS THIS SHORT.
//
// It used to ask for eight things, three of them dropdowns, with a required
// paragraph of free text at the end. On a phone that is a wall. Everything
// that Andrea finds out anyway in the first minute of the consultation call
// (the student's age, their experience level, what they want to work on) has
// been cut. What is left is only what she cannot run a call without: who you
// are, how to reach you, and what you want to learn. Resist adding to it —
// each extra field costs enquiries.
import React, { useState } from 'react';
import Seo from '../components/Seo';
import { BUSINESS } from '../data/site';
import { FAQS } from '../data/faqs';
import { faqSchema } from '../data/schema';
import { CONTACT_META } from '../data/routes';
import { trackLead } from '../lib/tracking';
import { CallLink, TextLink, callLinkProps } from '../components/ContactLinks';

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
      trackLead('form', 'contact_page');
    } catch (error) {
      // Surface the failure rather than pretending it worked — a visitor who
      // sees an error will call instead, and that lead survives.
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
            <h1 className="section-title">Get in touch</h1>
            <p className="section-subtitle">
              Leave your details and Andrea will come back to you with her
              availability. If you would rather talk on the phone, her number is
              at the bottom of the page.
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

              {/* Phone is the required one and email is not: this is a local
                  business whose next step is a phone call, and asking a
                  phone user to type an email address is the slower ask. */}
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(310) 555-0134"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="lessontype">Lessons in</label>
                <select id="lessontype" name="lessontype" defaultValue="" required>
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="piano">Piano</option>
                  <option value="voice">Voice</option>
                  <option value="guitar">Guitar</option>
                  <option value="both">Piano and voice</option>
                  <option value="theory">Music theory</option>
                  <option value="songwriting">Songwriting</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="location">Your area</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="e.g. Calabasas"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">
                Anything else <span className="optional">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Who the lessons are for, which days and times suit you, or an email address if you prefer."
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
                  Something went wrong and your message was not sent. Please
                  call or text Andrea at{' '}
                  <a {...callLinkProps('contact_form_error')}>{BUSINESS.telephoneDisplay}</a>, or
                  email{' '}
                  <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
                </p>
              )}
            </div>
          </form>

          <div className="contact-or">
            <span>or by phone</span>
          </div>

          {/* Below the form on purpose: visitors arrive here from a
              "book a consultation" link, so the form is what they came
              for. Call and text are already one tap away in the bar at
              the bottom of every phone screen. */}
          <div className="contact-direct">
            <CallLink
              place="contact_page"
              className="btn btn-primary btn-with-icon contact-direct-action"
              iconClassName="btn-icon"
            >
              Call {BUSINESS.telephoneShort}
            </CallLink>
            <TextLink
              place="contact_page"
              className="btn btn-ghost btn-with-icon contact-direct-action"
              iconClassName="btn-icon"
            >
              Text Andrea
            </TextLink>
          </div>
        </div>

        <aside className="contact-details">
          <div className="card">
            <h2 className="card-title">Direct contact</h2>
            <ul className="bullet-list">
              <li>
                <span className="detail-label">Phone</span>
                <a {...callLinkProps('contact_details')} className="detail-link">
                  {BUSINESS.telephoneDisplay}
                </a>
              </li>
              <li>
                <span className="detail-label">Email</span>
                <a href={`mailto:${BUSINESS.email}`} className="detail-link">
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <span className="detail-label">Location</span>
                <span className="detail-value">Los Angeles, CA</span>
              </li>
            </ul>
            <p className="muted small-text">
              Andrea teaches in selected areas of Los Angeles. Ask her for
              current availability in yours.
            </p>
          </div>

          <div className="card">
            <h2 className="card-title">Lesson times</h2>
            <ul className="bullet-list">
              <li>Weekdays, morning through evening</li>
              <li>Ask on a call for specific times</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
