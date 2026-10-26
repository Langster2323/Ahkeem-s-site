import React from 'react';
import potato from '../assets/potato-japan.jpg';
import SectionHeading from './SectionHeading';

const About = () => (
  <section className="section container" id="about">
    <div className="about">
      <div className="about__text">
        <SectionHeading eyebrow="05 — About" title="A little about me" />
        <div className="reveal">
          <p>
            I'm originally from Chicago. After earning a BA in Philosophy from Eastern
            Illinois University, where I studied hermeneutics, the study of interpretation,
            I moved to Austin in 2016 to chase software. I've been building ever since.
            Turning messy human context into something a computer can work with turns out
            to be a lot of what applied AI is about.
          </p>
          <p>
            I've traveled since I can remember and have made friends on nearly every
            continent. For the past year I've been living in Asia, working remotely with
            teams and clients wherever they are. Japan holds a special place for me. It's
            where my wife's family is from.
          </p>
          <p>
            Away from the keyboard you'll find me on a sand volleyball court playing 2v2 or
            4v4, and back in Chicago I used to break dance with my crew. Every so often I'll
            still pull out a move or two.
          </p>
        </div>
      </div>
      <figure className="about__photo reveal">
        <img src={potato} alt="Ahkeem holding a spiral potato on a stick in Japan" loading="lazy" width="720" height="960" />
        <figcaption>Tornado potato, Japan.</figcaption>
      </figure>
    </div>
  </section>
);

export default About;
