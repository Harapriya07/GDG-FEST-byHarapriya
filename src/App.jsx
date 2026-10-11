import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Schedule from './components/Schedule.jsx';
import Tracks from './components/Tracks.jsx';
import Speakers from './components/Speakers.jsx';
import Sponsors from './components/Sponsors.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Tracks & Workshops', href: '#tracks' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'FAQs', href: '#faqs' },
];

function RegistrationDialog({ onClose }) {
  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <section className="registration-dialog" role="dialog" aria-modal="true" aria-labelledby="registration-title">
        <button className="dialog-close" type="button" onClick={onClose} aria-label="Close registration information">×</button>
        <p className="eyebrow"><span className="eyebrow-mark" /> REGISTRATION DESK / 001</p>
        <h2 id="registration-title">YOU’RE EARLY.<br /><span>WE’RE GETTING READY.</span></h2>
        <p>Registration details for Tekno Krraft 2026 will be added here once the official registration link is available.</p>
        <p className="dialog-note">No registration has been submitted.</p>
        <button className="button button--orange" type="button" onClick={onClose}>GOT IT <span aria-hidden="true">↗</span></button>
      </section>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('tk-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch { /* Storage can be unavailable in restricted contexts. */ }
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const closeRegistration = useCallback(() => setRegistrationOpen(false), []);
  const openRegistration = useCallback(() => setRegistrationOpen(true), []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('tk-theme', theme); } catch { /* Keep the current-session toggle usable. */ }
  }, [theme]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar links={links} theme={theme} onThemeChange={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')} onRegister={openRegistration} />
      <main id="main">
        <Hero onRegister={openRegistration} />
        <About />
        <Schedule />
        <Tracks />
        <Speakers />
        <Sponsors />
        <FAQ />
      </main>
      <Footer />
      {registrationOpen && <RegistrationDialog onClose={closeRegistration} />}
    </>
  );
}