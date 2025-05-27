import React, { useRef } from "react";
import { useIntersection } from "react-use";
import { gsap, Power3 } from "gsap";

const Services = () => {
  let sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  });

  const fadeIn = (element) => {
    gsap.to(element, 3, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 3, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
  };

  intersection && intersection.intersectionRatio < 0.7
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");
  return (
    <section className="my-services " id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div ref={sectionRef} className="services fadeIn">
        <div className="service">
          <h3 className="fadeIn">Skills</h3>
          <p className="fadeIn">
            ReactJS | NextJS | JavaScript(ES6) | Python | OpenAI API | LangFlow |
            LangChain | LangGraph | Ruby on Rails | Hooks | Context API | GraphQL |
            NodeJS | ExpressJS | MongoDB | PostgreSQL | Axios | RESTful API |
            ES6 | HTML5 | CSS3 | Google Analytics | Agile | Scrum | Flexbox |
            Kendo UI | TailwindCSS | Grid Layout | Git | GitHub | Gitlab |
            Linux | MVC | Webpack| Bootstrap.
          </p>
        </div>

        <div className="service">
          <h3 className="fadeIn">Frontend Team Lead</h3>
          <p className="fadeIn">
            As a Frontend Team Lead, I specialize in crafting seamless user
            interfaces with a strong focus on both developer efficiency and the
            end-user experience. Leveraging my expertise in ReactJS, I ensure
            the development of modular and scalable components by adhering to
            the Atomic Design Pattern. I have successfully built and maintained
            a robust component library, utilizing tools like Storybook and
            Chromatic to foster collaboration, consistency, and visual
            regression testing. I have also implemented a design system to
            enhance component based architecture.
          </p>
          <p className="fadeIn">
            Passionate about LLMs and GenAI with hands-on OpenAI API and
            TensorFlow experience{" "}
          </p>
          <p className="fadeIn">
            My leadership approach emphasizes enhancing the developer experience
            by streamlining workflows, enabling a faster and more intuitive
            development process while always keeping the end user's needs at the
            core of every design and implementation decision.
          </p>
        </div>
      </div>
      <a href="#work" className="btn fadeIn">
        My Work
      </a>
    </section>
  );
};

export default Services;
