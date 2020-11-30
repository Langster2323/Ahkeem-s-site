import React, {useRef} from 'react';
import { useIntersection } from 'react-use';
import { gsap, Power3 } from 'gsap';

const Services = () => {
    
    let sectionRef = useRef(null);

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.7
    });

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
    return (
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
    )
}

export default Services;