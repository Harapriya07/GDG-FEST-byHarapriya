import React from 'react';
import { useEffect } from 'react';
import './About.css';

const statistics = [
  { value: '1,500+', label: 'Expected Attendees', index: 'A / 01' },
  { value: '30+', label: 'Technical Sessions', index: 'B / 02' },
  { value: '₹2,50,000+', label: 'Prize Pool', index: 'C / 03' },
  { value: '24 HRS', label: 'Hack Sprint', index: 'D / 04' },
];

const features = [
  {
    number: '01',
    title: 'Hands-On Technical Bootcamps',
    description: 'Learn by building alongside experienced developers and mentors. Explore practical workflows across Generative AI, Google Cloud Run, Flutter, and DevOps.',
    type: 'bootcamp',
    tag: 'LEARN / APPLY / REPEAT',
  },
  {
    number: '02',
    title: '24-Hour AI/ML Hack Sprint',
    description: 'Turn an ambitious idea into a working prototype. Experiment with Gemini, Firebase, and cloud technologies while collaborating with a team to solve meaningful problems.',
    type: 'sprint',
    tag: 'IDEA → PROTOTYPE',
  },
  {
    number: '03',
    title: 'Recognition & Networking',
    description: 'Meet fellow builders, exchange ideas with experienced professionals, and showcase your work. Explore opportunities for recognition, networking, certificates, prizes, and Google-themed swag, subject to official event arrangements.',
    type: 'network',
    tag: 'MEET / SHARE / GROW',
  },
];

function FeatureGraphic({ type }) {
  if (type === 'bootcamp') {
    return (
      <div className="about-graphic about-graphic--terminal" aria-hidden="true">
        <div className="terminal-bar"><i /><i /><i /><span>workshop.exe</span></div>
        <div className="terminal-code"><span className="code-muted">01</span><span><b>const</b> idea = <em>'curiosity'</em>;</span><span className="code-muted">02</span><span><b>while</b> (learning) {'{'}</span><span className="code-muted">03</span><span className="code-indent">build(idea);</span><span className="code-muted">04</span><span>{'}'} <i className="terminal-cursor" /></span></div>
        <span className="graphic-corner">LAB / 001</span>
      </div>
    );
  }
  if (type === 'sprint') {
    return (
      <div className="about-graphic about-graphic--sprint" aria-hidden="true">
        <div className="sprint-orbit sprint-orbit--outer" /><div className="sprint-orbit sprint-orbit--inner" />
        <span className="sprint-plus sprint-plus--one">+</span><span className="sprint-plus sprint-plus--two">+</span>
        <div className="sprint-core"><strong>24</strong><span>HOURS</span></div>
        <div className="sprint-tick sprint-tick--top">00:00</div><div className="sprint-tick sprint-tick--bottom">SHIP IT ↗</div>
      </div>
    );
  }
  return (
    <div className="about-graphic about-graphic--network" aria-hidden="true">
      <svg className="network-lines" viewBox="0 0 320 190" fill="none"><path d="M36 142 100 70 169 126 235 42 286 96M100 70 115 157 169 126 251 156M235 42 251 156" /><path d="M36 142 115 157M169 126 286 96" strokeDasharray="3 5" /></svg>
      <span className="network-node network-node--a">YOU</span><span className="network-node network-node--b">IDEAS</span><span className="network-node network-node--c">PEERS</span><span className="network-node network-node--d">NEXT</span>
      <span className="network-caption">GOOD THINGS HAPPEN<br />WHEN BUILDERS MEET.</span>
    </div>
  );
}

export default function About() {
  useEffect(() => {
    const items = document.querySelectorAll('#about .about-reveal');
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-shell shell">
        <div className="about-heading about-reveal">
          <div className="about-section-index"><span>01 / THE WHY</span><span className="about-index-line" /><span className="about-index-cross" aria-hidden="true">+</span></div>
          <div className="about-heading-main">
            <p className="about-eyebrow"><span className="eyebrow-mark" /> DEVELOPER FEST OVERVIEW</p>
            <h2 id="about-title"><span className="about-title-first">Why Join</span><br />Tekno <span className="about-title-accent">Krraft</span><span className="about-title-year">2026?</span></h2>
          </div>
          <div className="about-intro">
            <p className="about-deck">Three days. New perspectives.<br /><span>Real things built together.</span></p>
            <p className="about-intro-copy">GDG ITER brings together curious developers, ambitious students, experienced mentors, and open-source enthusiasts for three days of technical learning, collaboration, experimentation, and innovation.</p>
            <span className="about-coordinate" aria-hidden="true">TK / FIELD NOTES — 01</span>
          </div>
        </div>

        <div className="about-stats about-reveal" aria-label="Tekno Krraft festival statistics">
          {statistics.map((stat) => (
            <div className="about-stat" key={stat.index}>
              <span className="about-stat-index">{stat.index}</span>
              <strong>{stat.value}</strong>
              <span className="about-stat-label">{stat.label}</span>
              <span className="about-stat-marker" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>

        <div className="about-features-heading about-reveal">
          <p><span className="about-orange-dot" /> THE EXPERIENCE</p>
          <span>THREE WAYS TO GET INTO IT <b>↓</b></span>
        </div>

        <div className="about-features">
          {features.map((feature) => (
            <article className={`about-feature about-feature--${feature.type} about-reveal`} key={feature.number}>
              <div className="about-feature-top"><span className="about-feature-number">{feature.number} <i>/ 03</i></span><span className="about-feature-arrow" aria-hidden="true">↗</span></div>
              <FeatureGraphic type={feature.type} />
              <div className="about-feature-copy">
                <p className="about-feature-tag">{feature.tag}</p>
                <h3>{feature.title}</h3>
                <p className="about-feature-description">{feature.description}</p>
              </div>
              <span className="about-feature-bottom" aria-hidden="true"><span>TK—26</span><span>MAKE IT REAL <b>✳</b></span></span>
            </article>
          ))}
        </div>
        <div className="about-endline" aria-hidden="true"><span>CURIOUS BY NATURE.</span><span className="about-endline-arrow">↘</span><span>BUILDERS BY CHOICE.</span></div>
      </div>
    </section>
  );
}
