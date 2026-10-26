import React from 'react';
import { currentWork } from '../data';
import SectionHeading from './SectionHeading';
import { ArrowIcon } from './Icons';

const Now = () => (
  <section className="section container" id="now">
    <SectionHeading eyebrow="01 — Now" title="What I'm building">
      I'm building production AI end to end, from architecture and infrastructure to
      deployment and support.
    </SectionHeading>

    <div className="now-grid">
      {currentWork.map((w) => (
        <article key={w.company} className={`card reveal ${w.featured ? 'card--featured' : ''}`}>
          <header className="card__header">
            <div>
              <p className="card__role">{w.role}</p>
              <h3 className="card__company">{w.company}</h3>
            </div>
            {w.href && (
              <a className="card__link" href={w.href} target="_blank" rel="noopener noreferrer">
                {w.linkLabel} <ArrowIcon />
              </a>
            )}
          </header>
          <p className="card__tagline">{w.tagline}</p>
          <ul className="card__points">
            {w.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <ul className="tags">
            {w.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Now;
