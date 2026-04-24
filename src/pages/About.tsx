// src/pages/About.tsx
import React from 'react';
import andreaAbout from '../assets/andreaabout.jpeg';

const teacherName = 'Andrea';

const About: React.FC = () => {
  return (
    <section className="section section-narrow">
      <div className="container">
        <div className="about-layout">
          <div className="about-main-column">
            <header className="section-header">
              <p className="eyebrow">About</p>
              <h1 className="section-title">Meet {teacherName}</h1>
              <p className="section-subtitle">
               A dedicated music teacher and coach in Los Angeles, working with children and adults who want a thoughtful, structured approach to learning. Andrea's expertise lies in piano, voice, and songwriting.
              </p>
            </header>

            <article className="about-main">
            <p>
              Andrea teaches students in their homes across Los Angeles. Piano lessons are calm, focused, and tailored to each student's goals whether that's playing Chopin or simply enjoying playing today’s pop songs. Andrea is also a well versed voice coach with years of experience helping beginners find their voices and advanced students' perfect their technique and artistry.

            </p>

            <p>
            Rather than quick fixes or one-off classes, Andrea works best with students who are ready to commit to regular practice and long-term growth. The pace is adjusted to each student, but the standard is intentionally high.

            </p>

            <p>
              Lessons typically include a mix of technique, sound work, repertoire, and a small amount of theory and ear training woven in. Students are encouraged to bring any music they would like to learn, Andrea's teaching style supports the curiosity of each student which makes learning music more enjoyable and rewarding.

            </p>

            <h2 className="about-subtitle">Teaching approach</h2>
            <ul className="checklist">
              <li>Warm, calm, and supportive atmosphere</li>
              <li>Clear, honest feedback without pressure or judgment</li>
              <li>Intentional lesson plans catered to the individual student </li>
              <li>Respect for your goals, taste, and schedule</li>
            </ul>

            <h2 className="about-subtitle">Who lessons are for</h2>
            <p>Andrea&apos;s teaching is a strong fit if you are:</p>
            <ul className="checklist">
              <li>A student who is serious about piano as a main activity</li>
              <li>A student who wants to learn to sing amatuer or advanced</li>
              <li>An adult beginner who values structure and quality</li>
              <li>Anyone who wants support with music theory or songwriting</li>
              <li>Returning to piano after a break and want to refine your playing</li>
              <li>Open to consistent practice and long-term work</li>
            </ul>

            <p className="muted">
              Andrea holds a Bachelor of Music in Composition from Berklee College of Music. She has been playing piano and singing for 20 years and has been teaching privately and at music schools for the last 4 years.
            </p>
            </article>
          </div>

          <aside className="about-side">
            <figure className="about-portrait">
              <img src={andreaAbout} alt="Andrea Coutinho" className="about-portrait-image" />
            </figure>

            <div className="card">
              <h3 className="card-title">Lesson details</h3>
              <dl className="definition-list">
                <div className="definition-row">
                  <dt>Where</dt>
                  <dd>Students&apos; homes in Los Angeles</dd>
                </div>
                <div className="definition-row">
                  <dt>Formats</dt>
                  <dd>In-home</dd>
                </div>
                <div className="definition-row">
                  <dt>Students</dt>
                  <dd>Voice or piano students at any skill level</dd>
                </div>
                <div className="definition-row">
                  <dt>Focus</dt>
                  <dd>Thoughtful, high-quality study</dd>
                </div>
              </dl>
            </div>

            <div className="card">
              <h3 className="card-title">Lesson expectations</h3>
              <ul className="bullet-list">
                <li>Weekly lessons reserved at a regular time</li>
                <li>Commitment to home practice between lessons</li>
                <li>Respectful and quiet space for in‑home lessons</li>
                <li>Clear communication around scheduling and travel</li>
              </ul>
              <p className="muted small-text">
                A full policy document can be shared after your initial inquiry.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
