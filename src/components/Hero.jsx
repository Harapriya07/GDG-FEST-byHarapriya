import React from 'react';
import { useEffect, useState } from 'react';
import './Hero.css';

const TARGET_TIME = Date.parse('2026-10-15T18:30:00.000Z'); // 2026-10-16 00:00:00 IST

export function getCountdown(now = Date.now()) {
  const remaining = Math.max(0, TARGET_TIME - now);
  const totalSeconds = Math.floor(remaining / 1000);
  return {
    started: now >= TARGET_TIME,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function Countdown() {
  const [time, setTime] = useState(() => getCountdown());
  useEffect(() => {
    const update = () => setTime(getCountdown());
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const units = [
    ['days', time.days], ['hours', time.hours], ['minutes', time.minutes], ['seconds', time.seconds],
  ];

  return (
    <section className="countdown" aria-label="Event launch countdown">
      <div className="countdown-heading"><span className="countdown-cross" aria-hidden="true">+</span><span>EVENT LAUNCH COUNTDOWN</span><span className="countdown-rule" /></div>
      {time.started ? (
        <p className="event-started" role="status">THE EVENT IS LIVE <span aria-hidden="true">↗</span></p>
      ) : (
        <div className="countdown-values" aria-live="off">
          {units.map(([label, value]) => <div className="countdown-unit" key={label}><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>)}
        </div>
      )}
    </section>
  );
}

function TechnicalStamp() {
  return (
    <div className="technical-stamp" aria-hidden="true">
      <span className="stamp-top">TK / 26</span><span className="stamp-ring">K</span><span className="stamp-bottom">BUILD<br />WHAT’S NEXT</span>
    </div>
  );
}

export default function Hero({ onRegister }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-coordinate coordinate-left" aria-hidden="true">20°14' N / 85°47' E</div>
      <div className="hero-coordinate coordinate-right" aria-hidden="true">FIG. 01 — THE MAKER ERA</div>
      <div className="hero-inner shell">
        <div className="hero-topline">
          <p className="eyebrow"><span className="eyebrow-mark" /> &lt; GOOGLE DEVELOPER GROUP /&gt;</p>
          <span className="edition-label">INDEPENDENT MINDS.<br />COLLECTIVE MOMENTUM.</span>
        </div>

        <div className="event-badge"><span className="badge-dot" /> 3 DAYS OF TECHNICAL IMMERSION <i /> OCTOBER 16–18, 2026</div>

        <div className="hero-title-wrap">
          <div className="title-side-note" aria-hidden="true"><span>THINK</span><b>→</b><span>MAKE</span><b>→</b><span>REPEAT</span></div>
          <h1 id="hero-title" className="hero-title"><span className="title-tekno">TEKNO</span><span className="title-krraft">KRRAFT<span className="title-period">.</span></span><span className="title-year" aria-label="2026"><span>20</span><span>26</span></span></h1>
          <TechnicalStamp />
        </div>

        <div className="hero-bottom">
          <div className="hero-intro">
            <p className="hero-tagline">A 3-Day Celebration of <span>Code, Cloud,</span><br className="desktop-break" /> AI &amp; Innovation</p>
            <p className="hero-organizer">Organized by GDG ITER Chapter</p>
            <p className="hero-venue"><span className="venue-mark" aria-hidden="true">↳</span> ITER Campus, Siksha 'O' Anusandhan (Deemed to be University), Bhubaneswar</p>
            <div className="hero-ctas">
              <button className="button button--orange" type="button" onClick={onRegister}>Register for Events <span aria-hidden="true">↗</span></button>
              <a className="button button--outline" href="#schedule">Explore Schedule <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <Countdown />
        </div>
      </div>

      <div className="hero-marquee" aria-label="Build, break, reimagine, ship"><div className="marquee-track" aria-hidden="true">{Array.from({ length: 4 }, (_, i) => <span key={i}>BUILD <b>✳</b> BREAK <b>✳</b> REIMAGINE <b>✳</b> SHIP <b>✳</b></span>)}</div></div>
      <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
    </section>
  );
}