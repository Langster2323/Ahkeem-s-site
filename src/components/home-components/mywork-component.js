import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import tictactoe from "../../assets/tictactoe.png";
import volleyball from "../../assets/volleyball.png";
import ragapp from "../../assets/ragapp.png";
import codegenerator from "../../assets/codegenerator.png";

const MyWork = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div className="portfolio">
        <figure data-aos="zoom-out">
          <a
            href="https://github.com/Langster2323/Tic-Tac-Toe-Minimax"
            className="portfolio__item"
          >
            <img src={tictactoe} alt="" className="portfolio__img" />
            <figcaption className="caption">
              Tic-Tac-Toe Minimax
              <br />{" "}
              <span className="sub__caption">
                Built with JavaScript. You're up against an AI, you'll nearly
                always loose against.
              </span>
            </figcaption>
          </a>
        </figure>

        <figure data-aos="zoom-out">
          <a
            href="https://www.spikeitvolleyball.com/"
            className="portfolio__item"
          >
            <img src={volleyball} alt="" className="portfolio__img" />
            <figcaption className="caption">
              Spike It Volleyball
              <br />{" "}
              <span className="sub__caption">
                Spike It LLC, a webapp where users can find local volleyball
                events near them and build communities.
              </span>
            </figcaption>
          </a>
        </figure>
        <figure data-aos="zoom-out">
          <a
            href="https://github.com/Langster2323/React-OpenAI-text-to-text"
            className="portfolio__item"
          >
            <img src={codegenerator} alt="" className="portfolio__img" />
            <figcaption className="caption move-horizontal">
              OpenAI Content Generator
              <br />{" "}
              <span className="sub__caption">
                For all your content generation needs. Built with ReactJS and Vite.
              </span>
            </figcaption>
          </a>
        </figure>
        <figure data-aos="zoom-out">
          <a
            href="https://github.com/Langster2323/AI-Agent-LangGraph"
            className="portfolio__item"
          >
            <img src={ragapp} alt="" className="portfolio__img" />
            <figcaption className="caption move-horizontal">
              AI Chat Assistant
              <br />{" "}
              <span className="sub__caption">
                RAG Application. End-to-end chat assistant built with Next.js, PostgreSQL, LangChain, LangGraph, and
                OpenAI.
              </span>
            </figcaption>
          </a>
        </figure>
      </div>
    </section>
  );
};

export default MyWork;
