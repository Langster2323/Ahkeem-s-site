import React from 'react';
import { experience } from '../data';
import SectionHeading from './SectionHeading';

const Experience = () => (
  <section className="section container" id="experience">
    <SectionHeading eyebrow="02 — Experience" title="Where I've been" />

    <ol className="timeline">
      {experience.map((e) => (
        <li key={e.role + e.company} className="timeline__item reveal">
          <p className="timeline__period">{e.period}</p>
          <div>
            <h3 className="timeline__role">
              {e.role} <span className="timeline__company">· {e.company}</span>
            </h3>
            <p className="timeline__summary">{e.summary}</p>
            {e.companies && (
              <ul className="tags tags--plain">
                {e.companies.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default Experience;
