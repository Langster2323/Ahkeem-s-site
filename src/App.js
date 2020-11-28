import React, { useRef, useEffect } from 'react';
import './App.css';
import ahkeem from './assets/ahkeem-in-japan.jpg';
import potato from './assets/potato-japan.jpg';
import tea from './assets/tea.jpg';
import tianshu from './assets/tianshu.jpg';
import strength from './assets/strength.jpg';
import kyoto from './assets/kyoto.jpg';

import Aos from 'aos';
import "aos/dist/aos.css";
import { TweenMax, Power3, gsap, } from 'gsap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useIntersection } from 'react-use';
import ReactGA from 'react-ga';

library.add(faGithub, faLinkedin, faArrowLeft, faArrowRight)

// const whatIDoArr = [
//     {
//         title: "Data Engineer",
//         image: `${laptop}`,
//         description: "At the moment I use PowerBI to visualize my data and I use the BI connector to connect PowerBI with my data source MongoDB Atlas. Ive used Azure Data Factory and ETL pipeline to ingest data into a Azure Data Lake gen two."
//     },
//     {
//         title: "Skills",
//         image: `${passion}`,
//         description: "ReactJS | Hooks | Context API | Redux | NodeJS | ExpressJS | MongoDB | PowerBI"
//     },
//     {
//         title: "Full Stack Engineer",
//         image: `${laptop}`,
//         description: "I'm more of a UI focused developer. I'm familiar with ReactJS, and tools within its ecosytem like Hooks, and Redux. I also love to work with animations to style up the frontend."
//     }
// ]

function initializeReactGA() {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING);
    ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
    let img__intro = useRef(null);
    let sub__intro = useRef(null);
    let header__intro = useRef(null);
    let sectionRef = useRef(null);
    let myselfRef = useRef(null);

    

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.7
    });
    const intersectionMyself = useIntersection(myselfRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.7
    });

    useEffect(() => {
        initializeReactGA();
        Aos.init({duration: 2000})
        TweenMax.from(
            header__intro,
            3,
            {
                opacity: 0,
                x: -520,
                ease: Power3.easeOut
            }
        )
        TweenMax.to(
            header__intro,
            3,
            {
                opacity: 1,
                x: 20,
                ease: Power3.easeOut
            }
        )
        TweenMax.from(
            img__intro,
            3,
            {
                opacity: 0,
                y: 520,
                ease: Power3.easeOut
            }
        )
        TweenMax.to(
            img__intro,
            3,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut
            }
        )
        TweenMax.from(
            sub__intro,
            3,
            {
                opacity: 0,
                x: 520,
                ease: Power3.easeOut
            }
        )
        TweenMax.to(
            sub__intro,
            3,
            {
                opacity: 1,
                x: 15,
                ease: Power3.easeOut
            }
        )     
    }, [])

    const fadeIn = element => {
        gsap.to(element, 3, {
            opacity: 1,
            y: 0,
            ease: Power3.easeOut,
            stagger: {
                amount: .3
            }
        })
    }

    const fadeOut = element => {
        gsap.to(element, 3, {
            opacity: 0,
            y: -20,
            ease: Power3.easeOut
        })
    }

    

    

    intersection && intersection.intersectionRatio < 0.7 ? fadeOut(".fadeIn") : fadeIn(".fadeIn")
    intersectionMyself && intersectionMyself.intersectionRatio < 0.7 ? fadeOut(".fade") : fadeIn(".fade")

  return (
    <div className="App">
        <section className="intro" id="home">
            <h1 ref={el => {header__intro = el}} className="section__title section__title--intro">
                Hi, I am <strong>Ahkeem Lang!</strong>
            </h1>
            <p ref={el => {sub__intro = el}} className="section__subtitle section__subtitle--intro">Full Stack Engineer | Data Engineer</p>
            <img ref={el => {img__intro = el}} src={ahkeem} alt="Ahkeem" className="intro__img" />
        </section>

        <section className="my-services " id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div ref={sectionRef} className="services fadeIn">
                <div className="service ml fadeIn">
                    <h3 className="fadeIn">Data Engineer</h3>
                    <p className="fadeIn">My data engineer experience, isn't as extensive as my 
                        Full Stack Experience but I really do enjoy data engineering.
                        At the moment I use PowerBI to visualize my data and I use the 
                        BI connector to connect PowerBI with my data source MongoDB Atlas. I've 
                        used Azure Data Factory and ETL pipeline to ingest data into a Azure 
                        Data Lake Generation two. I'm currently training for data engineering 
                        certifications, I have plans to learn Machine Learning using frameworks 
                        like Tensorflow 2.0 and I have learning Python and SQL on my list.</p>
                </div> 
                
                <div className="service">
                    <h3 className="fadeIn">Skills</h3>
                    <p className="fadeIn">ReactJS | Hooks | Context API | GraphQL | PowerBI | Azure Data Factory | Redux | NodeJS | ExpressJS | MongoDB | JavaScript | Axios | RESTful API | ES6 | HTML5 | CSS3 | Google Analytics | Agile | Scrum | Flexbox | Kendo UI | TailwindCSS | Docker | Git | GitHub | Gitlab | Linux | MVC | Webpack| Bootstrap.</p>
                </div> 
                
                <div className="service">
                    <h3 className="fadeIn">Full Stack Engineer</h3>
                    <p className="fadeIn">I'm more of a UI focused developer. I'm familiar with React 
                      and Redux principles and patterns, I have experience in 
                      React building hierarchy stateful components for SPA's. I’m 
                      proficient in using the state management tool Redux to support 
                      dispatching actions and manage state throughout the entire application. 
                      I'm also comfortable with utilizing Hooks and Context API to support maintaining 
                      the state in React. I can also develop in the backend with NodeJS, ExpressJS and 
                      MongoDB. I always like to keep in consistent communication with product teams, 
                      UX teams, team leads and peers working on the same or different projects.</p>
                </div>
            </div> 
            <a href="#work" className="btn fadeIn">My Work</a> 
        </section>
        <section className="about-me" id="about">
           <h2 data-aos="fade-up" className="section__title section__title--about">Who I am</h2>
           <p data-aos="fade-left" className="section__subtitle section__subtitle--about">Developer based out of ATX</p>
           
           <div ref={myselfRef} className="about-me__body">
               <p className="fade">Here's a little bit about me. I'm originally from Chicago
                 I moved to Austin in the summer of 2016 after receiving my BA in Philosophy from Eastern Illinois University
                 to follow my dream and passion to become a Software Developer. I use to break dance with my dance crew 
                 up in Chicago. Sometimes you'll catch me doing a move or two.</p>
               <p className="fade">I love traveling, I've traveled all over the world since I can remember, I was fortuante to experience many 
                 different beautiful cultures and make friends nearly on every continent. I love Japanese culture, 
                 I've visited Japan three times already to visit my wife's family and our friends.</p>
                <p className="fade">When I'm not at the computer I'm out playing 2v2 or 4v4 sand volleyball with my wife and our 
                 friends. I lead a group that meets nearly every night that likes to play 2v2 and 4v4 sand volleyball.
                 It's pretty tough to get us off the courts!</p>
           </div>
           
           <img data-aos="fade-right" src={potato} alt="Jane leaning against a bus" className="about-me__img" />
        </section>
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div className="portfolio">
                <figure data-aos="zoom-out">
                    <a href="https://github.com/Langster2323/Tic-Tac-Toe-Minimax" className="portfolio__item">
                        <img src={tea} alt="" className="portfolio__img" />
                        <figcaption className="caption">Tic-Tac-Toe Minimax
                        <br /> <span className="sub__caption">Built with JavaScript. You're up against an 
                        AI, you'll nearly always loose against</span></figcaption>
                    </a>
                </figure>
                
                <figure data-aos="zoom-out">
                    <a href="https://github.com/Langster2323/reacted-auth" className="portfolio__item">
                        <img src={tianshu} alt="" className="portfolio__img" />
                        <figcaption className="caption">React Authentication
                        <br /> <span className="sub__caption">Authenticated user in ReactJS.</span></figcaption>
                        
                    </a>
                </figure>
                <figure data-aos="zoom-out">
                <a href="https://github.com/Langster2323/RSVP-React" className="portfolio__item">
                    <img src={kyoto} alt="" className="portfolio__img" />
                    <figcaption className="caption move-horizontal">RSVP
                    <br /> <span className="sub__caption">A React and Redux app to rsvp 
                    for your next event.</span></figcaption>
                    
                </a>
                </figure>
                <figure data-aos="zoom-out">
                <a href="https://github.com/Langster2323/Tabikko-" className="portfolio__item">
                    <img src={strength} alt="" className="portfolio__img" />
                    <figcaption className="caption move-horizontal">Exercise Log
                    <br /> <span className="sub__caption">MERN stack app to log your 
                    workouts.</span></figcaption>
                </a>
                </figure>
            </div>
        </section>
        <footer className="footer">
            
            <a href="mailto:hello@jane.dev" className="footer__link">langahkeem@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/Langster2323">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/ahkeem-lang-03667510b/">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                </li>
            </ul>
        </footer>
    </div>
  );
}

export default App;
