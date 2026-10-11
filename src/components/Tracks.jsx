import React from 'react';
import './Tracks.css';

const tracks = [
  {
    number: '01',
    title: <>Generative AI <span>&amp;</span> Machine Learning</>,
    description: 'Explore AI applications, LLMs, multimodal systems, and intelligent agents.',
    tag: 'INTELLIGENCE / SYSTEMS',
    motif: 'orbit',
    detail: 'PROMPT → MODEL → POSSIBILITY',
  },
  {
    number: '02',
    title: <>Full-Stack Web <span>&amp;</span> Cloud Architecture</>,
    description: 'Build scalable web experiences and explore backend systems, cloud infrastructure, and deployment.',
    tag: 'WEB / INFRASTRUCTURE',
    motif: 'grid',
    detail: 'DESIGN → BUILD → DEPLOY',
  },
  {
    number: '03',
    title: <>Mobile <span>&amp;</span> Cross-Platform Development</>,
    description: 'Create modern mobile experiences using cross-platform frameworks and mobile-first thinking.',
    tag: 'MOBILE / EXPERIENCE',
    motif: 'signal',
    detail: 'ONE IDEA. MANY SCREENS.',
  },
  {
    number: '04',
    title: <>Open Source <span>&amp;</span> DevOps</>,
    description: 'Collaborate on open-source projects and explore CI/CD, automation, developer tooling, and infrastructure.',
    tag: 'COMMUNITY / DELIVERY',
    motif: 'nodes',
    detail: 'SHARE → AUTOMATE → SHIP',
  },
];

function TrackMotif({ type }) {
  if (type === 'orbit') {
    return <svg className="track-motif track-motif--orbit" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="12" /><ellipse cx="60" cy="60" rx="48" ry="20" transform="rotate(-35 60 60)" /><ellipse cx="60" cy="60" rx="48" ry="20" transform="rotate(55 60 60)" /><circle className="motif-dot" cx="94" cy="31" r="5" /></svg>;
  }
  if (type === 'grid') {
    return <svg className="track-motif track-motif--grid" viewBox="0 0 120 120" aria-hidden="true">{Array.from({ length: 5 }, (_, row) => Array.from({ length: 5 }, (_, col) => <rect key={`${row}-${col}`} x={13 + col * 20} y={13 + row * 20} width="11" height="11" />))}</svg>;
  }
  if (type === 'signal') {
    return <svg className="track-motif track-motif--signal" viewBox="0 0 120 120" aria-hidden="true"><path d="M15 60h12l8-24 14 48 14-62 14 76 14-48 8 10h8" /><path d="M15 91h90" className="motif-baseline" /></svg>;
  }
  return <svg className="track-motif track-motif--nodes" viewBox="0 0 120 120" aria-hidden="true"><path d="M24 25 60 60 96 25M24 25 24 94 60 60 96 94 96 25M24 94h72" /><circle cx="24" cy="25" r="6" /><circle cx="96" cy="25" r="6" /><circle cx="60" cy="60" r="7" /><circle cx="24" cy="94" r="6" /><circle cx="96" cy="94" r="6" /></svg>;
}

export default function Tracks() {
  return (
    <section className="tracks-section" id="tracks" aria-labelledby="tracks-heading">
      <div className="tracks-shell">
        <header className="tracks-header">
          <div className="tracks-kicker"><span className="tracks-kicker-mark" /> 03 / THE TRACKS <span className="tracks-year">TEKNO KRRAFT — 2026</span></div>
          <h2 id="tracks-heading">PICK YOUR <span>ARENA.</span></h2>
          <div className="tracks-intro-row">
            <p>Four tracks. Different disciplines. One place to build what comes next.</p>
            <span className="tracks-index" aria-hidden="true">TK—04<br />EXPLORE / EXPERIMENT / EXECUTE</span>
          </div>
        </header>
        <div className="tracks-grid">
          {tracks.map((track) => (
            <article className={`track-block track-block--${track.motif}`} key={track.number} tabIndex="0" aria-labelledby={`track-title-${track.number}`}>
              <div className="track-topline"><span className="track-number">{track.number}<span className="track-number-slash"> / 04</span></span><span className="track-tag">{track.tag}</span></div>
              <div className="track-art"><TrackMotif type={track.motif} /><span className="track-art-cross" aria-hidden="true">+</span><span className="track-art-coordinate" aria-hidden="true">{track.number} : 26</span></div>
              <h3 id={`track-title-${track.number}`}>{track.title}</h3>
              <p className="track-description">{track.description}</p>
              <div className="track-bottomline"><span>{track.detail}</span><span className="track-arrow" aria-hidden="true">↗</span></div>
            </article>
          ))}
        </div>
        <div className="tracks-footerline"><span>NO LANES ARE TOO NARROW.</span><span>CHOOSE A DISCIPLINE. MAKE A DIFFERENCE. <b>✳</b></span></div>
      </div>
    </section>
  );
}
