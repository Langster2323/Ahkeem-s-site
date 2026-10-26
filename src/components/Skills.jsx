import React from 'react';
import { skills } from '../data';
import SectionHeading from './SectionHeading';

const Skills = () => (
  <section className="section container" id="skills">
    <SectionHeading eyebrow="04 — Toolkit" title="What I work with" />

    <div className="skills">
      {skills.map((s) => (
        <div key={s.group} className="skills__group reveal">
          <h3>{s.group}</h3>
          <ul className="tags">
            {s.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
