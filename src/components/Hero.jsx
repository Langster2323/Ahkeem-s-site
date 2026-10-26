import React from 'react';
import portrait from '../assets/ahkeem-in-japan.jpg';
import { profile, stats } from '../data';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Hero = () => (
  <section className="hero container" id="top">
    <div className="hero__text">
      <p className="pill">
        <span className="pill__dot" aria-hidden="true" />
        {profile.location}
      </p>

      <h1 className="hero__title">
        Ahkeem Lang
        <span className="hero__title-sub">
          builds <em>AI products</em> people actually use.
        </span>
      </h1>

      <p className="hero__lede">
        Co-founder &amp; founding engineer at{' '}
        <a href="https://douladorothy.com" target="_blank" rel="noopener noreferrer">
          Dorothy
        </a>
        , and an applied AI engineer for hire. I've spent 9 years shipping web and AI
        products, from 0→1 MVPs to growth systems serving millions.
      </p>

      <div className="hero__actions">
        <a href={`mailto:${profile.email}`} className="btn">
          Work with me
        </a>
        <a href="#projects" className="btn btn--ghost">
          See my work
        </a>
        <div className="hero__social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>

    <figure className="hero__portrait">
      <img src={portrait} alt="Ahkeem Lang in Japan" width="720" height="960" />
    </figure>

    <dl className="stats">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <dt>{s.value}</dt>
          <dd>{s.label}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Hero;
