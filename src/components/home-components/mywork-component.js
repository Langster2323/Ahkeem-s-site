import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import tictactoe from "../../assets/tictactoe.png";
import volleyball from "../../assets/volleyball.png";
import ragapp from "../../assets/ragapp.png";
import rag from "../../assets/rag.png";

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
            target="_blank"
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
            target="_blank"
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
            href="https://github.com/Langster2323/AI-Agent-LangChain"
            className="portfolio__item"
            target="_blank"
          >
            <img src={rag} alt="" className="portfolio__img" />
            <figcaption className="caption move-horizontal">
              AI Agent Document Retrieval
              <br />{" "}
              <span className="sub__caption">
                Process both unstructured and structured data. Use the agent to answer questions about the documents. While utilzing NextJS, Typescript,LangChain and OpenAI.
              </span>
            </figcaption>
          </a>
        </figure>
        <figure data-aos="zoom-out">
          <a
            href="https://github.com/Langster2323/AI-Agent-LangGraph"
            className="portfolio__item"
            target="_blank"
          >
            <img src={ragapp} alt="" className="portfolio__img" />
            <figcaption className="caption move-horizontal">
              AI Chat Assistant
              <br />{" "}
              <span className="sub__caption">
                RAG Application. End-to-end chat assistant built with Next.js, Typescript, PostgreSQL, LangChain, LangGraph, and
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
