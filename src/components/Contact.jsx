import React from 'react';
import { profile } from '../data';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Contact = () => (
  <footer className="contact" id="contact">
    <div className="container">
      <p className="eyebrow reveal">Contact</p>
      <h2 className="contact__title reveal">
        Have an AI product in mind? <em>Let's build it.</em>
      </h2>
      <a href={`mailto:${profile.email}`} className="contact__email reveal">
        {profile.email}
      </a>

      <div className="contact__bottom">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="contact__social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Contact;
