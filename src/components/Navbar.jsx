import React from 'react';
import { useEffect, useRef, useState } from 'react';
import './Navbar.css';

function ThemeGlyph({ theme }) {
  return theme === 'dark' ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.2A8.4 8.4 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" /></svg>
  );
}

export default function Navbar({ links, theme, onThemeChange, onRegister }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const closeOnOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOnOutside);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOnOutside);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar shell" aria-label="Main navigation" ref={menuRef}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Tekno Krraft 2026 home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
          <span className="brand-copy"><strong>Tekno Krraft <em>’26</em></strong><small>GDG @ SOA · ITER CHAPTER</small></span>
        </a>
        <div className={`nav-menu ${menuOpen ? 'is-open' : ''}`} id="primary-menu">
          <div className="nav-links">
            {links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
          </div>
          <div className="nav-actions">
            <button className="theme-toggle" type="button" onClick={onThemeChange} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}><ThemeGlyph theme={theme} /></button>
            <button className="nav-register" type="button" onClick={() => { closeMenu(); onRegister(); }}>Register Now <span aria-hidden="true">↗</span></button>
          </div>
        </div>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="primary-menu" onClick={() => setMenuOpen((open) => !open)}>
          <span /><span />
        </button>
      </nav>
    </header>
  );
}