import React from 'react';
import { useId, useState } from 'react';
import './FAQ.css';

const questions = [
  { q: 'What is Tekno Krraft 2026?', a: 'Tekno Krraft 2026 is a technology festival organized by GDG @ SOA, ITER Chapter, bringing together technology enthusiasts for technical sessions, workshops, and collaborative building.' },
  { q: 'When and where will the event take place?', a: "The event is scheduled for October 16–18, 2026, at ITER Campus, Siksha 'O' Anusandhan (Deemed to be University), Bhubaneswar, Odisha." },
  { q: 'Who can attend?', a: 'Registration is intended for students, research scholars, and developers. Check the official registration announcement for the final eligibility requirements.' },
  { q: 'Is registration free?', a: 'Registration is described as free for verified students, research scholars, and developers. Any final eligibility or verification requirements should be confirmed through the official event announcement.' },
  { q: 'What should I bring?', a: 'Bring your laptop and charger if you plan to participate in hands-on sessions. Check the official event instructions for any additional requirements.' },
  { q: 'Do I need prior experience?', a: 'Experience requirements may vary by session or activity. Review the published session descriptions to choose activities that match your current skill level.' },
  { q: 'Will there be prizes or certificates?', a: 'Check the official event announcement for confirmed prize details, certificate eligibility, and participation requirements. Prizes or certificates are not guaranteed by this FAQ.' },
  { q: 'How can I contact the organizers?', a: <>Email: <a href="mailto:gdg@iter.ac.in">gdg@iter.ac.in</a></> },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const baseId = useId();

  return (
    <section className="faq-section" id="faqs" aria-labelledby={`${baseId}-heading`}>
      <div className="faq-shell">
        <div className="faq-intro">
          <p className="faq-eyebrow"><span /> GOT QUESTIONS? / READ THIS</p>
          <h2 id={`${baseId}-heading`}>BEFORE YOU <em>BUILD.</em></h2>
          <p className="faq-intro__description">Everything you need to know before joining Tekno Krraft 2026.</p>
          <div className="faq-intro__note"><span>TK / 26</span><p>Still curious?<br />Start with the essentials.</p></div>
        </div>

        <div className="faq-list" aria-label="Frequently asked questions">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            const triggerId = `${baseId}-question-${index}`;
            const panelId = `${baseId}-answer-${index}`;
            return (
              <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.q}>
                <h3 className="faq-item__heading">
                  <button
                    className="faq-item__trigger"
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="faq-item__number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="faq-item__question">{item.q}</span>
                    <span className="faq-item__indicator" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                </h3>
                <div
                  className="faq-item__panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isOpen}
                >
                  <div className="faq-item__answer">{item.a}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
