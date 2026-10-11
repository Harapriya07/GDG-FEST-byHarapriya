import React from 'react';
import './Speakers.css';

const speakers = [
  { number: '01', first: 'Dr Ananya', last: 'Patnaik', featured: true, mark: '✳', note: 'THE OPENING SIGNAL' },
  { number: '02', first: 'Rohan', last: 'Samal', mark: '⌘', note: 'IDEAS IN MOTION' },
  { number: '03', first: 'Priyanka', last: 'Mishra', mark: '◉', note: 'A DIFFERENT ANGLE' },
  { number: '04', first: 'Amitabh', last: 'Swain', mark: '⟋', note: 'BUILD WHAT’S NEXT' },
];

function SpeakerProfile({ speaker }) {
  return (
    <article className={`speaker-profile${speaker.featured ? ' speaker-profile--featured' : ''}`}>
      <div className="speaker-profile__topline">
        <span className="speaker-profile__number">{speaker.number} <i>/ 04</i></span>
        <span className="speaker-profile__mark" aria-hidden="true">{speaker.mark}</span>
      </div>
      <div className="speaker-profile__rule" />
      <p className="speaker-profile__eyebrow">SPEAKER · TEKNO KRRAFT 2026</p>
      <h3 className="speaker-profile__name">
        <span>{speaker.first}</span>
        <span className={speaker.featured ? 'speaker-profile__accent' : ''}>{speaker.last}<b aria-hidden="true">↗</b></span>
      </h3>
      <div className="speaker-profile__bottom">
        <span className="speaker-profile__note">{speaker.note}</span>
        <span className="speaker-profile__index" aria-hidden="true">TK—{speaker.number}</span>
      </div>
    </article>
  );
}

export default function Speakers() {
  return (
    <section className="speakers-section" id="speakers" aria-labelledby="speakers-title">
      <div className="speakers-shell">
        <header className="speakers-heading">
          <p className="speakers-kicker"><span aria-hidden="true" /> MEET THE SPEAKERS / 2026</p>
          <div className="speakers-heading__main">
            <h2 id="speakers-title">THE MINDS<br /><span>BEHIND THE</span> <em>MOMENT.</em></h2>
            <div className="speakers-intro">
              <span className="speakers-intro__index">[ 04 VOICES / ONE FESTIVAL ]</span>
              <p>Meet the people bringing ideas, experience, and new perspectives to Tekno Krraft 2026.</p>
            </div>
          </div>
        </header>

        <div className="speakers-grid">
          {speakers.map((speaker) => <SpeakerProfile key={speaker.number} speaker={speaker} />)}
        </div>
        <div className="speakers-footerline" aria-hidden="true">
          <span>PEOPLE / IDEAS / POSSIBILITY</span>
          <span className="speakers-footerline__signal">● TRANSMISSION IN PROGRESS</span>
        </div>
      </div>
    </section>
  );
}
