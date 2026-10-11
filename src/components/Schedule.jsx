import React, { useMemo, useRef, useState } from 'react';
import { scheduleCategories, scheduleDays, scheduleSessions } from '../data/scheduleData.js';
import './Schedule.css';

function SessionCard({ session }) {
  return (
    <article className="schedule-card" aria-labelledby={`${session.id}-title`}>
      <div className="schedule-card__time">
        <span className="schedule-card__time-label">TIME / {session.id.replace('session-', '')}</span>
        <strong>{session.time}</strong>
      </div>
      <div className="schedule-card__body">
        <div className="schedule-card__meta">
          <span className="schedule-tag">{session.category}</span>
          <span className="schedule-card__level">{session.level}</span>
          <span className="schedule-card__index">SESSION / {session.id.replace('session-', '')}</span>
        </div>
        <h3 id={`${session.id}-title`}>{session.title}</h3>
        <p className="schedule-card__description">{session.description}</p>
        <div className="schedule-card__details">
          <div className="schedule-card__detail">
            <span className="schedule-card__detail-label">SPEAKER</span>
            <strong>{session.speaker}</strong>
            <span>{session.role}</span>
          </div>
          <div className="schedule-card__detail">
            <span className="schedule-card__detail-label">LOCATION</span>
            <strong>{session.location}</strong>
            {session.additionalLocation && <span>Additional venue information: {session.additionalLocation}</span>}
          </div>
        </div>
      </div>
      <span className="schedule-card__mark" aria-hidden="true">↗</span>
    </article>
  );
}

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(scheduleDays[0].id);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const tabRefs = useRef([]);

  const visibleSessions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return scheduleSessions.filter((session) => {
      const matchesDay = session.day === activeDay;
      const matchesCategory = activeCategory === 'All' || session.category === activeCategory;
      const searchable = [session.title, session.speaker, session.description, session.category, session.location, session.additionalLocation || '', session.role, session.level].join(' ').toLowerCase();
      return matchesDay && matchesCategory && searchable.includes(query);
    });
  }, [activeDay, activeCategory, searchQuery]);

  const currentDay = scheduleDays.find((day) => day.id === activeDay) || scheduleDays[0];
  const clearFilters = () => {
    setActiveDay(scheduleDays[0].id);
    setActiveCategory('All');
    setSearchQuery('');
    tabRefs.current[0]?.focus();
  };

  const handleTabKeyDown = (event, index) => {
    let nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % scheduleDays.length;
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + scheduleDays.length) % scheduleDays.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = scheduleDays.length - 1;
    else return;
    event.preventDefault();
    setActiveDay(scheduleDays[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="schedule-section" id="schedule" aria-labelledby="schedule-heading">
      <div className="schedule-shell">
        <div className="schedule-section__topline">
          <span className="schedule-section__number">02 / THE FESTIVAL TIMELINE</span>
          <span className="schedule-section__status"><i aria-hidden="true" /> 11 SESSIONS / 3 DAYS</span>
        </div>

        <header className="schedule-header">
          <div className="schedule-header__title">
            <p className="schedule-eyebrow">THE FESTIVAL TIMELINE / 2026</p>
            <h2 id="schedule-heading">THREE DAYS.<br /><span>ZERO LIMITS.</span></h2>
          </div>
          <div className="schedule-header__intro">
            <span className="schedule-header__slash" aria-hidden="true">↘</span>
            <p>From AI and cloud workshops to hack sprints, competitive coding, and the final awards ceremony — three days dedicated to learning, building, and connecting.</p>
            <small>16–18 OCTOBER 2026 <span aria-hidden="true">/</span> GDG @ SOA, ITER CHAPTER</small>
          </div>
        </header>

        <div className="schedule-controls">
          <div className="schedule-day-tabs" role="tablist" aria-label="Choose festival day">
            {scheduleDays.map((day, index) => (
              <button
                className={`schedule-day-tab${activeDay === day.id ? ' is-active' : ''}`}
                type="button"
                role="tab"
                id={`schedule-tab-${day.id}`}
                aria-selected={activeDay === day.id}
                aria-controls="schedule-results"
                tabIndex={activeDay === day.id ? 0 : -1}
                key={day.id}
                ref={(node) => { tabRefs.current[index] = node; }}
                onClick={() => setActiveDay(day.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                <span>{day.label} — {day.theme}</span>
                <strong>{day.date}</strong>
                <i aria-hidden="true">↗</i>
              </button>
            ))}
          </div>
          <label className="schedule-search">
            <span className="schedule-search__icon" aria-hidden="true">⌕</span>
            <span className="schedule-visually-hidden">Search sessions by title, speaker, description, category, or location</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="SEARCH THE LINE-UP"
            />
            {searchQuery && <button type="button" onClick={() => setSearchQuery('')} aria-label="Clear search">×</button>}
          </label>
        </div>

        <div className="schedule-filter-row">
          <span className="schedule-filter-label">FILTER BY /</span>
          <div className="schedule-category-filters" aria-label="Filter sessions by category">
            {scheduleCategories.map((category) => (
              <button
                type="button"
                key={category}
                className={`schedule-filter${activeCategory === category ? ' is-active' : ''}`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <button className="schedule-clear" type="button" onClick={clearFilters}>CLEAR FILTERS <span aria-hidden="true">↺</span></button>
        </div>

        <div className="schedule-results" id="schedule-results" role="tabpanel" aria-labelledby={`schedule-tab-${activeDay}`} tabIndex={0}>
          <div className="schedule-results__heading">
            <h3>{currentDay.label} <span>— {currentDay.theme}</span></h3>
            <span>{visibleSessions.length.toString().padStart(2, '0')} / {visibleSessions.length === 1 ? 'SESSION' : 'SESSIONS'}</span>
          </div>
          {visibleSessions.length > 0 ? (
            <div className="schedule-session-list" aria-live="polite">
              {visibleSessions.map((session) => <SessionCard session={session} key={session.id} />)}
            </div>
          ) : (
            <div className="schedule-empty" role="status">
              <span className="schedule-empty__symbol" aria-hidden="true">∅</span>
              <div>
                <p className="schedule-empty__title">NO MATCHES FOUND.</p>
                <p>No sessions match this day and filter combination. Try another search or clear the filters to see the full line-up.</p>
              </div>
              <button type="button" onClick={clearFilters}>CLEAR FILTERS ↗</button>
            </div>
          )}
        </div>

        <div className="schedule-footer-note">
          <span>TIME / SPEAKER / VENUE</span>
          <p>Session times are shown as supplied. Day 03 sessions retain their original overlapping times.</p>
          <span className="schedule-footer-note__arrow" aria-hidden="true">↓</span>
        </div>
      </div>
    </section>
  );
}
