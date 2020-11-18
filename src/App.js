import React from 'react';
import './App.css';
import ahkeem from './assets/ahkeem-in-japan.jpg';
import potato from './assets/potato-japan.jpg';
import tea from './assets/tea.jpg';
import tianshu from './assets/tianshu.jpg';
import strength from './assets/strength.jpg';
import passion from './assets/passion.jpg';
import kyoto from './assets/kyoto.jpg';
import laptop from './assets/laptop.jpg';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedin)

function App() {
  return (
    <div className="App">
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Ahkeem Lang</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Front End Web Developer</p>
            <img src={ahkeem} alt="Ahkeem" className="intro__img" />
        </section>

        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Data Engineer</h3>
                    <p>My data engineer experience, isn't as extensive as my 
                        Full Stack Experience but I really do enjoy data engineering.
                        At the moment I use PowerBI to visualize my data and I use the 
                        BI connector to connect PowerBI with my data source MongoDB Atlas. I've 
                        used Azure Data Factory and ETL pipeline to ingest data into a Azure 
                        Data Lake Generation two. I'm currently training for data engineering 
                        certifications, I have plans to learn Machine Learning using frameworks 
                        like Tensorflow 2.0 and I have learning Python and SQL on my list.</p>
                </div> 
                
                <div className="service">
                    <h3>Skills</h3>
                            <p>ReactJS | Hooks | Context API | GraphQL | PowerBI | Azure Data Factory | Redux | NodeJS | ExpressJS | MongoDB | JavaScript | Axios | RESTful API | ES6 | HTML5 | CSS3 | Google Analytics | Agile | Scrum | Flexbox | Kendo UI | TailwindCSS | Docker | Git | GitHub | Gitlab | Linux | MVC | Webpack| Bootstrap.</p>
                </div> 
                
                <div className="service">
                    <h3>Full Stack Engineer</h3>
                    <p>I'm more of a UI focused developer. I'm familiar with React 
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
            
            <a href="#work" className="btn">My Work</a>
        </section>
        <section className="about-me" id="about">
           <h2 className="section__title section__title--about">Who I am</h2>
           <p className="section__subtitle section__subtitle--about">Developer based out of ATX</p>
           
           <div className="about-me__body">
               <p>Hey thanks for visiting my page, here's a little bit about me. I'm originally from Chicago
                 I moved to Austin in the summer of 2016 after receiving my BA from Eastern Illinois University
                 to follow my dream and passion to become a Software Developer. I use to break dance with my dance crew 
                 up in Chicago. Sometimes you'll catch me doing a move or two.</p>
               <p>I love traveling, I've traveled all over the world since I can remember, I was fortuante to experience many 
                 different beautiful cultures and make friends nearly on every continent. I love Japanese culture, 
                 I've visited Japan three times already to visit my wife's family and our friends.</p>
                 <p>When I'm not at the computer I'm out playing 2v2 or 4v4 sand volleyball with my wife and our 
                 friends. I lead a group that meets nearly every night that likes to play 2v2 and 4v4 sand volleyball.
                 It's pretty tough to get myself off the courts!</p>
           </div>
           
           <img src={potato} alt="Jane leaning against a bus" className="about-me__img" />
        </section>
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div className="portfolio">
                
                <a href="https://github.com/Langster2323/Tic-Tac-Toe-Minimax">
                    <h5 className="section__subtitle section__subtitle--work">Tic-Tac-Toe Minimax</h5>
                    <p className="effect-box">Going up against a computer in some tic-tac-toe. Built in JavaScript</p>
                </a>
                
                
                <a href="https://github.com/Langster2323/reacted-auth" className="portfolio__item">
                    <img src={tianshu} alt="" className="portfolio__img" />
                </a>
                
                
                <a href="https://github.com/Langster2323/RSVP-React" className="portfolio__item">
                    <img src={strength} alt="" className="portfolio__img" />
                </a>
                
                
                <a href="https://github.com/Langster2323/External-Bridge-" className="portfolio__item">
                    <img src={passion} alt="" className="portfolio__img" />
                </a>
                
                
                <a href="https://github.com/Langster2323/Courses" className="portfolio__item">
                    <img src={kyoto} alt="" className="portfolio__img" />
                </a>
                
                
                <a href="https://github.com/Langster2323/Ahkeem-s-Portfolio" className="portfolio__item">
                    <img src={laptop} alt="" className="portfolio__img" />
                </a>
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
