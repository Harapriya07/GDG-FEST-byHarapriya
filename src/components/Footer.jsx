import React from 'react';
import { footerConfig } from '../data/footerData.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="tk-footer" id="footer" aria-labelledby="footer-event-name">
      <div className="tk-footer__shell">
        <div className="tk-footer__hero">
          <p className="tk-footer__eyebrow"><span /> THE FINAL BUILD / 2026</p>
          <h2 id="footer-event-name">{footerConfig.eventName}</h2>
          <div className="tk-footer__closing">
            <p>{footerConfig.closingStatement}</p>
            <span>{footerConfig.dates}</span>
          </div>
          <span className="tk-footer__orbit" aria-hidden="true">TK<br />26</span>
        </div>

        <div className="tk-footer__details">
          <section className="tk-footer__contact" aria-labelledby="footer-contact-heading">
            <h3 id="footer-contact-heading">CONTACT / LOCATION</h3>
            <dl>
              <div><dt>ORGANIZER</dt><dd>{footerConfig.organizer}</dd></div>
              <div><dt>EMAIL</dt><dd><a href={`mailto:${footerConfig.email}`}>{footerConfig.email}<span aria-hidden="true"> ↗</span></a></dd></div>
              <div><dt>VENUE</dt><dd>{footerConfig.venue}</dd></div>
              <div><dt>LOCATION</dt><dd>{footerConfig.location}</dd></div>
            </dl>
          </section>

          <nav className="tk-footer__nav" aria-label="Footer navigation">
            <h3>EXPLORE / SECTIONS</h3>
            <ul>{footerConfig.navigation.map((item, index) => (
              <li key={item.href}><span>{String(index + 1).padStart(2, '0')}</span><a href={item.href}>{item.label}</a></li>
            ))}</ul>
          </nav>

          <section className="tk-footer__social" aria-labelledby="footer-social-heading">
            <h3 id="footer-social-heading">FIND THE COMMUNITY</h3>
            <ul>{footerConfig.socialLinks.map((item) => (
              <li key={item.name}>
                {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer">{item.name}<span aria-hidden="true"> ↗</span></a> : <span className="tk-footer__social-pending">{item.name}<small>LINK PENDING</small></span>}
              </li>
            ))}</ul>
          </section>
        </div>

        <p className="tk-footer__disclaimer">Tekno Krraft 2026 is organized by GDG @ SOA, ITER Chapter. Google Developer Groups are community-led and are not affiliated with, endorsed by, or sponsored by Google LLC unless explicitly stated otherwise.</p>
        <div className="tk-footer__bottom">
          <span>© 2026 TEKNO KRRAFT</span>
          <span className="tk-footer__bottom-mark"><i /> MADE FOR THE BUILDERS.</span>
        </div>
      </div>
    </footer>
  );
}
