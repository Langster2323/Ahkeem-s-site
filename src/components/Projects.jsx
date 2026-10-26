import React from 'react';
import { projects } from '../data';
import SectionHeading from './SectionHeading';
import { ArrowIcon } from './Icons';

const Projects = () => (
  <section className="section container" id="projects">
    <SectionHeading eyebrow="03 — Projects" title="Selected work">
      Side projects and experiments, mostly in applied AI.
    </SectionHeading>

    <div className="projects">
      {projects.map((p) => (
        <a
          key={p.title}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="project reveal"
        >
          <div className="project__media">
            <img src={p.image} alt="" loading="lazy" />
          </div>
          <div className="project__body">
            <h3 className="project__title">
              {p.title} <ArrowIcon className="project__arrow" />
            </h3>
            <p>{p.description}</p>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
