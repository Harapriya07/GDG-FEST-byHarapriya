import React from 'react';
import { sponsorTiers, sponsorCta } from '../data/sponsorsData.js';
import './Sponsors.css';

function Wordmark({ sponsor }) {
  return (
    <div className={`sponsor-wordmark sponsor-wordmark--${sponsor.key}`} aria-label={sponsor.name}>
      <span>{sponsor.name}</span>
    </div>
  );
}

function SponsorItem({ sponsor, tier }) {
  return (
    <article className={`sponsor-item sponsor-item--${tier.key}`} data-status={sponsor.status}>
      <div className="sponsor-item__topline">
        <span>{sponsor.number}</span>
        <span className={`sponsor-status sponsor-status--${sponsor.status.toLowerCase()}`}>
          {sponsor.status}
        </span>
      </div>
      <Wordmark sponsor={sponsor} />
      <div className="sponsor-item__footer">
        <span>{tier.label}</span>
        <span className="sponsor-item__cross" aria-hidden="true">↗</span>
      </div>
    </article>
  );
}

export default function Sponsors() {
  const [titleTier, ...otherTiers] = sponsorTiers;

  return (
    <section className="sponsors-section" id="sponsors" aria-labelledby="sponsors-heading">
      <div className="sponsors-shell">
        <header className="sponsors-heading">
          <p className="sponsors-eyebrow"><span /> OUR PARTNERS / 2026</p>
          <div className="sponsors-heading__main">
            <h2 id="sponsors-heading">POWERED BY THE ONES <em>BUILDING</em> TOMORROW.</h2>
            <p>The partners helping bring the Tekno Krraft community together.</p>
          </div>
          <span className="sponsors-heading__index" aria-hidden="true">06<br />/ 09</span>
        </header>

        <div className="sponsors-tier sponsors-tier--title">
          <div className="sponsors-tier__label">
            <span>01 / TIER</span>
            <h3>{titleTier.label}</h3>
          </div>
          <div className="sponsors-tier__grid sponsors-tier__grid--title">
            {titleTier.sponsors.map((sponsor) => (
              <SponsorItem key={sponsor.key} sponsor={sponsor} tier={titleTier} />
            ))}
            <div className="title-partner-aside" aria-hidden="true">
              <span>THE INFRASTRUCTURE</span>
              <strong>FOR WHAT’S<br />NEXT<span>.</span></strong>
              <div className="title-partner-aside__lines"><i /><i /><i /><i /><i /></div>
            </div>
          </div>
        </div>

        {otherTiers.map((tier, index) => (
          <div className={`sponsors-tier sponsors-tier--${tier.key}`} key={tier.key}>
            <div className="sponsors-tier__label">
              <span>{String(index + 2).padStart(2, '0')} / TIER</span>
              <h3>{tier.label}</h3>
              <p>{tier.note}</p>
            </div>
            <div className="sponsors-tier__grid">
              {tier.sponsors.map((sponsor) => (
                <SponsorItem key={sponsor.key} sponsor={sponsor} tier={tier} />
              ))}
            </div>
          </div>
        ))}

        <aside className="sponsor-cta" aria-labelledby="sponsor-cta-heading">
          <div className="sponsor-cta__copy">
            <p className="sponsors-eyebrow"><span /> OPEN INVITATION / 2026</p>
            <h2 id="sponsor-cta-heading">WANT TO BUILD<br /><em>WITH US?</em></h2>
          </div>
          <div className="sponsor-cta__action">
            {sponsorCta.destination ? (
              <a className="sponsor-cta__button" href={sponsorCta.destination}>
                BECOME A SPONSOR <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <div className="sponsor-cta__button sponsor-cta__button--inactive" aria-disabled="true">
                BECOME A SPONSOR <span aria-hidden="true">↗</span>
              </div>
            )}
            <p>{sponsorCta.destination
              ? sponsorCta.note
              : 'Interested in partnering? The official sponsor contact will be announced soon.'}</p>
            {!sponsorCta.destination && <span className="sponsor-cta__pending">CONTACT DETAILS PENDING</span>}
          </div>
          <span className="sponsor-cta__stamp" aria-hidden="true">TK<br />26</span>
        </aside>
      </div>
    </section>
  );
}
